function chargerCorrespondances() {
  var fichier = document.getElementById("fichier-correspondances").files[0];
  var lecteur = new FileReader();
  
  lecteur.onload = function(e) {
      var contenu = new Uint8Array(e.target.result);
      var classeur = XLSX.read(contenu, {type: 'array'});
      
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
