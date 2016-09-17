(function () {

    var weatherhub = function ($http) {

        var getLocations = function () {
            return $http.get("http://datapoint.metoffice.gov.uk/public/data/txt/wxfcs/regionalforecast/json/sitelist?key=fb4c0ad5-6ba6-4068-bbcd-c5a2788e8265")
                 .then(function (response) {
                 return response.data;
              });
        };

        var getWeather = function (selectedLocation) {
            return $http.get("http://datapoint.metoffice.gov.uk/public/data/txt/wxfcs/regionalforecast/json/" + selectedLocation + "?key=fb4c0ad5-6ba6-4068-bbcd-c5a2788e8265")
            .then(function (response) {
                return response.data;
            });
        };

        return {
            getLocations: getLocations,
            getWeather:getWeather
        };

    };

    var module = angular.module("weatherReportApp");
    //Register the weatherhub service with the main module
    module.factory("weatherhub", weatherhub);

}());