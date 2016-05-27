/**
 * Native Anwendungsentwicklung mit SAP HANA
 *
 * Räumliche Daten
 *
 * $Autor: Stefan Kühnlein, Holger Seubert
 * $Version: 1.0
*/

// Führen Sie den Befehl in der SQL Konsole aus.

SELECT A."Name" AS "A", B."Name" AS "B", A."Location".ST_Distance(B."Location", 'meter') AS "Distance"
FROM WEATHER_STATION A, WEATHER_STATION B
WHERE A."StationID" = 100 AND B."StationID" = 200