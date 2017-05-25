angular
	.module("MusicApp")
	.controller("MusicCtrl", MusicCtrl);

MusicCtrl.$inject = ["AppSvc", "BetaSvc"];

function MusicCtrl(AppSvc, BetaSvc) {
	var self = this;
	self.about = AppSvc.about;
	self.music = AppSvc.music;

	self.aboutBeta = BetaSvc.about;
};