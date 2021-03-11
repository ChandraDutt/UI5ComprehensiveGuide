/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapui5demo.mvcapp./app-mvc-simple-9-appdescriptor/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
