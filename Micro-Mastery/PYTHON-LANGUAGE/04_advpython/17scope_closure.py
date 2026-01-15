
# !SCopes or NameSpaaces 

# * same hota hai global scope and function scope lly js jaise 

x = 20 

# def fun():
#     x=40
# # in cannot change the x value in th functin for function the x value is different  
def fun3():
    global x
    x = 30 
# fun3()
#  * now by using the global keyboard you can change the global value in the function , but this is not good practice todo  , we should use the varible of gloabal in the function but dont change it 
#  ! avoid this global stuff 
# print(x)  

# closures  python me vhi hota hai ( bag theory) vhi bolte hai
#  or factory function 
