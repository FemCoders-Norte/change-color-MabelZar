//I parte, cambiar color y texto a darkblue

function changeColor(){
    //Escribe tu código aquí
   
    let container=document.querySelector(".container");
    container.style.background="darkblue";
};

function changeText(){
   let texto=document.getElementById("colorText");
texto.innerHTML="darkblue"
}; 

function changeStyles(){
    //Escribe tu código aquí
    changeColor();
    changeText();
};
changeText();
export {changeColor, changeText, changeStyles}