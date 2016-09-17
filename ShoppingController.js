(function () {

    var app = angular.module("weatherReportApp");

    var ShoppingController = function ($scope) {
        $scope.errorMessage = null;
        $scope.addItem = function (item) {

            for (var j = 0; j < $scope.shoppingItems.length; j++)
            {
                if (item == $scope.shoppingItems[j]) {
                    $scope.errorMessage = "Cannot add the same thing twice";
                    $scope.newItem = null;
                    return;
                };
            }

            $scope.shoppingItems.push(item);
            $scope.newItem = null;
            
        };

        $scope.removeItem = function (index) {
            $scope.shoppingItems.splice(index, 1);
        };


        $scope.errorMessage = null;
        $scope.shoppingItems = ["Bread", "Milk", "Coffee"];

        
       
    };

    app.controller("ShoppingController", ShoppingController);

}());