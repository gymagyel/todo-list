
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
renderTodos(activeProject, handleToggleTodo, handleDeleteTodo);

}
function handleToggleTodo(todoIndex) {
  const todo = activeProject.todos[todoIndex];
  todo.completed = !todo.completed;

  saveProjects(app.getProjects());
renderTodos(activeProject, handleToggleTodo, handleDeleteTodo);
}

function handleDeleteTodo(todoIndex) {
  activeProject.todos.splice(todoIndex,1);

  saveProjects(app.getProjects());
  renderTodos(activeProject,handleToggleTodo,handleDeleteTodo);
}

document.getElementById("add-project").addEventListener("click", () => {
 const titleInput = document.getElementById("todo-input");
const descInput = document.getElementById("todo-description");
const dateInput = document.getElementById("todo-date");

const title = titleInput.value.trim();
const description = descInput.value.trim();
const dueDate = dateInput.value;

if (!title) return;

const todo = createTodo(title, description, dueDate);

activeProject.addTodo(todo);
saveProjects(app.getProjects());

  renderProjects(app.getProjects(), handleProjectClick, activeProject);
renderTodos(activeProject, handleToggleTodo, handleDeleteTodo);



  
titleInput.value = "";
descInput.value = "";
dateInput.value = "";
});

document.getElementById("add-todo").addEventListener("click", () => {
  

  const input = document.getElementById("todo-input");
  const title = input.value.trim();

  if (!title) return;

  const todo = createTodo(title);

  activeProject.addTodo(todo);
  saveProjects(app.getProjects());
renderTodos(activeProject, handleToggleTodo, handleDeleteTodo);

  input.value = "";
});




// initial render
renderProjects(app.getProjects(), handleProjectClick, activeProject);
renderTodos(activeProject, handleToggleTodo, handleDeleteTodo);




const inbox = app.getProjectByName("Inbox");

if (inbox.todos.length === 0) {
  const todo = createTodo(
    "Test expand",
    "This description should be visible",
    "2026-03-01",
    "high"
  );
  inbox.addTodo(todo);
  saveProjects(app.getProjects());
}



console.log(app.getProjects());