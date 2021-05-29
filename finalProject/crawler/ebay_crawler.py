import itertools
from typing import Dict, List, Union
import yaml
from ebaysdk.finding import Connection
import utils

ITEMS = 50
PAGES = 10


def generate_request(
        keywords: str, entries: int, page_number: int
) -> Dict[str, Union[str, Dict, List]]:
    """
    Generate new request according to given values.

    :param keywords: Search input.
    :param entries: Quantity of items to return.
    :param page_number: Page number to get.

    :return: Dictionary of new request.
    """
    new_request = {
        'itemFilter': [{'name': 'condition', 'value': 'new'}],
        'paginationInput': {},
        'sortOrder': 'PricePlusShippingLowest'
    }
    new_request["keywords"] = keywords
    new_request["paginationInput"]['entriesPerPage'] = entries
    new_request["paginationInput"]['pageNumber'] = page_number
    return new_request


def translate_response(
        data: Dict[str, Union[str, Dict, List]]
) -> Dict[str, Union[str, Dict, List]]:
    """Translate all items of response data."""
    new_response = {}
    for item in data:
        if item in ['url', 'id']:
            continue
        if isinstance(item, str):
            translated_item = utils.translate(item)
        else:
            translated_item = item
        if isinstance(data[item], str):
            translated_items = utils.translate(data[item])
        elif isinstance(data[item], Dict):
            translated_items = translate_response(data[item])
        elif isinstance(data[item], List):
            translated_items = []
            for list_item in data[item]:
                translated_items.append(utils.translate(list_item))
        else:
            translated_items = data[item]
        new_response[translated_item] = translated_items
    return new_response


def get_all_keywords() -> List[str]:
    """
    Read all options from file and generate all options of keywords.

    :return: All permutations of keywords.
    """
    with open('crawler/product_keywords.yaml') as f:
        keywords = yaml.full_load(f)

    types = [keywords[t] for t in keywords]
    return [" ".join(t) for t in itertools.product(*types)]


def filter_item(
        item: Dict[str, Union[str, List, Dict]], keywords: List[str]
) -> Dict[str, Union[str, List, Dict]]:
    filtered_item = {}
    filtered_item['id'] = item['itemID']
    filtered_item['title'] = item['title']
    filtered_item['subtitle'] = item['subtitle']
    filtered_item['type'] = item['categoryName']
    filtered_item['picture'] = item['galleryURL']
    filtered_item['url'] = item['viewItemURL']
    filtered_item['price'] = item['shippingServiceCost']['value']
    filtered_item['labels'] = keywords
    return filtered_item


def search_by_keywords(items_per_page: int = ITEMS, num_pages: int = PAGES):
    """
    Search all items in given keyboards.

    :param items_per_page: Count of items in page.
    :param num_pages: Number of pages to ask.
    """
    api = Connection(config_file='ebay.yaml', siteid='EBAY-US')
    keywords = get_all_keywords()
    for keyword in keywords:
        for page_number in range(num_pages):
            search_page_of_items(api, keyword, items_per_page, page_number)


def search_page_of_items(
        api: Connection, keyword: str, items_per_page: int, page_number: int
):
    """
    Search for items in specific page in Ebay.

    :param api: Api connection to ebay.
    :param keyword: Keyword to search.
    :param items_per_page: Count of items in page.
    :param page_number: Number of page to ask.
    """
    request = generate_request(keyword, items_per_page, page_number)
    response = api.execute('findItemsByKeywords', request)
    new_items = response.dict()["searchResult"]["item"]
    new_items = {
        item["id"]: translate_response(filter_item(item)) for item in
        new_items
    }
    utils.upload_items_to_firestore("products", new_items)


def main():
    search_by_keywords()


if __name__ == '__main__':
    main()
