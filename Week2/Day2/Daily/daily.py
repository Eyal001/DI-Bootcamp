class Pagination:
  def __init__(self,items=None, pageSize=10):
    self.items = items
    self.pageSize = pageSize
    self.totalPages = (len(self.items) + self.pageSize - 1) // self.pageSize
    self.currentPage = 1
  
  def getVisibleItems(self):
    end_index = self.currentPage * self.pageSize
    start_index = end_index  - self.pageSize
    return self.items[start_index:end_index]
  
  def nextPage(self):
    if self.currentPage < self.totalPages:
      self.currentPage += 1
    return self
  
  def prev_page(self):
    self.currentPage -= 1
    return self
    
  def first_page(self):
    self.currentPage = 1
    return self
  
  def last_page(self):
    self.currentPage = self.totalPages
    
  def goToPage(self, pageNum):
    pageNum = int(pageNum)
    if pageNum < 1:
      self.currentPage =1
    elif pageNum > self.totalPages:
      self.currentPage = self.totalPages
    else:
      self.currentPage = pageNum
    return self
  
alphabetList = list("abcdefghijklmnopqrstuvwxyz") 
  
p = Pagination(alphabetList,4)

print(p.getVisibleItems())
p.nextPage()
print(p.getVisibleItems())

p.last_page()
print(p.getVisibleItems())