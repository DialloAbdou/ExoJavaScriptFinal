let nom =  document.querySelector("#nom");
let prenom = document.querySelector("#prenom");
let numero = document.querySelector("#numero");
let adresse = document.querySelector("#adresse")
let ville = document.querySelector("#ville");
let cp= document.querySelector("#cp");
let email = document.querySelector("#email")
let tel = document.querySelector("#tel")

//===============================Appel des Evenenements==================================

nom.addEventListener("keypress",function() {
    FormulaireManager.isOkForm(nom)
});

prenom.addEventListener("keypress",function() {
    FormulaireManager.isOkForm(prenom)
});

numero.addEventListener("keypress",function() {
    FormulaireManager.isNumeric(numero)
});

adresse.addEventListener("keypress",function() {
    FormulaireManager.isNumeric(adresse)
});

ville.addEventListener("keypress",function() {
    FormulaireManager.isOkForm(ville)
});
cp.addEventListener("keypress",function() {
    FormulaireManager.isCodePostal(cp)
});

email.addEventListener("keypress",function() {
    FormulaireManager.isEmail(email);
});
tel.addEventListener("keypress",function() {
    FormulaireManager.isTelephoenNumeric(tel);
});