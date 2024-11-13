#ex1
import os
import random

def get_words_from_file():
  dir_path = os.path.dirname(os.path.realpath(__file__))
  with open(dir_path +"/word_list.txt", 'r',  encoding='utf-8') as file:
    words = file.read().splitlines()
  return words

def get_random_sentence(lenght):
  words_list = get_words_from_file()
  sentence =[]
  for i in range(lenght):
    sentence.append(random.choice(words_list))
  sentence = " ".join(sentence).lower()
  return sentence
get_words_from_file()
get_random_sentence(5)

def main():
  print("This program will generate a random sentence using words from a file.")
  lenght_sentence = int(input("Please enter the length of the sentence: "))
  if 2 <= lenght_sentence <= 20:
    print(get_random_sentence(lenght_sentence))
  else:
    print("The input is not correct. Please, type a legnth between 2 and 20.")
    return
  
main()

#ex2

import json

sampleJson = """{ 
   "company":{ 
      "employee":{ 
         "name":"emma",
         "payable":{ 
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""
data = json.loads(sampleJson)
print(f"salary: {data['company']['employee']['payable']['salary']}")
data["company"]["employee"]["birth_date"] = ""
with open("sample.json", "w") as file:
  json.dump(data, file, indent=4, sort_keys=True)#save the json file