angular.module('marveldb',['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {})
			.when('/character/:character', {
				templateUrl : 'app/views/character.html',
				controller	: 'characterCtrl'
			})
			.otherwise({
				redirectTo : '/'
			});
	}]);

var characters	= [];

function listOfCharacters() {
	characters = [];
	for(var i=0; i < localStorage.length; i++) {
		if (localStorage.key[i] != 'ruulzIndex') {
			characters.push(localStorage.key(i));
		}
	}
	$('#query').autocomplete({
		source : characters
	});
}

listOfCharacters();