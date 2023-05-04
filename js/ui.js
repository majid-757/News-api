class UI {

    // show any message in html
    printMassage(message, className) {
        // create div tag
        const div = document.createElement('div');
        // append text message to the div
        div.appendChild(document.createTextNode(message));
        // append class Name to the tag
        div.className = className
        document.querySelector('#message').appendChild(div);
        
        // remove message after 3second
        setTimeout(() => {
            this.removeMassage()
        }, 2000);
    }

    removeMassage() {
        const alert = document.querySelector('.alert');
        if (alert) {
            alert.remove()
        }
    }
    
}


