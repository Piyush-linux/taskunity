import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";


const useTodoStore = create()(
    devtools(
        persist(
            (set) => ({
                todos: [],
                addTodo: (todo) =>
                    set((state) => ({
                        todos: [todo, ...state.todos],
                    })),
                removeTodo: (todoId) =>
                    set((state) => ({
                        todos: state.todos.filter(
                            (todo) => todo.id !== todoId
                        ),
                    })),
                todoStatus: (todoId) =>
                    set((state) => ({
                        todos: state.todos.map((todo) =>
                            todo.id === todoId
                                ? { ...todo, completed: !todo.completed }
                                : todo
                        ),
                    })),
            }),
            { name: "todos" }
        )
    )
);

export default useTodoStore;