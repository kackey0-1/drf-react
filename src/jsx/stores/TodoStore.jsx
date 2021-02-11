import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {
        id: 113464613,
        text: "Go Shopping",
        complete: false
      },
      {
        id: 235684679,
        text: "Pay Water Bills",
        complete: false
      }
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false
    });

    this.emit('change');
  }

  receiveTodos(todos) {
    this.todos = todos
    this.emit('change')
  }

  getAll() {
    return this.todos;
  }

  handleAction(action) {
    console.log('TodoStore recieved an action', action)
    const type = action.type
    console.log(type)
    switch(type) {
      case "CREATE_TODO": {
        // console.log("CREATE_TODO")
        this.createTodo(action.text)
        break
      }
      case "RECEIVE_TODOS": {
        // console.log("RECEIVE_TODOS")
        this.receiveTodos(action.todos)
        break
      }
      default:
        break
    }
  }
}

const todoStore = new TodoStore()
dispatcher.register(todoStore.handleAction.bind(todoStore))
window.dispatcher = dispatcher
export default todoStore
