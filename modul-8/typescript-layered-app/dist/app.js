import { ToDoLogic } from "./logic.js";
const ctr = new ToDoLogic();
window.addTodo = ctr.readTodo.bind(ctr);
ctr.displayData();
