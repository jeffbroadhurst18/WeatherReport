(function () {

    var app = angular.module("weatherReportApp");

    var CardsController = function ($scope, cardshub) {

        $scope.generateOrSort = function () {

            if (!$scope.cardList) {
                $scope.cardList = cardshub.generateCards();
            }
            else {
                $scope.cardsList = cardshub.sortCards($scope.cardList);
            }
        }

        $scope.shuffle = function () {
            $scope.cardList = cardshub.shuffleCards($scope.cardList);
        }

    };

    app.controller("CardsController", CardsController);

}());