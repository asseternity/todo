import TaskCompleter from "./ui_task_completer";
import TooltipOperator from "./ui_tooltip_operator";

let taskCompleter = new TaskCompleter();
let tooltipOperator = new TooltipOperator();

export default class TaskEditor {
    editButtonOperator(task) {
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
        for (let i = 0; i < taskRow.children.length - 1; i++) {
            let cellText = taskRow.children[i].textContent;
            taskRow.children[i].textContent = '';
            let inputBox = document.createElement('input');
            inputBox.setAttribute('type', 'text');
            switch (i) {
                case 0:
                    inputBox.setAttribute('name', 'priorityInput');
                    break;
                case 1:
                    inputBox.setAttribute('name', 'titleInput');
                    break;
                case 2:
                    inputBox.setAttribute('name', 'descriptionInput');
                    break;
                case 3:
                    inputBox.setAttribute('name', 'dueDateInput');
                    break;
            }
            inputBox.value = cellText;
            taskRow.children[i].appendChild(inputBox);
        }
        // remove both buttons
        while(taskRow.children[taskRow.children.length - 1].children.length !== 0) { taskRow.children[taskRow.children.length - 1].removeChild(taskRow.children[taskRow.children.length - 1].children[0]); }
        // add a button that okays the changes
        let acceptButton = document.createElement('input');
        acceptButton.setAttribute('type', 'submit');
        acceptButton.setAttribute('value', 'Accept Changes');
        taskRow.children[taskRow.children.length - 1].appendChild(acceptButton);
        // which calls acceptChangesOperator
        acceptButton.addEventListener('click', () => this.acceptChangesOperator(task));
    }
    // acceptChangesOperator
    acceptChangesOperator(task) {
        // triggers on changes being accepted
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);

        // gather data
        let priority = taskRow.querySelector(`input[name="priorityInput"]`).value;
        let title = taskRow.querySelector(`input[name="titleInput"]`).value;
        let description = taskRow.querySelector(`input[name="descriptionInput"]`).value;
        let dueDate = taskRow.querySelector(`input[name="dueDateInput"]`).value;

        // change task around
        task.priority = priority;
        task.title = title;
        task.description = description;
        task.dueDate = dueDate;

        // re-establish the taskRow
        for (let i = 0; i < taskRow.children.length; i++) {
            taskRow.children[i].removeChild(taskRow.children[i].children[0]);
        }
        taskRow.children[0].textContent = task.priority;
        taskRow.children[1].textContent = task.title;
        taskRow.children[2].textContent = task.description;
        taskRow.children[3].textContent = task.dueDate;
        
        let new_t_titleNoSpaces = task.title.replaceAll(' ', '_');
        taskRow.id = `task_${new_t_titleNoSpaces}`;
        this.buttonsAdder(task);
    }
    buttonsAdder(task) {
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
        let buttonsCell = taskRow.children[taskRow.children.length - 1];

        let editButton = document.createElement('button');
        let completeButton = document.createElement('button');
        editButton.textContent = '✎';
        completeButton.textContent = '✓';
        buttonsCell.appendChild(editButton);
        buttonsCell.appendChild(completeButton);

        editButton.addEventListener('click', () => this.editButtonOperator(task));
        completeButton.addEventListener('click', () => taskCompleter.completeTask(task));

        // Call tooltip makers
        tooltipOperator.tooltipForEdit(task);
        tooltipOperator.tooltipForComplete(task);
    }
}