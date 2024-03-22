export default class Task {
    constructor(title, description, dueDate, priority, isComplete, partOfProject) {
        this.title = title,
        this.description = description,
        this.dueDate = dueDate,
        this.priority = priority,
        this.isComplete = isComplete;
        this.daysLeft = null;
        this.partOfProject = partOfProject;
    }
}