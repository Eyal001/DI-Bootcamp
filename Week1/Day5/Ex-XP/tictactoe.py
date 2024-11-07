board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
]

def display_board(board, player):
  nb_stars = 17
  print("  TIC  TAC  TOE")
  print("*" * nb_stars)
  for i in range(3):
    print(f"*   {board[i][0]} | {board[i][1]} | {board[i][2]}   *")
    if(i < 2):
      print(f"*  ---+---+---  *")
  print("*" * nb_stars)
  print(f"Player {player}'s turn...",end="\n")
  
def player_input():
  row = int(input("Enter row: "))
  column = int(input("Enter a column: "))
  if(row < 1 or row > 3 or column < 1 or column > 3):
    print("The positions are not correct please type a row or column between 1 to 3")
    return None, None
  row = row -1
  column = column - 1
  return row, column

def make_move(board, player,row, column):
  if board[row][column] == ' ':
    board[row][column] = player
    return True
  else: 
    print("Please, put an empty position")
    return False
  
def check_win(board, player):
  for row in board:
    if(row.count(player) == 3):
      return True
  
  for col in range(3):
    column = []
    for row in range(3):
      column.append(board[row][col])
    if(column.count(player) == 3):
      return True
  
  if([board[i][i] for i in range(3)].count(player) == 3):
    return True
  if([board[i][2-i] for i in range(3)].count(player) == 3):
    return True
  return False

def check_draw(board):
  for row in board:
    if ' ' in row:
      return False
  return True  
    
def play():
  player = "X"
  isFinish = False
  print("Welcome tot TIC TAC TOE !", end="\n\n")

  while isFinish == False:
    
    display_board(board, player)
    row, column = player_input()
    if row is None and column is None:
      continue
    
    if(make_move(board, player, row, column) != False):
      if(check_win(board, player)):
        isFinish = True
        display_board(board, player)
        print(f"The {player} won !")
        break
      
      if(check_draw(board)):
        display_board(board, player)
        print("It's a draw !")
        isFinish = True
        break
      
    player = 'O' if player == 'X' else 'X'     
                  
def main():
  play()

  
main()