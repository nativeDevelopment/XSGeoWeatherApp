/**
 * Native Anwendungsentwicklung mit SAP HANA
 *
 * Textsuche
 *
 * $Autor: Stefan Kühnlein, Holger Seubert
 * $Version: 1.0
*/

// Führen Sie den SELECT Befehl in der SQL Konsole aus.

SELECT "StationID" AS ID, HIGHLIGHTED("Name") AS NAME
FROM "<yourDBSchema>"."<yourNamespace>::textsearch.station"
WHERE CONTAINS("Name", 'Berlin')