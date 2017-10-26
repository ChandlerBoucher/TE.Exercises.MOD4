/// <reference path="../jquery-3.1.1.js" />

$(document).ready(function () {

    var taxedAmt = 0;
    var shippingCost = 0;
    var itemPrice = ($("#subtotal .price").text().substr(1));


    $("#SameShipping").click(function () {
        if ($(this).is(":checked")) {
            $("#ShippingAddress1").val($("#BillingAddress1").val());
            $("#ShippingAddress2").val($("#BillingAddress2").val());
            $("#ShippingCity").val($("#BillingCity").val());
            $("#ShippingState").val($("#BillingState").val());
            $("#ShippingPostalCode").val($("#BillingPostalCode").val());
        }
        else {
            $("#ShippingAddress1").val("");
            $("#ShippingAddress2").val("");
            $("#ShippingCity").val("");
            $("#ShippingState").val("");
            $("#ShippingPostalCode").val("");
        }
    });

    $("#shipping-info").children().change(function () {
        shippingCost = ($("input:checked").attr("data-cost").substr(1));

        $("#shipping .price").text($("input:checked").attr("data-cost"));
    });

    $("#BillingPostalCode").change(function () {
        var taxRate = $(this).val().substr(0, 2) / 100;
        taxedAmt = ((taxRate * itemPrice).toFixed(2));
        var taxedOutPut = "$" + taxedAmt;
        $("#tax .price").text(taxedOutPut);
    });

    $("#checkout").children().change(function () {
        var total = parseFloat(itemPrice);
        total += parseFloat(taxedAmt);
        total += parseFloat(shippingCost);

        var totalOutPut = "$" + total.toFixed(2);

        $("#grandtotal .price").text(totalOutPut);
    });

    //GAME EVENTS


});


