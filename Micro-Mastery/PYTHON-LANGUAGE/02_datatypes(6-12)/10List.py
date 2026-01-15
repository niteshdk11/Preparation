
# ? all the slicing operators are same as string

l2 = ["apple", "banana", "cherry"]
# l2[1:2] = "kiwi"
# print(l2) # we are getting  th weard result 
# to fix that we can pass as array 
l2[1:2] = {"kiwi"}#  same we dont get beard result
l2[1:2] = ["kiwi"] # same we dont get beard result
l2[1:3] = ["grapes", "kiwi"] 
# l2[1:3] = {"grapes", "kiwi"} # order formating change hori hai 

l2[1:1] = ["test","test"]
l2[1:3] = []
# print(l2) 

# for f in l2:
#     print(f , end='-') # we can change the end of the string or the elems 

l2.append("Oolang")    
if "Oolang" in l2:
    print('Yes')

    # pop() method
    l2.pop()  # Removes the last item from the list
    print(l2)  # Example output after pop

    # remove method
    l2.remove("banana")  # Removes the first occurrence of "banana"
    print(l2)  # Example output after remove

    # insert method
    l2.insert(1, "orange")  # Inserts "orange" at index 1
    print(l2)  # Example output after insert

    # copy() method
    l2_copy = l2.copy()  # Creates a shallow copy of the list
    print(l2_copy)  # Example output of the copied list

    # clear() method
    l2.clear()  # Removes all items from the list
    print(l2)  # Example output after clear

# ? lists comprehension
sqr = [x**2 for x in range(1,11)]
print(sqr)
