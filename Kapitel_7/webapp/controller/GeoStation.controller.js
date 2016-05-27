sap.ui.define([
		"sap/ui/core/mvc/Controller",
		"sap/ui/Device"
	],
	function(Controller, Device) {
		"use strict";
		return Controller.extend("native.xs.weather.controller.GeoStation", {

			onInit: function() {
				this.getView();
			},

			onSelectionChange: function(oEvent) {
				var selectedItem = oEvent.getParameter("listItem") || oEvent.getSource();
				var bReplace = !Device.system.phone;
				var router = this.getOwnerComponent().getRouter();
				var weathermodel = selectedItem.getBindingContext("Weathermodel");
				router.navTo("GeoStationInfo", {
					cityId: weathermodel.getProperty("CityId")
				}, bReplace);
			}
		});
	});