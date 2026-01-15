# f = open('app.py')
# print(f.readline())
# print(f.readline())
# print(f.readline())


# f = open('app.py')
# print(f.__next__())
# print(f.__next__())
# print(f.__next__())
# # print(f.__next__()) #*  error of stopiteration it is not handled here properly


# ? for loop
# for line in open('app.py'):
#     print(line,end='')


# ? while loop
# f = open('app.py')
# while True:
#     line = f.readline()
#     if not line:
#         break
#     else:
#         print(line)

# ? not ka stuff 
val = '34asd'
if not val:
    print(" nahi hai") # falsy value ke liye run hota hia ye not wala 


myl1 = [1232,3,4,5,34]
# I = iter(myl1) 
# print(I)# <list_iterator object at 0x7fb5b73cb5e0>
# #  ! list iterator hamesa starting index ko hii point karega
# print(I.__next__())
# print(I.__next__())
# print(iter(myl1) is myl1) # False 



# !   iter object for files 
f= open('app.py')
#  yaha par by deauult vo iter(f) me use kiya hai bts
# ? only accipacle to files only 
# print(iter(f) is f) # True 
# print(iter(f)) # True  # <_io.TextIOWrapper name='app.py' mode='r' encoding='UTF-8'>
# print(iter(f) is f.__iter__()) # True 


#  * file ko jab app yak variable ke yander refence lete ho to  vo variable apane app me yak itterable object hai 
# * but list ko agar kisi varible me hold kiya hai to vo yuska itterable object nahi hai , bas vo actual object ka reference hai 

# ? Dict 
d1 = {
    "name" : "Rahul",
    "age" : 25,
}
I = iter(d1)
# print(I.__next__()) # <dict_keyiterator object at 0x7f08a54a2160>
# print(next(I)) # <dict_keyiterator object at 0x7f08a54a2160>

#  ? range 
r =range(3)
print(r)
I = iter(r)
print(next(I))
print(next(I))
print(next(I))