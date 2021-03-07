/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comchandu.ui5./app-mvc-simple-1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
