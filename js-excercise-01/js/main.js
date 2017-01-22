$(document).ready(function () {

    var tags = $(".js-filter-category").find("a");
    var tagsItem = $(".js-filter-tag");

    tags.on("click", function (e) {
        var tag = $(this).text();

        
        if (!$(this).hasClass("active")) {
            tags.removeClass("active");
            $(this).addClass("active");
        }

        tag = "#" + tag.replace(" ", "-").toLowerCase();
        tagsItem.hide();

        if (tag == "#all") {
            tagsItem.show();
        } else {
            tagsItem.filter(":contains(" + tag + ")").show();
        }

        e.preventDefault();

    });
});