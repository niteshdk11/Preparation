
const Page = () => {

  const fetchPosts = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/blog/posts');
      const data = await res.json(); 
      console.log(data)
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  fetchPosts();

  return (
    <div>
      
    </div>
  );
};

export default Page;
