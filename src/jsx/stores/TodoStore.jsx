import { EventEmitter } from 'event'

import dispacher from '../dispacher'

class TodoStore extends EventEmitter {
  
  constructor() {
    super()
    this.todos = [
      {
        id: 113464613,
        text: "Go Shopping",
        completed: false,
      },
      {
        id: 113464614,
        text: "Pay Water Bills",
        completed: false,
      },
    ]
  }
  createTodo(text) {
    const id = Date.now()

    this.todos.push({
      id: id,
      text: text,
      completed: false,
    })
    
    this.emit('change')
  }
  getAll() {
    return this.todos
  }
  handleAction(action) {
    console.log('TodoStore recieved an action', action)
  }
}

const todoStore = new TodoStore()
dispacher.register(todoStore.handleAction.bind(todoStore))
window.dispatcher = dispatcher
export default todoStore
