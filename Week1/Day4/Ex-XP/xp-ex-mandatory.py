#ex1
def display_message():
  print("I am learning the MERN stack in this course")

display_message()

#ex2

def favourite_book(title):
  print(f"One of my favorite books is {title}")

favourite_book("Harry potter")

#ex3
def describe_city(city, country="Israël"):
  print(f"{city} is in {country}")
  
describe_city("Tel Aviv")

#ex4

from random import randint

def random_number(number):
  if(1 <= number <= 100):
    random_number = randint(1, 100)
    if(number == random_number):
      print(f"Succes: It's the same number ! COOL | your number: {number} the random number: {random_number}")
    else:
      print(f"Fail: it's not the same number | your number: {number} the random number: {random_number}")
  else:
    print("Please, type a number between 1 to 100")

random_number(1)

#ex5

def make_shirt(text="I love Python" , size="large"):
  print(f"The size of the shirt is {size} and the text is {text}")
make_shirt()
make_shirt(size="medium")
make_shirt("small", "different")

ex6
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians():
  global magician_names
  
  for magician in magician_names:
    print(magician)
# show_magicians()

    
def make_great():
  global magician_names
  magician_names = ["the Great " + magician for magician in magician_names]

make_great()

show_magicians()

ex7
from random import randint
def get_random_temp(season):
  if season == 'winter':
    return randint(-10, 16)
  elif season == 'spring':
    return randint(0, 20)
  elif season == 'summer':
    return randint(16, 40)
  elif season == 'autumn' or season == 'fall':
    return randint(0, 23)
  else:
    return "Invalid season"

def main():
  ask = input("Type a season : - 'summer', 'autumn'(or 'fall'), 'winter', or 'spring'. ")
  temp = get_random_temp(ask)
  if temp == "Invalid season":
    print("That's not a valid season! Please enter 'winter', 'spring', 'summer', or 'autumn'.")
    return
  print(f"The temperature right now is {temp}°C.")
    
  if temp < 0:
    print("Brrr, that’s freezing! Wear some extra layers today")
  elif temp <= 16:
    print("Quite chilly! Don’t forget your coat")
  elif temp <= 23:
    print("Mild weather, perfect for a light jacket or sweater")
  elif temp <= 32:
    print("Nice and warm! A t-shirt should be fine.")
  else:
    print("It's hot there! Stay hydrated")
    
main()

ex8

data = [
    {"question": "What is Baby Yoda's real name?","answer": "Grogu"},
    {"question": "Where did Obi-Wan take Luke after his birth?","answer": "Tatooine"},
    {"question": "What year did the first Star Wars movie come out?","answer": "1977"},
    {"question": "Who built C-3PO?","answer": "Anakin Skywalker"},
    {"question": "Anakin Skywalker grew up to be who?","answer": "Darth Vader"},
    {"question": "What species is Chewbacca?","answer": "Wookiee"}
]

def ask_question(data):
  wrong_answer = 0
  wrong_answer_list = []
  right_answer = 0
  for item in data:
    ask = input(f"{item['question']}")
    if(item['answer'].lower() == ask.lower()):
      right_answer += 1
    else:
      wrong_answer += 1
      wrong_answer_list.append(ask)
  return wrong_answer, right_answer,wrong_answer_list
      
def show_score(right, wrong,list):
  print(f"Your results are: \n")
  print(f"You have {right} good answer(s)")
  print(f"You have {wrong} wrong answer(s) and this is the list of your wrong anwers : {list}")
  
def main():
  wrong, right, list = ask_question(data)
  show_score(right, wrong,list)
  
main()