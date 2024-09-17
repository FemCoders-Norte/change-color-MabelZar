//II parte, refactorizar para hacer toggle, nos basaremos en lo que hicimos en el archivo partOne.js

function changeColor(){
    //Escribe tu código aquí
    let containercolor=document.querySelector(".container");
    if(containercolor.style.backgroundColor==="darkblue"){
        containercolor.style.backgroundColor="red";
    } else{
        containercolor.style.backgroundColor="darkblue"
    }
};
function changeText(){
    //Escribe tu código aquí
    let text=document.querySelector("#text")
    if(text.innerHTML==="darkblue"){
        text.innerHTML="red"
    }else {
        text.innerHTML= "darkblue"
    }

};
function changeStyles(){
    changeColor()
    changeText()
};
export {changeColor, changeText, changeStyles}
