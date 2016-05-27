/**
 * Native Anwendungsentwicklung mit SAP HANA
 *
 * Prädikative Analysen
 *
 * $Autor: Stefan Kühnlein, Holger Seubert
 * $Version: 1.0
*/

// Führen Sie den Befehl in der SQL Konsole aus.

CALL DM_PAL.PAL_MULTIVARIATESTAT_PROC(PAL_MULTIVARSTAT_DATA_TBL, #PAL_CONTROL_TBL, PAL_MULTIVARSTAT_RESULT_TBL) WITH OVERVIEW;
SELECT * FROM PAL_MULTIVARSTAT_RESULT_TBL;