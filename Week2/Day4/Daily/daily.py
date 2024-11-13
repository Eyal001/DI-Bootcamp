class Text:
  def __init__(self, text):
    self.text = text
    self.words = self.text.lower().split()
  
  def frequency_of_words(self, word):
    if not self.words:
      return None
    return self.text.count(word)
  
  def most_common_word(self):
    if not self.words:
      return None
    frequency = {}
    for word in self.words:
      if word in frequency:
        frequency[word] += 1
      else:
        frequency[word] = 1
    most_common_words = [word for word in frequency if frequency[word] == max(frequency.values())]
    return most_common_words
  
  def unique_words(self):
    frequency = {}
    for word in self.words:
      if word in frequency:
        frequency[word] += 1
      else:
        frequency[word] = 1
    uniques_words = [word for word in frequency if frequency[word] == 1] 
    return uniques_words
  
  @classmethod
  def from_file(cls, filename):
    with open(filename, ('r'), encoding="utf-8") as file:
      text = file.read()
    return cls(text)

import os
dir_path = os.path.dirname(os.path.realpath(__file__))

txt = Text("A good book would sometimes cost as much as a good house.")
print(txt.most_common_word())
print(txt.frequency_of_words("eat"))
print(txt.unique_words())

txt = Text.from_file(dir_path+ "/the_stranger.txt")
print(txt.most_common_word())
print(txt.frequency_of_words("precision"))
print(txt.unique_words())