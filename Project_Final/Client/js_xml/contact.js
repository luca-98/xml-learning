$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm() {
    // Initiate Variables With Form Content
    const name = $("#name").val();
    const email = $("#email").val();
    const phone = $("#phone").val();
    const message = $("#message").val();

    var settings = {
        "url": serverURL+"contact",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            name,
            email,
            phone,
            message
        }
    };

    $.ajax(settings).done(function (response) {
        if (response.code == 202 || response.code == 201) {
            formSuccess();
        } else {
            formError();
        }
    });
}

function formSuccess() {
    $("#contactForm")[0].reset();
    submitMSG(true, "Submitted!")
}

function formError() {
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
    });
}

function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-center tada animated text-success mt-5";
    } else {
        var msgClasses = "h3 text-center text-danger mt-5";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}