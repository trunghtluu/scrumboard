(function () {
    'use strict';

    angular
        .module('board.demo')
        .service('Login', Login);

    Login.$inject = ['$http', '$location'];

    function Login($http, $location) {
        this.login = login;
        this.isLoggedIn = isLoggedIn;
        this.logout = logout;
        this.currentUser = currentUser;

        function login(username, password) {
            return $http.post(
                '/authentication/login/',
                {
                    username: username,
                    password: password
                }
            ).then(function (response) {
                sessionStorage.currentUser = JSON.stringify(response.data);
            });
        }

        function login(credentials) {
            return $http.post('/authentication/login/', credentials)
                .then(function (response) {
                    sessionStorage.currentUser = JSON.stringify(response.data);
                });
        }

        function isLoggedIn () {
            return !!sessionStorage.currentUser;
        }


        function logout () {
            delete sessionStorage.currentUser;
            $http.get('/authentication/logout/').then(function(){
                    $location.url('/login');
                });
        }


        function currentUser () {
            if(isLoggedIn()) {
                return JSON.parse(sessionStorage.currentUser);
            } else {
                return null;
            }
        }
    }
})();