import TaskButtonOperator from "./ui_task_button_opr";
import HeaderCreator from "./ui_header_creator";
import ProjectDeleter from "./sm_project_deleter";

let taskButtonOperator = new TaskButtonOperator();
let headerCreator = new HeaderCreator();
let projectDeleter = new ProjectDeleter();

export default class RowCreator {
    makeProjectRow(project) {
        let table = document.querySelector('table');
        if (table.children.length == 0) {
            headerCreator.makeHeaderCells();
        }
        let projectRow = document.createElement('tr');
        let projectData = document.createElement('td');
        projectData.setAttribute('colspan', 4);
        projectRow.classList.add('projectRow');
        projectData.textContent = project.title;
        table.appendChild(projectRow);
        projectRow.appendChild(projectData);

        // delete button
        let projectButtonCell = document.createElement('td');
        projectRow.appendChild(projectButtonCell);
        let deleteButton = document.createElement('button');
        deleteButton.textContent = `🗑`;
        projectButtonCell.appendChild(deleteButton);

        // deletion event listener
        deleteButton.addEventListener('click', () => projectDeleter.deleteProject(project));

        // Give ID
        let p_titleNoSpaces = project.title.replaceAll(' ', '_');
        projectRow.setAttribute('id', `row_${p_titleNoSpaces}`);
    }
    makeFormRow(project) {
        let table = document.querySelector('table');
        let formRow = document.createElement('tr');
        formRow.classList.add('formRow');
        let formRowPriority = document.createElement('td');
        let formRowTitle = document.createElement('td');
        let formRowDescription = document.createElement('td');
        let formRowDueDate = document.createElement('td');
        let formRowButtons = document.createElement('td');

        // Give ID
        let titleNoSpaces = project.title.replaceAll(' ', '_');
        formRow.setAttribute('id', `form_${titleNoSpaces}`);

        // Contents of formRow
        let priorityInput = document.createElement('input');
        priorityInput.setAttribute('type', 'number');
        priorityInput.setAttribute('min', 1);
        priorityInput.setAttribute('max', 3);
        priorityInput.setAttribute('name', 'priorityInput');
        formRowPriority.appendChild(priorityInput);
        
        let titleInput = document.createElement('input');
        titleInput.setAttribute('type', 'text');
        titleInput.setAttribute('name', 'titleInput');
        formRowTitle.appendChild(titleInput);
        
        let descriptionInput = document.createElement('input');
        descriptionInput.setAttribute('type', 'text');
        descriptionInput.setAttribute('name', 'descriptionInput');
        formRowDescription.appendChild(descriptionInput);
        
        let dueDateInput = document.createElement('input');
        dueDateInput.setAttribute('type', 'date');
        dueDateInput.setAttribute('name', 'dueDateInput');
        formRowDueDate.appendChild(dueDateInput);

        let submitInput = document.createElement('input');
        submitInput.setAttribute('type', 'submit');
        submitInput.setAttribute('value', 'Add New Task');
        submitInput.addEventListener('click', () => taskButtonOperator.createNewTaskWithinProject(project));
        formRowButtons.appendChild(submitInput);

        // appending columns
        formRow.appendChild(formRowPriority);
        formRow.appendChild(formRowTitle);
        formRow.appendChild(formRowDescription);
        formRow.appendChild(formRowDueDate);
        formRow.appendChild(formRowButtons);

        // Insert formRow after correct projectRow
        table.appendChild(formRow);

        return formRow;
    }
}