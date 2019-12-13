'use strict'
const list= document.getElementById('list');
const input = document.getElementById('input');
const  add = document.getElementById('add');
const clear = document.getElementById('clear');
const url =document.getElementById('url');
const load = document.getElementById('load');

// Nouvelle Instance  pour la cle task
const storage =new ArrayStorage('tasks')
// const tasks= ['Salle de sport', 'Tourner des Tutos']

//======Liste des taches
const tasks=  storage.list
//========Affiche la Liste des Taches===========
tasks.forEach(tache=>doTask(tache))

/**
 *  Ajouter une tache la liste des taches 
 * @param {*} task 
 */
function doTask(task) {

    if(typeof task==='string' && task)
    {   let li = document.createElement('li')
        let btRemve = document.createElement('button');
         li.textContent = task;
         btRemve.textContent = "remove";
         li.appendChild(btRemve);
         list.insertBefore(li,list.firstChild);
         btRemve.addEventListener('click', ()=>{
             const value =  btRemve.parentNode.firstChild.textContent
             storage.remove(value);
             list.removeChild(li)
         })
         return true;
    }
    return false;
}

// Ajouter une nouvelle tache en gardant le focus
add.addEventListener('click',newTask);
input.addEventListener('keydown', e=>{
    if(e.key==='Enter'){
        newTask()
    }
})
// Vider les differents taches 
clear.addEventListener('click',()=>{
    storage.clear();
    list.innerHTML= '';
})

load.addEventListener('click',()=>{
    fetch(url.value)
     .then(res=>{
         if(res.ok){
             return res.json()
         }
         throw new Error(`${res.statusText} (${res.status})`)

    })
    .then(tasks=>{
        if(Array.isArray(tasks)){
            tasks.forEach(task=>{
                if(storage.list.indexOf(task)===-1&& tdoTask(task))
                {
                    storage.set(task)
                }
            })
            return 
        }
        throw new TypeError(` La réponse n'est pas un tableau  Json! (type:{typeOf})`)
    })
})

function newTask() {
    if(storage.list.indexOf(input.value)===-1 && doTask(input.value))
    {
       storage.set(input.value)
       input.value='';
    }
    input.focus()

}


