

import { createTodo } from "./logic/todo.js";
import {createApp} from "./logic/app.js";
import { saveProjects } from "./logic/storage.js";
import { renderProjects, renderTodos} from "./logic/dom.js";



const app = createApp();

// state
let activeProject = app.getProjectByName("Inbox");

function handleProjectClick(project) {
  activeProject = project;
   renderProjects(app.getProjects(), handleProjectClick, activeProject);
  renderTodos(activeProject);
}

document.getElementById("add-project").addEventListener("click", () => {
  const input = document.getElementById("project-input");
  const name = input.value.trim();

  if (!name) return;

  const project = app.addProject(name);
  activeProject = project;

  renderProjects(app.getProjects(), handleProjectClick, activeProject);
  renderTodos(activeProject);

  input.value = "";
});


// initial render
renderProjects(app.getProjects(), handleProjectClick, activeProject);
renderTodos(activeProject);




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