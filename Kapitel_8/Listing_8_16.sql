/**
 * Native Anwendungsentwicklung mit SAP HANA
 *
 * Prädikative Analysen
 *
 * $Autor: Stefan Kühnlein, Holger Seubert
 * $Version: 1.0
*/

// Führen Sie den Befehl in der SQL Konsole aus.

CREATE LOCAL TEMPORARY COLUMN TABLE #PAL_CONTROL_TBL(
	"NAME" VARCHAR (50),
	"INTARGS" INTEGER,
	"DOUBLEARGS" DOUBLE,
	"STRINGARGS" VARCHAR (100)
);
INSERT INTO #PAL_CONTROL_TBL VALUES ('RESULT_TYPE',0,null,null);