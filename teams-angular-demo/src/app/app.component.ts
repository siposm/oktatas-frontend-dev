import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todos: Todo[] = []
	newTodo: Todo = new Todo()

	constructor() {
		this.todos.push(new Todo("kocsit kell mosni", false))
		this.todos.push(new Todo("ajándékokat kell venni", true))
		this.todos.push(new Todo("zh-ra tanulni"))
	}

	add(): void {
		this.todos.push(this.newTodo)
		this.newTodo = new Todo()
	}
}

export class Todo {
	content: string
	done: boolean
	constructor(content: string = "", done: boolean = false) {
		this.content = content
		this.done = done
	}
}
