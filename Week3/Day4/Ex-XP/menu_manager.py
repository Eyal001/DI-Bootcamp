import psycopg2
from menu_item import MenuItem

class MenuManager:
  
  @classmethod
  def get_by_name(cls, name):
    try: 
      connection = psycopg2.connect(database='restaurant', user='postgres', password='password123',host='localhost',port='5432' )
      cursor = connection.cursor()
      cursor.execute("SELECT * FROM menu_items where item_name=%s", (name,))
      item = cursor.fetchone()
      cursor.close()
      connection.close()
      if item:
        return MenuItem(item[1], item[2])
    except Exception:
      return None
  
  @classmethod
  def all_items(cls):
    try: 
      connection = psycopg2.connect(database='restaurant', user='postgres', password='password123',host='localhost',port='5432' )
      cursor = connection.cursor()
      cursor.execute("SELECT * FROM menu_items")
      items = cursor.fetchall()
      cursor.close()
      connection.close()
      return [MenuItem(item[1], item[2]) for item in items]
    except Exception:
      return None