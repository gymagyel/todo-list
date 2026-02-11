import "./style.css";
import { createTodo } from "./logic/todo.js";
import {createApp} from "./logic/app.js";
import { saveProjects } from "./logic/storage.js";
import { renderProjects, renderTodos} from "./logic/dom.js";


let hideCompleted = false;
document
  .getElementById("hide-completed")
  .addEventListener("change", (e) => {
    hideCompleted = e.target.checked;
    renderTodos(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);
  });


const app = createApp();

// state
let activeProject = app.getProjectByName("Inbox");

function handleProjectClick(project) {
  activeProject = project;
   renderProjects(app.getProjects(), handleProjectClick, activeProject, handleDeleteProject);
renderTodos(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);

}
function handleToggleTodo(todoIndex) {
  const todo = activeProject.todos[todoIndex];
  todo.completed = !todo.completed;

  saveProjects(app.getProjects());
renderTodos(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);
}

function handleDeleteProject(projectToDelete) {
  app.removeProject(projectToDelete);

  // if active project was deleted → switch to Inbox
  if (activeProject === projectToDelete) {
    activeProject = app.getProjectByName("Inbox");
  }

  saveProjects(app.getProjects());
  renderProjects(app.getProjects(), handleProjectClick, activeProject, handleDeleteProject);
renderTodos(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);}


function handleDeleteTodo(todoIndex) {
  activeProject.todos.splice(todoIndex,1);

  saveProjects(app.getProjects());
renderTodos(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);
}

document.getElementById("add-project").addEventListener("click", () => {
  const input = document.getElementById("project-input");
  const name = input.value.trim();

  if (!name) return;

  const project = app.addProject(name);
  activeProject = project;

  saveProjects(app.getProjects());

  renderProjects(
    app.getProjects(),
    handleProjectClick,
    activeProject,
    handleDeleteProject
  );

renderTodos(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);
  input.value = "";
});

function handleEditTodo(todoIndex, newDescription, newDueDate) {

    
  const todo = activeProject.todos[todoIndex];

  todo.description = newDescription;
  todo.dueDate = newDueDate;

  saveProjects(app.getProjects());
renderTodos(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);}

 
document.getElementById("add-todo").addEventListener("click", () => {
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

  renderProjects(app.getProjects(), handleProjectClick, activeProject, handleDeleteProject);
renderTodos(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);

titleInput.value = "";
descInput.value = "";
dateInput.value = "";
});
document
  .getElementById("project-input")
  .addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      document.getElementById("add-project").click();
    }
  });

document
  .getElementById("todo-input")
  .addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      document.getElementById("add-todo").click();
    }
  });


// initial render
renderProjects(app.getProjects(), handleProjectClick, activeProject, handleDeleteProject);
renderTodos(activeProject, handleToggleTodo, handleDeleteTodo, hideCompleted, handleEditTodo);



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