const list = document.querySelector('#list')
const add = document.querySelector('#add');
const input = document.querySelector("#input")
const clear= document.querySelector('#clear')
// ===========Declaration des éléments ====

// const tasks= ['tourner Tuto','faire Sport','apprendre Code']
const storages = new ArrayStorage('tasks')
//=======Evenement sur les Attributs ====
// ==
const tasks = storages.list

 tasks.forEach(task=>toDoTask(task))

add.addEventListener('click', NewTask)
input.addEventListener('keydown', e=>{
    if(e.key==='Enter'){
        NewTask()
    }
})

//== Function dd Solution===

function toDoTask(task) {
    if(typeof task==='string' && task){
        const li = document.createElement('li');
        const btRemove = document.createElement('button');
        li.textContent = task
        btRemove.textContent = 'remove'
        btRemove.classList.add("bouton")
         li.appendChild(btRemove)
        list.insertBefore(li,list.firstChild)
        btRemove.addEventListener('click',()=>{
            const valeur = btRemove.parentNode.firstChild.textContent
            storages.remove(valeur)
            list.removeChild(li)
        })
        return true;
    }
    return false;
}
/**
 * Ajout de nouvelle taches 
 */
function NewTask() {
 
    if(tasks.indexOf(input.value)===-1 && toDoTask(input.value)){
        storages.set(input.value)
        input.value
    }
    input.focus();
}



