angular
	.module("SpaApp")
	.controller("SpaCtrl", SpaCtrl);

SpaCtrl.$inject = [];

function SpaCtrl() {
	var self = this;

	var getCopyright = function() {
		return "Copyright (c) Pierson D'Enbeau 2017 All Rights Reserved";
	}
};