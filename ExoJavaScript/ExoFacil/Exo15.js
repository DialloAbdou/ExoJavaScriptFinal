let myPile = "Pile";
let  myeFace = "Face"
let myBouton = document.querySelector("button");
let myDiv = document.querySelector("div");

myBouton.addEventListener("click", function(){
    myDiv.innerHTML = fnPileFace();
});

function fnPileFace()
{
    let valeur = Math.floor( Math.random()*2);
    if(valeur >=1)
       return "Pile";
    else
        return "Face";
}