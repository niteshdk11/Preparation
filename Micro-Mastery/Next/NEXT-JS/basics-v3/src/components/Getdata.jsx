import connectDb from "@/lib/connectDb";
import Post from "@/models/Post";
const Getdata = async () => {
  await connectDb(); // Connect to the database
  const allPosts = await Post.find(); // Fetch posts

  return (
    <div>
      {allPosts.map((post) => (
        <div key={post._id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Getdata;
