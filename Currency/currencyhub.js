﻿(function () {

    var currencyhub = function ($http) {

        var getUSRates = function (checked) {

            var currencyString = getCurrenciesToReturn(checked);
            return $http.get("http://apilayer.net/api/live?access_key=66f7f5aaddffd781f21e5e4863e21eec&currencies=" + currencyString)
                 .then(function (response) {
                     for (var i = 0; i < checked.length; i++) {
                         if (checked[i].value) {
                             checked[i].rate = response.data.quotes["USD" + checked[i].code];
                         }
                     }

                     return { checked: checked, timestamp: response.data.timestamp };
                 });
        };

        var getGBRates = function (checked) {
            var currencyString = getCurrenciesToReturn(checked);
            return $http.get("http://apilayer.net/api/live?access_key=66f7f5aaddffd781f21e5e4863e21eec&currencies=" + currencyString + ",GBP")
                 .then(function (response) {
                     for (var i = 0; i < checked.length; i++) {
                         if (checked[i].value && checked[i].code != "GBP" && checked[i].code != "USD") {
                             checked[i].rate = response.data.quotes["USD" + checked[i].code] / response.data.quotes["USDGBP"];
                         }
                         if (checked[i].code == "USD" && checked[i].value) {
                             checked[i].rate = 1 / response.data.quotes["USDGBP"];
                         }
                     }

                     return { checked: checked, timestamp: response.data.timestamp };
                 });
        };

        var getCheckboxes = function (selectedCurrency) {
            if (selectedCurrency.code == "USD") {
                return [{ code: "AUD", value: false, rate: 0 }, { code: "EUR", value: false, rate: 0 }, { code: "GBP", value: false, rate: 0 }, { code: "PLN", value: false, rate: 0 }];
            }
            else {
                return [{ code: "AUD", value: false, rate: 0 }, { code: "EUR", value: false, rate: 0 }, { code: "PLN", value: false, rate: 0 }, { code: "USD", value: false, rate: 0 }];
            }
        }

        return {
            getUSRates: getUSRates,
            getGBRates: getGBRates,
            getCheckboxes: getCheckboxes
        };

    };

    var module = angular.module("weatherReportApp");
    //Register the currencyhub service with the main module
    module.factory("currencyhub", currencyhub);

}());

var getCurrenciesToReturn = function(checked) {
    var returnString = "";
    for (var i = 0; i < checked.length ; i++) {
        if (checked[i].value) {
            returnString += checked[i].code;
            returnString += ",";
        }
    }
    if (returnString.length > 0) {
        returnString = returnString.slice(0, -1);
    }
    return returnString;
}