import "./body.scss"
function body(){
    const div = document.createElement("div");
    div.innerHTML = "This is a div from body.js";
    div.classList.add('DivBody');
    return div;
}

document.body.appendChild(body());