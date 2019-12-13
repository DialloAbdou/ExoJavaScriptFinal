let calculManagere={

    calculAddition: function (nbre) {
        
        let res=0;
        for (let index = 1; index <=nbre; index++) {
            
            res+=index;
            
        }
        return  res;
    },
    calculFactorielle:function(nbre) {
      //  let resultat= 1;
        if((nbre===0)||(nbre===1))
        {
          return 1
        }else
        {
            return (nbre*this.calculFactorielle(nbre-1))
        }
    }

}