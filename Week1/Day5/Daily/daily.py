#challenge1
sequence = input("Enter a comma-separated sequence of word: ")
list_of_sequences = ','.join(sorted([item for item in sequence.split(',')]))
print(list_of_sequences)

#challenge2

def longest_word(string):
  words = string.split()
  longest_word = max(words, key=len)
  print(f"{longest_word}")

longest_word("Forgetfulness is by all means powerless!")