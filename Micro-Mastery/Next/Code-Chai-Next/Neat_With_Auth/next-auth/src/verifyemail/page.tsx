"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import React from 'react'



export  default function() {
let router = useRouter()
    let [token , setToken ] = useState("");

    useEffect(()=>{
      const {query} = router ;
     const urlToken:any = query.token ;
     setToken(urlToken || '')

    },[])
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const verifyUserEmail = async () => {
    try {
      setLoading(true);
      const response = await axios.post(`/api/users/verifyemail?token=${token}`);
      setVerified(true);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-96 dark:bg-gray-800">
        <h1 className="text-2xl font-bold mb-6 text-center">Verify Email</h1>
        
        {verified ? (
          <div className="text-center">
            <p className="text-green-500 mb-4">Email verified successfully!</p>
            <Link href="/login" className="text-blue-500 hover:underline">
              Login now
            </Link>
          </div>
        ) : (
          <div className="text-center">
            <button
              onClick={verifyUserEmail}
              className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 disabled:opacity-50 transition-all duration-200"
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify Email"}
            </button>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        )}
      </div>
    </div>
  )


 
}

 