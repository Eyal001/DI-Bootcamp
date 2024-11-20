from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
  print("\nRestaurant Menu Manager")
  print("V - View an Item")
  print("A - Add an Item")
  print("D - Delete an Item")
  print("U - Update an Item")
  print("S - Show the Menu")
  print("E - Exit")

  choice = input("Please choose an option: ").upper()
    
  if choice == "V":
    view_item()
  elif choice == "A":
    add_item_to_menu()
  elif choice == "D":
    remove_item_from_menu()
  elif choice == "U":
    update_item_from_menu()
  elif choice == "S":
    show_restaurant_menu()
  elif choice == "E":
    print("Exiting the program.")
  else:
    print("Please enter a coorect choice")
    show_restaurant_menu()
    exit()
  
def view_item():
    name = input("Enter the name of the item to view: ")
    item = MenuManager.get_by_name(name)
    if item:
        print(f"Item Name: {item.name}, Price: {item.price}")
    else:
        print(f"Item '{name}' not found.")
    
def add_item_to_menu():
    name = input("Enter the name of the item to add: ")
    price = int(input("Enter the price of the item: "))
    item = MenuItem(name, price)
    item.save()
  
def remove_item_from_menu():
    name = input("Enter the name of the item to remove: ")
    item = MenuItem(name, 0)
    item.delete()
  
def update_item_from_menu():
    name = input("Enter the name of the item to update: ")
    item = MenuManager.get_by_name(name)
    if item:
        new_name = input("Enter the new name for the item: ")
        new_price = int(input("Enter the new price for the item: "))
        item.update(new_name, new_price)
    else:
        print(f"Item '{name}' not found.")
  
def show_restaurant_menu():
    items = MenuManager.all_items()
    print("\nRestaurant Menu:")
    for item in items:
        print(f"{item.name} - ${item.price}")
  
if __name__ == "__main__":
    while True:
        show_user_menu()