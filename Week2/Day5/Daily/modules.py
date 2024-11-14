import requests
import time

def load_time_website(url):
  start = time.time()
  response = requests.get(url)
  
  end = time.time()
  duration = end - start
  if(response.status_code == 200):
    return print(f"Time to load {url}: {duration:.2f} seconds")
  else:
    return print(f"Failed to load {url}. No response.")
  
load_time_website("https://github.com")