let btnValid = document.querySelector("button")
let myDiv = document.querySelector("div");
btnValid.addEventListener("click",function(){
        const nbre= 3;
        let texte= "";
        for (let index = 1; index <= 10; index++) {
            texte+=nbre+"*"+index+"="+nbre*index+"<br/>";
        }
        myDiv.innerHTML=texte

});


   //  function multiplication()
            //  {
            //      const  nbre=3;
            //      let text = " "
            //     //  let resultat= 0;
            //      for(var i=1; i<=10;i++)
            //      {
            //          text+=nbre+"*"+i+"="+nbre*i+"<br/>";
                 
            //         document.querySelector("div").innerHTML = text;
            //      }

            //  }