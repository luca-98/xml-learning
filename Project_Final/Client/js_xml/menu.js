(function ($) {
    "use strict";

	/* ..............................................
	Loader 
    ................................................. */

    function renderMenu(item) {
        const name = item.getElementsByTagName('name')[0].innerHTML;
        const type = item.getElementsByTagName('type')[0].innerHTML;
        const img = item.getElementsByTagName('img')[0].innerHTML;
        const description = item.getElementsByTagName('description')[0].innerHTML;
        const price = item.getElementsByTagName('price')[0].innerHTML;
        var node = document.createElement("div");
        node.className = "col-lg-4 col-md-6 special-grid " + type;
        node.innerHTML =
            '<div class="gallery-single fix-img">'
            + '<img src = "' + decodeURIComponent(img) + '" class="img-fluid" alt = "Image">'
            + '<div class="why-text">'
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

    $(window).on('load', function () {
        getMenuData();
    });



}(jQuery));