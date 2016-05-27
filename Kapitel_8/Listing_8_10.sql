/**
 * Native Anwendungsentwicklung mit SAP HANA
 *
 * Räumliche Daten
 *
 * $Autor: Stefan Kühnlein, Holger Seubert
 * $Version: 1.0
*/

// Führen Sie den Befehl in der SQL Konsole aus.

INSERT INTO WEATHER_STATION VALUES (100, NEW ST_Point('Point Z(1 1 10)'), 'StationA');
INSERT INTO WEATHER_STATION VALUES (200, NEW ST_Point('Point Z(2 2 20)'), 'StationB');