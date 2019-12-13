FormulaireManager={
    isOkForm:function(texte) {
        let divErreur = document.querySelector("#divErreur")
        let erreur="";
        let caraExp=/[A-Za-z]/
        if(!texte.value.match(caraExp))
        {
            texte.style.border="2px solid red"
        } else
        {
            texte.style.border="2px solid #4db2b3"
        }
        
    },
    isNumeric:function(texte) {
        let  nombreExp=/\d/
        if(!texte.value.match(nombreExp))
        {
            texte.style.border="2px solid red";
        }else
        {
            texte.style.border="2px solid #4db2b3";
        }
    },
    isAlphanumeric:function(texte) {
        let  nombreExp=/\w/
        if(!texte.value.match(nombreExp))
        {
            texte.style.border="2px solid red";
        }else
        {
            texte.style.border="2px solid #4db2b3";
        }
    },

    isCodePostal: function(texte) {
        
        let cpExp=/^\d{4}/
        if(!texte.value.match(cpExp))
        {
            texte.style.border="2px solid red";
        }else
        {
            texte.style.border="2px solid #4db2b3";
        }
        if(texte.value.length <5)
        {
            texte.style.border="2px solid red";
        } else if(texte.value.length >5)
        {
            texte.style.border="2px solid red";
        }else
        {
            texte.style.border="2px solid #4db2b3";
        }
    },
    isEmail:function (texte) {
        let regex= /^[a-zA-Z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;
        if(!regex.test(texte.value))
        {
            texte.style.border="2px solid red";
        }else
        {
            texte.style.border="2px solid #4db2b3";
        }
    },
    isTelephoenNumeric:function(texte) {
        
        let TelExp=/^\d{9}/
        if(!texte.value.match(TelExp))
        {
            texte.style.border="2px solid red";
        }else
        {
            texte.style.border="2px solid #4db2b3";
        }
        if(texte.value.length <10)
        {
            texte.style.border="2px solid red";
        } else if(texte.value.length >10)
        {
            texte.style.border="2px solid red";
        }else
        {
            texte.style.border="2px solid #4db2b3";
        }
    }

}