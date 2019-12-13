let qte =   document.querySelector("#qte");
let prixU = document.querySelector("#prixU");
let prixH= document.querySelector("#prixH");
let carDeci = /\d/ ; //  expression regulière 
qte.addEventListener("blur",function () {
    let resultat =0;
    if(!qte.value.match(carDeci))
    {
         qte.style.border="2px solid red";
    }else if(qte.value=="" )
    {
        qte.style.border="2px solid red";
    }else
    {
        qte.style.border="";
    }
    resultat = calculHt(qte, prixU);
    prixH.value = resultat;
})
prixU.addEventListener("blur",function () {
    let resultat  = 0;
    if(!prixU.value.match(carDeci))
    {
         prixU.style.border="2px solid red";
    }else if(prixU.value=="" )
    {
        prixU.style.border="2px solid red";

    }else
    {
        prixU.style.border="";

    }
    
      resultat = calculHt(qte, prixU);
      prixH.value = resultat;
})




function calculHt(qte, prixht) {
    
    let resultat =0
    if((qte.value!="")&&(prixht.value!=""))
    {
        let quantite = parseInt(qte.value);
        let prixUnitaire  = parseFloat(prixht.value);
       resultat = quantite*prixUnitaire;
    }
    return resultat;
}