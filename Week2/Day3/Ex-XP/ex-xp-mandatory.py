# ex1

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount
    
    def __str__(self):
        return f"{self.amount} {self.currency}s"
      
    def __int__(self):
      return self.amount
    
    def __repr__(self):
        return f"{self.amount} {self.currency}s"
    
    def __add__(self, other):
        """Handle addition of Currency or int."""
        if isinstance(other, Currency):
            if self.currency == other.currency:
                return self.amount + other.amount
            else:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
        elif isinstance(other, int):
            return self.amount + other
        else:
            raise TypeError(f"Unsupported type for addition: {type(other)}")
          
    
    def __iadd__(self, other):
      if isinstance(other, Currency):
        if self.currency == other.currency:
          self.amount += other.amount
        else:
          raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{other.currency}>")
      elif isinstance(other, int):
            self.amount += other
      else:
        raise TypeError(f"Unsupported type for in-place addition: {type(other)}")
      return self
    
# ex3
import random
import string

characters = string.ascii_letters
random_string = ''.join(random.choice(characters) for _ in range(5))

print(random_string)

# ex4
import datetime

current_date = datetime.date.today()
print(current_date)

# ex5
import datetime

def time_until_new_year():

  current_date = datetime.datetime.now()

  future_date = datetime.datetime(current_date.year + 1,1,1)

  time_left = future_date - current_date

  days_left = time_left.days
  hours_left = time_left.seconds // 3600
  minutes_left = (time_left.seconds % 3600) // 60
  seconds_left = time_left.seconds % 60

  print(f"There are {days_left} days, {hours_left} hours, {minutes_left} minutes and {seconds_left} seconds left until January 1st.")

time_until_new_year()

# ex6
import datetime

def minutes_lived(date):
  date = datetime.datetime.strptime(date, "%Y-%m-%d")
  
  current_date = datetime.datetime.now()
  diff_date = current_date - date
  minutes = diff_date.total_seconds() / 60
  print(f"You have lived for approximately {int(minutes)} minutes.")

minutes_lived("1998-10-14")

# ex7

from faker import Faker

fake = Faker()
users = []

def add_user():
  user = {
    "name": fake.name(),
    "adress":fake.address(),
    "language_code":fake.language_code()
  }
  users.append(user)
  
add_user()
add_user()
add_user()
for user in users:
  print(user)