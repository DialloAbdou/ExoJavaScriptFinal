
   let textPseudo = document.querySelector("#pseudo")
   let  textpassword = document.querySelector("#password");
   let btn = document.querySelector("#btn")
   let txtDiv = document.querySelector("div");
   //==== Teste Sur les Cibles target=====
   let btChoix = document.querySelector('#btChoix');
   let txtbonBon = document.querySelector('#txtbonbon');
   let btnbonBon = document.querySelector('#btnbonbon');
  let txtchocolat= document.querySelector('#txtchocolat');
  let btnchocolat= document.querySelector('#btnchocolat');

     btChoix.addEventListener("click",e=>{
          console.log(e.target.id)
     })

   //========Evenement sur  le boutton ======
     btn.addEventListener("click",e=> {
          const p = document.createElement('p');
          p.textContent = "bienvenu sur notre site !";
          txtDiv.insertBefore(p,txtDiv.firstChild)
     })
   //===============Event sur element==========
        textPseudo.addEventListener('keypress',e=>{

          //    let regex= /^[a-zA-Z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
          //    if(!regex.test(textPseudo.value))
          //    {
          //         textPseudo.style.backgroundColor= "red";
          //    }else
          //    {
          //         textPseudo.style.backgroundColor= "green";
          //    }
          // if(e.key==='Enter')
          //   console.log("bonjour")
          // else
          //    console.log(e.key)
        });
        textpassword.addEventListener('blur',function()
        {
             let carDeci =/\d/ // caractere decimal 
             let carSpeciaux =/[$&@!]/
             let erreur = ""
             if(textpassword.value.length <3)
             {
                  erreur +="<li>est trop court</li>"
             }
             else if(textpassword.value.length >8)
             {
                  erreur +="<li>est trop long</li>"

             }
             if(!textpassword.value.match(carDeci))
             {
                  erreur +="<li>doit contenir un chiffre</li>"
                  
             }
             else if(!textpassword.value.match(carSpeciaux))
             {
                  erreur +="<li>doit contenir un caractère special</li>"

             }
             if(erreur!="")
             {
                  txtDiv.innerHTML = "le Password est :"+"<ul>"+erreur+"</ul>"
                  txtDiv.style.border= " 2px solid red";
             }else
             {
                txtDiv.innerHTML = "le Password est correcte ! "
                txtDiv.style.border= " 2px solid green";
             }
        });
        //======Evenement Sur le bouton Addition====

        