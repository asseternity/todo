export default class DialogMaker {
    createProjectDialog() {
        // create div
        let popup = document.createElement('div');

        // assign class
        popup.classList.add('popup_project');

        // append to taskWindow
        let tasksWindow = document.querySelector('#tasksWindow');
        tasksWindow.appendChild(popup);

        // hide by default
        popup.style.visibility = 'hidden';
            
        // text
        let text = document.createElement('p');
        text.textContent = "Please enter the name of your new project:"
        popup.appendChild(text);

        // form
        let form = document.createElement('input');
        form.type = 'text';
        form.name = 'projectName';
        form.id = 'projectName';
        popup.appendChild(form);

        // submit
        let button = document.createElement('input');
        button.type = 'submit';
        button.value = "Create";
        button.id = 'popup_project_button';
        popup.appendChild(button);
    }
    showProjectDialog() {
        let popup = document.querySelector('.popup_project');
        popup.style.visibility = 'visible';
    }
    hideProjectDialog() {
        let popup = document.querySelector('.popup_project');
        document.querySelector(`input[name="projectName"]`).value = ``;
        popup.style.visibility = 'hidden';
    }
}