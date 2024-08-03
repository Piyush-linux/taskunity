import { create } from "zustand";


const useTaskStore = create()(
        (set) => ({
            tasks: [{id:"123",todo:"Tatakai !",status:false},{id:"456",todo:"shop milk !",status:true}],
            addTask: (todo) =>
                set((state) => ({
                    tasks: [todo, ...state.tasks],
                })),
            removeTask: (todoId) =>
                set((state) => ({
                    tasks: state.tasks.filter(
                        (todo) => todo.id !== todoId
                    ),
                })),
            toggleTask: (todoId) =>
                set((state) => ({
                    tasks: state.tasks.map((todo) =>
                        todo.id === todoId
                            ? { ...todo, status: !todo.status }
                            : todo
                    ),
                })),
                // Update
                

        }),
        { name: "tasks" }
);

export default useTaskStore;