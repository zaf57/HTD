function chargerCorrespondances() {
  var fichierInput = document.getElementById("fichier-correspondances");
if (fichierInput.files.length > 0) {
    var fichier = fichierInput.files[0];
    var lecteur = new FileReader();

    lecteur.onload = function(e) {
        var contenu = new Uint8Array(e.target.result);
        var classeur = XLSX.read(contenu, {type: 'array'});

        // Reste du code...
    };

    lecteur.readAsArrayBuffer(fichier);
} else {
    console.log("Aucun fichier sélectionné.");
}

      
      var nomFeuille = "hauteur site"; // Nom de la feuille du fichier Excel
      var feuille = classeur.Sheets[nomFeuille];
      var donnees = XLSX.utils.sheet_to_json(feuille);
      
      var correspondances = {};
      donnees.forEach(function(d) {
          correspondances[d.code_pneu] = d.hauteur;
      });
      
      // Utilisez les correspondances chargées comme nécessaire
      console.log(correspondances);
  };
  
  lecteur.readAsArrayBuffer(fichier);
}
