import os
import traceback
from datetime import date
from typing import Callable, Union
import requests
from loguru import logger

import firebase


def _safe_get_requests(*args, **kwargs) -> Union[requests.Response, None]:
    response = requests.get(*args, **kwargs)
    if response.status_code != 200:
        logger.error(f"{response.status_code} - {response.content}")
    else:
        return response


def _log_wrapper(function: Callable):
    def wrapper(*args, **kwargs):
        logger.info(f"Start {function.__name__}")
        try:
            function(*args, **kwargs)
        except Exception:
            trace = traceback.format_exc()
            logger.exception(f"Failed {function.__name__}\n {trace}")

    return wrapper


def log_configure():
    logger.add("petwise.log", retention="10 days")


def upload_logs():
    with open("petwise.log", "r") as f:
        log_data = f.readlines()
    logs_db = firebase.petwise_serv.firestore_client.collection("yad4_logs")
    logs_db.add({date.today().strftime("%d/%m/%Y"):log_data})
