import Project from './class_project';

export default class ProjectCreator {
    newProject(title) {
        return new Project(title);
    }
    editProject(project, newTitle) {
        project.title = newTitle;
    }
}