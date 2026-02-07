function renderProjects(projects) {
  const container = document.getElementById("projects");
  container.innerHTML = "";

  projects.forEach(project => {
    const div = document.createElement("div");
    div.textContent = project.name;
    container.appendChild(div);
  });
}

export { renderProjects };
