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
var destination_name = "openWeatherMapStation";
var appid = "&appid=<<InserYourAPIKey>>";

function saveStation(pStation ,pCityId) {
    var count = pStation.length;
    var index = 0;
    var connection = $.db.getConnection();
                                       
    var insertStmt = 'Insert into ' + '"_SYS_BIC"."<<trailaccount>>.<<trialinstance>>.<<rootpackage>>.weather.model.hdb::station"' + 
                      ' ("StationId", "CityId", "Name", "Latitude","Longitude") values (?,?,?,?,?)';
    var prepStmt = connection.prepareStatement(insertStmt);
    for (index = 0; index < count; index++) {
        prepStmt.setInteger(1, pStation[index].station.id);
        prepStmt.setDouble(2,parseInt(pCityId,10));
        if (pStation[index].station.name !== null) {
            prepStmt.setString(3, pStation[index].station.name);
        } else {
            prepStmt.setString(3, "unbekannt");
        }
        prepStmt.setDouble(4, pStation[index].station.coord.lat);
        prepStmt.setDouble(5, pStation[index].station.coord.lon);
        prepStmt.execute();
    }
    prepStmt.close();
    connection.commit();

}
try {
    var dest = $.net.http.readDestination(destination_package, destination_name);
    var client = new $.net.http.Client();
    var lat = $.request.parameters.get("lat");
    var lon = $.request.parameters.get("lon");
    var cityId = $.request.parameters.get("CityId");
    var path = "/find?lat=" + lat + "&lon=" + lon + "&cnt=10";
    var req = new $.web.WebRequest($.net.http.GET, path + appid);
    client.request(req, dest);
    var response = client.getResponse();
    $.response.contentType = "application/json";
    saveStation(JSON.parse(response.body.asString()),cityId);
    $.response.setBody(response.body.asString());
    $.response.status = $.net.http.OK;

} catch (e) {
    $.response.contentType = "text/plain";
    $.response.setBody(e.message);
}

