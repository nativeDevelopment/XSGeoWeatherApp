/**
 * Native Anwendungsentwicklung mit SAP HANA
 *
 * Räumliche Daten
 *
 * $Autor: Stefan Kühnlein, Holger Seubert
 * $Version: 1.0
*/

// Führen Sie den Befehl in der SQL Konsole aus.

CREATE COLUMN TABLE WEATHER_STATION (
	"StationID" INTEGER NOT NULL,
	"Location" ST_Geometry,
	"Name" NVARCHAR(5000),
PRIMARY KEY ("StationID")
);