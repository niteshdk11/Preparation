
# l2 = (1,2,3,4,5)
# l2=(23,34) 
# print(l2) # this can de done we are replacing the whole list  so no error 

l2 = (3,4,5,56)
# print(l2[1:3])
# print(l2[0])
# print(l2[0]) 
# l2[3]= 45 #  TypeError: 'tuple' object does not support item assignment
# because tuple is immutable , but you  can change the reference of the tuble , just we have done above 

l1 = [2,3,4,3]
t1 =(3,4,5,45)
# l2 = l1+t1 # TypeError: can only concatenate list (not "tuple") to list
t2 = (3,4,5,4)
l2 = t1+t2
print(l2)


#  ? unpacking or destructuring
detls = ("ayush", 23, "male")
name , age , gender = detls
print(name , age , gender)