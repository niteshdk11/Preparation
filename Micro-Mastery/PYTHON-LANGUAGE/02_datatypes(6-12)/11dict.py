
d1= {
    "name" : "Rahul",
    "age" : 25,
}

# print(d1["name2"]) # will get error that it is not present 
# print(d1.get("name2")) # will get None , make sure about the difference 

d1['classs']= 10
# print(d1)


# ?  lOOPS 
# for chai in d1:
#     print(chai) # will print the keys only 
#     print(d1[chai]) # will print the values only

# * diff
# for key , value in d1.items():
#     print(key   ,  value);

# if "name" in d1:
    # print("ha hai bhai ")

# print(len(d1)) 

d1['gender'] = "male" ;

# ? while doing you need to privide the keey 

# d1.pop("gender") # specific key delete hote hai 
# d1.popitem() # vo recently add key hogi vo delte hogi ya  bol sakte hai last vali key delte  ki hogi 
# print(d1)

# d2 = d1.copy() # will copy the dict 
# print(d2)

details = {
    "name" : "Rahul",
    "age" : 25 ,
    "collage": "SPPU",
    "class" : " 2nd year ",
    "friends":['aryan','saniya','misba'],
    "address": {
        "city" : "Mumbai",
        "state" : "Maharashtra",
        "country" : "India"
    }
}

# print(details["address"]["state"])

# ? dict comprehension
sqr = {x:x**2 for x in range(1,11)}
# sqr.clear()
# print(sqr)   
# 

l2 = ['aryan','riya','saniya']
deaf = 'chetan'
# d4 = {key : value for key , value in zip(l2 , deaf)} # ai se mila hai 
# print(d4)
# d3 = dict.fromkeys(l2,deaf)
# print(d3)
d3 = dict.fromkeys(l2,l2)
print(d3)


