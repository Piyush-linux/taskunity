import TaskItem from "./taskItem";
import { TodosService } from "@/lib/services";

export default async function TaskList() {
  let user = { id: "123" };
  const todos = await TodosService.getTodos(user?._id ?? "");
//   const todos = await TodosService.getTodos(user.id);
    // console.log("\n --- TODO ---\n"+todos)
  return (
    <>
      <div className="mt-6 overflow-hidden rounded-xl border shadow">
        <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead className="hidden border-b lg:table-header-group">
            <tr className="">
              <td
                width="50%"
                className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6"
              >
                Task
              </td>
              <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                User
              </td>
              <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                Status
              </td>
            </tr>
          </thead>
          <tbody className="lg:border-gray-300">
             {todos.map((itm) => {
              return (
                <TaskItem key={itm._id} todo={itm.todo} status={itm.status} />
              );
            })}  
          </tbody>
        </table>
      </div>
    </>
  );
}
