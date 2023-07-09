gapi.load('client', initSheetsAPI);

function initSheetsAPI() {
  gapi.client.init({
    apiKey: '578231543025-m9a7l9mqcti4d7i482rqnd5u9fgpt5ju.apps.googleusercontent.com',
    clientId: 'Client Web 1',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    scope: 'https://www.googleapis.com/auth/spreadsheets'
  }).then(function() {
    // API Google Sheets prête à être utilisée
  });
}
function enregistrerValeurs() {
  var valeur1 = document.getElementById("valeur1").value;
  var valeur2 = document.getElementById("valeur2").value;

  var spreadsheetId = 'hauteur site';
  var range = 'Feuille 1!A1:C1';
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
