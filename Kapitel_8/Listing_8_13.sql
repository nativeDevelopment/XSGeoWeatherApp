/**
 * Native Anwendungsentwicklung mit SAP HANA
 *
 * Prädikative Analysen
 *
 * $Autor: Stefan Kühnlein, Holger Seubert
 * $Version: 1.0
*/

// Führen Sie den Befehl in der SQL Konsole aus.

CREATE TYPE PAL_MULTIVARSTAT_DATA_T AS TABLE(
	"X" INTEGER,
	"Y" DOUBLE
);

CREATE TYPE PAL_CONTROL_T AS TABLE(
	"NAME" VARCHAR (50),
	"INTARGS" INTEGER,
	"DOUBLEARGS" DOUBLE,
	"STRINGARGS" VARCHAR (100)
);


CREATE TYPE PAL_MULTIVARSTAT_RESULT_T AS TABLE(
	"ID" VARCHAR(100),
	"X" INTEGER,
	"Y" DOUBLE,
);