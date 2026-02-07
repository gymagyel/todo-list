import { createProject } from "./project.js";

function createApp() {
  const projects = [];

  // default project
  const inbox = createProject("Inbox");
  projects.push(inbox);

  function getProjects() {
    return projects;
  }

  function addProject(name) {
    const project = createProject(name);
    projects.push(project);
    return project;
  }

  function getProjectByName(name) {
    return projects.find(project => project.name === name);
  }

  return {
    getProjects,
    addProject,
    getProjectByName,
  };
}

export { createApp };
