#!/usr/bin/env python3
import re
import traceback
from datetime import date
from typing import Callable, Union, Dict
import requests
from bs4 import BeautifulSoup
from loguru import logger
import db_serv

# base URL
MORFIX = 'https://www.morfix.co.il/'


def _safe_get_requests(*args, **kwargs) -> Union[requests.Response, None]:
    """
    Check get request succeeded, if not, log relevant error.

    :return: Get request response, None if status code != 200.
    """
    response = requests.get(*args, **kwargs)
    if response.status_code != 200:
        logger.error(f"{response.status_code} - {response.content}")
    else:
        return response


def log_wrapper(function: Callable):
    """Describe the state of running callable with logs."""

    def wrapper(*args, **kwargs):
        logger.info(f"Start {function.__name__}")
        try:
            function(*args, **kwargs)
        except:
            trace = traceback.format_exc()
            logger.exception(f"Failed {function.__name__}\n {trace}")

    return wrapper


def log_configure():
    """Set configuration to loguru."""
    logger.add("petwise.log", retention="10 days")


def upload_logs():
    """Upload log file to firebase."""
    with open("petwise.log", "r") as f:
        log_data = f.readlines()
    logs_db = db_serv.petwise_serv.firestore_client.collection("yad4_logs")
    logs_db.add({date.today().strftime("%d/%m/%Y"): log_data})


def translate(text: str) -> str:
    """Translate via Morfix hebrew<->english."""
    response = _safe_get_requests(f"{MORFIX}{text}")
    try:
        parsed_html = BeautifulSoup(response.content, "lxml")
        try:
            result = parsed_html.body.find('div', attrs={
                'class': 'MachineTranslation_divfootertop_enTohe'}).text
        except AttributeError:
            result = parsed_html.body.find('div', attrs={
                'class': 'MachineTranslation_divfootertop_heToen'}).text
    except AttributeError:
        result = text
    return result


def camel_case_to_regular_case(name: str):
    name = re.sub('(.)([A-Z][a-z]+)', r'\1 \2', name)
    return re.sub('([a-z0-9])([A-Z])', r'\1 \2', name).lower()
