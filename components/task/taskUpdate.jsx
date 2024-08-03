"use client"
// import { TodosService } from "@/lib/services";
import { useModalStore } from "@/store/useModalStore";
import { useEffect, useState } from "react";
import Loader from "../ui/loader";

export default function TaskUpdate() {
    const { putModal, updateModal, putTodo , updatePutTodo } = useModalStore();
    // console.log(putTodo)
    // Todo, UserId, Status
    const [userId, setUserId] = "2323";
    const [todo, setTodo] = useState(putTodo.todo);
    const [status, setStatus] = useState(false);
    
    // let handleUpdateTodo = async () => {putTodo
    let handleUpdateTodo = () => {
        console.log(`handle form ... \nUserId: ${userId} \ntodo: ${todo} \nStatus: ${status}`);
        // Clear Text
        // updateModal('hidden');
        // setPutTodo('');
        // setUserId('');
    }

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

                            <input name="todo" type="text" className="w-full border-t-white border-l-white border-r-white border-b-2 outline-none border-2 border-b-rose-400 p-3" placeholder="Task Update" onChange={(e) => updatePutTodo({todo: e.target.value, status: false})} value={putTodo.todo} />
                            {/* <select name="userId" id="" className="w-fit bg-white text-rose-400 p-3 rounded-lg"  onChange={(e) => {
                                setUserId(e.target.value);
                            }}>
                                <option value={userId} defaultValue>  Select User </option>
                                {memberships?.data?.map((mem) => (<option key={mem.id} value={mem.publicUserData.userId}>  {mem.publicUserData.identifier} </option>))}
                            </select> */}
                            <button className='w-fit p-3 bg-rose-400 text-white rounded-lg' onClick={handleUpdateTodo}>send</button>

                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}