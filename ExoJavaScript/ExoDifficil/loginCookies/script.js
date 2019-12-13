$(document).ready(function () {
   
   $('.message a').click(function(){
      $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   });
   // declaration des variables
    let pseudo = $("#pseudo")
    let pwd = $("#pwd");
    let pwd1 = $("pwd1");
    let nom= $("#nom");
    let mail = $("#mail");
   
    $("#pseudo").blur(function() {
       let  regex = /[A-Za-z]/
        if(!regex.test(pseudo.val()))
        {
           $("#pseudo").css("border","2px solid red")
           $(".form").css("border","2px solid red")

        }else if(pseudo.val() =="")
        {
         $("#pseudo").css("border","2px solid red")
         $(".form").css("border","2px solid red")

        }else{
         $("#pseudo").css("border","")
        }
    });

    $("#pwd").blur(function() {
    let regex= /^[a-zA-Z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
       
        if(!regex.test(pwd.val()))
        {
          $("#pwd").css("border","2px solid red")
          $(".form").css("border","2px solid red")

        }else if(pwd.val()=="")
        {
         $("#pwd").css("border","2px solid red")
         $(".form").css("border","2px solid red")

        }else
        {
         $("#pwd").css("border","")
        }

    });

    $("#mail").blur(function() {
      let  regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
       
        if(!regex.test(mail.val()))
        {
          $("#mail").css("border","2px solid red")
          $(".form").css("border","2px solid red")

        }else if(mail.val()=="")
        {
         $("#mail").css("border","2px solid red")
         $(".form").css("border","2px solid red")

        }else
        {
         $("#mail").css("border","")
        }

    });

    $("#pwd1").blur(function() {
      let regex= /^[a-zA-Z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
         
          if(!regex.test(pwd1.val()))
          {
            $("#pwd1").css("border","2px solid red")
            $(".form").css("border","2px solid red")
  
          }else if(pwd1.val()=="")
          {
           $("#pwd1").css("border","2px solid red")
           $(".form").css("border","2px solid red")
  
          }else
          {
           $("#pwd1").css("border","")
          }
  
      });

      $("#nom").blur(function() {
         let  regex = /[A-Za-z]/
          if(!regex.test(nom.val()))
          {
             $("#nom").css("border","2px solid red")
             $(".form").css("border","2px solid red")
  
          }else if(nom.val() =="")
          {
           $("#nom").css("border","2px solid red")
           $(".form").css("border","2px solid red")
  
          }else{
           $("#nom").css("border","")
          }
      });


      function setCookies(nom, valeur) {
        var expiration = new Date(2019, 11,18)
        document.cookie = nom+"="+escape(valeur)+";expires="+expiration.toGMTString();
      } 
  
      function getCookie(nom) {
        var recupCookies = document.cookie.split(";")
        for(vari=0; i< recupCookies.length;i++)
        {
               var param = recupCookies[i].split("=");
               if(param[0]==nom) return(unescape[1]);
        }
        return null;
      }

      function supprimercoo(nom) {
        Document.cookie = nom+"="+"; expires= Thu,19 Nov"
      }

})
// =====================Gestion des Cookies JavaScripts=========================
