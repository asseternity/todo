import RowCreator from "./ui_row_creator";
import ProjectCreator from "./sm_project_creator";

let projectCreator = new ProjectCreator();
let rowCreator = new RowCreator();

export default class ProjectButtonOperator {
    createNewProjectWithUI() {
        let projectTitle = window.prompt("Please input the name of the new project.");
        let project = projectCreator.newProject(projectTitle);
        rowCreator.makeProjectRow(project);
        rowCreator.makeFormRow(project);

        // localStorage
        project.stringified = JSON.stringify(project);
        let existingProjects;
        if (localStorage.projects) {
             existingProjects = localStorage.projects;
             localStorage.projects = existingProjects + '|' + project.stringified;
        } else {
            localStorage.projects = project.stringified;
        }
    }
}