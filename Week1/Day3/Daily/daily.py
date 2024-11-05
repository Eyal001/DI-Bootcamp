# CHALLENGE 1

ask = input("Type a word: ")
my_dict = {}

for index, letter in enumerate(ask):
  if(letter in my_dict):
    my_dict[letter].append(index)
  else:
    my_dict[letter] =  [index]
print(f'"{ask}" ➞ {my_dict}')

# CHALLENGE 2

items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}

wallet = "$1" 
clean_wallet = int(wallet.replace("$", "").replace(",",""))
cart = []
for item,price in items_purchase.items():
  cl_price = int(price.replace("$", "").replace(",",""))
  if(cl_price <= clean_wallet):
    cart.append(item)
if(not cart):
  print("Nothing")
else:
  cart.sort()
  print(cart)
    