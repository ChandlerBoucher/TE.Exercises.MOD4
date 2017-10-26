/// <reference path="../jquery-3.1.1.js" />
/// <reference path="../jquery.validate.js" />

$(document).ready(function () {

    $("#checkout").validate({
        debug: true,
        errorLabelContainer: "#errors",
        wrapper: "li",
        errorClass: "input-validation-error",

        rules: {
            BillingAddress1: {
                required: true,
            },
            BillingCity: {
                required: true,
            },
            BillingState: {
                required: true,
            },
            BillingPostalCode: {
                required: true,
            },
            ShippingAddress1: {
                required: true,
            },
            ShippingCity: {
                required: true,
            },
            ShippingState: {
                required: true,
            },
            ShippingPostalCode: {
                required: true,
            },
            ShippingType: {
                required: true,
            },
            NameOnCard: {
                required: true,
            },
            CreditCardNumber: {
                required: true,
            },
            ExpirationDate: {
                required: true,
            },
        },

        messages: {
            BillingAddress1: {
                required: "Billing Address is missing"
            },
            BillingCity: {
                required: "Billing City is missing"
            },
            BillingPostalCode: {
                required: "Billing Postal Code is missing"
            },
            BillingState: {
                required: "Billing State is missing"
            },
            ShippingAddress1: {
                required: "Shipping Address is missing"
            },
            ShippingCity: {
                required: "Shipping City is missing"
            },
            ShippingPostalCode: {
                required: "Shipping Postal Code is missing"
            },
            ShippingState: {
                required: "Shipping State is missing"
            },
            ShippingType: {
                required: "Please select a Shipping Type"
            },
            NameOnCard: {
                required: "Name on card is missing"
            },
            CreditCardNumber: {
                required: "Please enter the number of the Credit Card you wish to use"
            },
            ExpirationDate: {
                required: "Please enter your Credit Card's expiration date"
            }
        },
    });

    $("#login #form0").validate({
        debug: false,
        errorClass: "field-validation-error",
        validClass: "field-validation-valid",

        rules: {
            EmailAddress: {
                email: true,
                required: true
            },
            Password: {
                required: true,
                minlength: 8
            },
        },

        messages: {
            EmailAddress: {
                email: "Please enter a valid e-mail address",
                required: "Please enter your e-mail"
            },
            Password: {
                required: "Please enter your password",
                minlength: "Passwords are at least eight characters long"
            }
        }
    });

    $("#register #form0").validate({
        debug: false,
        errorClass: "field-validation-error",
        validClass: "field-validation-valid",

        rules: {
            EmailAddress: {
                email: true,
                required: true,
            },
            Password: {
                required: true,
                minlength: 8,
            },
            ConfirmPassword: {
                required: true,
                equalTo: "#Password"
            },

            messages: {
                EmailAddress: {
                    email: "Please enter a valid e-mail address",
                    required: "Please enter your e-mail"
                },
                Password: {
                    required: "Please enter your password",
                    minlength: "Passwords are at least eight characters long"
                },
                ConfirmPassword: {
                    equalTo: "Your password confirmation does not match.",
                    required: "Please confirm your password",
                },
            },
        },
    });
});


