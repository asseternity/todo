import RowCreator from "./ui_row_creator";
import ProjectCreator from "./sm_project_creator";
import DialogMaker from "./ui_dialog_maker";

let projectCreator = new ProjectCreator();
let rowCreator = new RowCreator();
let dialogMaker = new DialogMaker();

export default class ProjectButtonOperator {
    createNewProjectWithUI() {
        let projectTitle = window.prompt("Please input the name of the new project.");
        let project = projectCreator.newProject(projectTitle);
        rowCreator.makeProjectRow(project);
        rowCreator.makeFormRow(project);

        // localStorage
        let existingProjects;
        if (localStorage.projects) {
             existingProjects = localStorage.projects;
             localStorage.projects = existingProjects + '|' + JSON.stringify(project);
        } else {
            localStorage.projects = JSON.stringify(project);
        }
    }
    createNewProjectWithDialog() {
        // make a popup div
        dialogMaker.showProjectDialog();

        // gather data
        let project;
        let form = document.querySelector(`#projectName`);

        // defining function
        function clickHandler() {
            let projectTitle = form.value;
            project = projectCreator.newProject(projectTitle);
            console.log(projectTitle);
            let bg = document.querySelector('.backgroundContainer');
            if (bg !== null) {
                bg.style.visibility = 'hidden';
            }
            rowCreator.makeProjectRow(project);
            rowCreator.makeFormRow(project);

            // localStorage
            let existingProjects;
            if (localStorage.projects) {
                existingProjects = localStorage.projects;
                localStorage.projects = existingProjects + '|' + JSON.stringify(project);
            } else {
                localStorage.projects = JSON.stringify(project);
            }

            dialogMaker.hideProjectDialog();
            button.removeEventListener('click', clickHandler);
        }
        
        // events
        let button = document.querySelector('#popup_project_button');
        button.addEventListener('click', clickHandler);
    }
}