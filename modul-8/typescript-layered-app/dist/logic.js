import { ToDo } from './todo.js';
import { Renderer } from './renderer.js';
export class ToDoLogic {
    todos = [];
    renderer;
    constructor() {
        this.renderer = new Renderer();
        this.todos.push(Object.assign(new ToDo(), {
            name: 'Buy milk',
            description: 'Buy milk for the Friday cooking.'
        }));
        this.todos.push(Object.assign(new ToDo(), {
            name: 'Do workout',
            description: 'Go to the gym with Bob and Fred.'
        }));
        this.todos.push(Object.assign(new ToDo(), {
            name: 'Do yoga',
            description: 'Yoga session with Samantha at 10pm.'
        }));
    }
    displayData() {
        this.renderer.render(this.todos);
    }
    readTodo() {
        let inputName = document.querySelector('#name');
        let inputDesc = document.querySelector('#description');
        let todo = new ToDo();
        todo.name = inputName.value;
        todo.description = inputDesc.value;
        this.create(todo);
        inputName.value = '';
        inputDesc.value = '';
        this.displayData();
    }
    getAll() {
        return this.todos;
    }
    getById(id) {
        return this.todos.find(todo => todo.id === id);
    }
    create(todo) {
        this.todos.push(todo);
    }
    update(id, updatedTodo) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            this.todos[index] = updatedTodo;
            return true;
        }
        return false;
    }
    delete(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
            return true;
        }
        return false;
    }
}
