// importing
import ProjectButtonOperator from './ui_project_button_opr';
import ProjectCreator from './sm_project_creator';
import TaskCreator from './sm_task_creator';
import RowCreator from './ui_row_creator';
import TaskRowCreator from './ui_task_row_creator';
import PriorityColorer from './ui_priority_colorer';
import BackgroundDrawer from './ui_bg_drawer';
import DialogMaker from './ui_dialog_maker';
import Assigner from './sm_task_assigner';
import './styles.css';

// initialize instances
let projectButtonOperator = new ProjectButtonOperator();
let projectCreator = new ProjectCreator();
let taskCreator = new TaskCreator();
let rowCreator = new RowCreator();
let taskRowCreator = new TaskRowCreator();
let priorityColorer = new PriorityColorer();
let backgroundDrawer = new BackgroundDrawer();
let dialogMaker = new DialogMaker();
let assigner = new Assigner();

// testing
dialogMaker.createProjectDialog();
let projectButton = document.querySelector('#btn_createNewProject');
projectButton.addEventListener('click', projectButtonOperator.createNewProjectWithDialog);

// retrieving localStorage for projects
let pastProjects = localStorage.projects;
let pastProjectsArray = pastProjects ? pastProjects.split('|') : [];
let projectObjectsArray = [];
for (let i = 0; i < pastProjectsArray.length; i++) {
    let retrievedObject = JSON.parse(pastProjectsArray[i]);
    let newProjectObject = projectCreator.newProject(retrievedObject.title);
    rowCreator.makeProjectRow(newProjectObject);
    rowCreator.makeFormRow(newProjectObject);
    projectObjectsArray.push(newProjectObject);
}
if (pastProjectsArray.length == 0) {
    // draw background
    backgroundDrawer.drawBackground();
}

// retrieve localStorage for tasks
let pastTasks = localStorage.tasks;
let pastTasksArray = pastTasks ? pastTasks.split('|') : [];
if (pastTasksArray.length > 0) {
    for (let i = 0; i < pastTasksArray.length; i++) {
        let retrievedTaskObject = JSON.parse(pastTasksArray[i]);
        let newTaskObject = taskCreator.newTask(retrievedTaskObject.title, retrievedTaskObject.description, retrievedTaskObject.dueDate, retrievedTaskObject.priority, retrievedTaskObject.isComplete, retrievedTaskObject.partOfProject);
        let correctProject = projectObjectsArray.find(i => i.title == newTaskObject.partOfProject);
        taskRowCreator.makeTaskRow(newTaskObject, correctProject);
        assigner.assignTask(correctProject, newTaskObject);
        priorityColorer.priorityClassAssigner(newTaskObject);
        if (newTaskObject.isComplete == true) {
            let t_titleNoSpaces = newTaskObject.title.replaceAll(' ', '_');
            let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);            
            taskRow.classList.add('completedTask');
        }
    }
}