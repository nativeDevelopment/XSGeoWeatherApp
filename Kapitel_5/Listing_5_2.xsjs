/**
 * Native Anwendungsentwicklung mit SAP HANA
 *
 * Verwendung der XS JavaScript Library
 *
 * $Autor: Stefan Kühnlein, Holger Seubert
 * $Version: 1.0
*/

//Diese Datei muss im Verzeichnis <<trailaccount>>.<<trialinstance>>.<<rootpackage>>.weather.service gespeichert werden


$.import("<<trailaccount>>.<<trialinstance>>.<<rootpackage>>.weather.lib", "TemparaturConverter");
var temparatur = parseInt($.request.parameters.get("Temparatur"), 10);
var kelvin =
  $.<<trailaccount>>.<<trialinstance>>.<<rootpackage>>.weather.lib.TemparaturConverter.convertFahreneinheit2Kelvin(temparatur);
var celcius =
  $.<<trailaccount>>.<<trialinstance>>.<<rootpackage>>.weather.lib.TemparaturConverter.convertFahreneinheit2Celcius(temparatur);
$.response.contentType = "text/html";
$.response.setBody("<b>Temperaturconverter</b><br> " + temparatur + "°F in " + celcius + "°C<br>" + temparatur + "°F in " + kelvin +
  "°K<br>");