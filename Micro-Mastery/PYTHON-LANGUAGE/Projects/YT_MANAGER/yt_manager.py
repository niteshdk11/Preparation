
import json

def load_data():
    try:
        with open('youtube.txt','r') as file:
            return json.load(file) # type we get list , but it is json ka list 
    except FileNotFoundError:
        return []

def save_data_helper(videos):
    with open('youtube.txt','w') as file:
        json.dump(videos,file)



def list_all_videos(videos):
        # for index in videos: # jab hume json ka list mil rah ia videos mee to hum direct vidoes par hii itteration   lgag lete hain a 
        # print(f"{index}") # ? itterate to hora hai hune pura elem milra hai list me ka , but muje indexing vhi to deni hai so i will use enumerate () method to do so 
    print("\n")
    print("*" * 20)
    for index,video in enumerate(videos,start=1): 
        print(f"{index}. {video['name']}, Duration {video['time']}") # so now we will get the nnumbering also 
    print("*" * 20)


def add_video(videos):
    name = input("enter the video name")
    time = input("enter the video time")
    videos.append({
        'name':name,
        'time':time
    })
    save_data_helper(videos)

def update_video(videos):
    list_all_videos(videos)
    index = int(input("Enter the video number to update"))
    if 1<=index <=len(videos):
        name =input("Enter the new video name")
        time =input("Enter the new video time")
        videos[index-1]= {'name':name,'time':time}
        save_data_helper(videos)
        print("updated usccessfully !!!! ")
    else:
        print("Invalid video Index selected")    

def delete_video(videos):
    list_all_videos(videos)
    index = int(input("Enter the video number to delete"))
    if 1<=index <=len(videos):
        del videos[index-1]
        save_data_helper(videos)
        print("delted usccessfully !!")
    else:
        print("Invalid video Index selected")      
    
def main():
    videos = load_data()
    while True:
        print('\n YOutube Manager')
        print("1. List all YT Videos ")
        print('2. Add a youtube video ')
        print('3. Update a youtube video details ')
        print('4. Delete a youtube video ')
        print('5.Exit the app ')
        choice = int(input("Enter  Your choice "))

        # if choice ==1: 
        #   instead use match case 
        match choice:
            case 1:
                list_all_videos(videos)
            case 2:
                add_video(videos)    
            case 3:
                update_video(videos)    
            case 4:
                delete_video(videos)    
            case 5:
                break
            case _:
                print("Invalid choice")        
            
if __name__ == '__main__':
    main()

#  ? main yak reserver word hai , jo code ka entry point hai 
# ! dandar == __sfsadf__ this is called dandar 