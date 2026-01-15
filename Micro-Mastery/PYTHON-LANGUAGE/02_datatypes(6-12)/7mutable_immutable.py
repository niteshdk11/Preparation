
# 1st one 
l1 = [1,2,3]
l2 = l1 # here it is a shallow copy of the list 
l1 = 'chain' # yaha par reference se hat jara hai so no dependent house here
l1 = [1,2,3]
l1[0] = 33 

# print(l1)
# print(l2)

# ++++++++++++++++++++++++
# ? to make the deep copy of the list we can do slicing 

l1 = [1,2,3]
l2 = l1[:] # this will make the deep copy of the list
# that means l1 and l2 will be independent of each other

#*  we can also use differnt syntax from copy module 
import copy 

l1 = [1,2,3]    
l2 = copy.copy(l1) # here it is copying the list 
l3 = copy.deepcopy(l1) # here it will also copy the nested list alsso present in the list l1 
print(l1)
print(l2)


#  ? suppose you want to check that the objects are reference or not then we can use is operator ( or we can say deep copy or shallow copy)
l1 = [1,2,3]
l2=l1 
# print(id(l1))
# print(id(l2)) # it is shallow copt then the id is same 
print(l1 is l2)# getting true 
l2 = copy.copy(l1)
print(l1 is l2) # getting false

