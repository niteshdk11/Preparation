import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeUser } from './appStore/userSlice'; // Assuming removeUser is the action creator for removing a user

const User = () => {
    const users = useSelector(state => state.user.users);
    const dispatch = useDispatch();

  return (
    <div>
                {
                    users.map((user) => {
                        return (
                            <div className='flex flex-wrap flex-col w-36 h-40 border  mb-1 ' key={user.id}>
                                   <div className="font-bold text-xl mb-2">{user.name}</div>
            <p className="text-gray-700 text-base">Age: {user.age}</p>
            <p className="text-gray-700 text-base">ID: {user.id}</p>
            <p className="text-gray-700 text-base">IP Address: {user.ip_address}</p>

                                <button
                                    onClick={() => dispatch(removeUser(user.id))}
                                    className='px-2 text-sm rounded-md bg-slate-200'
                                >   ❌
                                </button>

                            </div>
                        );
                    })
                }
    </div>
  )
}

export default User
