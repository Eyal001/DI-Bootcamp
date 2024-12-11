import TodoList from "./todo.mjs";

const myTodoList = new TodoList();

myTodoList.addTask("Finish the exercises of today");
myTodoList.addTask("Buy some food");
myTodoList.addTask("Clean the house");

myTodoList.markComplete(1);
myTodoList.markComplete(2);

myTodoList.listTask();
