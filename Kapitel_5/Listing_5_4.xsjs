/**
 * Native Anwendungsentwicklung mit SAP HANA
 *
 * Beispiel f�r die Auswertung von HTTP-Parametern
 *
 * $Autor: Stefan K�hnlein, Holger Seubert
 * $Version: 1.0
*/

//Diese Datei muss im Verzeichnis <<trailaccount>>.<<trialinstance>>.<<rootpackage>>.weather.service gespeichert werden

if ($.request.method === $.net.http.GET) {
	var city = $.request.parameters.get("pCity");
	var country = $.request.parameters.get("pCountry");

	var result = {
		City: city,
		Country: country
	};
	$.response.status = $.net.http.OK;
	$.response.contentType = 'application/json';
	$.response.setBody(JSON.stringify(result));
} else {
	// Nicht unterst�tzte Methode
	$.response.status = $.net.http.INTERNAL_SERVER_ERROR;
}