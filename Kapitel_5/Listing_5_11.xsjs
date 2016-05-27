/**
 * Native Anwendungsentwicklung mit SAP HANA
 *
 * JavaScript-Datei zur Abfrage der Wetterdaten
 *
 * $Autor: Stefan Kühnlein, Holger Seubert
 * $Version: 1.0
*/

//Diese Datei muss im Verzeichnis <<trailaccount>>.<<trialinstance>>.<<rootpackage>>.weather.service gespeichert werden
//Für den Zugriff auf die OpenWeatherAPI müssen Sie ihren persönlichen API-Key eintragen

var destination_package =   "<<trailaccount>>.<<trialinstance>>.<<rootpackage>>.weather.service";
var destination_name = "openWeatherMapStation";
var appid = "&appid=<<InserYourAPIKey>>";
try {
  var dest = $.net.http.readDestination(destination_package, destination_name);
  var client = new $.net.http.Client();
  var lat = $.request.parameters.get("lat");
  var lon = $.request.parameters.get("lon");
  var cityId = $.request.parameters.get("CityId");
  var path = "/find?lat=" + lat + "&lon=" + lon + "&cnt=30";
  var req =
    new $.web.WebRequest($.net.http.GET, path + appid);
  client.request(req, dest);
  var response = client.getResponse();
  $.response.contentType = "application/json";
  $.response.setBody(response.body.asString());
  $.response.status = $.net.http.OK;
} catch (e) {
  $.response.contentType = " ";
  $.response.setBody(e.message);
} 