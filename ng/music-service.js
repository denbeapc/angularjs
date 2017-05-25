angular
	.module("MusicApp")
	.service("AppSvc", AppSvc);

AppSvc.$inject = [];

function AppSvc() {
	var self = this;
	self.about = "About Angular Service";
	self.music = [
		{ artist: "Can", album: "Future Days", genre: "Krautrock", 
			pubYear: 1973, recordLabel: "UAR", stars: 4 },
		{ artist: "Led Zeppelin", album: "Mothership Deluxe Edition", genre: "Rock", 
			pubYear: 2007, recordLabel: "Atlantic", stars: 5 },
		{ artist: "Kate Bush", album: "Hounds of Love", genre: "Pop", 
			pubYear: 1985, recordLabel: "Manhattan Records", stars: 5 },
		{ artist: "Chance the Rapper", album: "Coloring Book", genre: "Rap", 
			pubYear: 2016, recordLabel: "Self", stars: 5 },
		{ artist: "Towns Van Zandt", album: "High, Low, and In Between", genre: "Country", 
			pubYear: 1971, recordLabel: "Poppy", stars: 4.5 },
		{ artist: "Manchester Orchestra", album: "Mean Everything to Nothing", genre: "Indie Rock", 
			pubYear: 2009, recordLabel: "Favorite Gentlemen", stars: 3.5 }
	];
};