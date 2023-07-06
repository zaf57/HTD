<script src="xlsx.js"></script>
<script>
    function chargerCorrespondances() {
        var fichier = "hauteur site.xlsx";
        var requete = new XMLHttpRequest();
        
        requete.open("GET", fichier, true);
        requete.responseType = "arraybuffer";
        
        requete.onload = function(e) {
            var contenu = new Uint8Array(requete.response);
            var classeur = XLSX.read(contenu, {type: 'array'});
            
            var feuille = classeur.Sheets[classeur.SheetNames[0]];
            var donnees = XLSX.utils.sheet_to_json(feuille);
            
            correspondances = {};
            donnees.forEach(function(d) {
                correspondances[d.code_pneu] = d.hauteur;
            });
            
            console.log(correspondances);
        };
        
        requete.send();
    }

    window.onload = function() {
        chargerCorrespondances();
    };
</script>
