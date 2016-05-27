/**
 * Native Anwendungsentwicklung mit SAP HANA
 *
 * Textsuche
 *
 * $Autor: Stefan Kühnlein, Holger Seubert
 * $Version: 1.0
*/

// Führen Sie den SELECT Befehl in der SQL Konsole aus.

SELECT 	"<yourSchema>"."<yourNamespace>::textsearch.station"."Name", 
		"<yourSchema>"."<yourNamespace>::textsearch.station"."Comment",
		"<yourDBSchema>"."$TA_<indexName>"."TA_TOKEN"
FROM "<yourDBSchema>"."$TA_<indexName><yourSchema>"."<yourNamespace>::textsearch.station"
WHERE "<yourDBSchema>"."$TA_<indexName>"."StationID" = 
					"<yourSchema>"."<yourNamespace>::textsearch.station"."StationID"
AND "TA_TYPE" = 'StrongPositiveSentiment';