sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("native.xs.weather.controller.GeoStationInfo", {
		getPosition: function(oWeatherstation) {
			if (oWeatherstation) {
				var pos = oWeatherstation.Longitude + ";" + oWeatherstation.Latitude;
				return pos;
			}
			return "";
		},
		onInit: function() {
			var router = this.getOwnerComponent().getRouter();
			router.getRoute("GeoStationInfo").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function(oEvent) {
			var view = this.getView();
			var cityId = oEvent.getParameter("arguments").cityId;
			view.bindElement({
				path: "Weathermodel>/Weatherdata(" + cityId + ")",
				model: "Weathermodel"
			});

		},
		/**
		 *@memberOf native.xs.wetter.controller.GeoStationInfo
		 */
		onDebug: function() {
			this.getView().getBindingContext("Weatherdetailmodel");
		}
	});
});