angular.module('starter.controllers', ['ionic', 'ionicLazyLoad'])

.controller('PhotosCtrl', function($scope, Photos, $ionicLoading) {
	$scope.noMorePhotos = false;
	$ionicLoading.show();
	$scope.photos = [];
	$page = 1;
	$scope.loadMorePhotos = function() {
		Photos.get($page).success(function(response) {
			
			angular.forEach(response.photos, function(photo) {
			  $scope.photos.push(photo);
			});
			
			if(response.total_pages == response.current_page) {
				$scope.noMorePhotos = true;
			}
			
			$scope.$broadcast('scroll.infiniteScrollComplete');
			$ionicLoading.hide();
			
    	});
		$page = $page+1;
	}
	
	$scope.$on('$stateChangeSuccess', function() {
		$scope.loadMorePhotos();
	});
	

})

.controller('FriendsCtrl', function($scope, Friends, $ionicLoading) {
	$scope.noMoreFriends = false;
	$ionicLoading.show();
	$scope.friends = [];
	$page = 1;
	$scope.loadMoreFriends = function() {
		Friends.get($page).success(function(response) {
			
			angular.forEach(response.friends, function(friend) {
			  $scope.friends.push(friend);
			});
			
			if(response.friends_pages == response.page) {
				$scope.noMoreFriends = true;
			}
			
			$scope.$broadcast('scroll.infiniteScrollComplete');
			$ionicLoading.hide();
			
		});
		$page = $page+1;
	};
	
	$scope.$on('$stateChangeSuccess', function() {
		$scope.loadMoreFriends();
	});
})

.controller('FavoritesCtrl', function($scope, Favorites, $ionicLoading) {
	$scope.noMoreFavorites = false;
	$ionicLoading.show();
	$scope.favorites = [];
	$page = 1;
	$scope.loadMoreFavorites = function() {

		Favorites.get($page).success(function(response) {
			angular.forEach(response.photos, function(photos) {
			  $scope.favorites.push(photos);
			});
			
			if(response.total_pages == response.current_page) {
				$scope.noMoreFavorites = true;
			}
			
			$scope.$broadcast('scroll.infiniteScrollComplete');
			$ionicLoading.hide();
		});
		$page = $page+1;
	}
	
	$scope.$on('$stateChangeSuccess', function() {
		$scope.loadMoreFavorites();
	});
});
