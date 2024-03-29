(function(){
    'use strict';

    angular.module('board.demo')
        .directive('scrumboardCard', CardDirective);

    function CardDirective(){
        return {
            templateUrl: '/static/html/card.html',
            restrict: 'E',
            controller: ['$scope', '$http', function($scope, $http){
                var url = '/board/cards/' + $scope.card.id + '/';
                $scope.update = function(){
                    $http.put(
                        url,
                        $scope.card
                    );
                };

                $scope.delete = function(){
                    $http.delete(url).then(function(){
                        var cards = $scope.list.cards;
                        cards.splice(cards.indexOf($scope.card),1);
                    });
                };

                $scope.modelOptions = {
                    debounce: 500
                };
            }]
        };
    };
}());