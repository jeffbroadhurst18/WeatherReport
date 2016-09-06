(function () {

    var app = angular.module("weatherReportApp", ["ngRoute"]);

    app.config(function ($routeProvider) {
        $routeProvider
        .when("/location", {
            templateUrl: "location.html",
            controller: "LocationController"
        }).when("/report", {
            tempateUrl: "report.html",
            controller: "ReportController"
        }).otherwise({ redirectTo: "/location" });
    });
}());