
'use strict'
//========Stockage local des taches=======

class ArrayStorage{
    constructor(name){
        this.name = name;
        this.list= this.get();
    }
    // Recuperation de la liste
    get(){
       if(!localStorage.getItem(this.name)){
        localStorage.setItem(this.name,'[]')
       }
       return (JSON.parse(localStorage.getItem(this.name)))  //
    }
    // Ajouter des données dans la liste
    set(value){
       this.list.push(value)
       localStorage.setItem(this.name, JSON.stringify(this.list))
    }
    clear(){
        localStorage.removeItem(this.name)
    }
    remove(value){
        const index  = this.list.indexOf(value)
        this.list.splice(index,1)
        localStorage.setItem(this.name, JSON.stringify(this.list))
    }


}