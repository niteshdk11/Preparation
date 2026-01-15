import connectDb from "@/lib/connectDb";
import Post from "@/models/Post";

const create = async(formData)=>{
'use server'
await connectDb();
const res = await Post.create({
  title:formData.get('title'),
  body:formData.get('body')
})
console.log(res);


}

const PostData = async () => {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-800 p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Create a Post</h2>
          <form className="space-y-6" action={create}>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="w-full bg-gray-700 border border-gray-600 rounded-xl p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Enter the title"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="body">
                Body
              </label>
              <textarea
                id="body"
                name="body"
                rows="4"
                className="w-full bg-gray-700 border border-gray-600 rounded-xl p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Enter the body"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-500 rounded-xl py-3 text-white font-semibold transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default PostData;
  