/// <reference path="../jquery-3.1.1.js" />

$(document).ready(function () {

    var rowVal = 0;
    var colVal = 0;
    var events = function (event) {
        var valuekey = event.keyCode;
        var maxRows = $("#gameboard tr ").last().attr("id").substr(4);
        var maxCols = $("#gameboard tr ").last().attr("id").substr(4);
        var rowString = "#row_";
        var colString = "_column_";
        var rowPair = rowString + rowVal;
        var colPair = colString + colVal;
        var rowColumnPair = rowPair + colPair;

        switch (valuekey) {
            case 37:
                if (colVal > 0) {
                    var newColVal = colVal - 1;
                    var newColPair = colString + newColVal;
                    var newRowColumnPair = rowPair + newColPair;


                    if (!$(newRowColumnPair).hasClass("iceberg") && !$(newRowColumnPair).hasClass("pirate")) {
                        colVal = newColVal;
                        rowColumnPair = newRowColumnPair;
                        $(".gamerow td").removeClass("ship");
                        $(rowColumnPair).addClass("ship");
                    }
                    if ($(rowColumnPair).hasClass("treasure")) {
                        $("#game h2").css({ "color": "green" }).text("Pirate Explorer-You Got The Treasure!");
                        $("#body").off(event);
                    }
                }
                else {
                    $("#game h2").css({ "color": "red" }).text("Pirate Explorer-Game Over");
                    $("#body").off(event);
                }
                break;
            case 38:
                if (rowVal > 0) {
                    var newRowVal = rowVal - 1;
                    var newRowPair = rowString + newRowVal;
                    var newRowColumnPair = newRowPair + colPair;
                    if (!$(newRowColumnPair).hasClass("iceberg") && !$(newRowColumnPair).hasClass("pirate")) {
                        rowVal = newRowVal;
                        rowColumnPair = newRowColumnPair;
                        $(".gamerow td").removeClass("ship");
                        $(rowColumnPair).addClass("ship");
                    }
                    if ($(rowColumnPair).hasClass("treasure")) {
                        $("#game h2").css({ "color": "green" }).text("Pirate Explorer-You Got The Treasure!");
                        $("#body").off(event);
                    }
                }
                else {
                    $("#game h2").css({ "color": "red" }).text("Pirate Explorer-Game Over");
                    $("#body").off(event);
                }
                break;
            case 39:
                if (colVal < maxCols) {
                    var newColVal = colVal + 1;
                    var newColPair = colString + newColVal;
                    var newRowColumnPair = rowPair + newColPair;
                    if (!$(newRowColumnPair).hasClass("iceberg") && !$(newRowColumnPair).hasClass("pirate")) {
                        colVal = newColVal;
                        rowColumnPair = newRowColumnPair;
                        $(".gamerow td").removeClass("ship");
                        $(rowColumnPair).addClass("ship");
                    }
                    if ($(rowColumnPair).hasClass("treasure")) {
                        $("#game h2").css({ "color": "green" }).text("Pirate Explorer-You Got The Treasure!");
                        $("#body").off(event);
                    }
                }
                else {
                    $("#game h2").css({ "color": "red" }).text("Pirate Explorer-Game Over");
                    $("#body").off(event);
                }
                break;
            case 40:
                if (rowVal < maxRows) {
                    var newRowVal = rowVal + 1;
                    var newRowPair = rowString + newRowVal;
                    var newRowColumnPair = newRowPair + colPair;
                    if (!$(newRowColumnPair).hasClass("iceberg") && !$(newRowColumnPair).hasClass("pirate")) {
                        rowVal = newRowVal;
                        rowColumnPair = newRowColumnPair;
                        $(".gamerow td").removeClass("ship");
                        $(rowColumnPair).addClass("ship");
                    }
                    if ($(rowColumnPair).hasClass("treasure")) {
                        $("#game h2").css({ "color": "green" }).text("Pirate Explorer-You Got The Treasure!");
                        $("#body").off(event);
                    }
                }
                else {
                    $("#game h2").css({ "color": "red" }).text("Pirate Explorer-Game Over");
                    $("#body").off(event);
                }
                break;
        }
    };

    $("#btnRestart").click(function () {
        $(".gamerow td").removeClass("ship");
        $("#row_0_column_0").addClass("ship");
        rowVal = 0;
        colVal = 0;
        $("#game h2").css({ "color": "black" }).text("Pirate Explorer");
        $("body").on("keydown", events);
    });

    $("body").on("keydown", events);
});