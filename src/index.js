// importing
import ProjectButtonOperator from './ui_project_button_opr';
import ProjectCreator from './sm_project_creator';
import TaskCreator from './sm_task_creator';
import RowCreator from './ui_row_creator';
import TaskRowCreator from './ui_task_row_creator';
import Assigner from './sm_task_assigner';
import './styles.css';

// initialize instances
let projectButtonOperator = new ProjectButtonOperator();
let projectCreator = new ProjectCreator();
let taskCreator = new TaskCreator();
let rowCreator = new RowCreator();
let taskRowCreator = new TaskRowCreator();
let assigner = new Assigner();

// testing
let projectButton = document.querySelector('#btn_createNewProject');
projectButton.addEventListener('click', projectButtonOperator.createNewProjectWithUI);

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

// retrieve localStorage for tasks
let pastTasks = localStorage.tasks;
let pastTasksArray = pastTasks ? pastTasks.split('|') : [];
if (pastTasksArray.length > 0) {
    for (let i = 0; i < pastProjectsArray.length; i++) {
        let retrievedTaskObject = JSON.parse(pastTasksArray[i]);
        let newTaskObject = taskCreator.newTask(retrievedTaskObject.title, retrievedTaskObject.description, retrievedTaskObject.dueDate, retrievedTaskObject.priority, retrievedTaskObject.partOfProject);
        let correctProject = projectObjectsArray.find(i => i.title == newTaskObject.partOfProject);
        taskRowCreator.makeTaskRow(newTaskObject, correctProject);
    }    
}

// To Do
    // A button "Create New Project" is on the **HEADER**
    // When you click it, it calls the project creator
    // (you name a project and a line shows up, LIKE "HIGH" in toodledo)
    // but also calls the DOM table maker function! [MAKE IT SEPARATE --- ROW CREATOR or something]
    // Under the "HIGH" line, one row -- light green -- with a submit form "add new task" and forms in the table  
    // this form calls the taskCreator function --- to this project
    // to the right of the TASK ROW --- edit task and complete task buttons!

    // SO, modules to make:
    // 1) rowCreator - new method
    // creates a row of forms
    // 2) CreateNewProject button operator
    // calls projectCreator
    // calls rowCreator.projectRow
    // calls rowCreator.formRow
    // 3) CreateNewTask submission forms operator
    // gathers data
    // calls taskCreator
    // calls rowCreator.taskRow
    // 4) empty values of inputs after task is added
    // 5) edit task ui
    // 6) complete task ui
    // table headers
    // font
    // colors
    // buttons style
    // logo - header
    // no sliding when editing task
    // column width
    // tool tips
    // host on pages
    // inputs:
                // inputs are in:
                    // row_creator
                    // task_editor
                // input readers are in:
                    // task_button_operator
                    // task_editor
        // revamp inputs of dueDate
        // revamp inputs of priority
        // priority --- different colors of taskRow depending on priority 
        // center priority
    // limit: max characters, special characters, task name not empty --- *THIS HAS TO BE HARDCODED WITH IFs BEFORE VALUES ARE SENT*
    // date-fns: you enter by when it is due, but what taskRow shows is --- *HOW MANY DAYS LEFT*
    // date-fns: hard code with IFs : what to do if date is unset or it is in the past.
    // date-fns: store daysLeft in task (for sorting later)
    // date-fins: incorporate new thing everywhere
    // bug - dueDate form doesn't disappear if it's incomplete
    // if you click edit task, the form should already have the existing date entered
    // call assigner when making tasks
    // re-assign task to project after complete or edit?

    // new tools:
        // persistency: using Web Storage API --- *THIS IS NOT A REMOTE API, it is a CLIENT-SIDE API!*
        // bugs:
            // editing tasks - changing name breaks the thing
            // editing tasks - changing not the first task in a project breaks the thing
            // completing and uncompleting tasks doesn't stay

    // easy old stuff:
        // add to limits -- cannot have two tasks with the same name (loop)
        // add text - Click on add project (hand-drawn arrow to the button)
        // new project creation window - dialog?
        // responsive - right now, everything is super small!
        // delete tasks
        // delete projects (and all tasks thereof)
        // edit project name button
        // nav buttons --- only show completed / show all / only show high priority
        // sort by priority
        // sort by date ( --- *MAYBE BUTTONS ON TABLE HEADERS!* )
        // only view a single project
        // expand a single todo to see/edit its details
        // readme