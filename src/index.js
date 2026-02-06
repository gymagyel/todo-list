

import { createTodo } from "./logic/todo.js";
import { createProject } from "./logic/project.js";

const inbox = createProject("Inbox");


const todo1 = createTodo(
  "Learn Webpack",
  "Understand how bundling works",
  "2026-02-10",
  "high"
);

inbox.addTodo(todo1);

console.log("After adding:", inbox);

inbox.removeTodo(0);

console.log("After removing:", inbox);


