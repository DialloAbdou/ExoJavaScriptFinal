
let  lien = document.querySelector("li")
lien.addEventListener("mouseover",function () {
     ChoixManager.visualiser(this);
 })
  
 lien.addEventListener("mouseout",function () {
    ChoixManager.cacher(this);
})

