function renderProjects(projects, onProjectClick, activeProject) {
  const container = document.getElementById("projects");
  container.innerHTML = "";

  projects.forEach(project => {
    const div = document.createElement("div");
    div.textContent = project.name;
   div.style.cursor = "pointer";

   if (project === activeProject) {
      div.style.fontWeight = "bold";
    }

    div.addEventListener("click", () => {
      onProjectClick(project);
    }); 
    
    container.appendChild(div);
  });
}
function renderTodos(project) {
  const container = document.getElementById("todos");
  container.innerHTML = "";

  project.todos.forEach(todo => {
    const div = document.createElement("div");
    div.textContent = `${todo.title} (${todo.priority})`;
    container.appendChild(div);
  });
}

export { renderProjects, renderTodos };
