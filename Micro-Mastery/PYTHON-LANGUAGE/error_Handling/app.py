
# ! enumerate , kisi vhi chiz ko yak bar kar diya to vo lsit me convet ho sakti hai 
x =('apple', 'banana','graptes')
y = enumerate(x)
# print(y)
# print(list(y)) # [(0, 'apple'), (1, 'banana'), (2, 'graptes')]
# file = open('test.py') # agar file nahi hogi to error ayega 
# file = open('test.py',"w") # agar  file nahi hoga to crate ho jayega 

# try:
#     file.write("Hello keseho")
# finally:
#     file.close()    
# ! now there is more good syntax for file handling

with open('test.py','w') as file:
    file.write("This is fucking fest")