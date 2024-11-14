from game import Game
RED = '\033[31m'    
GREEN = '\033[32m'     
YELLOW = '\033[33m'     
BLUE = '\033[34m'       
RESET = '\033[0m'       


def get_user_menu_choice():
  print(f"\n ------ ROCK PAPER SCISSORS ------")
  print("(g) Play a new game")
  print("(s) Show scores")
  print(f"(q) Quit")
  while True:
    choice = input(f"Enter your choice: ")
    if choice in ["g", "s", "q"]:
      return choice
    else:
      print(f"{RED}Please, type a valid choice ('g', 's' or 'q'){RESET}")

def print_results(results):
  print(f"\n ------ GAME SUMMARY ------")
  print(f"{GREEN}Wins : {results["win"]}{RESET}")
  print(f"{RED}Losses : {results["loss"]}{RESET}")
  print(f"{YELLOW}Draws : {results["draw"]}{RESET}")
  print("Thank you for playing !")

def main():
  results = {'win':0, 'loss':0, 'draw': 0}
  while True:
    choice = get_user_menu_choice()
    if choice == "q":
      print_results(results)
      break
    elif choice == 's':
      print_results(results) 
    elif choice == "g":
      game = Game(choice)
      result = game.play()
      results[result] += 1

if __name__ == "__main__":
  main()
    
    