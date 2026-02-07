

import { createTodo } from "./logic/todo.js";
import {createApp} from "./logic/app.js";
import { saveProjects } from "./logic/storage.js";



const app = createApp();

const inbox = app.getProjectByName("Inbox");
if (inbox.todos.length === 0) {
  const todo = createTodo(
    "Persistence works",
    "This todo should survive refresh",
    "2026-02-25",
    "high"
  );
const todo1 = createTodo(
  "App controller",
  "Understand how the app manages projects",
  "2026-02-18",
  "high"
);
  inbox.addTodo(todo);
  saveProjects(app.getProjects());
}




console.log(app.getProjects());