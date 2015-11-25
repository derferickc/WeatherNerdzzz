var weatherNerdzzz = angular.module("weatherNerdzzz", ['ngRoute', 'uiGmapgoogle-maps']);

weatherNerdzzz.config(function ($routeProvider, uiGmapGoogleMapApiProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/map.html'
		})
		.when('/registration', {
			templateUrl: 'partials/registration.html'
		})
		.when('/all', {
			templateUrl: 'partials/all.html'
		})
		.when('/one/:id/:id2', {
			templateUrl: 'partials/one.html'
		})
		.otherwise({
			redirectTo: '/'
		});

	uiGmapGoogleMapApiProvider.configure({
		v: '3.17',
		libraries: 'weather, geometry, visualization'
	});
});