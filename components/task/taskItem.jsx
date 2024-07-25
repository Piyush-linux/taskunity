export default function TaskItem(props) {
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
                    07 February, 2022
                </td>

                <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="items-center rounded-full bg-white py-2 px-3 text-xs font-extrabold text-rose-400">
                        {(props.status)? "Completed" : "Pending" }
                    </div>
                    {/* <input type="checkbox" className={``}  /> */}
                </td>
            </tr>
        </>
    )
}