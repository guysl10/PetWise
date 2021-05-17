from .consts import WORDS


class Attributes:

    def __init__(self, text:str, words: list = WORDS):
        self._text = text
        self._words = words
        self._attributes = self._find_attributes()

    @property
    def attributes(self) -> list:
        return self._attributes

    def get_score(self) -> float:
        return float(len(self._words)) / len(self._attributes)

    def _find_attributes(self) -> list:
        return [word for word in self._words if self._text.find(word) != -1]
