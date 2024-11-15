# What is a class?
# A class is a blueprint that which defines its own attributes and methods and which is used to create objects from this class 


# What is an instance?
# A instance is an object created from a class which therefore recovers all the behavior of this class, its attributes defined in the init and its methods (functions)

# What is encapsulation?
#encapsulation is the practice of keeping data from a private class so that it is only from public methods and hidden from the user

# What is abstraction?
#abstraction is used to hide unnecessary details from the user to reduce complexity of the code.

# What is inheritance?
#inheritance a child class that can inherit attributes and methods from a parent class 

# What is multiple inheritance?
#It's a class that can inherit from multiple parent classes

# What is polymorphism?
#It's the ability to use the same methods name for different types of objects

# What is method resolution order or MRO?
#It's the order in which the methods are called in multiple inheritance

import random


class Card:
  def __init__(self, suit, value):
    self.suit = suit
    self.value = value
    
  def __repr__(self):
        return f"{self.value} of {self.suit}"  
    
class Deck:
  def __init__(self):
    self.suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
    self.values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    self.cards = [Card(suit, value) for suit in self.suits for value in self.values]
  
  
  def __repr__(self):
    return f"Deck of {len(self.cards)} cards"
  
  def shuffle(self):
    random.shuffle(self.cards)
  
  def deal(self):
    if len(self.cards) > 0:
      return self.cards.pop()
    else:
      return None
    
deck = Deck()

deck.shuffle()

for _ in range(5):
    print(deck.deal())

print(deck)