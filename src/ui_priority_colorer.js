export default class PriorityColorer {
    priorityClassAssigner(task) {
        // find taskRow
        let t_titleNoSpaces = task.title.replaceAll(' ', '_');
        let taskRow = document.querySelector(`#task_${t_titleNoSpaces}`);

        // find the correct td
        let priorityCell = taskRow.children[0];

        // remove any previous classes
        priorityCell.classList.remove('highPriority');
        priorityCell.classList.remove('mediumPriority');
        priorityCell.classList.remove('lowPriority');

        // assign new class
        switch (priorityCell.textContent) {
            case '1':
                priorityCell.classList.add('lowPriority');
                break;
            case '2':
                priorityCell.classList.add('mediumPriority');
                break;
            case '3':
                priorityCell.classList.add('highPriority');
                break;
        }
    }
}