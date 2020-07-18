
$(window).on('load', function () {
    var myData = localStorage.getItem('isLogin');
    if (!myData) {
        window.location.replace("login.html");
    } else {
        getMenuData();
    }
});

$('#logout').click(function () {
    localStorage.clear();
    window.location.replace("login.html");
});

/* ..............................................
Loader 
................................................. */

function renderMenu(item) {
    const name = item.getElementsByTagName('name')[0].innerHTML;
    const type = item.getElementsByTagName('type')[0].innerHTML;
    const img = item.getElementsByTagName('img')[0].innerHTML;
    const description = item.getElementsByTagName('description')[0].innerHTML;
    const price = item.getElementsByTagName('price')[0].innerHTML;
    const id = item.getElementsByTagName('id')[0].innerHTML;
    var node = document.createElement("div");
    node.className = "col-lg-4 col-md-6 special-grid " + type;
    node.innerHTML =
        '<div class="gallery-single fix-img">'
        + '<img src = "' + decodeURIComponent(img) + '" class="img-fluid" alt = "Image">'
        + '<div class="why-text">'
        + '<button type="button" class="btn btn-danger btn-close" data-toggle="modal" data-target="#modelId" onClick="deleteItem(' + id + ')">X</button>'
        + '<h4>' + name + '</h4>'
        + '<p>' + description + '</p>'
        + '<h5> $' + price + '</h5\>'
        + '</div>'
        + '</div>';
    $('.special-list').append(node)
}

function buildMenu() {
    /* ..............................................
                   Buld Special Menu
    ................................................. */
    var Container = $('.container');
    Container.imagesLoaded(function () {
        var portfolio = $('.special-menu');
        portfolio.on('click', 'button', function () {
            $(this).addClass('active').siblings().removeClass('active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });
        var $grid = $('.special-list').isotope({
            itemSelector: '.special-grid'
        });
    });
}

function getMenuData() {
    const settings = {
        "url": serverURL + "menu",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        if (response) {
            const listItem = response.getElementsByTagName("item");
            for (const iterator of listItem) {
                renderMenu(iterator);
            }
            buildMenu();
        } else {
            $('#no-item').css('display', 'flex');
        }
    }).fail(() => {
        $('#no-item').css('display', 'flex');
    });
    $('#load-custom').hide();
}


$("#addnew").validator().on("submit", function (event) {
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
    const url = $("#url").val();
    const type = $("#type").val();
    const description = $("#description").val();
    const price = $("#price").val();
    var settings = {
        "url": serverURL + "add",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            name,
            img: encodeURIComponent(url),
            type,
            description,
            price
        }
    };

    $.ajax(settings).done(function (response) {
        if (response.code == 202 || response.code == 201) {
            location.reload();
        } else {
            formError();
        }
    });
}

function formSuccess() {
    $("#addnew")[0].reset();
    submitMSG(true, "Submitted!")
}

function formError() {
    $("#addnew .modal-body").removeClass().addClass('modal-body p-3 shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
        $(this).removeClass();
        $(this).addClass('modal-body p-3');
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


let deleteID;
function deleteItem(id) {
    deleteID = id;
}

function deleteProduct() {
    var settings = {
        "url": serverURL + "delete",
        "method": "PUT",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            deleteID
        }
    };

    $.ajax(settings).done(function (response) {
        if (response.code == 202 || response.code == 201) {
            location.reload();
        } else {
            alert("Error!");
        }
    }).fail(() => {
        alert("Error!");
    });
}
