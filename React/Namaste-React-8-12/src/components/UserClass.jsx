import React from "react"
import UserContext from "../utils/UserContext"

class UserClass extends React.Component{

    constructor(props){
super(props)

this.state = {
    count : 0 ,
    count2: 12 ,
}


    }



componentDidMount(){
    console.log("this is all onde after")

    //api call 
    
}

componentDidUpdate(){
    console.log("this is called wehn state variable will be updated ")
}

componentWillUnmount(){
    console.log("this is unmouted")
}

render(){

let {name } = this.props
let {count , count2 } = this.state 

    return (
<div className="UserContext m-4 text-white p-4 w-fit border border-pink-500 ">
            <h1> Name : {name}</h1>
            <h1> Count : {count}</h1>
            <h1> Count : {count2}</h1>
            <button onClick={()=> {

                this.setState({
                    count : ++count   , // increment is not working    post not pre working
                    count2 : this.state.count2 +1 
                })
            }}>Increase COunts </button>
            <h3> Location: Ptown , Pune</h3>
            <h4>Contact : @kush1234</h4>

            <UserContext.Consumer>
                {
                    (data)=>{
                         return <p className="bg-red-600  p-2 ">{data.user}</p>
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}



}

export default UserClass ; 