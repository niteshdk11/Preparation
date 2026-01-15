
#  !  to use mongosb with python we use pymongo library

from pymongo import MongoClient

# Connect to MongoDB
client = MongoClient("mongodb+srv://nitesh_dk:rakesh114@nitesh.zownidz.mongodb.net/?retryWrites=true&w=majority&appName=NItesh")
db = client["youtube_manager"]
collection = db["videos"]

# Ensure index for id if needed
collection.create_index("id", unique=True)

def list_all_videos():
    videos = collection.find()
    for video in videos:
        print(video)


def add_video(name, time):
    video_id = collection.count_documents({}) + 1  # Auto-increment ID
    video = {"id": video_id, "name": name, "time": time}
    collection.insert_one(video)
    print("Video added successfully.")


def update_video(video_id, new_name, new_time):
    result = collection.update_one(
        {"id": int(video_id)}, {"$set": {"name": new_name, "time": new_time}}
    )
    if result.modified_count:
        print("Video updated successfully.")
    else:
        print("No video found with the given ID.")


def delete_video(video_id):
    result = collection.delete_one({"id": int(video_id)})
    if result.deleted_count:
        print("Video deleted successfully.")
    else:
        print("No video found with the given ID.")


def main():
    while True:
        print("\nYouTube Manager with MongoDB")
        print("1. List all YouTube videos")
        print("2. Add a YouTube video")
        print("3. Update a YouTube video")
        print("4. Delete a YouTube video")
        print("5. Exit the app")
        choice = int(input("Enter your choice: "))
        match choice:
            case 1:
                list_all_videos()
            case 2:
                name = input("Enter the video name: ")
                time = input("Enter the video time: ")
                add_video(name, time)
            case 3:
                video_id = input("Enter video ID to update: ")
                name = input("Enter the new video name: ")
                time = input("Enter the new video time: ")
                update_video(video_id, name, time)
            case 4:
                video_id = input("Enter video ID to delete: ")
                delete_video(video_id)
            case 5:
                break
            case _:
                print("Invalid choice.")

    client.close()


if __name__ == "__main__":
    main()