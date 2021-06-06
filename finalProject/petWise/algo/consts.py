import os

from firebase_admin import credentials

CRED = credentials.Certificate(
    os.path.join(os.path.dirname(__file__), "petwise-547d7-firebase-adminsdk-70638-65e70cc071.json"))

COLLECTION_NAME = 'pets'

SIZES = {
    'קטן': 1,
    'בינוני': 2,
    'גדול': 3,
    '': 0
}

AREAS = {
    'צפון': 1,
    'מרכז': 2,
    'דרום': 3
}

GENDERS = {
    'זכר': 1,
    'נקבה': 2
}

TYPES = {
    'כלב': 10,
    'חתול': 20
}

WORDS = [
    'חמוד',
    'מתוק',
    'נשמה',
    'שובב',
    'אנרגטי',
    'רגוע',
    'מחוסנת',
    'מחוסן',
    'מעוקרת',
    'מסורס',
    'ליטופים',
    'ליטוף',
    'עדינה',
    'קסומה',
    'קסום',
    'עדינה',
    'עדין'
]