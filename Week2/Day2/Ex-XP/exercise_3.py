from dog_class import Dog
import random

class PetDog(Dog):
  def __init__(self , name, age, weight,trained=False):
    super().__init__(name, age, weight)
    self.trained = trained
  def train(self):
    print(self.bark())
    self.trained = True
    
  def play(self, *args):
    dogs_name = [dog.name for dog in args]
    dog_names_str = ', '.join(dogs_name)
    print(f"{dog_names_str} all play together.")
  
  def do_a_trick(self):
    if self.trained:
      tricks = [
        f"{self.name} does a barrel roll.",
        f"{self.name} stands on his back legs.",
        f"{self.name} shakes your hand.",
        f"{self.name} plays dead."
        ]
      print(random.choice(tricks))
    else:
      print(f"{self.name} is not trained to do a trick.")
      

#THE REST OF THE EXERCICES ARE IN EX-XP-MANDATORY FILE !!