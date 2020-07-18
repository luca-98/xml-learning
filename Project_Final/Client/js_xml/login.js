$("#loginForm").validator().on("submit", function (event) {
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

$(window).on('load', function () {
    var myData = localStorage.getItem('isLogin');
    if (myData) {
        window.location.replace("admin.html");
    }
});


function submitForm() {
    // Initiate Variables With Form Content
    const username = $("#username").val();
    const password = $("#password").val();


    var settings = {
        "url": serverURL+"login",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            username,
            password
        }
    };

    $.ajax(settings).done(function (response) {
        if (response.code == 200) {
            localStorage.setItem('isLogin', true);
            window.location.replace("admin.html");
        } else {
            submitMSG(false, "username or password incorrect");
            formError();
        }
    });
}

function formSuccess() {
    $("#loginForm")[0].reset();
    submitMSG(true, "Submitted!")
}

function formError() {
    const formclass = 'login col-12 col-md-9 col-xl-6 shake animated';
    $("#loginForm").removeClass().addClass(formclass).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
        $("#loginForm").addClass('login col-12 col-md-9 col-xl-6');
    });
}

function submitMSG(valid, msg) {
    if (valid) {
        var msgClasses = "h3 text-left tada animated text-success ";
    } else {
        var msgClasses = "h3 text-left text-white ";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}