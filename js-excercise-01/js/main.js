$(document).ready(function () {

    var $tags = $('.js-filter-category').find('a');
    var $tagsItem = $(".js-filter-tag");

    $tags.on('click', function (e) {
        var $tagName = $(this).text();

        
        if (!$(this).hasClass('active')) {
            $tags.removeClass('active');
            $(this).addClass('active');
        }

        $tagName = '#' + $tagName.replace(' ', '-').toLowerCase();
        $tagsItem.hide();

        if ($tagName == '#all') {
            $tagsItem.show();
        } else {
            $tagsItem.filter(':contains(' + $tagName + ')').show();
        }

        e.preventDefault();

    });
});