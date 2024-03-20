import TooltipOperator from "./ui_tooltip_operator";
let tooltipOperator = new TooltipOperator();

export default class TaskCompleter {
    completeTask(task) {
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
        taskRow.classList.add('completedTask');
        task.isComplete = true;
        let buttonsCell = taskRow.children[taskRow.children.length - 1];
        buttonsCell.removeChild(buttonsCell.children[1]);

        // add a "not done" button
        let notDoneButton = document.createElement('button');
        notDoneButton.textContent = '✗';
        buttonsCell.appendChild(notDoneButton);
        notDoneButton.addEventListener('click', () => this.unCompleteTask(task));
    }
    unCompleteTask(task) {
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
        taskRow.classList.remove('completedTask');
        task.isComplete = false;
        let buttonsCell = taskRow.children[taskRow.children.length - 1];
        buttonsCell.removeChild(buttonsCell.children[1]);

        // add a "done" button
        let doneButton = document.createElement('button');
        doneButton.textContent = '✓';
        buttonsCell.appendChild(doneButton);
        doneButton.addEventListener('click', () => this.completeTask(task));

        // Call tooltip makers
        tooltipOperator.tooltipForComplete(task);
    }
}