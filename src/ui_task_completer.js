import TooltipOperator from "./ui_tooltip_operator";
let tooltipOperator = new TooltipOperator();

export default class TaskCompleter {
    completeTask(task, project) {
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
        taskRow.classList.add('completedTask');
        task.isComplete = true;
        let buttonsCell = taskRow.children[taskRow.children.length - 1];
        buttonsCell.removeChild(buttonsCell.children[1]);

        // remove old task in localStorage
        let localTasksArray = localStorage.tasks.split('|');
        let oldTaskIndex;
        for (let i = 0; i < localTasksArray.length; i++) {
            let retrievedTaskObject = JSON.parse(localTasksArray[i]);
            if (retrievedTaskObject.title == task.title) {
                oldTaskIndex = i;
                localTasksArray.splice(i, 1);
                break;
            }
        }
        localStorage.tasks = localTasksArray.join('|');

        // insert task into localStorage
        task.stringified = JSON.stringify(task);
        let existingTasks;
        if (localStorage.tasks) {
            existingTasks = localStorage.tasks;
            localStorage.tasks = existingTasks + '|' + task.stringified;
        } else {
            localStorage.tasks = task.stringified;
        }

        // add a "not done" button
        let notDoneButton = document.createElement('button');
        notDoneButton.textContent = '✗';
        buttonsCell.appendChild(notDoneButton);
        notDoneButton.addEventListener('click', () => this.unCompleteTask(task, project));
    }
    unCompleteTask(task, project) {
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
        doneButton.addEventListener('click', () => this.completeTask(task, project));

        // Call tooltip makers
        tooltipOperator.tooltipForComplete(task);
    }
}