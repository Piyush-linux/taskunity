export class TodosService {

    static async getTodos(userId) {
        return fetch("/api/task" + `?userId=${userId}`, {
            cache: 'no-store'
        })
        .then((res) => {
          return res.json();
        })
        .catch((error) => console.log('Error loading todos: ', error));
    }

    static async add(newTodo) {
        return fetch("/api/task", {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(newTodo)
        });
    }

    static async update(id, todo) {
        return fetch("/api/task" + `/${id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(todo)
        });
      }

} 