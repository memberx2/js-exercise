$(document).ready(function () {
	$("select.js-custom-dropdown").each(function() {
		var options = $("<ul/>");
		var container = $("<div/>" , {
			class: "container js-custom-dropdown"
		});
		var select = $(this);

		var selectedOption = select.find("option[selected]");
		var disabledOption = select.find("option[disabled]");

		container.append($("<button/>", {
			class: "button",
			text: selectedOption.length ? selectedOption.text() : disabledOption.text()
		}));

		disabledOption.remove();
	
		select.find("option").each(function () {
			var option = $(this);
			options.append($("<li/>" ,{
				text: option.text(),
				value: option.val()
			}));
		});

		container.append(options);
		
		select.before(container);
		container.append(select);

		$(".button", container).click(function () {
			container.toggleClass("opened");
		});

		$("li", container).click(function(e) {
			
			if (select.val() != $(this).attr("value")){
				$(".button", container).text($(e.target).text());
				select.val($(this).attr("value"));
				select[0].dispatchEvent(new Event('change'));
			}
			container.removeClass("opened");
		});	
	});
	
	$(window).click(function(e) {
		if (!$(e.target).parents(".js-custom-dropdown").length) {
	    	container.removeClass("opened");
	    }
	});

})