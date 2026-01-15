"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import axios from "axios";

export default function VerifyEmail() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [verified, setVerified] = useState(false);

    const verifyUserEmail = async () => {
        try {
            setLoading(true);
            const response = await axios.post(`/api/users/verifyemail?token=${token}`);
            if (response.data.success) {
                setVerified(true);
                setTimeout(() => {
                    router.push("/login");
                }, 2000);
            }
        } catch (error:any) {
            setError(error.response?.data?.error || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-24">
            <div className="bg-gray-100 p-8 rounded-lg shadow-md w-96 dark:bg-gray-800">
                <h1 className="text-2xl font-bold mb-6 text-center">Verify Email</h1>
                
                {error && (
                    <div className="bg-red-500 text-white p-3 rounded mb-4">
                        {error}
                    </div>
                )}

                {verified ? (
                    <div className="bg-green-500 text-white p-3 rounded mb-4">
                        Email verified successfully! Redirecting to login...
                    </div>
                ) : (
                    <button
                        onClick={verifyUserEmail}
                        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? "Verifying..." : "Verify Email"}
                    </button>
                )}
            </div>
        </div>
    );
}
