$(document).ready(function () {

  	$("ul.portfolio__lcolumn__category > .tag").click(function (e) {
    	var tag = "#" + $(this).text().toLowerCase().replace(" ", "-");
		$(".portfolio__rcolumn__box li").hide();
		$(".portfolio__rcolumn__box li:contains(" + tag + ")").show();
   		e.preventDefault();
  	});

  	$("#all").click(function (e) {
		$(".portfolio__rcolumn__box li").show();
   		e.preventDefault();
  	});

  	$("ul.portfolio__lcolumn__category > li > a").click(function (e) {
    	$(".active", $(this).closest("ul")).removeClass("active");
    	$(this).addClass("active");  	
   		e.preventDefault();
  });
});