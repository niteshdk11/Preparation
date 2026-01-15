import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users : [
        { name: "Alice", age: 28, id: 1, ip_address: "192.168.1.1" },
        { name: "Bob", age: 34, id: 2, ip_address: "192.168.1.2" },
        { name: "Charlie", age: 22, id: 3, ip_address: "192.168.1.3" },
        { name: "David", age: 45, id: 4, ip_address: "192.168.1.4" },
        { name: "Eve", age: 30, id: 5, ip_address: "192.168.1.5" },
        { name: "Frank", age: 29, id: 6, ip_address: "192.168.1.6" },
        { name: "Grace", age: 31, id: 7, ip_address: "192.168.1.7" },
        { name: "Hannah", age: 24, id: 8, ip_address: "192.168.1.8" },
        { name: "Ian", age: 37, id: 9, ip_address: "192.168.1.9" },
        { name: "Jack", age: 40, id: 10, ip_address: "192.168.1.10" },
        { name: "Kathy", age: 27, id: 11, ip_address: "192.168.1.11" },
        { name: "Leo", age: 36, id: 12, ip_address: "192.168.1.12" },
        { name: "Mia", age: 25, id: 13, ip_address: "192.168.1.13" },
        { name: "Nora", age: 32, id: 14, ip_address: "192.168.1.14" },
        { name: "Oscar", age: 38, id: 15, ip_address: "192.168.1.15" },
        { name: "Paul", age: 42, id: 16, ip_address: "192.168.1.16" },
        { name: "Quinn", age: 23, id: 17, ip_address: "192.168.1.17" },
        { name: "Rachel", age: 26, id: 18, ip_address: "192.168.1.18" },
        { name: "Steve", age: 33, id: 19, ip_address: "192.168.1.19" },
        { name: "Tina", age: 35, id: 20, ip_address: "192.168.1.20" },
        { name: "Uma", age: 30, id: 21, ip_address: "192.168.1.21" },
        { name: "Vera", age: 41, id: 22, ip_address: "192.168.1.22" },
        { name: "Will", age: 39, id: 23, ip_address: "192.168.1.23" },
        { name: "Xena", age: 22, id: 24, ip_address: "192.168.1.24" },
        { name: "Yara", age: 34, id: 25, ip_address: "192.168.1.25" },
        { name: "Zack", age: 29, id: 26, ip_address: "192.168.1.26" },
        { name: "Amy", age: 32, id: 27, ip_address: "192.168.1.27" },
        { name: "Brian", age: 35, id: 28, ip_address: "192.168.1.28" },
        { name: "Cathy", age: 37, id: 29, ip_address: "192.168.1.29" },
        { name: "Derek", age: 44, id: 30, ip_address: "192.168.1.30" }
    ]
}
const userSlice = createSlice({
    name:"user",
    initialState ,
    reducers:{
            removeUser:((state,action)=>{
               state.users = state.users.filter(user=>user.id !=action.payload)
            })
    }
});

export const {removeUser} = userSlice.actions;
export default userSlice.reducer;
