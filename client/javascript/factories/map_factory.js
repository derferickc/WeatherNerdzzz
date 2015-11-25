weatherNerdzzz.factory('MapFactory', function ($location) {
	var factory = {};
	factory.location = $location

	factory.getCoords = function(callback) {
		// markers is an array of objects
		markers = [
		   	{ 
				coords: {latitude: 47.6000, longitude: -122.1667 }
			},

			{ 
				coords: {latitude: 47.6097, longitude: -122.3331 }
			},

			{ 
				coords: {latitude: 47.5775, longitude: -122.2120 }
			}
		];
		
	callback(markers);
	}
	return factory;
});