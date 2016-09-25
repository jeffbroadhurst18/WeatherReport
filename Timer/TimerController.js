(function () {

    var app = angular.module("weatherReportApp");

    var TimerController = function ($scope,$interval) {
        
        var currentPic = 1;

        var getTime = function() {
            var today = new Date();
            var h = today.getHours();
            var m = today.getMinutes();
            var s = today.getSeconds();

            if (s == 0)
            {
                getNext();
            }

            m = checkTime(m);
            s = checkTime(s);
            $scope.timerValue = h + ":" + m + ":" + s;

                                
        };

        function checkTime(i) {
            if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
            return i;
        }

        $scope.nextPic = function ()
        {
            getNext();
        }

        var getNext = function () {
            currentPic = currentPic + 1;
            if (currentPic == 5) { currentPic = 1; }
            $scope.currentPicture = "Pictures/Pic" + currentPic + ".png";
        }

        var onError = function (reason) {
            $scope.error = "Could not fetch the data";
        };

        getTime();
        $interval(getTime, 1000);
        $scope.currentPicture = "Pictures/Pic" + currentPic + ".png";
    };

    app.controller("TimerController", TimerController);

}());