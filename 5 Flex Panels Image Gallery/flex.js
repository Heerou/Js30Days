const panels = document.querySelectorAll('.panel');

function ToggleOpen() {

    //Add the class open
    this.classList.toggle('open');
}

function ToggleActive(e) {
    
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')) {

        this.classList.toggle('open-active');
    }
}

//Loops for the childs and when the event happens, runs the function
panels.forEach(panel => panel.addEventListener('click', ToggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', ToggleActive));