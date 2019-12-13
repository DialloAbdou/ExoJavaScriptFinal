let  mybtn = document.querySelector("button");
let myDiv = document.querySelector("div");
mybtn.addEventListener("click",function(){
    myDiv.innerHTML = fnRandom();
});
function fnRandom()
{
    
    let valRandome =Math.floor(Math.random()*20)
    if(valRandome<7)
    {
     
        return +" " +valRandome+ "<br/>"+"Petit";
    }else if((valRandome>=7)&&(valRandome<=15)){

        return +" " +valRandome+ "<br/>"+"Moyen";
    }else
    {
        return +" " +valRandome+ "<br/>"+"Grand";
      
    }

    
}