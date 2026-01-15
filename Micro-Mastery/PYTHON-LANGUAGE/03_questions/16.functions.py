
# ? 1
def squr(n):
    return n **2

# print(squr(4)) 

# ? 3 
def mul(p1,p2):
    return p1 * p2
# print(mul(2,3)) 

#  ? 4 
import math
def circ(rad):
    cf = round(2 * math.pi * rad, 2)
    area = round(math.pi * rad * rad, 2)
    return (cf, area)  # returning a tuple as requested
# print(type(circ(2)))

# ?  5 
def user(name="nitesh"):
    print(f"hello {name}")
# user() 
# user("Rakesh") 

#  ?  6 
a= lambda x: x**3
b = a
a= lambda x: x**2
# print(b(3))

# ? 7 *args ka type hota hai tuple
# def sum(*a):
#     s = 0 
#     for i in a:
#         s += i
#     return s

# print(sum(23,2,3,3,))

# ? 8 
def detls( *a , **kwargs):
    print(sum(a))
    for key ,val in kwargs.items():
        print(f"{key} : {val}")
# detls(232,32,2,32, gender="male")
# detls(name="ayush", age=23, gender="male")        

# ? 9 
# def even_gen(limit):
#     for i in range(limit):
#         if i % 2 == 0:
#             yield i

# res = even_gen(10)
# for i in res:
#     print(i)
# # print(res.__next__())

#   ? 10 
# def fact(n):
#     if n <= 1:
#         return 1
#     return n * fact(n-1)

# print(fact(3))
