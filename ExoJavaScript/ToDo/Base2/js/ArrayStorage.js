class ArrayStorage {
    constructor(name)
    {
        this.name = name;
        this.list = this.get();
    }
    /**
     *  Elle  recupere l'ensemble d'élémnet 
     */
 
    get()
    {
        if(!localStorage.getItem(this.name))
            localStorage.setItem(this.name,'[]')
        else 
              return  (JSON.parse(localStorage.getItem(this.name)));// recupere  du  sjon converti en tableau 
    }
    /**
     *  Ajouter une valeur dans le LocalStockage
     * @param {*} value 
     */
    set(value){
       this.list.push(value);
       localStorage.setItem(this.name, JSON.stringify( this.list))
    }
    /**
     *  Suppression d'un Element
     * @param {*} value 
     */
    remove(value){
        const indexe = this.list.indexOf(value)
        this.list.splice(indexe,1)
    }
    /**
     * 
     */
     clear(){
          localStorage.removeItem(this.name)
     }
    
}