import { createProject } from "./project.js";
import { loadProjects, saveProjects } from "./storage.js";
function createApp() {
  
   

const projects = loadProjects() ?? [];

if (projects.length === 0) {
  const inbox = createProject("Inbox");
  projects.push(inbox);
}
 

  function getProjects() {
    return projects;
  }

  function addProject(name) {
    const project = createProject(name);
    projects.push(project);
    saveProjects(projects);
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
