var read =  require("readline-sync") 
let Animal={};
let  tabAnimal = []
let choix= 0;
Menu();


while(choix!=3)
{
    choix =  parseInt(read.question(" Quel est votre choix ?"))
    switch (choix) {
        case 1:
            let  nom = read.question("saisir un nom  ");
            let age =  parseInt(read.question("saisir un age : "))
            let  sexe  = read.question(" saisir le Sexe ")
            creerAnimal(nom, age, sexe)
            break;
        case 2:
                afficherListeAnimal(tabAnimal);
               //console.log("Afficher la liste !")
            break;
        case 3:
            console.log("Au revoir!")
        default:
            break;
    }
}

/***
 * Realisation d'un Menu
 */
function Menu()
{
    let text = " ";
    text += " ===Application sur les Annimaux====: \n"
    text+="1 : Création d'un animal avec ses nouveaux parametres\n"
    text+="2 : Liste des Animaux \n"
    text+="3 : Quitter\n";
    console.log(text);
}

/**
 * Creer un objet  Animal
 * @param {*} nom 
 * @param {*} age 
 * @param {*} sexe 
 */
function creerAnimal(nom, age, sexe)
{
     Animal =new Object()
    Animal["Nom"]= nom;
    Animal["Age"]=age;
    Animal["Sexe"]=sexe
    tabAnimal.push(Animal)
}
/**
 * Afficher la liste des annimaux
 * @param {*} tabAnimal 
 */
function afficherListeAnimal(tabAnimal)
{
      for (let index = 0; index < tabAnimal.length; index++)
      {
             let element = tabAnimal[index];
             let  text = " ";
             text+= "Nom "+element.Nom+" \n"
             text+= "Age "+element.Age+" \n"
            text+= "Sexe "+element.Sexe+" \n"
            console.log(text);
      }
}