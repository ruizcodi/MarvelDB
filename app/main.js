angular.module('marveldb',['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/',{
				templateUrl: 'app/views/base.html',
				controller : 'baseController'
			})
			.otherwise({
				redirectTo : '/'
			});
	}]);