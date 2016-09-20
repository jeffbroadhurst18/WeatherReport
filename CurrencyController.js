(function () {

    var app = angular.module("weatherReportApp");

    var CurrencyController = function ($scope,currencyhub) {

        var onError = function (reason) {
            $scope.error = "Could not fetch the data";
        };

        $scope.getRates = function () {
            if ($scope.selectedCurrency.code == "USD") {
                currencyhub.getUSRates($scope.checkboxModel).then(onGetRatesComplete, onError);
            }
            else
            {
                currencyhub.getGBRates($scope.checkboxModel).then(onGetRatesComplete, onError);
            }

            $scope.disableChecks = true;
        };

        $scope.clearSelection = function () {
            setupNew();
        }

        var onGetRatesComplete = function (data) {
            $scope.requestDate = timeConverter(data.timestamp);
            $scope.checkboxModel = data.checked;
        };

        $scope.setupCheckboxes = function (selectedCurrency) {
            $scope.checkboxModel = currencyhub.getCheckboxes(selectedCurrency);
            $scope.requestDate = null;
            $scope.disableChecks = false;
        }

        function setupNew() {
            $scope.requestDate = null;
            var initialCountry = $scope.sourceCurrencies[1];
            $scope.selectedCurrency = initialCountry;
            $scope.checkboxModel = currencyhub.getCheckboxes(initialCountry);
            $scope.disableChecks = false;
        }

        $scope.sourceCurrencies = [{ code: "USD", currency: "US Dollar" }, { code: "GBP", currency: "Sterling" }];
        setupNew();
        
        

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