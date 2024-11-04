#ex1

my_fav_numbers = {7,14,26}
my_fav_numbers.update([30,52])
print(my_fav_numbers)
my_fav_numbers.pop()
print(my_fav_numbers)
friend_fav_numbers = {10,5,15,3}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

#(It's not possible to remove an element in a set because it don't have an index)

#ex2

#tuple_num = (12,14,18)
#We can't add more integers to a tuple because it is an immutable sequence

#ex3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0,"Apples")
count = basket.count("Apples")
basket.clear()
print(basket)

#ex4
#A float is data type with decimal and an integer doesn't , it's an integer number

my_list= []
num = 1.5
for i in range(8):
  my_list.append(num)
  num += 0.5
print(my_list)

#In my opinion there a lot of ways to do this exercise using loops with many algorithms

#ex5
for i in range(1,21):
  print(i)
for i in range(1,21):
  if(i%2 == 0):
    print(i)

#ex6
my_name = "Eyal"
keep_asking = True

while keep_asking:
  name = input("What's your name ?")
  if(name == my_name):
    keep_asking = False

#ex7
fruits = input("What's your favorite fruit(s)? (separate your fruits by single space) ")
list_f = fruits.split()
print(type(list_f))
print(list_f)
any_f = input("Now, type any fruit: ")
if(any_f in list_f):
  print("You chose one of your favorite fruits! Enjoy!")
else:
  print("You chose a new fruit. I hope you enjoy")

#ex8
toppings = []
sum = 10
keep_asking = True
while(keep_asking):
  top = input("Type a series of pizza toppings  ")
  if(top == "quit"):
    keep_asking = False
  else:
    toppings.append(top)
    sum += 2.5

print("I will add your toppings in your pizza")
print(f"The price of your pizza is: {sum} ({toppings} 2.5 each of them)")

#ex9
keep_asking = True
final_price = 0
price = 0

while keep_asking:
  age= input("What's your ages?")
  if(age == "quit"):
    keep_asking = False
    final_price += price
  else:
    age_int = int(age)
    if(age_int < 3):
      price= 0
    elif(3 <= age_int <= 12):
      price = 10
    elif(age_int > 12):
      price = 15
    else:
      print("It's not a realistic age!")
    final_price += price
  print(f"The total cost of all family's tickets is {final_price}")

#ex9.4
keep_asking_names = True
teenagers = ["Eyal","Harry","Arielle","Meryl"]

for teenager in teenagers[:]:
  age = int(input(f"What's your age {teenager} ? "))
  if (16 <= age <= 21):
    print(f"Hi {teenager} you can go !")
  else:
    teenagers.remove(teenager)
print(f"The list of teenagers that can go to the film: {teenagers}")

#ex10
sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
index = 0
finished_sandwiches = []
while index < len(sandwich_orders):
  if("Pastrami" in sandwich_orders[index]):
    index += 1
  else:
    finished_sandwiches.append(sandwich_orders[index])
    print(f"I made your" , sandwich_orders[index])
    index += 1