"use client"

import { useModalStore } from "@/store/useModalStore";
import useTaskStore from "@/store/useTaskStore";
import { useState } from "react";
// import { useOrganization } from "@clerk/nextjs";
import useUserStore from "@/store/useUserStore";


export default function TaskAdd() {

    const { modal, update } = useModalStore();
    const { addTask } = useTaskStore(); 
    const { users, setUser, fetchUser } = useUserStore();

    let [task,setTask] = useState('');
    
    // let  {isLoaded, organization } = useOrganization()
    // if(!isLoaded) return null ;

    let handleAddTask = ()=>{
        addTask({
            id: Date.now(),
            todo:task,
            status: false 
        })
        update('hidden')
        fetchUser();
    }

    // let getMem = async ()=>{
    //     let { data } = await organization.getMemberships()
    //     data.map((itm)=>{
    //         setUser({
    //             orgId: itm.id ,
    //             useId: itm.publicUserData.userId ,
    //             role: itm.role ,
    //             mail: itm.publicUserData.identifier
    //         })

    //     })
    //     console.log(users)
    // }
    // getMem()
    
    return(
        <>
            <div
                id="modelConfirm"
                className={`${modal} fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 `}
            >
                <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-4xl">
                    <div className="flex justify-end p-2">
                        <button
                            onClick={() => update('hidden')}
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
                        {/* <button className="p-3 bg-cyan-300 text-white font-bold" onClick={()=>fetchUser()}>fetch</button> */}

                    </div>
                    <div className="p-6 pt-0 text-center">
                        
                        <h3 className="flex mt-5 mb-6 space-x-3">

                            <input type="text" className="w-full border-2 p-3 rounded-lg" placeholder='task' onChange={(e)=>setTask(e.target.value)} value={task} />
                            <input type="email" className="w-full border-2 p-3 rounded-lg" placeholder='user@gmail.com' />
                            <button className='w-fit p-3 bg-rose-400 text-white rounded-lg' onClick={handleAddTask}>send : {task} </button>

                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}