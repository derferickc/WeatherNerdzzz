weatherNerdzzz.controller('ForecastController', function ($scope, MapFactory, ForecastFactory, UserFactory, $location, $routeParams) {
	var coordinate_info
	var latitude = ''
	var longitude = ''
	$scope.all = [];
	

	// visit the MapFactory in order to retrieve the coordinates to run API calls
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

	// if any id's are detected in the http request, they are stored into variables called latitude and longitude
	if ($routeParams.id && $routeParams.id2) {
		latitude = $routeParams.id;
		longitude = $routeParams.id2;
	}

	// function used to make an api call based on a date and time
	$scope.addDate = function() {
		ForecastFactory.addDate($scope.newDateForecast, latitude, longitude, function(oneResult) {
			$scope.oneResult = oneResult;
		})
	}

	// FUNCTIONS TO BE IMPLEMENTED LATER

	// Get userID in order to run a query to retrieve their saved locations
		// UserFactory.returnUser(function(data){
		// 		userID = data;
		// });

	// Run a query to retrieve a user's saved locations
		// ForecastFactory.getLocations(userID, function (locations) {
		// 	$scope.user_locations  = locations;
		// });

	// Run function to remove a user's saved locations from database
		// $scope.removeLocation = function(coordinates) {
		// 	ForecastFactory.removeLocation(userID, coordinates, function () {
		// 		ForecastFactory.getLocations(userID, function (locations) {
		// 			$scope.user_locations  = locations;
		// 		});
		// 	});
		// }

	// Run function to add a location for a user into the database
		// $scope.addLocation = function(coordinates) {
		// 	ForecastFactory.addLocation(userID, coordinates, function () {
		// 		$location.path('/userlocations');
		// 	});
		// }
});
