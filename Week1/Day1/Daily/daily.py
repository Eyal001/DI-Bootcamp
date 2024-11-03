import random

str = str(input("Type Your string (it must be 10 characters long): "))
if(len(str) < 10):
  print("string not long enough")
elif(len(str) > 10):
  print("string too long")
else:
  print("perfect string")
  
first_letter = str[0]
last_letter = str[-1]
print(first_letter)
print(last_letter)
new_string =""
for i in str:
  new_string += i
  print(new_string)

  w_str = list(str)
  random.shuffle(w_str)
  shuff_str = ''.join(w_str)
  
print(f"There is my weird string: {shuff_str}")