/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sapui5demo.mvcapp./app-mvc-simple-5-xmlbasicview/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
