
 var read =require("readline-sync")
  var nbre = parseInt(read.question("Saisir un Nombre!"))
  let resultat = 1;
  for(var i=1; i<=nbre; i++)
  {
      resultat*=i;
     console.log("Etape "+i+" :"+resultat)
  }
  console.log("Le resultat de factorielle de 5 est "+resultat)