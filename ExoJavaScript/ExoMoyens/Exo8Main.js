
let Unlien= document.querySelector("a")
let myAmpoule= document.querySelector("#ampoule");
Unlien.addEventListener("mouseover", function () {
    AmpouleManager.allumer(myAmpoule);
})
Unlien.addEventListener("mouseout", function () {
    AmpouleManager.eteindre(myAmpoule);
})