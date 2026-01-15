
const User = ({name})=>{
     
    return (
        <div className="user m-4 p-4 w-fit border border-pink-500 ">
            <h1> Name : {name}</h1>
            <h3> Location: Ptown , Pune</h3>
            <h4>Contact : @kush1234</h4>
        </div>
    )
}

export default User ;