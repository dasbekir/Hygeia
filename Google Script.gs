function doGet(e) { 
  Logger.log( JSON.stringify(e) );

  var result = 'Okej'; // assume success

  if (e.parameter == undefined) {
    result = 'Inga parameter';
  }
  else {
    var id = 'Google Sheets URL nyckel'; //URL nyckeln är spreadsheetURL i länken till kalkybladet docs.google.com/spreadsheetURL/d
    var sheet = SpreadsheetApp.openById(id).getActiveSheet();
    var newRow = sheet.getLastRow() + 1;
    var rowData = [];
    //var waktu = new Date();
    rowData[0] = new Date(); // Tid och datum i kolumn A
    
    for (var param in e.parameter) {
      Logger.log('Loopar, param='+param);
      var value = stripQuotes(e.parameter[param]);
      //Logger.log(param + ':' + e.parameter[param]);
      switch (param) {
        case 'hData': //Parameter
          rowData[1] = value; // Värdet i kolumn B
          break;
        case 'cData':
          rowData[2] = value;
          break;
        case 'fData':
          rowData[3] = value;
          break;
        default:
          result = "parameter har ingen stöd";
      }
    }
    Logger.log(JSON.stringify(rowData));

    // Här skriver man in ny rad för kalkylbladet
    var newRange = sheet.getRange(newRow, 1, 1, rowData.length);
    newRange.setValues([rowData]);
  }

  // Skriver ut resultat av befintlig arbete
  return ContentService.createTextOutput(result);
}

function stripQuotes( value ) {
  return value.replace(/^["']|['"]$/g, "");
}