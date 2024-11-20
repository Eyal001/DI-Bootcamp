import psycopg2

class MenuItem:
  def __init__(self, name, price):
    self.name = name
    self.price = price
  
  def save(self):
   try: 
      connection = psycopg2.connect(database='restaurant', user='postgres', password='password123',host='localhost',port='5432' )
      cursor = connection.cursor()
      cursor.execute("INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s)", (self.name, self.price))
      connection.commit()
      cursor.close()
      connection.close()
      print(f"{self.name} was added")
   except Exception:
     print(f"Error saving item")
  
  def delete(self):
    try: 
      connection = psycopg2.connect(database='restaurant', user='postgres', password='password123',host='localhost',port='5432' )
      cursor = connection.cursor()
      cursor.execute("DELETE FROM menu_items WHERE item_name = %s", (self.name,))
      connection.commit()
      cursor.close()
      connection.close()
      print(f"{self.name} was deleted")
    except Exception:
     print(f"Error deleting item")
  
  def update(self, new_name, new_price):
   try: 
      connection = psycopg2.connect(database='restaurant', user='postgres', password='password123',host='localhost',port='5432' )
      cursor = connection.cursor()
      cursor.execute("""
                UPDATE menu_items
                SET item_name = %s, item_price = %s
                WHERE item_name = %s
            """, (new_name, new_price, self.name))
      connection.commit()
      cursor.close()
      connection.close()
      print(f"{self.name} was updated to {new_name} with new price: {new_price}")
      self.name = new_name
      self.price = new_price
   except Exception:
     print(f"Error updating item")
  
