weatherNerdzzz.factory('ForecastFactory', function ($http) {
	var factory = {};
	var oneResult = [];

	  // basic API call
	  // $http.jsonp('https://api.forecast.io/forecast/99ca22768e030affe2df1b489fd855aa/47.6000,-122.1667?callback=JSON_CALLBACK').success(function(data){

	// Method used to fetch JSON information based on longitude and latitude synchronously using callbacks
	factory.getAll = function(coordinate_info, callback, callback2) {
		var all = [];
		for(var i=0; i<coordinate_info.length; i++){
			var apiKey = '99ca22768e030affe2df1b489fd855aa';
			var lon = coordinate_info[i].coords.longitude;
			var lat = coordinate_info[i].coords.latitude;
			var url = ['https://api.forecast.io/forecast/', apiKey, '/', lat, ',', lon, '?callback=JSON_CALLBACK'].join('');

			// actual API request
			$http.jsonp(url).success(function(data){
				all.push(data);
				callback2(data);
			})
		}
		callback(all);
	}

	// Method used to fetch JSON information based on longitude, latitude, and date/time synchronously using callbacks
	factory.addDate = function(newDateForecast, latitude, longitude, callback) {
		var apiKey = '99ca22768e030affe2df1b489fd855aa';
		var newDateForecast = newDateForecast.date;
		var lon = longitude;
		var lat = latitude;
		var url = ['https://api.forecast.io/forecast/', apiKey, '/', lat, ',', lon, ',', newDateForecast, '?callback=JSON_CALLBACK'].join('');

		// actual API request
		$http.jsonp(url).success(function(data){
			oneResult.push(data);
			callback(oneResult);
		})
	}

	return factory;

	// FUNCTIONS TO BE IMPLMENTED LATER

	// Run a query to retrieve a user's saved locations
		// factory.getLocations = function(userID, callback) {
		// 	$http.post('/getReservations', {id: userID}).success(function (locations) {
		// 		callback(locations);
		// 	});
		//   }

	// Run function to remove a user's saved locations from database
		// factory.removeLocation = function(userID, coordinates, callback) {
		// 	var removeLocation = {};
		// 	removeLocation.userID = userID;
		// 	removeLocation.coordinates = coordinates;
		// 	$http.post('/removeLocation', removeLocation).success(function (locations) {
		// 		callback(locations);
		// 	});
		// }

	// Run function to add a location for a user into the database
		// factory.addLocation = function(userID, coordinates, callback) {
		// 	var addLocation = {};
		// 	addLocation.userID = userID;
		// 	addLocation.coordinates = coordinates;
		// 	$http.post('/addLocation', addLocation).success(function(locations) {
		// 		callback(locations);
		// 	});
		// }
});