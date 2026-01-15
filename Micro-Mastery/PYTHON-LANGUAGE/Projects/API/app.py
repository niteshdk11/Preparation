
# ? API 
# application programming interface 

#  We are using requests for hitting api 
import requests

url ="https://api.freeapi.app/api/v1/public/randomusers/user/random"

headers = {"accept": "application/json"}

response = requests.get(url, headers=headers)
response = response.json()
userdata = response['data']['login']
print(userdata['username'])

if True:
 print("KAISEN BAA ??")
else:
    # raise Exception("faild to fetch error ")
    raise Exception("faild to fetch error ")

try:
    print("kese ho")   
except Exception as e:#!!!! 
   print(e)   

