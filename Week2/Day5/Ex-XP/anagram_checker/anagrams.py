from anagram_checker import AnagramChecker
import os
import string
dir_path = os.path.dirname(os.path.realpath(__file__))

def is_valid_input(user_input):
  user_input = user_input.strip().split()
  if len(user_input) == 1 and user_input[0].isalpha():
        return user_input[0]
  else:
        return None

def show_menu():
  print("------ ANAGRAM CHECKER ------")
  print("Enter (a) to check  for anagrams.")
  print("Enter (q) to quit.")
  
  choice = input("Enter your choice: ")
  return choice

def main():
  anagram = AnagramChecker(dir_path + '/' + 'words_list.txt')
  choice =show_menu()
  while choice != 'q':
    if choice == 'a':
      word = input("Enter a word: ").strip()
      if not is_valid_input(word):
        print("Invalid input.")
        continue
      if anagram.is_valid_word(word):
        anagrams = anagram.get_anagrams(word)
        if len(anagrams) > 1:
          print(f"YOUR WORD: {word}")
          print(f"this is a valid english word.")
          print(f"ANAGRAMS: {', '.join(anagrams)}")
        else:
          print("No anagrams found.")
      else:
        print(f"YOUR WORD: {word}")
        print(f"this is not a valid english word.")
    else:
      print("Invalid choice.")
    choice = show_menu()

if __name__ == "__main__":
  main()  