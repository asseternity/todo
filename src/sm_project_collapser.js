export default class ProjectCollapser {
    collapseProject(project) {
        // initialize table
        let table = document.querySelector('table');

        // maintaining a reference to the DOM elements to be removed
        let ghostRows = [];

        // loop through the project's tasks
        if (project.collapsed == false && project.tasks.length > 0) {
            for (let i = 0; i < project.tasks.length; i++) {
                let title = project.tasks[i].title;
                let t_titleNoSpaces = title.replaceAll(' ', '_');
                let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
                ghostRows.push(taskRow);
                table.removeChild(taskRow);
            }
            project.collapsed = true;                
        }

        // find the projectRow
        let p_titleNoSpaces = project.title.replaceAll(' ', '_');
        let projectRow = document.querySelector(`#row_${p_titleNoSpaces}`);

        // find the buttonCell
        let buttonCell = projectRow.children[1];

        // find the collapseButton
        let collapseButton = buttonCell.children[1];

        // remove the collapse button
        buttonCell.removeChild(collapseButton);

        // new button
        let unCollapseButton = document.createElement('button');
        unCollapseButton.textContent = `⮝`;
        buttonCell.appendChild(unCollapseButton);

        // uncollapse event called
        unCollapseButton.addEventListener('click', () => this.unCollapseProject(project, ghostRows));
    }
    unCollapseProject(project, ghostRowArray) {
        // find the projectRow
        let p_titleNoSpaces = project.title.replaceAll(' ', '_');
        let projectRow = document.querySelector(`#row_${p_titleNoSpaces}`);

        if (project.collapsed == true && ghostRowArray.length > 0) {
            for (let i = 0; i < ghostRowArray.length > 0; i++) {
                projectRow.insertAdjacentElement('afterend', ghostRowArray[i]);
            }
            project.collapsed = false;                
        }

        // loop through the project's tasks
        // if (project.collapsed == true && project.tasks.length > 0) {
        //     for (let i = 0; i < project.tasks.length; i++) {
        //         let title = project.tasks[i].title;
        //         let t_titleNoSpaces = title.replaceAll(' ', '_');
        //         let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);
        //         console.log(taskRow);
        //         projectRow.insertAdjacentElement('afterend', taskRow);
        //     }
        //     project.collapsed = false;                
        // }

        // find the buttonCell
        let buttonCell = projectRow.children[1];

        // find the collapseButton
        let unCollapseButton = buttonCell.children[1];

        // remove the collapse button
        buttonCell.removeChild(unCollapseButton);

        // new button ⮝
        let collapseButton = document.createElement('button');
        collapseButton.textContent = `⮟`;
        buttonCell.appendChild(collapseButton);

        // collapse event called
        collapseButton.addEventListener('click', () => this.collapseProject(project));
    }
}