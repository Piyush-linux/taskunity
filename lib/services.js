// import { fetcher } from "@/lib/utils";
// import useSWR from 'swr'

import { api } from "./constants";

export class TodosService {

    static async getTodos(userId) {
      // const { data, error, isLoading } = useSWR("/api/task", fetcher)
      // if (error){
      //   console.log('Error loading todos: ', error)
      // }
      // if(!isLoading){
      //   return data
      // }
        return fetch(`${api}/api/task?userId=${userId}`)
        .then((res) => {
          let data = res.json()
          // console.log("----------- data"+data)
          return data;
        })
        .catch((error) => console.log('Error loading todos: ', error));
    }

    static async addTodo(newTodo) {
        return fetch(`${api}/api/task`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(newTodo)
        })
        .then((res)=>res.json())
        .catch((error) => console.log('Error loading todos: ', error));
    }

    static async updateTodo(id, todo) {
        return fetch("/api/task" + `/${id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(todo)
        });
      }

} 