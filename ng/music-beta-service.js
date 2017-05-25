angular
	.module("MusicApp")
	.service("BetaSvc", BetaSvc);

AppSvc.$inject = [];

function BetaSvc() {
	var self = this;
	self.about = "About the Beta Service";
}