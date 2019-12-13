
var read = require("readline-sync")
let Personnage = {}
let  Nom = read.question("Quel est le nom ?")
Personnage["Nom"]= Nom
let  Age =parseInt(read.question("Quel age ?"))
Personnage["Age"]=Age
console.log(`le nom est,`,Personnage["Nom"],`age :`,Personnage["Age"])

console.log(Personnage)
