sap.ui.define([
	"sap/ui/core/util/MockServer"
], function (MockServer) {
	"use strict";
	var appPath = "native/xs/weather/",
		dataFilePath = appPath + "localService/mockdata";
	return {
		init: function () {
			var manifestUrl = jQuery.sap.getModulePath(
					appPath + "manifest", ".json"),
				dataFilesUrl = jQuery.sap.getModulePath(dataFilePath),
				manifest = jQuery.sap.syncGetJSON(manifestUrl).data,
				dataSource = manifest["sap.app"].dataSources.WeatherDataSource,
				sMetadataUrl = jQuery.sap.getModulePath(appPath + 
					dataSource.settings.localUri.replace(".xml", ""), ".xml");
			// create
			var oMockServer = new MockServer({
				rootUri: dataSource.uri
			});
			// configure
			MockServer.config({
				autoRespond: true,
				autoRespondAfter: 1000
			});
			// simulate
			oMockServer.simulate(sMetadataUrl, {
				sMockdataBaseUrl : dataFilesUrl,
				bGenerateMissingMockData : true
			});
			// start
			oMockServer.start();
		}
	};
});