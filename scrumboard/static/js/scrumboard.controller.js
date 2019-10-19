(function () {
    'use strict';

    angular.module('board.demo')
        .controller('ScrumboardController',
                    ['$scope', '$http', '$location', '$routeParams', 'Login', ScrumboardController]);

    function ScrumboardController($scope, $http, $location, $routeParams, Login) {
        $scope.add = function (list, title) {
            var card = {
                list: list.id,
                title: title
            };

            $http.post('/board/cards/', card)
                .then(function (response) {
                    list.cards.push(response.data);
                },
                function(){
                    alert('Could not create card');
                }
            );

        };

        $scope.data = [];
        $http.get('/board/lists/').then(function(response){
            $scope.data = response.data;
        });
    }

}());