(function () {

    var app = angular.module("weatherReportApp");

    var LocationController = function ($scope, weatherhub) {

        var onLocationsComplete = function (data) {
            $scope.locations = data.Locations.Location;

            var namesArray = [{ short: 'os', long: 'Orkney & Shetland' },
                                { short: 'he', long: 'Highland & Eilean Siar' },
                                { short: 'gr', long: 'Grampian' },
                                { short: 'ta', long: 'Tayside' },
                                { short: 'st', long: 'Strathclyde' },
                                { short: 'dg', long: 'Dumfries, Glloway, Lothian' },
                                { short: 'ni', long: 'Northern Ireland' },
                                { short: 'yh', long: 'Yorkshire & the Humber' },
                                { short: 'ne', long: 'Northeast England' },
                                { short: 'em', long: 'East Midlands' },
                                { short: 'ee', long: 'East of England' },
                                { short: 'se', long: 'London & Southeast England' },
                                { short: 'nw', long: 'Northwest England' },
                                { short: 'wm', long: 'West Midlands' },
                                { short: 'sw', long: 'Southwest England' },
                                { short: 'wl', long: 'Wales' },
                                { short: 'uk', long: 'UK' }
            ];

            for (var i = 0; i < $scope.locations.length; i++) {
                for (j = 0; j < namesArray.length; j++) {
                    if ($scope.locations[i]["@name"] == namesArray[j].short) {
                        $scope.locations[i]["@fullname"] = namesArray[j].long;
                        break;
                    }
                }
            }
        }

        var onError = function (reason) {
            $scope.error = "Could not fetch the data";
        };

        $scope.getWeather = function () {
            weatherhub.getWeather($scope.selectedLocation).then(onGetWeatherComplete, onError);
        };

        var onGetWeatherComplete = function (data) {
            $scope.weather = data;
        };

        weatherhub.getLocations()
        .then(onLocationsComplete, onError);
    };

    app.controller("LocationController", LocationController);

}());