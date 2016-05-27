/**
 * Native Anwendungsentwicklung mit SAP HANA
 *
 * Räumliche Daten
 *
 * $Autor: Stefan Kühnlein, Holger Seubert
 * $Version: 1.0
*/

// Führen Sie den SELECT Befehl in der SQL Konsole aus.

SELECT NEW ST_Polygon('Polygon((0 0, 0 1, 1 1, 1 0, 0 0))').ST_Contains(NEW ST_Point('Point(0.5 0.5)'))
FROM DUMMY