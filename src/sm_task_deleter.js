export default class TaskDeleter {
    deleteTask(task) {
        // store title
        let oldTitle = task.title;

        // find taskRow
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);

        // find table
        let table = document.querySelector('table');

        // removeChild
        table.removeChild(taskRow);

        // remove old task in localStorage
        let localTasksArray = localStorage.tasks.split('|');
        for (let i = 0; i < localTasksArray.length; i++) {
            let retrievedTaskObject = JSON.parse(localTasksArray[i]);
            if (retrievedTaskObject.title == oldTitle) {
                localTasksArray.splice(i, 1);
                break;
            }
        }
        localStorage.tasks = localTasksArray.join('|');
    }
}