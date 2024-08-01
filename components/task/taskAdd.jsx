"use client"
import { SignOutButton, useOrganization, useUser } from "@clerk/nextjs";
import { TodosService } from "@/lib/services";
import { useModalStore } from "@/store/useModalStore";
// import useTaskStore from "@/store/useTaskStore";
import { useState } from "react";
// import { useOrganization } from "@clerk/nextjs";
// import useUserStore from "@/store/useUserStore";

export default function TaskAdd() {
    // const {} = TodosService
    const { modal, update } = useModalStore();
    const { user } = useUser()
    // const { addTask } = useTaskStore(); 
    const [todo,setTodo] = useState('');
    const [userId,setUserId] = useState('');

   const { isLoaded, memberships } = useOrganization({
        memberships: {
        pageSize: 5,
        keepPreviousData: true,
    }})
     if (!isLoaded) {
    return <>Loading</>
  }

    
    // const { users, setUser, fetchUser } = useUserStore();
    let handleAddTodo = async () => {
        console.log("handle form ...");
        // console.log(`ID : ${userId}, Todo: ${todo}`)
        let data = await TodosService.addTodo({userId: userId, todo: todo, status: false});
        console.log(data);
        // await TodosService.addTodo({userId: '2323', todo: 'todo', status: false});
        // console.log(todo)
        update('hidden');
        setTodo('');
        setUserId('');
    }
    
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

                            <input type="text" className="w-full border-t-white border-l-white border-r-white border-b-2 outline-none border-2 border-b-rose-400 p-3" placeholder='task' onChange={(e)=>setTodo(e.target.value)} value={todo} />
                            {/* <input type="email" className="w-full border-2 p-3 rounded-lg" placeholder='ID' onChange={(e)=>setUserId(e.target.value)} value={userId}  /> */}
                            <select name="" id="" className="w-fit bg-white text-rose-400 p-3 rounded-lg" defaultValue="Select User">
                                {memberships?.data?.map((mem) => (<option key={mem.id} value={mem.publicUserData.userId}>  {mem.publicUserData.userId} </option>))}
                            </select>
                            <button className='w-fit p-3 bg-rose-400 text-white rounded-lg' onClick={handleAddTodo}>send</button>

                        </h3>
                    </div>
                </div>
            </div>

            {/* table */}

            
        </>
    )
}