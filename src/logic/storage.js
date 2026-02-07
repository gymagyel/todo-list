import { createTodo } from "./todo.js";
import { createProject } from "./project.js";

const STORAGE_KEY = "todoAppData";

function saveProjects(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

function loadProjects() {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return null;
  }

  const parsedProjects = JSON.parse(data);

  return parsedProjects.map(projectData => {
    const project = createProject(projectData.name);

    projectData.todos.forEach(todoData => {
      const todo = createTodo(
        todoData.title,
        todoData.description,
        todoData.dueDate,
        todoData.priority
      );

      todo.completed = todoData.completed;
      project.addTodo(todo);
    });

    return project;
  });
}

export { saveProjects, loadProjects };
