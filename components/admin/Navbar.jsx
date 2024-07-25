"use client"
import { SignOutButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useOrganizationList} from "@clerk/nextjs"
import { useModalStore } from "@/store/useModalStore";

export default function Navbar() {

    const { modal, update } = useModalStore();
    const { isLoaded:orgLoaded,userMemberships  } = useOrganizationList({
        userMemberships: {
          infinite: true,
        },
      });
    
    const { isLoaded, user } = useUser();

    if (!isLoaded || !orgLoaded) return null ;

    let openModal = (status) => {
        console.log("modal: ",status);
        if(status){
            update("block")
        }else{
            update("hidden")
        }
    }
     
// {userMemberships.data?.organization.name}
    return(
        <>
        {/* Navbar */}
            <header>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, {modal} !</h1>

                            <p className="mt-1.5 text-sm text-gray-500">Let's Create a new Task ! 🎉</p>
                        </div>

                        <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
                        <SignOutButton>
                            <button
                                className="text-sm font-medium inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 px-5 py-3 text-gray-500 transition hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:ring"
                                type="button"
                            >
                                <span className=""> Sign Out </span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                    />
                                </svg>
                            </button>
                            </SignOutButton>
                            <button
                                className="block rounded-lg bg-rose-400 px-5 py-3 text-sm font-bold text-white transition hover:bg-rose-500 focus:outline-none focus:ring focus:ring-rose-400"
                                type="button"
                                onClick={()=>openModal(true)}
                            >
                                Create Task
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {/* Dialog */}
            {/* Dialog */}
            <div
                id="modelConfirm"
                className={`${modal} fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 `}
            >
                <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-4xl">
                    <div className="flex justify-end p-2">
                        <button
                            onClick={() => openModal(false)}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="p-6 pt-0 text-center">
                        
                        <h3 className="flex mt-5 mb-6 space-x-3">

                            <input type="text" className="w-full border-2 p-3 rounded-lg" placeholder='task' />
                            <input type="email" className="w-full border-2 p-3 rounded-lg" placeholder='user@gmail.com' />
                            <button className='w-fit p-3 bg-rose-400 text-white rounded-lg'>send</button>

                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}