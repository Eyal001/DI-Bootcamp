import os
dir_path = os.path.dirname(os.path.realpath(__file__))

class AnagramChecker:
  def __init__(self, file):
    self.valid_words = set()
    with open(file, 'r') as file:
      for line in file:
        self.valid_words.add(line.strip().lower())
      
  def is_anagram(self, word1, word2):
    return sorted(word1) == sorted(word2)
  
  def get_anagrams(self, word):
    anagrams_list = [w for w in self.valid_words if self.is_anagram(word, w)]
    return anagrams_list
  
  def is_valid_word(self, word):
    return word in self.valid_words
  
  
# words = AnagramChecker('words_list.txt')
# print(words.word)