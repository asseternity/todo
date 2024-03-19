import TaskCreator from './sm_task_creator';
import ProjectCreator from './sm_project_creator';

export default class Assigner {
    assignTask(project, task) {
        project.tasks.push(task);
    }
}