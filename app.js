(function () {

    var app = angular.module("weatherReportApp", ["ngRoute"]);

    app.config(
        function ($routeProvider,$httpProvider) {
            $routeProvider
            .when("/location", {
                templateUrl: "location.html",
                controller: "LocationController"
            }).when("/shopping", {
                templateUrl: "shopping.html",
                controller: "ShoppingController"
            }).when("/currency", {
                templateUrl: "currency.html",
                controller: "CurrencyController"
            }).otherwise({ redirectTo: "/currency" });
            //$httpProvider.defaults.useXDomain = true;
            //delete $httpProvider.defaults.headers.common["X-Requested-With"];
            //$httpProvider.defaults.headers.common["Access-Control-Allow-Headers"] = "*";

        }
    
        
    );
}());