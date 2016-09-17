(function () {

    var currencyhub = function ($http) {

        var getRates = function (checked) {

            var currencyString = getCurrenciesToReturn(checked.AUD, checked.EUR, checked.GBP, checked.PLN);
            return $http.get("http://apilayer.net/api/live?access_key=66f7f5aaddffd781f21e5e4863e21eec&currencies=" + currencyString)
                 .then(function (response) {
                     return response.data;
                 });
        };

        return {
            getRates: getRates
        };

    };

    var module = angular.module("weatherReportApp");
    //Register the currencyhub service with the main module
    module.factory("currencyhub", currencyhub);

}());

function getCurrenciesToReturn(aud, eur, gbp, pln) {
    var returnString = "";
    returnString += aud ? "AUD," : "";
    returnString += eur ? "EUR," : "";
    returnString += gbp ? "GBP," : "";
    returnString += pln ? "PLN," : "";
    if (returnString.length > 0) {
        returnString = returnString.slice(0, -1);
    }
    return returnString;
}