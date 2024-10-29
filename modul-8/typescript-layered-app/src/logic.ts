import { ToDo } from './todo'
import { Renderer } from './renderer'

export class ToDoLogic {

    private todos: ToDo[] = []
    private renderer: Renderer

    constructor() {
        this.renderer = new Renderer()

        this.todos.push(Object.assign(new ToDo(), {
            name: 'Buy milk',
            description: 'Buy milk for the Friday cooking.'
        }))
        this.todos.push(Object.assign(new ToDo(), {
            name: 'Do workout',
            description: 'Go to the gym with Bob and Fred.'
        }))
        this.todos.push(Object.assign(new ToDo(), {
            name: 'Do yoga',
            description: 'Yoga session with Samantha at 10pm.'
        }))
    }

    displayData(): void {
        this.renderer.render(this.todos)
    }

    readTodo(): void {
        let inputName: HTMLInputElement = document.querySelector('#name') as HTMLInputElement
        let inputDesc: HTMLInputElement = document.querySelector('#description') as HTMLInputElement
        let todo: ToDo = new ToDo()
        todo.name = inputName.value
        todo.description = inputDesc.value
        this.create(todo)

        inputName.value = ''
        inputDesc.value = ''

        this.displayData()
    }




    getAll(): ToDo[] {
        return this.todos
    }

    getById(id: string): ToDo | undefined {
        return this.todos.find(todo => todo.id === id)
    }

    create(todo: ToDo): void {
        this.todos.push(todo)
    }

    update(id: string, updatedTodo: ToDo): boolean {
        const index = this.todos.findIndex(todo => todo.id === id)
        if (index !== -1) {
            this.todos[index] = updatedTodo
            return true
        }
        return false
    }

    delete(id: string): boolean {
        const index = this.todos.findIndex(todo => todo.id === id)
        if (index !== -1) {
            this.todos.splice(index, 1)
            return true
        }
        return false
    }
}
