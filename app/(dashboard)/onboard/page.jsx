"use client"
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { redirect } from "next/navigation";

export default function OnBoard() {


    const [username,setUsername] = useState('')
    const [role,setRole] = useState('admin')

    const { isLoaded, user, isSignedIn } = useUser();
    if(!isLoaded) return;
    // console.log(user.id)
    if(isSignedIn){
        if (user.publicMetadata.role == 'admin') {
          redirect(`/admin`)
        }else if(user.publicMetadata.role == 'user'){
          redirect(`/user`)
        }
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        const formData = {userId:user.id, username:username,role:role};
        try {
            const response = await fetch('/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(formData),
              })
            const data = await response.json();
            console.log(data)
          } catch (err) {
            console.error(err);
          }
    }

    return (
        <>
            <div className="w-screen h-screen">
            <div className="text-4xl w-full text-center mt-10  font-extrabold">
                        On Board 
                    </div>
                <div className="flex items-center justify-center p-12">
                    
                    {/* Author: FormBold Team */}
                    <div className="mx-auto w-full max-w-[550px] bg-white">
                        <form onSubmit={ handleSubmit }>
                        <div className="hidden">
                                <label
                                    htmlFor="name"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    ID 
                                </label>
                                <input
                                    defaultValue={user.id}
                                    type="text"
                                    name="userId"
                                    id="name"
                                    placeholder="username"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="name"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Username
                                </label>
                                <input
                                onChange={(e)=>setUsername(e.target.value)}
                                    type="text"
                                    name="username"
                                    id="name"
                                    placeholder="username"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="phone"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Role
                                </label>
                                <select name="role" className="w-full p-3 rounded-lg font-medium outline-none" onChange={(e)=>setRole(e.target.value)}>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
                            </div>
                            <div>
                                <button type="submit" className="hover:shadow-form w-full rounded-md bg-rose-400 hover:outline-4 hover:outline-rose-200 py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                    Confirm
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}