export default class ProjectDeleter {
    deleteProject(project) {
        // find the projectRow
        let p_titleNoSpaces = project.title.replaceAll(' ', '_');
        let projectRow = document.querySelector(`#row_${p_titleNoSpaces}`);

        // initialize table
        let table = document.querySelector('table');

        // remove project row
        table.removeChild(projectRow);

        // save project title
        let myProjectTitle = project.title;

        console.log('Here are the project tasks:');
        console.log(project.tasks);

        // loop through the project's tasks
        for (let i = 0; i < project.tasks.length; i++) {
            let title = project.tasks[i].title;
            let t_titleNoSpaces = title.replaceAll(' ', '_');
            let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
            table.removeChild(taskRow);

            // remove the task from localStorage
            let localTasksArray = localStorage.tasks.split('|');
            for (let i = 0; i < localTasksArray.length; i++) {
                let retrievedTaskObject = JSON.parse(localTasksArray[i]);
                if (retrievedTaskObject.title == title) {
                    localTasksArray.splice(i, 1);
                    break;
                }
            }
            localStorage.tasks = localTasksArray.join('|');
        }
        // remove the project from localStorae
        let localProjectsArray = localStorage.projects.split('|');
        for (let i = 0; i < localProjectsArray.length; i++) {
            let retrievedProjectObject = JSON.parse(localProjectsArray[i]);
            if (retrievedProjectObject.title == myProjectTitle) {
                localProjectsArray.splice(i, 1);
                break;
            }
        }
        localStorage.projects = localProjectsArray.join('|');

        // Remove relevant formRow
        let formRow = document.querySelector(`#form_${p_titleNoSpaces}`);
        table.removeChild(formRow);
    }
}