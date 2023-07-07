gapi.load('client', initSheetsAPI);

function initSheetsAPI() {
  gapi.client.init({
    apiKey: 'AIzaSyAIRpStG7VNS7XKpYmxunpO5hIsdZ_9d0E',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
  }).then(function() {
    // API Google Sheets prête à être utilisée
  });
}
function enregistrerValeurs() {
  var valeur1 = document.getElementById("valeur1").value;
  var valeur2 = document.getElementById("valeur2").value;

  var spreadsheetId = 'hauteur site';
  var range = 'Nom de la feuille!A1:B1';
  var values = [
    [valeur1, valeur2]
  ];

  gapi.client.sheets.spreadsheets.values.append({
    spreadsheetId: spreadsheetId,
    range: range,
    valueInputOption: 'USER_ENTERED',
    resource: {
      values: values
    }
  }).then(function(response) {
    console.log('Données enregistrées dans Google Sheets.');
  }, function(error) {
    console.error('Une erreur s\'est produite lors de l\'enregistrement des données dans Google Sheets:', error);
  });
}
