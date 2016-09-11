(function () {

    var app = angular.module("weatherReportApp", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
        .when("/location", {
            templateUrl: "location.html",
            controller: "LocationController"
        }).when("/shopping", {
            templateUrl: "shopping.html",
            controller: "ShoppingController"
        }).otherwise({ redirectTo: "/shopping" });
    });
}());