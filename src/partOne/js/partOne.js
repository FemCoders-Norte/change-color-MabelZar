//I parte, cambiar color y texto a darkblue
function changeColor(){
    //Escribe tu código aquí
    document.querySelector("#background").style.backgroundColor="darkblue";
};
function changeText(){
     //Escribe tu código aquí
document.querySelector("#text").textContent="darkblue";
}; 
function changeStyles(){
    //Escribe tu código aquí
    changeColor ();
    changeText ();
};
export {changeColor, changeText, changeStyles}