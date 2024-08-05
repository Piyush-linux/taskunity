"use client"
 
import { useModalStore } from "@/store/useModalStore";
import TaskUpdate from "./taskUpdate";

export default function TaskItem(props) {
    const { putModal, updateModal, putTodo ,updatePutTodo } = useModalStore();
    let handleUpdate = () => {
        updatePutTodo({userId: props.userId, todo: props.todo, status:props.status})
        // console.log(props.userId)
        updateModal('block')
        // console.log(putTodo)
    }
    return (
        <>
            <tr className="">
                <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                >
                    {props.todo}
                    
                </td>
                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                   Kevin
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="rounded-full text-center bg-white py-2 px-3 text-xs font-extrabold text-rose-400">
                        {(props.status)? "Completed" : "Pending" }
                    </div>
                </td>

                <td className="whitespace-no-wrap text-center hidden py-4 text-sm font-normal sm:px-6 lg:table-cell">
                    <div className="w-full flex items-center justify-center">
                        <button onClick={ () => handleUpdate() } className="bg-rose-400 text-white p-3 rounded-lg font-bold">Edit</button>
                    </div>
                </td>
            </tr>
            

        </>
    )
}