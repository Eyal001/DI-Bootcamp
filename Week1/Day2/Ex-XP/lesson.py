# #DATA STRUCTURES:
# #sequences = string
# #data structure sequence: list
# #sets
# #tuples

# my_name= "Eyal"
# last_name = "Zeitoun"
# username = "EyalZ14"

# user_info = [my_name, last_name, username]

# #methods for list
# nums_list = [1,2,3,4]
# nums_list.append(120)
# # print(nums_list)

# nums_list.pop(3)


# #tuple: unmutable sequence

# some_tuple = tuple()
# scores = (10,45,33,67)

# #unpack a tuple
# score1,score2,score3,score4 = scores
# print(score1)
# print(score2)
# print(score3)
# print(score4)

# #indexes
# print(scores[-1])


# list1 = [5, 10, 15, 20, 25, 50, 20]
# # list1[3] = 200
# # print(list1)

# if(list1.index(20)):
#   list1[list1.index(20)] = 200
# print(list1)

# #SET

# my_set = {}
# my_set = set()
# my_set.add('Rick')
# my_set.add('Morty')
# my_set.add('Rick')
# set2 = {'Harry','Ron','Morty'}
# set3 = my_set.intersection(set2)
# # print(set3) -> that print {'Morty'}
# set4 = my_set.union(set3)
# print(set4)

# names = ['Leah','Luke', 'Chubaca', 'Harry','Harry']
# names_set = set(names)
# print(names_set)

# #FOR LOOP

#SYNTAX

students = ['Alex', 'Noah', 'Sara', 'Dima']

# for student in students:
#   print(f"Welcome {student}")

for pzo, each_student in enumerate(students):
    print(pzo, each_student)