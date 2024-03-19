import TaskCreator from "./sm_task_creator";
import TaskRowCreator from "./ui_task_row_creator";

let taskCreator = new TaskCreator();
let taskRowCreator = new TaskRowCreator();

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
        
        // reset data
        formRow.querySelector(`input[name="priorityInput"]`).value = '';
        formRow.querySelector(`input[name="titleInput"]`).value = '';
        formRow.querySelector(`input[name="descriptionInput"]`).value = '';
        formRow.querySelector(`input[name="dueDateInput"]`).value = '';
        
        // create task and display it
        let task = taskCreator.newTask(title, description, dueDate, priority);
        taskRowCreator.makeTaskRow(task, project);
    }
}