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

var conn = $.hdb.getConnection();
var query = 'SELECT * FROM "_SYS_BIC"."<<trailaccount>>.<<trialinstance>>.<<rootpackage>>.weather.model.hdb::station" AS "Station"' 
    + 'where NEW ST_Point(' + latitude + ',' + longitude + ').ST_BUFFER(0.5).' 
    + 'ST_CONTAINS(NEW ST_POINT("Station"."Latitude","Station"."Longitude")) = 1';

var resultSet = conn.executeQuery(query);

$.response.contentType = 'application/json; charset=UTF-8';
$.response.setBody(JSON.stringify(resultSet));
$.response.status = $.net.http.OK;