#ex1
# class Pets():
#     def __init__(self, animals):
#         self.animals = animals

#     def walk(self):
#         for animal in self.animals:
#             print(animal.walk())

# class Cat():
#     is_lazy = True

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def walk(self):
#         return f'{self.name} is just walking around'

# class Bengal(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'

# class Chartreux(Cat):
#     def sing(self, sounds):
#         return f'{sounds}'
      
# class Siamese(Cat):
#   def sing(self, sounds):
#     return f'{sounds}'


# bengal_cat = Bengal("Tom", 4)
# chartreux_cat= Chartreux("Toto", 3)
# siamese_cat = Siamese("Titi", 6)
# all_cat = [bengal_cat, chartreux_cat,siamese_cat]
# saras_pets = Pets(all_cat)
# saras_pets.walk()

#ex2

# class Dog:
#   def __init__(self, name, age, weight):
#     self.name = name
#     self.age = age
#     self.weight = weight
    
#   def bark(self):
#     return f"{self.name} is barking"
  
#   def run_speed(self):
#     return self.weight / self.age * 10
  
#   def fight(self, other_dog):
#     my_dog_force = self.run_speed() * self.weight
#     other_dog_force = other_dog.run_speed() * other_dog.weight
    
#     if(my_dog_force > other_dog_force):
#       return print(f"{self.name} won the fight !")
#     elif my_dog_force < other_dog_force:
#       return print(f"{other_dog.name} won the fight !")
#     else:
#       return "It's a tie !"
    
# dog1 = Dog("Rex", 3, 12)
# dog2 = Dog("Mickey", 4, 11)
# dog3 = Dog("Snoopy", 4, 16)

# dog1.fight(dog2)
# dog2.fight(dog3) 
# dog1.fight(dog3)  

# print(f"{dog1.name}'s run speed: {dog1.run_speed()}") 
# print(f"{dog2.name}'s run speed: {dog2.run_speed()}") 
# print(f"{dog3.name}'s run speed: {dog3.run_speed()}")  

# # ex4

class Family:
  def __init__(self, members, last_name):
    self.members = members
    self.last_name = last_name
  
  def born(self, **kwargs):
    self.members.append(kwargs)
    print(f"Congratulations ! {[kwargs['name']]} arrived in earth in {self.last_name} family")
  
  def is_18(self, name):
    for member in self.members:
      if member['name'] == name:
        return member['age'] >= 18
    return False
    
  def family_presentation(self):
    for member in self.members:
      print(f"Name: {member['name']}, Age: {member['age']}, Gender: {member['gender']}, Is child: {member['is_child']}")
      
      
family = Family([
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}
], "Smith")
# family.born(name="Alex", age=0, gender="Male", is_child=True)
# family.family_presentation()

#ex5

class TheIncredibles(Family):
  def __init__(self,members, last_name):
    super().__init__(members, last_name)
    
  def use_power(self, name):
    for member in self.members:
      if member['name'] == name:
        if member['age'] >= 18:
          print(f"{member['name']} uses their power: {member['power']}")
          return
        else:
          raise Exception(f"{member['name']} is not over 18 and cannot use their power")
    print("the member doesn't exist")  
  
  def incredible_presentation(self):
    print("Here is our powerful family:")
    super().family_presentation() 
    

members = [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
]


incredible_family = TheIncredibles(members, "Incredibles")

incredible_family.incredible_presentation()

incredible_family.born(name="Baby Jack", age=1, gender="Male", is_child=True, power="Unknown Power", incredible_name="BabyJack")

incredible_family.incredible_presentation()
