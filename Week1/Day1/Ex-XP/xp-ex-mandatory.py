#ex1
print('Hello World \n' * 4)

#ex2
my_number= print((99**3) * 8)

#ex3

# 5 < 3 It's False
# 3 == 3 It's True
# 3 == "3" It's False
# "3" > 3 It's TypeError
#"Hello" == "hello") It's False

#ex4
computer_brand = "Lenovo"
print(f"I have a {computer_brand} computer")

#ex5
name = "Eyal"
age = 26
shoe_size = 43
info = f"Hi, my name is {name} , I'm {age}, my shoe size is {shoe_size}"
print(info) 

#ex6

a = 26
b = 13
if a > b:
  print("Hello World")

#ex7

num = int(input("Type a number :"))
if(num % 2 == 0):
  print(f"{num} is even !")
else:
  print(f"{num} is odd !")

#ex8

my_name = "Eyal"

name_usr= str(input("Type your name :"))
if(my_name == name_usr):
  print("HOLY @!/# we have the same name !!")
else:
  print("disapointing.. I prefer mine.")

#ex9
height = int(input("Type your height in centimeters :"))
if(height > 145):
  print("You are tall enough to ride")
else:
  print("You need to grow some more to ride")