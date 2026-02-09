
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
    renderTodos(activeProject, handleToggleTodo);

}
function handleToggleTodo(todoIndex) {
  const todo = activeProject.todos[todoIndex];
  todo.completed = !todo.completed;

  saveProjects(app.getProjects());
  renderTodos(activeProject, handleToggleTodo);
}

document.getElementById("add-project").addEventListener("click", () => {
  const input = document.getElementById("project-input");
  const name = input.value.trim();

  if (!name) return;

  const project = app.addProject(name);
  activeProject = project;

  renderProjects(app.getProjects(), handleProjectClick, activeProject);
    renderTodos(activeProject, handleToggleTodo);



  input.value = "";
});

document.getElementById("add-todo").addEventListener("click", () => {
  

  const input = document.getElementById("todo-input");
  const title = input.value.trim();

  if (!title) return;

  const todo = createTodo(title);

  activeProject.addTodo(todo);
  saveProjects(app.getProjects());
  renderTodos(activeProject, handleToggleTodo);

  input.value = "";
});




// initial render
renderProjects(app.getProjects(), handleProjectClick, activeProject);
renderTodos(activeProject, handleToggleTodo);




const inbox = app.getProjectByName("Inbox");
if (inbox.todos.length === 0) {
  const todo = createTodo(
    "Persistence works");

  inbox.addTodo(todo);
  saveProjects(app.getProjects());
}




console.log(app.getProjects());