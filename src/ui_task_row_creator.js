import TaskEditor from './ui_task_editor';
import TaskCompleter from './ui_task_completer';
import TooltipOperator from './ui_tooltip_operator';

let taskEditor = new TaskEditor();
let taskCompleter = new TaskCompleter();
let tooltipOperator = new TooltipOperator();

export default class TaskRowCreator {
    makeTaskRow(task, project) {
        // Find the correct project row
        let p_titleNoSpaces = project.title.replaceAll(' ', '_');
        let projectRow = document.querySelector(`#row_${p_titleNoSpaces}`);

        // Create elements of the task row
        let taskRow = document.createElement('tr');
        taskRow.classList.add('taskRow');
        let taskRowPriority = document.createElement('td');
        let taskRowTitle = document.createElement('td');
        let taskRowDescription = document.createElement('td');
        let taskRowDueDate = document.createElement('td');
        let taskRowButtons = document.createElement('td');

        // Text contents of the elements
        taskRowPriority.textContent = task.priority;
        taskRowTitle.textContent = task.title;
        taskRowDescription.textContent = task.description;
        taskRowDueDate.textContent = task.dueDate;

        // Contents of taskRowButtons
        let editButton = document.createElement('button');
        let completeButton = document.createElement('button');
        editButton.textContent = '✎';
        completeButton.textContent = '✓';
        taskRowButtons.appendChild(editButton);
        taskRowButtons.appendChild(completeButton);

        // Append elements to taskRow
        taskRow.appendChild(taskRowPriority);
        taskRow.appendChild(taskRowTitle);
        taskRow.appendChild(taskRowDescription);
        taskRow.appendChild(taskRowDueDate);
        taskRow.appendChild(taskRowButtons);

        // Edit Tasks
        editButton.addEventListener('click', () => taskEditor.editButtonOperator(task));

        // Complete Tasks
        completeButton.addEventListener('click', () => taskCompleter.completeTask(task));

        // Insert taskRow after correct projectRow
        projectRow.insertAdjacentElement('afterend', taskRow);

        // give ID for editing purposes
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        taskRow.setAttribute(`id`, `task_${t_titleNoSpaces}`);

        // Call tooltip makers
        tooltipOperator.tooltipForEdit(task);
        tooltipOperator.tooltipForComplete(task);
    }
}