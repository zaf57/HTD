var fichier = "donnees.xlsx"; // Nom du fichier

var donnees = {}; // Variable pour stocker les données

window.onload = function() {
  chargerDonnees();
};

function chargerDonnees() {
  // Vérifier si le fichier existe
  // Si oui, charger les données dans la variable "donnees"
  // Si non, initialiser la variable "donnees" avec les valeurs par défaut
}

function enregistrerValeurs() {
  var valeur1 = document.getElementById("valeur1").value;
  var valeur2 = document.getElementById("valeur2").value;

  // Ajouter les nouvelles valeurs à la variable "donnees"

  // Enregistrer les données dans le fichier
  var classeur = XLSX.utils.book_new();
  var feuille = XLSX.utils.json_to_sheet(donnees);
  XLSX.utils.book_append_sheet(classeur, feuille, "Feuille 1");
  XLSX.writeFile(classeur, fichier);
}
