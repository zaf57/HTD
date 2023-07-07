function enregistrerValeurs() {
  var valeur1 = document.getElementById("valeur1").value;
  var valeur2 = document.getElementById("valeur2").value;

  // Formatage des valeurs dans un format tabulaire (CSV)
  var donnees = valeur1 + "," + valeur2 + "\n";

  // Enregistrement des données dans le stockage local
  if (localStorage.donnees) {
    localStorage.donnees += donnees;
  } else {
    localStorage.donnees = donnees;
  }

  // Réinitialisation des champs de saisie
  document.getElementById("valeur1").value = "";
  document.getElementById("valeur2").value = "";

  alert("Valeurs enregistrées !");
}