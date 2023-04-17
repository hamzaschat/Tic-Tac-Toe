// Définition des variables
var currentPlayer = "X";
var gameCells = document.querySelectorAll(".game-cell");

// Fonction pour vérifier l'état du jeu
function checkGameStatus() {
var cell0 = document.getElementById("cell-0").textContent;
var cell1 = document.getElementById("cell-1").textContent;
var cell2 = document.getElementById("cell-2").textContent;
var cell3 = document.getElementById("cell-3").textContent;
var cell4 = document.getElementById("cell-4").textContent;
var cell5 = document.getElementById("cell-5").textContent;
var cell6 = document.getElementById("cell-6").textContent;
var cell7 = document.getElementById("cell-7").textContent;
var cell8 = document.getElementById("cell-8").textContent;

// Vérifier les alignements horizontaux
if ((cell0 !== "") && (cell0 === cell1) && (cell1 === cell2)) {
return true;
}
if ((cell3 !== "") && (cell3 === cell4) && (cell4 === cell5)) {
return true;
}
if ((cell6 !== "") && (cell6 === cell7) && (cell7 === cell8)) {
return true;
}

// Vérifier les alignements verticaux
if ((cell0 !== "") && (cell0 === cell3) && (cell3 === cell6)) {
return true;
}
if ((cell1 !== "") && (cell1 === cell4) && (cell4 === cell7)) {
return true;
}
if ((cell2 !== "") && (cell2 === cell5) && (cell5 === cell8)) {
return true;
}

// Vérifier les alignements diagonaux
if ((cell0 !== "") && (cell0 === cell4) && (cell4 === cell8)) {
return true;
}
if ((cell2 !== "") && (cell2 === cell4) && (cell4 === cell6)) {
return true;
}

// Si aucun alignement n'est trouvé, renvoyer false
return false;
}

// Ajouter un événement click à chaque cellule
gameCells.forEach(function(cell) {
cell.addEventListener("click", function() {
// Vérifier si la cellule est déjà jouée
if (cell.textContent !== "") {
alert("Cette cellule a déjà été jouée !");
return;
}
// Jouer le coup
cell.textContent = currentPlayer;

// Vérifier si le joueur a gagné
if (checkGameStatus()) {
  alert("Le joueur " + currentPlayer + " a gagné !");
  return;
}

// Passer au joueur suivant
if (currentPlayer === "X") {
  currentPlayer = "O";
} else {
  currentPlayer = "X";
}});
});
