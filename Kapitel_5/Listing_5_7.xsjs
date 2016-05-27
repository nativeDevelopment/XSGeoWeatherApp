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

var destination_package = "<<trailaccount>>.<<trialinstance>>.<<rootpackage>>.weather.service";
var destination_name = "openWeatherMa<<InserYourAPIKey>>pAPI";
var appid = "&appid=";
var cityId = $.request.parameters.get('cityId');
try {
	var dest = $.net.http.readDestination(destination_package, destination_name);
	var client = new $.net.http.Client();
	var req = new $.web.WebRequest($.net.http.GET,
		"id=" + cityId + appid);
	client.request(req, dest);
	var response = client.getResponse();
	$.response.contentType = "application/json";
	$.response.setBody(response.body.asString());
	$.response.status = $.net.http.OK;
} catch (e) {
	$.response.contentType = "text/plain";
	$.response.setBody(e.message);
}