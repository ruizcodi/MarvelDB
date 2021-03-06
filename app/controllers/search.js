function searchCtrl($scope, $http) {

	var API_KEY		= 'f30150e881221530ec4718bf68af0a18',
		API_URL		= 'http://gateway.marvel.com:80/v1/public/characters';
	
	$scope.searchCharacter = function(character) {
		if (character == false) {
			window.location = '#/';
		}
		else {
			if (!localStorage[character]) {
				$http({
					method	: 'GET',
					url		: API_URL,
					params	: {
						'name'		: character,
						'apikey'	: API_KEY
					}
				})
				.success(function(data) {
					localStorage.setItem(character, JSON.stringify(data));
					listOfCharacters();
					window.location = '#/character/'+character;
				});
			}
			else {
				window.location = '#/character/'+character;
			}
		}
	}
}