weatherNerdzzz.controller('MapController', function ($scope, MapFactory, ForecastFactory, $location, $routeParams) {
	var coordinate_info
	$scope.all =[];

	// map information for the map.html partial
	$scope.map = { 
		center: { latitude: 47.605628, longitude: -122.253799 }, 
		zoom: 12,
		options: {scrollwheel: false}
	};
	// map markers is an array of objects to be displayed on the map interface
	$scope.markers = [
		   	{ 
		   		id: 583, 
				coords: {latitude: 47.6000, longitude: -122.1667 }, 
				icon: './assets/cloud2.png',
				click: function(marker) {
					$scope.$apply(function() {
						$location.path('/one/47.6000/-122.1667');
					});	
				}	
			},

			{ 
		   		id: 1528, 
				coords: {latitude: 47.6097, longitude: -122.3331 }, 
				icon: './assets/cloud2.png',
				click: function() {
					$scope.$apply(function() {
						$location.path('/one/47.6097/-122.3331');
					});	
				}	
			},

			{ 
		   		id: 3000, 
				coords: {latitude: 47.5775, longitude: -122.2120 }, 
				icon: './assets/cloud2.png',
				click: function() {
					$scope.$apply(function() {
						$location.path('/one/47.5775/-122.2120');
					});	
				}	
			}
		];

	// marker information for the map.html partial
	MapFactory.getCoords(function (data){
		coordinate_info = data;

		// gets all coordinates based on the markers defined above
		ForecastFactory.getAll(coordinate_info, function (all){
		},

		// pushes all information retrieved from api into the $scope.all
		function(data){
			$scope.all.push(data);
		});
	});

	// click functions for markers did not work, instead routed the images to the all.html partial
	$scope.clicky = function(){
		$location.path('/all');
	}

});