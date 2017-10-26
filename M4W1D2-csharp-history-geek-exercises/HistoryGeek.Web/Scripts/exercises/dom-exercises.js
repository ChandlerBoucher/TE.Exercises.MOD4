/// <reference path="../jquery-3.1.1.js" />
//Locate all <div> elements and add the 'president' class.
function presentialDivs() {
    $("div[id= 'presidents']").children().addClass("president");
}

//Locate George Washington and add the 'founding-father' class
function georgeWashington() {
    $(".president").first().addClass("founding-father");
}

//Locate all Republican presidents and add the 'red' class.
function republicanPresidents() {
    $(".Republican").addClass("red");
}

//Locate all Democrat presidents and add the 'blue' class.
function democratPresidents() {
    $(".Democratic").addClass("blue");
}

//Locate all Federalist presidents and add the 'gold' class.
function otherPresidents() {
    $(":not(.Democratic .Republican)").addClass("gold");
}

//Locate all presidents named 'James' and add the 'james' class.
function presidentsNamedJames() {
    $("[id^='james']").addClass("james");
}

//Locate each president serving at the beginning of each century and add the 'beginningOfCentury' class.
function turnOfTheCenturyPresidents() {
    $("h2").next().addClass("beginningOfCentury");
}

//Locate each president serving at the end of the century and add the 'endOfCentury' class.
function endOfTheCenturyPresidents() {
    $("h2").prev().addClass("endOfCentury");
}

//Locate all presidents serving in the 1900s who appear on currency and add the 'appearOnCurrency' class.
function currencyPresidents() {
    $("h2:nth-of-type(3)").nextUntil("h2:nth-of-type(4)").addClass("appearOnCurrency");
    (function () {
        $(":not(.currency)").removeClass("appearOnCurrency");
    })();
}