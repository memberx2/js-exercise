$(document).ready(function () {
    $("select.js-custom-dropdown").each(function() {
        var options = $("<ul/>");
        var select = $(this);
        var container = $("<div/>", {
            class: "js-custom-dropdown"
        });

        var defaultOption = $("option[disabled]", select);
        var selected = $("option[selected]", select);

        var defaultText = selected.length > 0 ? selected.text() : defaultOption.text();
        var defaultValue = selected.length > 0 ? selected.attr("value") : defaultOption.attr("value")

        defaultOption.remove();

        var button = $("<button/>", {
            text: defaultText
        }).click(function() {
            $(this).closest(".js-custom-dropdown").toggleClass("opened");
        });

        container.append(button);

        $("option", select).each(function(){ 
            var option = $(this);

            var li = $("<li/>",{ 
                text: option.text(),
                value: option.attr("value"),
            }).click(function() {
                var selectedLi = $(this);
                var dropdownContainer = selectedLi.closest(".js-custom-dropdown");
                var dropdownButton = dropdownContainer.find("button");
                var dropdown = dropdownContainer.find("select");

                if (selectedLi.attr("value") != dropdown.val()) {

                    dropdownButton.text(selectedLi.text());
                    dropdown.val(selectedLi.attr("value"));

                    dropdown.get(0).dispatchEvent(new Event("change"));
                }

                dropdownContainer.toggleClass("opened");
            });

            options.append(li);
        });

        container.append(options);
        select.after(container);
        container.append(select);
    });

    $(document).click(function(e) {
        if($(e.target).closest(".js-custom-dropdown").length < 1)
            $(".js-custom-dropdown").removeClass("opened");
    });
});