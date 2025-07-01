// Récupérer les éléments du DOM
const displayEl = document.getElementById("display");
const keysEl = document.getElementsByClassName("keys");
const clearBtn = document.getElementsByClassName;

//Initialisation du bouton clear
let current = 0; // Current est le chiffre/nombre affiché sur l'écran de la calculatrice
let previous = null; // propriété en lecture seule renvoie l'élément antérieur à celui spécifié dans childrenl a liste de son parent, ou null si l'élément spécifié est le premier de la liste.
let op = null; // Opérateurs
let resetNext = false; // Indiquer sur l'écran qu'au prochain clic ou numéro saisi, lcelui-ci doit se réinitialiser

//Faire apparâitre current sur l'écran de la calculatrice
function upateDisplay() {
  displayEl.textContent = current;
}
