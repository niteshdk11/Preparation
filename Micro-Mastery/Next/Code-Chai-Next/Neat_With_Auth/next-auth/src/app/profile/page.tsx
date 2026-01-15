'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.post('/api/users/me');
                setUser(response.data.data);
            } catch (err:any) {
                setError(err.response ? err.response.data.error : err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            router.push("/login");
        } catch (err:any) {
            console.log(err);
        }
    };

    if (loading) return <div className="text-white">Loading...</div>;
    if (error) return <div className="text-red-500">Error: {error}</div>;

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
            <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-4">User Profile</h1>
                {user ? (
                    <div>
                        <p className="mb-2">ID: {user._id}</p>
                        <p className="mb-4">Email: {user.email}</p>
                        <button 
                            onClick={logout}
                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <p>No user data available.</p>
                )}
            </div>
        </div>
    );
};

export default Profile;
