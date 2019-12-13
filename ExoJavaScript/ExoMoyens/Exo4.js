
//affichage();
//=======Application Principal ======

 Joueur1= {
    Nom:" Toto",
    Age:35,
    Poids:80,
    Taille:180,
    affichage:  function()
    {
        let text=""
        text+= "Nom : "+this.Nom+" \n"
        text+= "Age : "+this.Age+" \n"
        text+= "Poids : "+this.Poids+" \n"
        text+= "Taille : "+this.Taille+" \n"
        console.log(text);
    },

    getForce: function()
    {
        return(this.Poids*this.Taille)/this.Age;
    }

}


 Joueur2= {
    Nom:" Tamata",
    Age:25,
    Poids:90,
    Taille:195,
    affichage:  function()
    {
        let text=""
        text+= "Nom : "+this.Nom+" \n"
        text+= "Age : "+this.Age+" \n"
        text+= "Poids : "+this.Poids+" \n"
        text+= "Taille : "+this.Taille+" \n"
        console.log(text);
    },

    getForce: function()
    {
        return(this.Poids*this.Taille)/this.Age;
    }

}
//----=====Fonction =============================
 Joueur1.affichage();

 let force = Joueur1.getForce();

 console.log(" la force de: %s", Joueur1.Nom," est :", Math.floor(force));

  Joueur2.affichage();

 let force2 = Joueur2.getForce();

 console.log(" la force de: %s", Joueur1.Nom," est :", Math.floor(force2));

if(Joueur1.getForce()> Joueur2.getForce())
{
     console.log( Joueur1.Nom," avec sa force :", Math.floor(force)+" il est le plus ford");
}else
{
      console.log( Joueur2.Nom," avec sa force :", Math.floor(force2)+" il est le plus ford");
}

