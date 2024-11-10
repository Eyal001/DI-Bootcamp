
class Farm:
  def __init__(self, farm_name):
    self.farm_name = farm_name
    self.animals = {}
    
  def add_animal(self, animal_name, count=1):
    if animal_name in self.animals:
      self.animals[animal_name] += count
    else:
      self.animals[animal_name] = count
      
  def get_info(self):
    info = f"{self.farm_name}'s farm\n"
    for animal, count in self.animals.items():
      info += f"{animal} : {count}\n"
    
    info+= "\n    E-I-E-I-0!"
    return info
  
  def get_animals_types(self):
    return sorted(self.animals)
  
  def get_short_info(self):
    animal_types = self.get_animals_types()
    plural_animals_types = []
    for animal in animal_types:
      count = self.animals[animal]
      if count > 1:
        plural_animals_types.append(f"{count} {animal}s")
      else:
        plural_animals_types.append(f"{count} {animal}")
    if len(plural_animals_types) > 1:
      last_animal = plural_animals_types.pop()
      animals_str = ', '.join(plural_animals_types) + f" and {last_animal}"
    else:
      animals_str = plural_animals_types[0]
    return f"{self.farm_name}'s farm has {animals_str}"
    
    
    
    
macdonald = Farm("Macdonald")
macdonald.add_animal("cow", 5)
macdonald.add_animal("sheep")
macdonald.add_animal("sheep")
macdonald.add_animal("goat", 12)
print(macdonald.get_info())
print(macdonald.get_animals_types())
print(macdonald.get_short_info())