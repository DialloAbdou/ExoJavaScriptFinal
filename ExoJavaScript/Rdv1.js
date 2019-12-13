// let debutRdvHeure=15;
// let debutRdvMinute=45;
// let FinJourneeRdvHeure = 16
// let FinJourneeRdvMinute= 30
// let DureeRdv  = 90


function prendreRdv(debutRdvHeure,debutRdvMinute,FinJourneeRdvHeure,FinJourneeRdvMinute,DureeRdv)
{
    let finRDvHeure = debutRdvHeure
    let finRDvMinute = debutRdvMinute+DureeRdv

    while(finRDvMinute >=60)
    {
        finRDvMinute-=60;
        finRDvHeure +=1
            
        
    }
    if(finRDvHeure<=FinJourneeRdvHeure)
     {
       if(finRDvMinute<=FinJourneeRdvMinute){
            console.log("RDV OK");
         }else{
              console.log("RDV Impossible")
            }
     }else
     {
            console.log("RDV Impossible")

     }
        console.log("rdv termine à :"+finRDvHeure+"h"+finRDvMinute+"mn"); 
}
  

// =======Appel de la fonction ======
prendreRdv(15,45,18,30,190)