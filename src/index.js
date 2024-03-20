// importing
import ProjectButtonOperator from './ui_project_button_opr';
import './styles.css';

// initialize instances
let projectButtonOperator = new ProjectButtonOperator();

// testing
let projectButton = document.querySelector('#btn_createNewProject');
projectButton.addEventListener('click', projectButtonOperator.createNewProjectWithUI);

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

    // remaining:
    // limit: max characters, special characters, task name not empty
    // DueDate: external date format library and replace my dueDate inputs
    // new project creation window
    // host on pages

    // priority --- not text but selection?
    // nav buttons --- only show completed / show all / only show high priority
    // persistency
    // responsive
    // block editing a task if it's completed -- remove edit button
    // delete tasks
    // delete projects (and all tasks thereof! --- finally call assigner when making tasks!)
    // edit project
    // sort by priority
    // readme