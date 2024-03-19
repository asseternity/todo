import Task from './class_task';

export default class TaskCreator
{
    newTask(title, description, dueDate, priority) {
        return new Task(title, description, dueDate, priority)
    }
    editTask(task, newTitle, newDescription, newDueDate, newPriority) {
        task.title = newTitle;
        task.description = newDescription;
        task.dueDate = newDueDate;
        task.priority = newPriority;
    }
    completeTask(task) {
        task.isComplete = true;
    }
}