
function renderProjects(projects, onProjectClick, activeProject, onDeleteProject) {
  const container = document.getElementById("projects");
  container.innerHTML = "";

 


  projects.forEach(project => {
  const wrapper = document.createElement("div");

  const name = document.createElement("span");
  name.textContent = project.name;
  name.style.cursor = "pointer";

  if (project === activeProject) {
    name.style.fontWeight = "bold";
  }

  name.addEventListener("click", () => {
    onProjectClick(project);
  });

  wrapper.appendChild(name);

  // ❌ do NOT allow deleting Inbox
  if (project.name !== "Inbox") {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "✕";

    deleteBtn.addEventListener("click", () => {
      onDeleteProject(project);
    });

    wrapper.appendChild(deleteBtn);
  }

  container.appendChild(wrapper);
});


}
function renderTodos(project, onToggleTodo, onDeleteTodo, hideCompleted, onEditTodo) {
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

    const descInput = document.createElement("input");
descInput.value = todo.description || "";
descInput.placeholder = "Description";

const dateInput = document.createElement("input");
dateInput.type = "date";
dateInput.value = todo.dueDate || "";

const saveBtn = document.createElement("button");
saveBtn.textContent = "Save";

saveBtn.addEventListener("click" , () => {

  onEditTodo(index, descInput.value.trim(), dateInput.value);
});
function saveAndClose() {
  onEditTodo(index, descInput.value.trim(), dateInput.value);
  details.style.display = "none";
}

[descInput, dateInput].forEach(input => {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      saveAndClose();
    }

    if (e.key === "Escape") {
      details.style.display = "none";
    }
  });
});


details.appendChild(descInput);
details.appendChild(dateInput);
details.appendChild(saveBtn);

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
