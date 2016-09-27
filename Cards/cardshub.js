(function () {

    var cardshub = function () {

        var cardList = [];
        var suits = [];
        var faces = [];

        var generateCards = function () {
            setUpSuits();
            setUpCards();

            for (var j = 0; j < 4; j++) {
                for (var i = 0; i < 13; i++) {
                    var card = { Suit: suits[j], Value: faces[i], CardValue: i };
                    cardList.push(card);
                }
            }

            return cardList;
        };

        var sortCards = function (cardList) {
            for (var x = 0; x < cardList.length - 1; x++) {
                for (var y = x + 1; y < cardList.length; y++) {
                    if (cardList[x].Suit > cardList[y].Suit || (cardList[x].Suit == cardList[y].Suit) && (cardList[x].CardValue > cardList[y].CardValue)) {
                        var temp = cardList[x];
                        cardList[x] = cardList[y];
                        cardList[y] = temp;
                    }
                }
            }

            return cardList;
        };

        var shuffleCards = function (cardList) {
             
            for (var x = 0; x < 1000; x++) {
                var temp = cardList[0];
                var swappoint = Math.floor((Math.random() * 51) + 1);

                for (var y = 1; y < swappoint + 1; y++) {
                    cardList[y - 1] = cardList[y];
                }
                cardList[swappoint] = temp;
            }

            return cardList;
        };

        var setUpSuits = function () {
            suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
        };

        var setUpCards = function () {
            faces = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        }

        return {
            generateCards: generateCards,
            sortCards: sortCards,
            shuffleCards: shuffleCards
        };
    }
    var module = angular.module("weatherReportApp");
    //Register the currencyhub service with the main module
    module.factory("cardshub", cardshub);

}());

