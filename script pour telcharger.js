function enregistrerValeurs() {
  // Récupérer les valeurs saisies dans le formulaire
  var valeur1 = document.getElementById("valeur1").value;
  var valeur2 = document.getElementById("valeur2").value;

  // Créer un nouveau classeur Excel
  var classeur = XLSX.utils.book_new();

  // Créer une feuille de calcul
  var feuille = XLSX.utils.json_to_sheet([
    { Valeur1: valeur1, Valeur2: valeur2 }
  ]);

  // Ajouter la feuille de calcul au classeur
  XLSX.utils.book_append_sheet(classeur, feuille, "Données");

  // Générer le fichier Excel
  var fichierExcel = XLSX.write(classeur, { bookType: "xlsx", type: "array" });

  // Enregistrer le fichier Excel
  var contenu = "Contenu du fichier à télécharger";
  var nomFichier = "fichier.txt";
  var fichier = new File([contenu], nomFichier, { type: "text/plain;charset=utf-8" });
  saveAs(new Blob([fichierExcel], { type: "application/octet-stream" }), "donnees.xlsx");
}
