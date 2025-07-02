# 🧮 Calculatrice Web Moderne

Une calculatrice web intuitive, esthétique et responsive, développée entièrement en **HTML, CSS et JavaScript pur**.  
Ce projet met en avant une interface moderne, animée et agréable à utiliser, tout en offrant une logique métier robuste et bien organisée.

---

## 🌟 Aperçu

![Screenshot Calculatrice](./assets/Capture%20d’écran%20calculatrice.png)

---

## 🚀 Fonctionnalités principales

- Interface moderne et responsive
- Calculs basiques : addition, soustraction, multiplication, division
- Gestion des décimales
- Gestion des erreurs (ex. : division par zéro)
- Réinitialisation facile
- Affichage dynamique du résultat

---

## 💡 Structure du projet

### 1️⃣ **HTML (structure)**

Le fichier `index.html` définit la structure de la calculatrice :

- **`<div class="calculator">`** : conteneur principal
- **`<div id="display" class="display">`** : écran d'affichage, initialisé à `0`
- **`<div class="keys">`** : grille de boutons (chiffres, opérateurs, égal, clear)

Chaque bouton est soigneusement placé grâce à un système de **grille CSS**.

---

### 2️⃣ **CSS (style et design)**

Le fichier `style.css` gère l’apparence :

- **Palette moderne** : tons doux (bleu pastel, blanc cassé)
- **Effet glassmorphism léger** grâce aux gradients
- **Boutons arrondis et ombrés** pour un effet 3D
- **Animations d’interaction** (hover & click)
- **Adaptation mobile (responsive)** via media queries

**Variables CSS personnalisées** (`:root`) pour centraliser les couleurs et les ombres, facilitant la maintenance ou l’évolution du style.

---

### 3️⃣ **JavaScript (logique)**

Le fichier `script.js` contient toute la logique :

#### 🔄 **Affichage**

- La variable `current` contient la valeur affichée.
- La fonction `updateDisplay()` met à jour l’écran.

#### 🧮 **Gestion des chiffres**

- Fonction `appendDigit(d)` :
  - Si l’utilisateur tape un chiffre après un calcul, l’écran se réinitialise.
  - Gère la saisie du point décimal et empêche les doublons.
  - Remplace le `0` initial.

#### ➗ **Choix des opérateurs**

- Fonction `chooseOp(o)` :
  - Si un opérateur était déjà actif, le calcul précédent est exécuté avant d'enregistrer le nouvel opérateur.
  - La valeur actuelle devient la valeur `previous`.

#### ✅ **Calcul**

- Fonction `compute()` :
  - Convertit la valeur actuelle en nombre.
  - Exécute l'opération choisie (`+`, `-`, `*`, `/`).
  - Gère la **division par zéro** (affiche "Erreur").
  - Réinitialise les variables `op` et `previous`.

#### ♻️ **Réinitialisation**

- Fonction `clearAll()` :
  - Remet toutes les variables à zéro.

#### 🎯 **Gestion des clics**

- `keysEl.addEventListener("click", handler)` :
  - Détection du bouton cliqué.
  - Redirige vers les fonctions adaptées (ajout chiffre, opérateur, calcul, reset).

#### 🔥 **Initialisation**

- `updateDisplay()` appelé à la fin pour afficher `0` dès le chargement.

---

## 🗺️ Schématisation du flux de logique

```plaintext
[Démarrage]
     │
[Affichage = 0]
     │
[Utilisateur clique chiffre]───> appendDigit() ───> updateDisplay()
     │
[Utilisateur clique opérateur]─> chooseOp()
     │
[Utilisateur clique chiffre]───> appendDigit() ───> updateDisplay()
     │
[Utilisateur clique égal]──────> compute() ──────> updateDisplay()
     │
[Utilisateur clique Clear]─────> clearAll() ─────> updateDisplay()
```

## 💻 Installation & usage

bash
Copier
Modifier

## Clone le repo

git clone https://github.com/votre-utilisateur/votre-repo.git

## Ouvre index.html dans un navigateur

Aucun build ou dépendance externe nécessaire.

## 📱 Responsive

✅ Entièrement adapté aux petits écrans.
✅ Grille fluide qui conserve l’ergonomie sur smartphone.
✅ Taille du texte et boutons ajustée automatiquement.

## 🎨 Personnalisation

Les couleurs, ombres et arrondis sont configurables dans la section :root du CSS :

css

:root {

--bg-page: #e0e7ff;

--btn-num: linear-gradient(135deg, #ffffff, #f5f7fa);

--radius: 12px;
...
}

## 🛠️ À améliorer (suggestions)

Support du clavier (taper les touches directement)

Historique des calculs

Thème sombre / clair

Bouton pour inverser le signe

Ajout de fonctionnalités avancées (racines, pourcentage, etc.)

## 📄 License

Ce projet est open-source sous MIT License.

## ✨ Auteur

MarineMeyZielinski

m.zielinski.webdev@gmail.com

## 🏁 Conclusion

Cette calculatrice est un exemple idéal pour comprendre la manipulation du DOM, la gestion d'événements et la création d'une interface fluide et élégante.
Elle peut servir de base à des projets plus complexes, tout en restant facile à comprendre et à améliorer.
