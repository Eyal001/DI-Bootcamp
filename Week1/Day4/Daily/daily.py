# Daily challenge: Solve the Matrix
matrix = [
      ['7', 'i', 'i'],
      ['T', 's', 'x'],
      ['h', '%', '?'],
      ['i', ' ', '#'],
      ['s', 'M', ' '],
      ['$', 'a', ' '],
      ['#', 't', '%'],
      ['^', 'r', '!']
  ]
    
def solve_matrix():
  num_col = len(matrix[0])
  message=[]
  for col in range(num_col):
    for row in matrix:
      char = row[col]
      if(char.isalpha()):
        message.append(char)
      else:
        message.append(" ")
  str_msg = ''.join(message)
  print(str_msg)
        
  return str_msg

solve_matrix()
    