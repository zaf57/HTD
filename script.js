gapi.load('client', initSheetsAPI);

function initSheetsAPI() {
  gapi.client.init({
    apiKey: '578231543025-m9a7l9mqcti4d7i482rqnd5u9fgpt5ju.apps.googleusercontent.com',
    clientId: 'Client_Web_1',
    discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    scope: 'https://www.googleapis.com/auth/spreadsheets',
    

project_id:"site-htd",
auth_uri:"https://accounts.google.com/o/oauth2/auth",
token_uri:"https://oauth2.googleapis.com/token",
auth_provider_x509_cert_url:"https://www.googleapis.com/oauth2/v1/certs",
client_secret:"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",
redirect_uris:["https://zaf57.github.io/HTD/","https://zaf57.github.io"]
    
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
    console.log('Valeurs enregistrées dans Google Sheets.');
  }, function(error) {
    console.error('Une erreur s\'est produite lors de l\'enregistrement des valeurs dans Google Sheets:', error);
  });
}

