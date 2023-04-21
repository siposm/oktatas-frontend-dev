import { Component } from '@angular/core';
import { ToDo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo-manager'

  todos: Array<ToDo> = []
  newTodo: ToDo = new ToDo
  newTag: string = ''
  todoTypes: Array<any> = [
    { text: 'primary', value: 'alert-primary' },
    { text: 'danger', value: 'alert-danger' },
    { text: 'warning', value: 'alert-warning' },
    { text: 'success', value: 'alert-success' }
  ]
  tagOptions: Array<string> = ['new', 'urgent', 'pending', 'personal', 'work']

  constructor() {
    this.fetchData()
  }

  styleBinding(todoItem: ToDo) : string {
    return todoItem.type
  }

  counter() : number {
    return this.todos.length
  }

  counterColor() : string {
    if (this.todos.length > 10) {
      return 'badge-danger'
    }
    else if (this.todos.length > 5) {
      return 'badge-warning'
    }
    else {
      return 'badge-success'
    }
  }

  addNewTodo() {
    this.newTodo.id = (Math.floor(Math.random() * Date.now())).toString()
    this.todos.push(this.newTodo)
    console.log(this.newTodo)

    // reset new todo because of data binding
    this.newTodo = new ToDo
  }

  deleteToDo(todoItem: ToDo) {
    let index = this.todos.findIndex(x => x.id === todoItem.id)
    this.todos.splice(index, 1)
  }

  addNewTag() {
    if(this.newTag !== '') {
      this.tagOptions.push(this.newTag)
      this.newTag = ''
    }
  }

  async fetchData() {
    const url = 'https://gist.githubusercontent.com/siposm/86860e30a000a5dca4b0855f7644bcf2/raw/39c5c3947ee5469532bd7d6ddea6b54e58acd3c0/todos.json'
    let todoObjects = (await (await fetch(url)).json()).todos

    // use this to have ToDo objects instead of {} objects
    todoObjects.map((x: any) => {
      let t = new ToDo()
      t.id = x.id
      t.text = x.text
      t.type = x.type
      t.tags = x.tags

      this.todos.push(t)
    })

    console.log(this.todos)
  }
}
