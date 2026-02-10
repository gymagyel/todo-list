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
function renderTodos(project, onToggleTodo, onDeleteTodo, hideCompleted) {
  const container = document.getElementById("todos");
  container.innerHTML = "";
 

    const activeTodos = project.todos
    .map((todo, index) => ({ todo, index }))
    .filter(item => !item.todo.completed);

  const completedTodos = hideCompleted
    ? []
  : project.todos
    .map((todo, index) => ({ todo, index }))
    .filter(item => item.todo.completed);



  [...activeTodos, ...completedTodos].forEach(({todo, index}) => {
    const wrapper = document.createElement("div");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"
    checkbox.checked = todo.completed; 

    checkbox.addEventListener("change", () => {
      onToggleTodo(index);

    });
    const title = document.createElement("span");
title.textContent = todo.title;
 title.style.cursor = "pointer";
    title.style.marginLeft = "6px";

if (todo.completed) {
  title.style.textDecoration = "line-through";
  title.style.color = "#888"
}

  const deleteBtn = document.createElement("button");
deleteBtn.textContent = "✕";

deleteBtn.addEventListener("click", () => {
  onDeleteTodo(index);
});


  // 🔽 DETAILS (hidden by default)
    const details = document.createElement("div");
    details.style.display = "none";
    details.style.marginLeft = "24px";

    details.innerHTML = `
      <div><strong>Description:</strong> ${todo.description || "-"}</div>
      <div><strong>Due date:</strong> ${todo.dueDate || "-"}</div>
    `;

    // 🔁 toggle details
    title.addEventListener("click", () => {
      details.style.display =
        details.style.display === "none" ? "block" : "none";
    });


   wrapper.appendChild(checkbox);
    wrapper.appendChild(title);
    wrapper.appendChild(deleteBtn);
    wrapper.appendChild(details);


      container.appendChild(wrapper);

  });
}

export { renderProjects, renderTodos };
