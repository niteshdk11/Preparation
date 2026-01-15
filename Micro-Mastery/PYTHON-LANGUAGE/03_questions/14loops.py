l1=[2,3,4,-3,4,-4,-5,5]

# count  = 0 
# for num in l1:
#     if num > 0:
#         count += 1
# print(count)


n = 10 
sum = 0
for i in range(1,n+1):
    if i % 2 == 0:
        sum +=i
# print(sum)
        
sum = n // 2 * (n // 2 + 1) # sum of n even numbers 
# print(sum)


# ? 3 
# number = 3
# for i in range(1,11):
#     if i ==5:
#         continue 
#     print(f"{number} x {i} = {number*i}")

# ?  4 
# ? reverse a string using loop 
str = "Rakesh"
str_rev = ""
for i in str:
    str_rev = i + str_rev
# print(str_rev)

# ? 5 
#  *  find the first non repeated  character 
# str2 = "ddeer"
# for char in str2:
#     if str2.count(char) == 1:
#         print(char)
#         break
        
#  ?  6 
# num = 3
# fact = 1 
# while num > 0:
#       fact = fact * num
#       num -= 1
# print(fact)

# ?  7  user se input lete raho , jab tak ki vo 1 se 10 ke bich  me number me na de 

# while True:
#     num = int(input("Enter a number : "))
#     if num >= 1 and num <= 10:
#         print("you entered a valid number")
#         break

#  ? 8 
# number = 11
# isPrime = True

# for i in range(2,number):
#     if number % i == 0:
#         isPrime = False 
#         break

# if isPrime:     
#     print("the number is prime")
# else:
#     print("the number is not prime")


#  ? 9 
# items = ["apple","banana","cherry" , " banana", "apple"]
# unique_items = set()
# for item in items:
#     if item in unique_items:
#         print("duplicate",item)
#         break
#     unique_items.add(item)

# ? 10 
# Implement an exponential backoff strategy that doubles the wait time between retries, starting from 1 second, but stops after 5 retries.

import time 
wait_time = 1
max_retries = 5
attempts = 0 

while attempts < max_retries:
    print(f"Attempt {attempts + 1}. Waiting {wait_time} seconds.")
    time.sleep(wait_time)
    attempts += 1
    wait_time *= 2

