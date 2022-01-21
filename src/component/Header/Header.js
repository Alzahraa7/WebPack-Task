import "./header.css"
const header = document.createElement("header");
header.innerHTML = "This is a header from Header.js"
header.classList.add('header');
document.body.appendChild(header);
import imgSrc from '../../assets/cover.jpg'
const img = document.createElement("img");
img.src = imgSrc;
img.style.width = "100px";
img.style.height = "100px";;
header.appendChild(img);