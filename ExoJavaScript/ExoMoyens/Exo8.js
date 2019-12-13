AmpouleManager={

            allumer :function(ampoule) {
                ampoule.setAttribute("src","images/AmpouleOK.GIF");
                ampoule.setAttribute("alt","Ampoule Allumée")
            },

            eteindre: function(){
                ampoule.setAttribute("src","images/AmpouleHS.GIF");
                ampoule.setAttribute("alt","Ampoule éteind")
            }
    }


