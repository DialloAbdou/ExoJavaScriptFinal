let debutRdvHeure=15;
let debutRdvMinute=45;
let FinJourneeRdvHeure = 16
let FinJourneeRdvMinute= 30
let DureeRdv  = 70
let finRDvMinute = debutRdvMinute+DureeRdv
let finRDvHeure = 0

if(finRDvMinute>=60){
    finRDvMinute-=60;
    finRDvHeure = debutRdvHeure+1
    
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



