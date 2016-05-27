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
 
var wetterStgt = new $.jobs.Job({uri:"readWeatherData.xsjob"});
var id = wetterStgt.schedules.add({
  description: "Laden der Wetterdaten für Stuttgart",
  xscron: "* * * * */1 * 10",
  parameter: {
    "CityId": "2825297"
  }
});