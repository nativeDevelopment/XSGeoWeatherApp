/**
 * Native Anwendungsentwicklung mit SAP HANA
 *
 * JavaScript-Datei zur Abfrage der Wetterdaten
 *
 * $Autor: Stefan Kühnlein, Holger Seubert
 * $Version: 1.0
*/

//Diese Datei muss im Verzeichnis <<trailaccount>>.<<trialinstance>>.<<rootpackage>>.weather.service gespeichert werden

var connection = $.hdb.getConnection();

var stationId = $.request.parameters.get("StationId");
var getClimateZoneProc = connection.loadProcedure('_SYS_BIC',
  '<<trailaccount>>.<<trialinstance>>.<<rootpackage>>.weather.procedures::get_climate_zone');

var result = getClimateZoneProc( parseInt(stationId,10));
$.response.status = $.net.http.OK;
$.response.contentType = "application/json";
$.response.setBody(JSON.stringify("OK"));