/**
 * Native Anwendungsentwicklung mit SAP HANA
 *
 * JavaScript-Datei zur Abfrage der Wetterdaten
 *
 * $Autor: Stefan Kühnlein, Holger Seubert
 * $Version: 1.0
*/

//Diese Datei muss im Verzeichnis <<trailaccount>>.<<trialinstance>>.<<rootpackage>>.weather.service gespeichert werden


var latitude = $.request.parameters.get('lat');
var longitude = $.request.parameters.get('lon');
var stationen = [];
var conn = $.db.getConnection();
var query = 'SELECT "StationId", "Name", "Latitude", "Longitude" FROM "_SYS_BIC"."<<trailaccount>>.<<trialinstance>>.<<rootpackage>>.weather.model.hdb::station" AS "Station"' + 
  'where NEW ST_Point(' +  latitude + ',' + longitude +  ').ST_Buffer(0.5).' + 
  'ST_Contains(NEW ST_Point("Station"."Latitude","Station"."Longitude")) = 1';
var stmt = conn.prepareStatement(query);
var resultSet = stmt.executeQuery();
while (resultSet.next()) {
  stationen.push({
    "StationId": resultSet.getInteger(1),
    "Name": resultSet.getString(2),
    "Latitude": resultSet.getDouble(3),
    "Longitude": resultSet.getDouble(4)
  });
}
resultSet.close();
stmt.close();
conn.close();
$.response.contentType = 'application/json; charset=UTF-8';
$.response.setBody(JSON.stringify({
  "Stationen": stationen
}));
$.response.status = $.net.http.OK;