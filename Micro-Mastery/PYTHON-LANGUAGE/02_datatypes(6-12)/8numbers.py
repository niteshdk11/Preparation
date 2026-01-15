
# ? what is difference in them 
# repr("helo")
# str("helo")
# print('hello')

#  ? math lib 
import math 

# print(math.floor(2.31))
# print(math.trunc(2.31)) # trunc focus the number which is close to 0 

# *  number systems 
# print(0o20) # octal 
# print(0xFF) # hex
# print(0b10) # binary
#*  to convert 
# print(bin(10))
# print(oct(10))
# print(hex(10))

#  we can directly use int 
# print(int("10", 8))
# print(int("1111", 2)) # in 2nd paramter we have to mention the base

# ? all the bitwise operators 
# & , | , ^ , ~ , << , >>


# ?   random module
import random 
# print(random.random()) # number from 0 to 1 
# print(random.randint(1, 10))
l1 = [2,3,4,3,4]
# print(random.choice(l1))
random.shuffle(l1)
# print(l1) # it is shuffling the list

# ? kuch alag 
# print((0.1 + 0.1 + 0.1) - 0.3)

# *  decimal context manager 
from decimal import Decimal 
result = Decimal('0.1') + Decimal('0.1') + Decimal('0.1')
# print(result)

# ? lly fraction 
from fractions import Fraction 
result = Fraction(1, 3) + Fraction(1, 3) + Fraction(1, 3) # num , den
# print(result)



# ? Sets 
s1 = { 2,3,4,5,2,2} # no duplication is count it wiitten only once 
s1 = {1,2,3,4}
s2 = {3,4,5,6}

print(s1 & s2) # intersection
print(s1 | s2) # union
print(s1 - s2) # difference
print(s2 - s1) # difference
print(s2-s2) # set() , not get {} , becoz {} id dict 




#  ? boolean 
print(True is 1) # false 
