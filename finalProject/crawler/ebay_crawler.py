from typing import Dict, List, Union
from ebaysdk.finding import Connection
import utils


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


if __name__ == '__main__':
    api = Connection(config_file='ebay.yaml', siteid='EBAY-US')

    request = generate_request("pet food", 1, 1)

    response = api.execute('findItemsByKeywords', request)
    print(response)

# response.dict()["searchResult"]["item"][0]
