/**
 * Native Anwendungsentwicklung mit SAP HANA
 *
 * XS JavaScript Library für die Konvertierung von Temperaturen
 *
 * $Autor: Stefan Kühnlein, Holger Seubert
 * $Version: 1.0
*/

//Diese Datei muss im Verzeichnis <<trailaccount>>.<<trialinstance>>.<<rootpackage>>.weather.lib unter dem Namen TemperaturConverter.xsjslib gespeichert werden

function convertFahreneinheit2Celcius(pFahreneinheit) {
	return (parseInt(pFahreneinheit,10) - 32) * 5 / 9;
}

function convertFahreneinheit2Kelvin(pFahreneinheit) {
	return (parseInt(pFahreneinheit,10) + 459.67) * 5 / 9 ;
}

function convertCelcius2Fahreneinheit(pCelcius) {
	return parseInt(pCelcius,10) * 1.8 + 32;
}