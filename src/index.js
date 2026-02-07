

import { createTodo } from "./logic/todo.js";
import {createApp} from "./logic/app.js";
import { createProject } from "./logic/project.js";


const app = createApp();

const inbox = app.getProjectByName("Inbox");

const todo1 = createTodo(
  "App controller",
  "Understand how the app manages projects",
  "2026-02-18",
  "high"
);

inbox.addTodo(todo1);

const workProject = app.addProject("Work");

const todo2 = createTodo(
  "Finish report",
  "Prepare monthly report",
  "2026-02-20",
  "medium"
);

workProject.addTodo(todo2);

console.log(app.getProjects());