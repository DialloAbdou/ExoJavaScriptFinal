console.log("=======Table de multiplication============")
var read = require("readline-sync")
var nbre = read.questionInt(" Quelle table de multiplication voulez vous afficher ?")
const nbreLimit = 10

for(var i=1; i<=nbreLimit;i++)
{
    console.log(nbre+" * "+i+" = "+nbre*i)
}