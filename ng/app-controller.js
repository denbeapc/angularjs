// this first little chunk of code was declared/initialized in the app-module.js file
// you add the controller to that aforementioned declaration
angular
	.module("App")
	.controller("AppCtrl", AppCtrl);

// the AppCtrl. part of this line of code has to match the name of the second parameter in the
// .controller method call
AppCtrl.$inject = [];

// the name of this function has to match the second parameter in the .controller method call
// this contains all of the controller code
function AppCtrl() {
	// this statement should ALWAYS be the first line of code
	// this is because outside apps can modify what "this" refers to
	// by setting "self" = this, you bypass outside js apps abilities to introduce errors in your code
	var self = this;
	self.pages = [ 
		{ id: 1, name: "About" },
		{ id: 2, name: "Resume" },
		{ id: 3, name: "Achievements" },
		{ id: 4, name: "Bootcamp" },
		{ id: 5, name: "Contact" }
	];
	self.getCopyright = function() {
		return "Copyright (c) Pierson D'Enbeau 2017 All Rights Reserved";
	}

	self.counter = 0;
	self.incCounter = function() {
		self.counter++;
	}
	self.decCounter = function() {
		self.counter--;
	}

	self.addPage = function(page) {
		self.pages.push(page);
	}
};