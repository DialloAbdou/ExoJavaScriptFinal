var read =  require("readline-sync")
console.log("====Completer Le Tableau====")
console.log("1/ Ajouter un Chiffre");
console.log("2/ Afficher le tableau");
console.log("0/Quitter");
let monChoix = -1
let tableau = [] 
 tableau[0]=1;
let index = tableau.length;
  //  monChoix = parseInt(read.question("Quel est votre est Choix ?"));
   /**
      *  Faire le choix avant de saisir 
    */
    while (monChoix!=0)
    {
      monChoix = parseInt(read.question("Quel est votre est Choix ?"));

        switch (monChoix) {
          case 1:
            ajoutChiffre()
            break;
    
          case 2:
              affichertableau(tableau)
            break;
            case 0:
              quitter();
    
              break;
            default:
               console.log("je n'ai pas compris");
            break;
       }
    }

  /***
   *  Ajouter un chiffre dans un tableau
   */
   function ajoutChiffre()
  {
    //console.log("Ajouter un chiffre")
    let nbre = read.questionInt("Ajouter un chiffre ?");
     let indexPosition = getPositionIndex(tableau,nbre);
     tableau.splice(indexPosition,0,nbre);
  }
  /**
   * 
   
   */
  function affichertableau(tab)
  {
    // Elle permet de trier tableau

     for (let index = 0; index <tab.length; index++) {
          console.log( index+" "+ tab[index]+"\n")
     }
  }
 
  /**
   *   Quitter le programme
   */
  function quitter()
  {
    console.log("Aurevoire merci")
  }


  /**
   * Elle permet de trier un tableau 
   * @param {*} tab 
   */
  function getPositionIndex(tab, nbre)
 {
    for (let index = 0; index < tab.length; index++)
    {
      if(tab[index]> nbre)
      {
        return index;
      }
    }
    return tab.length;
 }

/**
 *  elle permet de permuter deux valeurs 
 * @param {*} val1 
 * @param {*} val2 
 */
function permute(val1, val2)
{
  let vla3 = val1;
      val1 = val2;
      val2 = vla3;
}