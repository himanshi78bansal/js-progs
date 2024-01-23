// Create a new button element. Give it a text "click me", background color of red & text color of white. 
// Insert the buton as the first element inside the body tag.

let el = document.createElement("button");
        el.innerText = "Click Me";
        el.style.backgroundColor = "red";
        el.style.color = "white";


        let body = document.querySelector("body");
        body.prepend(el);