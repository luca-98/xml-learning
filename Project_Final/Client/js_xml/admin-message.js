$(window).on('load', function () {
    var myData = localStorage.getItem('isLogin');
    if (!myData) {
        window.location.replace("login.html");
    } else {
        getMenuData()
    }
});

$('#logout').click(function () {
    localStorage.clear();
    window.location.replace("login.html");
});

function renderMenu(item) {
    const name = item.getElementsByTagName('name')[0].innerHTML;
    const email = item.getElementsByTagName('email')[0].innerHTML;
    const phone = item.getElementsByTagName('phone')[0].innerHTML;
    const id = item.getElementsByTagName('id')[0].innerHTML;
    const message = item.getElementsByTagName('message')[0].innerHTML;
    const isRead = item.getElementsByTagName('isRead')[0].innerHTML;

    var node = document.createElement("tr");
    let html = '<td>' + id + '</td>'
        + '<td>' + name + '</td>'
        + '<td>' + email + '</td>'
        + '<td>' + phone + '</td>'
        + '<td>' + message + '</td>'
    if (isRead == 'false') {
        html += '<td><a class="btn btn-primary p-1"  role="button" onClick="read(' + id + ')">Make read</a></td>';
    } else {
        html += '<td></td>';
    }
    node.innerHTML = html;
    $('#contact-list tbody').prepend(node);
}

function getMenuData() {
    const settings = {
        "url": serverURL + "contact",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        if (response) {
            const listItem = response.getElementsByTagName("contact");
            if (listItem.length > 0) {
                $('#contact-list').show();
                for (const iterator of listItem) {
                    renderMenu(iterator);
                }
            }

        } else {
            $('#no-item').css('display', 'flex');
        }
    }).fail(() => {
        $('#no-item').css('display', 'flex');
    });
    $('#load-custom').hide();
}

function read(id) {
    var settings = {
        "url": serverURL + "update-contact",
        "method": "PUT",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        "data": {
            id
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