# ex1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
dic = zip(keys, values)
print(dic)
my_dictionary = dict(dic)
print(my_dictionary)

# ex2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
total_price = 0
price = 0
for key,value in family.items():
  if(value < 3):
    total_price += 0
    price = 0
  if(3 <= value <= 12):
    total_price += 10
    price = 10
  if(value > 12):
    total_price += 15
    price = 15

  print(f"{key}  has to pay: {price}")
print(f"The total cost of the family is: {total_price}")


# ex3
brand = {
  'name': 'Zara',
  'creation_date': 1975,
  'creator_name': 'Amancio Ortega Gaona',
  'type_of_clothes': ['men', 'women', 'children', 'home'],
  'international_competitors': ['Gap', 'H&M', 'Benetton'],
  'number_stores': 7000,
  'major_color':{ 'France': 'blue',
                 'Spain' : 'red',
                 'US' : ['pink', 'green']}
}
brand['number_stores'] = 2
type_of_clients = brand['type_of_clothes']
print("The clients of Zara are ", ', '.join(type_of_clients))
print("\n")
brand['country_creation'] = 'Spain'
print(brand)
print("\n\n")
if("international_competitors" in brand):
  brand['international_competitors'].append("Desigual")
print(brand['international_competitors'])
del brand['creation_date']
print("\n")
print(brand)
print("\n")
print(f"The last international competitor is: {brand['international_competitors'][-1]}")
print(f"The major clothes colors in the US are: {', '.join(brand['major_color']["US"])}")
print(f"The number of key-value pairs is: {len(brand)}")
print("\n")
for key in brand:
  print(f"key: {key}")

more_on_zara = {
  'creation_date': 1975,
  'number_stores': 10000
  }
brand.update(more_on_zara)
print(brand)

#it display the updated value of number_stores that did exist befors in the brand dictionnary, so the value vas updated by the more_on_zara dictionnary

#ex4
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
disney_users_A = {}
disney_users_B = {}
disney_users_C = {}
disney_users_D = {}

sorted_user = sorted(users)
filtered_user = []


for index, user in enumerate(users):
  disney_users_A[user] = index
print(disney_users_A)

for index,user in enumerate(users):
  disney_users_B[index] = user
print(disney_users_B)

for index, user in enumerate(sorted_user):
  disney_users_C[user] = index
print(disney_users_C)

for index, user in enumerate(users):
  if 'i' in user or user[0].lower() in ["m", "p"]:
    disney_users_D[user] = index
print(disney_users_D)