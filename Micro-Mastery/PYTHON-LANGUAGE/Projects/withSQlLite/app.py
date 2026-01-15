import sqlite3


conn =sqlite3.connect('youtube_manager.db') 
cursor = conn.cursor()

cursor.execute('''
CREATE TABLE IF NOT EXISTS videos(
               id INTEGER PRIMARY KEY,
               name TEXT NOT NULL,
               time TEXT NOT NULL
               )
               ''')


def list_all_videos():
    cursor.execute(" SELECT * FROM videos")
    for row in cursor.fetchall():
         print(row)

def add_video(name,time):
    cursor.execute("INSERT INTO videos (name,time) VALUES (?,?)",(name,time))
    conn.commit()

def update_video(video_id,new_name,new_time):
    cursor.execute(" UPDATE videos SET name=?,time=? WHERE id=?",(new_name,new_time,video_id))
    conn.commit()

def delete_video(video_id):
    cursor.execute("DELETE FROM videos WHERE id=?",(video_id,)) # !!!!!!!! remd ,
    conn.commit()


def main():
     while True:
        print('\n YOutube Manager With sql lite')
        print("1. List all YT Videos ")
        print('2. Add a youtube video ')
        print('3. Update a youtube video details ')
        print('4. Delete a youtube video ')
        print('5.Exit the app ')
        choice = int(input("Enter  Your choice: "))
        match choice:
            case 1:
                list_all_videos()
            case 2:
                 name=input("enter the video name: ")
                 time=input("enter the video time: ")
                 add_video(name,time)
            case 3:
                  video_id = input("Enter video id to update: ")
                  name=input("enter the video name: ")
                  time=input("enter the video time: ")
                  update_video(video_id,name, time) 
            case 4:
                    video_id = input("Enter video id to delete: ")
                    delete_video(video_id) 
            case 5:
                break
            case _:
                print("Invalid choice")

     
     conn.close()



if __name__ == "__main__":
    main()
