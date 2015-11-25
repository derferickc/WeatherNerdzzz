weatherNerdzzz.factory('UserFactory', function ($http) {
	var factory = {};
	var userid;
	
	if (sessionStorage.getItem('sessionID') != undefined) {
		userid = sessionStorage.getItem('sessionID');
	}
	
	factory.checkSession = function(callback) {
		factory.sessionID = sessionStorage.getItem('sessionID');
		callback(factory.sessionID);
	}

	factory.loginUser = function(user, callback) {
		$http.post('/loginUser', user).success(function(userFound) {
			userid = userFound[0].id;
			sessionStorage.setItem('sessionID', userFound[0].id);
			sessionStorage.setItem('sessionName', userFound[0].name);
			callback(userFound);
		});
	}
	
	factory.logout = function(callback) {
		sessionStorage.clear();
		callback();
	}

	factory.returnUser = function(callback) {
		callback(userid);
	}

	factory.addUser = function(newUser, callback) {
		$http.post('/addUser', {name: newUser.name, email: newUser.email, password: newUser.password})
		.success(function (userInfo) {
			callback(userInfo);
		});
	}
	
	return factory;
});