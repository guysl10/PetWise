# coding=UTF-8
from math import sqrt

import firebase_admin
from firebase_admin import firestore

from attributes import Attributes

from consts import CRED, COLLECTION_NAME, SIZES, GENDERS, AREAS, TYPES


def euclidean_distance(row1, row2):
    distance = 0.0
    for i in range(len(row1) - 1):
        distance += (row1[i] - row2[i]) ** 2
    return sqrt(distance)


def parse_data_to_model(data):
    model_data = []
    for item in data:
        model_item = {'id': item['id'], 'data': []}
        if not  'גודל' in item:
            item['גודל'] = ''
        model_item['data'].append(SIZES[item['גודל']])
        model_item['data'].append(AREAS[item['אזור']])
        model_item['data'].append(TYPES[item['סוג']])
        model_item['data'].append(GENDERS[item['מין']])
        attr = Attributes(item['description'])
        model_item['data'].append(attr.get_score())
        model_data.append(model_item)
    return model_data


def get_neighbors(train, test_row, num_neighbors):
    distances = list()
    for train_row in train:
        dist = euclidean_distance(test_row['data'], train_row['data'])
        distances.append((train_row, dist))
    distances.sort(key=lambda tup: tup[1])
    neighbors = list()
    if len(distances) < num_neighbors:
        return [distance[0]["id"] for distance in distances]
    for i in range(num_neighbors):
        neighbors.append(distances[i][0]['id'])
    return neighbors


if __name__ == '__main__':
    app = firebase_admin.initialize_app(CRED)
    firestore_client = firestore.client(app)
    collection = firestore_client.collection(COLLECTION_NAME)
    docs = [doc.to_dict() for doc in collection.stream()]
    model = parse_data_to_model(docs)
    final_data = {}
    for item in model:
        final_data[item['id']] = get_neighbors(model, item, 5)

    for item_id in final_data:
        doc_ref = collection.document(item_id)
        doc_ref.update({u'similar_pets': final_data[item_id]})
