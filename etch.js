$(document).ready(function() {

	var dimension = 16;
	drawGrid();

	function drawGrid () {
		container = $(".container"); 
		console.log("draw grid " + dimension);		
		squareWidth = 512 / dimension;
		container.append("<div class='row'></div>");
		row = container.children(":first");
		for (var i = 1; i <= dimension*dimension; i++) {
			row.append("<div class='tile'></div>");
			if (i%dimension == 0) {
				container.append("<div class='row'></div>");
				row = container.children(":last");
			};
		};
		$(".tile").css({width: squareWidth, height: squareWidth}).hover(function() {
			$(this).addClass("passed");
		});
	}

	$("#clear").on("click", function() {
		$(".tile").removeClass('passed');
		var newDim = prompt("Please enter the desired width.");
		if (newDim != null) {
			dimension = newDim;
			console.log("new dim " + dimension);
			$(".container").empty();
			drawGrid();
		}
	});

});