export const app = 23; // if will work but jo main jsx ka copment hai vo deafult edport hona chhaiye 

const MyProfile = async ({params}) => {
  let id = await params.id;
 console.log(id);
  return (
    <div>{id}</div>
  )
}

export default MyProfile