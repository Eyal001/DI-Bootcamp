import requests
import psycopg2
import random


def connect_db():
  try: 
      connection = psycopg2.connect(database='countries', user='postgres', password='password123',host='localhost',port='5432' )
      return connection
  except Exception as e:
    print(f"Error: Connexion to db failed :{e}")
    return None
  
def insert_countries_to_db(list_countries):
  connection = connect_db()
  if connection is None:
    return
  cursor = connection.cursor()
  query = """ 
  INSERT INTO random_countries (name, capital, flag, subregion,population)
  VALUES(%s, %s, %s, %s, %s)
  """
  
  for country in list_countries:
    cursor.execute(query, (
      country['name'],
      country['capital'],
      country['flag'],
      country['subregion'],
      country['population'],
      
    ))
  connection.commit()
  cursor.close()
  connection.close()
    
def get_random_countries():
  response = requests.get("https://restcountries.com/v3.1/all?fields=name,capital,flag,subregion,population")
  
  if response.status_code != 200:
    print("Failed to retrieve countries.")
    return []
  random_countries = random.sample((response.json()), 10)
  list_countries = []
  for country in random_countries:
    name = country['name']['official']
    capital = country['capital']
    flag = country['flag']
    subregion = country['subregion']
    population = country['population']
        
    country_data = {
      'name': name,
      'capital' : capital,
      'flag': flag,
      'subregion': subregion,
      'population': population
    }
    list_countries.append(country_data)
  
  print(list_countries)
  return list_countries

list_countries = get_random_countries()
insert_countries_to_db(list_countries)