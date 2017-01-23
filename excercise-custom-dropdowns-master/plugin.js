$(document).ready(function () {
	$('select.js-custom-dropdown').each(function() {
		var $options = $('<ul/>');
		var $container = $('<div class=\"container js-custom-dropdown\"/>');
		var $select = $(this);

		var selectedOption = $select.find('option[selected]');
		var disabledOption = $select.find('option[disabled]');

		$container.append($("<button class=\"button\">" + (selectedOption.length ? selectedOption.text() : disabledOption.text()) + "</button>"));

		disabledOption.remove();
	
		$select.find("option").each(function () {
			var $option = $(this);
			$options.append($("<li value="+ $option.val()+">"+ $option.text()+"</li>"));
		});

		$container.append($options);
		
		$select.before($container);
		$container.append($select);

		$container.find(".button").on("click", function () {
			$container.toggleClass("opened");
		});

		$container.find("li").on("click", function(e) {
			var $optionItem = $(this);

			if ($select.val() != $optionItem.attr("value")){
				$container.find(".button").text($(e.target).text());
				$select.val($optionItem.attr("value"));
				$select[0].dispatchEvent(new Event('change'));
			}

			$container.removeClass("opened");
		});	
	});
	
	$(window).on('click', function(e) {

		if (!$(e.target).parents(".js-custom-dropdown").length) {
			$(".js-custom-dropdown").removeClass("opened");
		}

	});

})