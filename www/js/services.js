var consumerKey = 'xHkW9aeTnoYk4k1lUYicCjbKY9VXjYOWxE3OsBt8';

angular.module('starter.services', [])

.factory('Favorites', function($http) {

	var Favorites = {};

	Favorites.get = function(page) {
		
		$url = "https://api.500px.com/v1/photos?feature=user_favorites&username=basel&consumer_key="+consumerKey+"&page="+page;
		return $http({method: 'GET', url: $url});
	}

	return Favorites;
})

.factory('Photos', function($http) {
	
	var Photos = {};
	
	Photos.get = function(page) {
		
		$url = "https://api.500px.com/v1/photos?username=basel&consumer_key="+consumerKey+"&page="+page;
		return $http({method: 'GET', url: $url});
	
	}
	
	return Photos;
})

.factory('Friends', function($http) {

	var Friends = {};

	Friends.get = function(page) {

		$url = "https://api.500px.com/v1/users/1632539/friends?consumer_key="+consumerKey+"&page="+page;
		return $http({method: 'GET', url: $url});

	}

	return Friends;
});
