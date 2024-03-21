export default class Task {
    constructor(title, description, dueDate, priority, partOfProject) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.isComplete = false;
        this.daysLeft = null;
        this.stringified = '';
        this.partOfProject = partOfProject;
    }
}