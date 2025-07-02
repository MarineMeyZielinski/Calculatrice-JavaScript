// - Récupération des éléments du DOM -

// Sélection de l'écran où s'affichent les chiffres
const displayEl = document.getElementById("display");
// Sélection du conteneur principal qui regroupe tous les boutons
const keysEl = document.querySelector(".keys");

// - Variables principales -

// Contient la valeur actuellement affichée
let current = "0";
// Garde en mémoire la valeur précédente quand on choisit un opérateur
let previous = null;
// Stocke l'opérateur sélectionné (+, -, *, /)
let op = null;
// Indique si on doit réinitialiser l'écran au prochain chiffre saisi
let resetNext = false;

// - Mise à jour de l'affichage -

function updateDisplay() {
  displayEl.textContent = current;
}

// - Quand on appuie sur un chiffre ou un point -

function appendDigit(d) {
  // Si on venait de finir un calcul, on efface pour taper un nouveau nombre
  if (resetNext) {
    current = "0";
    resetNext = false;
  }

  // Si l'écran affiche "0" et qu'on tape un autre chiffre (sauf ".")
  if (current === "0" && d !== ".") {
    current = d;
  }
  // Si on essaye de rajouter un deuxième point décimal, on bloque
  else if (d === "." && current.includes(".")) {
    return;
  }
  // Sinon on ajoute le chiffre ou le point à la suite
  else {
    current += d;
  }
}

// - Quand on choisit un opérateur (+, -, *, /) -

function chooseOp(o) {
  // Si on a déjà un opérateur actif, on termine le calcul en cours d'abord
  if (op !== null) {
    compute();
  }
  // On garde la valeur affichée en mémoire
  previous = parseFloat(current);
  // On sauvegarde l'opérateur choisi
  op = o;
  // Indique que le prochain chiffre doit effacer l'écran
  resetNext = true;
}

// - Quand on clique sur "=" pour calculer -

function compute() {
  // Conversion du texte affiché en nombre
  const cur = parseFloat(current);

  // Si on n'a pas d'opérateur ou pas de nombre précédent, on ne fait rien
  if (op === null || previous === null) return;

  let res;

  // On fait l'opération correspondante
  switch (op) {
    case "+":
      res = previous + cur;
      break;
    case "-":
      res = previous - cur;
      break;
    case "*":
      res = previous * cur;
      break;
    case "/":
      // Cas particulier pour la division par zéro
      res = cur === 0 ? "Erreur" : previous / cur;
      break;
    default:
      return;
  }

  // On met le résultat dans current pour l'afficher
  current = res.toString();
  // On vide les anciennes valeurs
  op = null;
  previous = null;
}

// - Quand on appuie sur "C" pour tout effacer -

function clearAll() {
  current = "0";
  previous = null;
  op = null;
  resetNext = false;
}

// - Gestion des clics sur tous les boutons -

keysEl.addEventListener("click", (e) => {
  const b = e.target;

  // Si c'est un chiffre ou un point
  if (b.dataset.num) {
    appendDigit(b.dataset.num);
    updateDisplay();
  }
  // Si c'est un opérateur
  else if (b.dataset.op) {
    chooseOp(b.dataset.op);
  }
  // Si c'est "="
  else if (b.id === "equal") {
    compute();
    updateDisplay();
    // Prépare l'écran pour un nouveau nombre au prochain clic
    resetNext = true;
  }
  // Si c'est "C"
  else if (b.id === "clear") {
    clearAll();
    updateDisplay();
  }
});

// - Initialisation -

// On affiche "0" au tout début
updateDisplay();
