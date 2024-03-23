import TaskCreator from "./sm_task_creator";
import TaskRowCreator from "./ui_task_row_creator";
import PriorityColorer from "./ui_priority_colorer";
import Assigner from "./sm_task_assigner";

let taskCreator = new TaskCreator();
let taskRowCreator = new TaskRowCreator();
let priorityColorer = new PriorityColorer();
let assigner = new Assigner();

export default class TaskButtonOperator {
    createNewTaskWithinProject(project) {
        // find correct project by formRow ID, under each project
        let p_titleNoSpaces = project.title.replaceAll(' ', '_');
        let formRow = document.querySelector(`#form_${p_titleNoSpaces}`);

        // gather data
        let priority = formRow.querySelector(`input[name="priorityInput"]`).value;
        let title = formRow.querySelector(`input[name="titleInput"]`).value;
        let description = formRow.querySelector(`input[name="descriptionInput"]`).value;
        let dueDate = formRow.querySelector(`input[name="dueDateInput"]`).value;

        // limits checking
        let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
        let titleContainsSpecialCharacters = specialCharacters.test(title);
        let pastTasks = localStorage.tasks;
        let pastTasksArray = pastTasks ? pastTasks.split('|') : [];
        let titleTaken = false;
        for (let i = 0; i < pastTasksArray.length; i++) {
            let retrievedTaskObject = JSON.parse(pastTasksArray[i]);
            if (title == retrievedTaskObject.title) {
                titleTaken = true;
                }
            }
        if (titleTaken) {
            alert('Cannot have two tasks with the same title.');
        } else if (title == null || title == '' || title.length > 25) {
            alert('The new task must have a name under 25 characters.');
        } else if (priority == null || priority == '') {
            alert('Please assign a task priority.');
        } else if (titleContainsSpecialCharacters) {
            alert('Task name may only contain letters, numbers and spaces.');
        } else if (priority < 1 || priority > 3) {
            alert('Priority level must be set between 1 and 3.');
        } else if (description.length > 65) {
            alert('The description must be under 65 characters.')
        } else {        
            // reset data
            formRow.querySelector(`input[name="priorityInput"]`).value = '';
            formRow.querySelector(`input[name="titleInput"]`).value = '';
            formRow.querySelector(`input[name="descriptionInput"]`).value = '';
            formRow.querySelector(`input[name="dueDateInput"]`).value = '';
            
            // create task and display it
            let correctProject = project.title;
            let task = taskCreator.newTask(title, description, dueDate, priority, false, correctProject);
            taskRowCreator.makeTaskRow(task, project);

            // assign color to priority column
            priorityColorer.priorityClassAssigner(task);

            // assign task to project
            assigner.assignTask(project, task);

            // localStorage
            let existingTasks;
            if (localStorage.tasks) {
                existingTasks = localStorage.tasks;
                localStorage.tasks = existingTasks + '|' + JSON.stringify(task);
            } else {
                localStorage.tasks = JSON.stringify(task);
            }
        }
    }
}