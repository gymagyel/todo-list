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
function renderTodos(project, onToggleTodo) {
  const container = document.getElementById("todos");
  container.innerHTML = "";

  project.todos.forEach((todo, index) => {
    const wrapper = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"
    checkbox.checked = todo.completed; 

    checkbox.addEventListener("change", () => {
      onToggleTodo(index);

    });
    const text = document.createElement("span");
text.textContent = todo.title;

   wrapper.appendChild(checkbox);
    wrapper.appendChild(text);

      container.appendChild(wrapper);

  });
}

export { renderProjects, renderTodos };
