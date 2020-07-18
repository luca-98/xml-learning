$("#reservationForm").validator().on("submit", function (event) {
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
    const input_date = $("#input_date").val();
    const input_time = $("#input_time").val();
    const person = $("#person").val();
    const name = $("#name").val();
    const email = $("#email").val();
    const phone = $("#phone").val();
    var settings = {
        "url": serverURL+"revervation",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            input_date,
            input_time,
            person,
            name,
            email,
            phone
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        if (response.code == 202 || response.code == 201) {
            formSuccess();
        } else {
            formError();
        }
    });
}

function formSuccess() {
    $("#reservationForm")[0].reset();
    submitMSG(true, "Submitted!")
}

function formError() {
    $("#reservationForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
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