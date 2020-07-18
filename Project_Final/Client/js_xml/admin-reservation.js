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
    const input_date = item.getElementsByTagName('input_date')[0].innerHTML;
    const input_time = item.getElementsByTagName('input_time')[0].innerHTML;
    const person = item.getElementsByTagName('person')[0].innerHTML;
    const email = item.getElementsByTagName('email')[0].innerHTML;
    const phone = item.getElementsByTagName('phone')[0].innerHTML;
    const id = item.getElementsByTagName('id')[0].innerHTML;
    const confirm = item.getElementsByTagName('confirm')[0].innerHTML;

    var node = document.createElement("tr");
    let html = '<td>' + id + '</td>'
        + '<td>' + name + '</td>'
        + '<td>' + person + '</td>'
        + '<td>' + email + '</td>'
        + '<td>' + phone + '</td>'
        + '<td>' + input_date + '</td>'
        + '<td>' + input_time + '</td>';
    if (confirm == 'false') {
        html += '<td><a class="btn btn-primary p-1"  role="button" onClick="confirm(' + id + ')">Confirm</a></td>';
    } else {
        html += '<td></td>';
    }
    node.innerHTML = html;
    $('#reversation-list tbody').prepend(node);
}

function getMenuData() {
    const settings = {
        "url": serverURL + "revervation",
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        if (response) {
            const listItem = response.getElementsByTagName("revervation");
            if (listItem.length > 0) {
                $('#reversation-list').show();
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

function confirm(id) {
    var settings = {
        "url": serverURL + "update-reversation",
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