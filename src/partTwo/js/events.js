import { changeStyles } from "./partTwo.js";
//Aquí codificaremos el evento que disparará el botón "Click me"

let button= document.querySelector(".button");
button.addEventListener("click",changeStyles);