angular
	.module("SpaApp")
	.config(SpaCfg);

SpaCfg.$inject = ["$routeProvider"];

function SpaCfg($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: "views/home-view.html"
		})
		.when('/about', {
			templateUrl: "views/about-view.html"
		})
		.when('/help', {
			templateUrl: "views/help-view.html"
		})
		.otherwise('/', {
			ridirectTo: '/'
		});
};