(function () {

    var app = angular.module("weatherReportApp", ["ngRoute"]);

    app.config(
        function ($routeProvider,$httpProvider) {
            $routeProvider
            .when("/location", {
                templateUrl: "Weather/location.html",
                controller: "LocationController"
            }).when("/shopping", {
                templateUrl: "Shopping/shopping.html",
                controller: "ShoppingController"
            }).when("/currency", {
                templateUrl: "Currency/currency.html",
                controller: "CurrencyController"
            }).when("/cards", {
                templateUrl: "Cards/cards.html",
                controller: "CardsController"
            }).otherwise({ redirectTo: "/cards" });
            

        }
    
        
    );
}());