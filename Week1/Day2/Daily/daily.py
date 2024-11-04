multiple = int(input("Type a number: "))
length = int(input("Type a lenght: "))

my_multiples = []

for i in range(1 , length + 1):
  my_multiples.append(multiple * i)
print(f"number: {multiple} - length {length} ➞ {my_multiples}")

word = input("Type a word: ")
good_word = ""

for i in range(len(word)):
  if(word[i] != word[i - 1]):
    good_word += word[i]
print(f'user`s word : "{word}" ➞ "{good_word}"')