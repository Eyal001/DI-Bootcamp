import math
class Circle:
  def __init__(self, radius=None, diameter=None):
    if radius is not None:
      self.radius = radius
    elif diameter is not None:
      self.radius = diameter / 2
    else:
      raise ValueError("You must put either radius or diameter")
    
  @property
  def diameter(self):
    return self.radius * 2
  @property   
  def area(self):
    return math.pi * self.radius **2
  
  def __str__(self):
    return f"A circle with a radius {self.radius} and diameter {self.diameter}"
  
  def __repr__(self):
    return f"Cirlce(radius={self.radius}, diameter={self.diameter})"
  
  def __add__(self, other_circle):
    if isinstance(other_circle, Circle):
      new_circle_radius = self.radius + other_circle.radius
      return new_circle_radius
  
  def __gt__(self, other_circle):
    if isinstance(other_circle, Circle):
      return self.radius > other_circle.radius
    return False
  
  def __eq__(self, other_circle):
    if isinstance(other_circle, Circle):
      return self.radius == other_circle.radius
    return False