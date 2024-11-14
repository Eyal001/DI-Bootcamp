import random
RED = '\033[31m'
GREEN = '\033[32m'    
YELLOW = '\033[33m'    
BLUE = '\033[34m'      
RESET = '\033[0m'       



class Game():
  def __init__(self, item):
    self.item = ["rock", "paper", "scissors"]
    self.short_to_full = {
      "r":"rock",
      "p":"paper",
      "s":"scissors"
    }
  
  def get_user_item(self):
    while True :
      user_item = input("Select (r)ock, (p)aper or (s)cissors: ").strip().lower()
      if user_item in self.short_to_full:
        print(f"You choose: {self.short_to_full[user_item]}.")
        return self.short_to_full[user_item]
      else:
        print("Invalid input. Please try again.")
  
  def get_computer_item(self):
    return random.choice(self.item)
  
  def get_game_result(self, user_item, computer_item):
    if user_item == computer_item:
      return "draw"
    elif (user_item == "rock" and computer_item == "scissors") or (user_item == "scissors" and computer_item == "paper") or (user_item == "paper" and computer_item == "rock"):
      return "win"
    else:
      return "loss"
  
  def play(self):
    
    my_item = self.get_user_item()
    computer_item = self.get_computer_item()
    result = self.get_game_result(my_item, computer_item)
    print("\n")
    print(f"You selected: {BLUE}{my_item} {RESET}and the computer selected: {RED}{computer_item}")
    if(result == "win"):
      print(f"{GREEN}YOU WIN !{RESET}")
    elif result == "loss":
      print(f"{RED}YOU LOOSE !{RESET}")
    else:
      print(f"{YELLOW}IT'S A DRAW !{RESET}")
    return result