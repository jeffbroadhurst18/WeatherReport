(function () {

    var app = angular.module("weatherReportApp");

    var CurrencyController = function ($scope,currencyhub) {

        var onError = function (reason) {
            $scope.error = "Could not fetch the data";
        };

        $scope.getRates = function () {
            currencyhub.getRates($scope.checkboxModel).then(onGetRatesComplete, onError);
        };

        $scope.clearSelection = function () {
            $scope.checkboxModel = { AUD: false, EUR: false, GBP: false, PLN: false };
            $scope.quotes = null;
        }

        var onGetRatesComplete = function (data) {
            $scope.requestDate = timeConverter(data.timestamp);
            $scope.quotes = data.quotes;
            var x = $scope.checkboxModel;
        };

        $scope.checkboxModel = { AUD: false, EUR: false, GBP: false, PLN: false };
        
    };

    app.controller("CurrencyController", CurrencyController);

}());

function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours() < 10 ? "0" + a.getHours() : a.getHours();
    var min = a.getMinutes() < 10 ? "0" + a.getMinutes() : a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
    return time;
}