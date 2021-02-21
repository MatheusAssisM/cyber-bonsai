var app = angular.module('app', []);

// Define the `PhoneListController` controller on the `phonecatApp` module
app.controller('appController', function ($scope, $http) {
    const URL = "http://localhost:8080"
    $scope.dados = [];

    $scope.pegarDadosApi = function () {
        console.log("Enviado pedido")
        $http.get(URL + "/info/")
            .then(function (response) {
                console.log(response.data)
                $scope.dados = response.data
            })
    }
});