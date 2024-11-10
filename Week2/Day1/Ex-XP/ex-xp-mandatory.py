# ex1

class Cat:
  def __init__(self, cat_name, cat_age):
    self.name = cat_name
    self.age = cat_age
    self.cats = []
cat_1 = Cat("Garfield", 3)
cat_2 = Cat("Tom", 6)
cat_3 = Cat("Fluffy", 4)

list_cats = [cat_1, cat_2,cat_3]

def oldest_cat(list_cats):
    older_cat = list_cats[0]
    for cat in list_cats:
      if(cat.age > older_cat.age):
        older_cat = cat
    print(f"The oldest cat is {older_cat.name} and is {older_cat.age}")

my_cats = oldest_cat(list_cats)

#ex2

class Dog:
  def __init__(self, name, height):
    self.name = name
    self.height = height
    
  def bark(self):
    print(f"{self.name} goes woof!")
    
  def jump(self):
    print(f"{self.name} jumps {self.height * 2} cm high!")

david_dog = Dog("Rex", 50)
print(f"David dog's name is : {david_dog.name} and he is: {david_dog.height} cm tall")
david_dog.bark()
david_dog.jump()

sarahs_dog = Dog("Teacup", 20)
print(f"David dog's name is : {sarahs_dog.name} and she is: {sarahs_dog.height} cm tall")
sarahs_dog.bark()
sarahs_dog.jump()

if(sarahs_dog.height > david_dog.height):
  print(f"{sarahs_dog.name} is the biggest dog")
else:
  print(f"{david_dog.name} is the biggest dog")
  
# ex3

class Song():
  def __init__(self, lyrics):
    self.lyrics = lyrics
  
  def sing_me_a_song(self):
    for lyric in self.lyrics:
      print(lyric)
      
stairway = Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
stairway.sing_me_a_song()

# ex4
class Zoo:
  def __init__(self, zoo_name):
    self.zoo_name = zoo_name
    self.animals = []
    self.grouped_animals= {}
  
  def add_animal(self, new_animal):
    if(new_animal not in self.animals):
      self.animals.append(new_animal)
      
  def get_animals(self):
    for animal in self.animals:
      print(animal)
      
  def sell_animal(self, animal_sold):
    
    if animal_sold in self.animals:
      self.animals.remove(animal_sold)
      print(f"the {animal_sold} was sold")
    else:
      print("We don't have this animal in our zoo")
  
  def sort_animals(self):
    all_animals = {}
    letter_index = 1
    current_letter = ""
    sorted_animals = sorted(self.animals)
    
    for animal in sorted_animals:
      first_letter = animal[0]
      if first_letter != current_letter:
        current_letter = first_letter
        all_animals[letter_index] = [animal]
        letter_index += 1
      else:
        all_animals[letter_index -1].append(animal)
      self.sorted_animals = all_animals
    
    self.grouped_animals = all_animals
      
      
  def get_groups(self):
    print(self.grouped_animals)

ramat_gan_safari = Zoo("Ramat_gan_safari")
ramat_gan_safari.add_animal("Cougar")
ramat_gan_safari.add_animal("Ape")
ramat_gan_safari.add_animal("Baboon")
ramat_gan_safari.add_animal("Emu")
ramat_gan_safari.add_animal("Bear")
ramat_gan_safari.add_animal("Cat")
ramat_gan_safari.add_animal("Eel")
ramat_gan_safari.get_animals()
print(ramat_gan_safari.animals)

ramat_gan_safari.sort_animals()
ramat_gan_safari.sell_animal("Bear")
ramat_gan_safari.get_animals()

ramat_gan_safari.get_groups()