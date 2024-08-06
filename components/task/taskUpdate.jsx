"use client" 
// import { TodosService } from "@/lib/services";
import { useModalStore } from "@/store/useModalStore";
import { useEffect, useState } from "react";
import { TodosService } from "@/lib/services";
import Loader from "../ui/loader";

export default function TaskUpdate() {
    const { putModal, updateModal, putTodo , updatePutTodo } = useModalStore();

    // Todo, UserId, Status
    const [userId, setUserId] = useState(putTodo.userId);
    const [todo, setTodo] = useState(putTodo.todo);
    const [status, setStatus] = useState(putTodo.status);
    
    let handleUpdateTodo = async () => { 
        // console.log(`handle form ... \nUserId: ${putTodo.userId} \ntodo: ${putTodo.todo} \nStatus: ${putTodo.todo}`);
        let data = await TodosService.updateTodo(putTodo.userId,{ todo: putTodo.todo, status: status });
        console.log(data)
        // Clear Text
        updateModal('hidden');
        // setTodo('');
        // setUserId('');
    }

    useEffect(()=>{},[todo,status])

    return (
        <>
            <div
                id="modelConfirm"
                className={`${putModal} fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 `}
            >
                <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-4xl">
                    <div className="flex justify-end p-2">
                        <button
                            onClick={() => updateModal('hidden')}
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
                            {/* {
                                (putTodo.status)? (<input name="status" type="checkbox" className="w-10 border-2 border-rose-400 text-rose-300" onClick={()=> setStatus(!status)} checked="FALSE" />) : (<input name="status" type="checkbox" className="w-10 border-2 border-rose-400 text-rose-300" onClick={()=> setStatus(!status)} />)
                            } */}
                            <input name="status" type="checkbox" className="w-10 border-2 border-rose-400 text-rose-300" onClick={()=> setStatus(!status)} value="on" />
                            <input name="todo" type="text" className="w-full border-t-white border-l-white border-r-white border-b-2 outline-none border-2 border-b-rose-400 pb-1" placeholder="Task Update" onChange={(e) => updatePutTodo({todo: e.target.value, status: false})} value={putTodo.todo} />
                           
                            <button className='w-fit p-3 bg-rose-400 text-white rounded-lg' onClick={handleUpdateTodo}>send</button>

                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}