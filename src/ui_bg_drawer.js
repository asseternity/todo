import arrow from './arrow.png';

export default class BackgroundDrawer  {
    drawBackground() {
        // find tasksWindow
        let tasksWindow = document.querySelector('#tasksWindow');

        // create a div for the drawing
        let backgroundContainer = document.createElement('div');
        backgroundContainer.classList.add('backgroundContainer');

        // create elements of backgroundContainer
        let backgroundImage = document.createElement('img');
        backgroundImage.setAttribute(`src`, `${arrow}`);
        backgroundImage.classList.add('backgroundImage');

        // append things to things
        backgroundContainer.appendChild(backgroundImage);
        tasksWindow.appendChild(backgroundContainer);
    }
    removeBackground() {

    }

}