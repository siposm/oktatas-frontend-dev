import { ToDoLogic } from "./logic"

const ctr: ToDoLogic = new ToDoLogic();
(window as any).addTodo = ctr.readTodo.bind(ctr);
ctr.displayData();
