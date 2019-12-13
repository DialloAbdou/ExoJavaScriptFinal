let divTouche = document.querySelector("#touche");
let divResultat = document.querySelector("#resultat");
let divRecap = document.querySelector("#recap");
let valSaisie ="";
let recap=""
let operateur=""
let resultat = 0;
let nbcalcul = 0;
let reinit = true;

divTouche.addEventListener("click",function(event) {
    let bouton =event.target.id;
    
    if(bouton.substr(0,1)=="c")
    {
       valSaisie+=bouton.substr(1,1);
       divResultat.value = valSaisie;
    }else if(bouton.substr(0,1)=="b")
    {
        managerOperation();
        switch (bouton) {
            case "bPlus":
                 operateur="+"
                break;
            case "bMin":
                    operateur="-"
                   break;
            case "bMul":
                    operateur="*"
                   break;
             case "bdiv":
                    operateur="/"
                   break;
            default:
                break;
        }
        if(reinit)
        {
            recap=""
            reinit= false;
        }
        if(nbcalcul>1) recap+="<br/>"
        recap += resultat+ " "+operateur+""
    }else if(bouton==="point")
    {
        valSaisie+="."
    }else if(bouton==="Egal")
    {
        managerOperation();
        recap += resultat+ " "+operateur+""
        nbcalcul=1
        reinit = true;

    }
     divRecap.innerHTML= recap;
     divRecap.scrollTop = divRecap.scrollHeight - divRecap.clientHeight;


});

 function managerOperation() {
     if(valSaisie!=="")
     {
         resultat= doOperation(operateur,resultat,parseFloat(valSaisie))
         if(nbcalcul>0)
         {

             recap +=parseFloat(valSaisie);
         }
          divResultat.value = resultat;
          valSaisie="";
          nbcalcul++;
     }else{
         let position = recap.lastIndexOf("<br/>")
         recap+= recap.substring(0,position);
     }
   // return resultat;
 }
 function doOperation(operateur,chiffreA,chiffreB) {
     
    let res= 0
    switch (operateur) {
        case "+": 
            res =  chiffreA+chiffreB;
            break;
         case "-": 
         res =  chiffreA-chiffreB;
            break;
        case "*": 
        res =  chiffreA*chiffreB;
            break;
        case "/": 
        res =  chiffreA/chiffreB;
            break;
    
        default:
            break;
    }
    return res;
 }

