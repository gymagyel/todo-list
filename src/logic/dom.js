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
function renderTodos(project, onToggleTodo, onDeleteTodo) {
  const container = document.getElementById("todos");
  container.innerHTML = "";

    const activeTodos = project.todos
    .map((todo, index) => ({ todo, index }))
    .filter(item => !item.todo.completed);

  const completedTodos = project.todos
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
    const text = document.createElement("span");
text.textContent = todo.title;

if (todo.completed) {
  text.style.textDecoration = "line-through";
  text.style.color = "#888"
}

  const deleteBtn = document.createElement("button");
deleteBtn.textContent = "✕";

deleteBtn.addEventListener("click", () => {
  onDeleteTodo(index);
});

   wrapper.appendChild(checkbox);
    wrapper.appendChild(text);
    wrapper.appendChild(deleteBtn);


      container.appendChild(wrapper);

  });
}

export { renderProjects, renderTodos };
