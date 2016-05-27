/**
 * Native Anwendungsentwicklung mit SAP HANA
 *
 * JavaScript-Datei zur Abfrage der Wetterdaten
 *
 * $Autor: Stefan Kühnlein, Holger Seubert
 * $Version: 1.0
*/

//Diese Datei kann in einer Trail-Instance nicht ausgeführt werden
//Diese Datei muss im Verzeichnis <<account>>.<<rootpackage>>.weather.service gespeichert werden
  
function saveStation(pWeather, pCityId) {
	var connection = $.db.getConnection();

	var insertStmt = 'Insert into ' + '"<<account>>"."<<rootpackage>>.weather.model.hdb::data"' +
		' ("Id", "CityId", "Temperature", "Pressure","Humidity","Time") values (?,?,?,?,?,?)';
	var prepStmt = connection.prepareStatement(insertStmt);

	prepStmt.setInteger(1, 1);
	prepStmt.setInteger(2, parseInt(pCityId, 10));
	if (pWeather.main.temp !== null) {
		prepStmt.setInteger(3, pWeather.main.temp);
	}
	if (pWeather.main.pressure !== null) {
		prepStmt.setDouble(4, pWeather.main.pressure);
	}
	if (pWeather.main.humidity !== null) {
		prepStmt.setDouble(5, pWeather.main.humidity);
	}
	prepStmt.setDouble(6, pWeather.dt);
	prepStmt.execute();
	prepStmt.close();
	connection.commit();
}

function getWeatherData(cityId) {
	var destination_package = "<<rootpackage>>.weather.service";
	var destination_name = "openWeatherMapAPI";
	var appid = "&appid=<<InsertYyourAPIKey>>";
	var dest = $.net.http.readDestination(destination_package, destination_name);
	var client = new $.net.http.Client();
	var req = new $.web.WebRequest($.net.http.GET,
		"?id=" + cityId + appid);
	client.request(req, dest);
	var response = client.getResponse();
	saveStation(JSON.parse(response.body.asString()), cityId);
}