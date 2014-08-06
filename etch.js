var dimension = 50;
var option = "change"; //change, random, darken, trail

$(document).ready(function() {

	drawGrid();

	$("#clear").click(function() {
		if (option === "change") {
			$(".tile").removeClass('passed');
		}
		else {
			$(".tile").css({"background-color":"white", "opacity":1});
		}
	});

	$("#change").on("click", function() {
		option = "change";
		var newDim = prompt("Please enter the desired width.", 50);
		if (newDim != null) {
			dimension = newDim;
			console.log("new dim " + dimension);
			$(".container").empty();
			drawGrid();
		}
	});

	$("#greyscale").on("click", function() {
		option = "darken";
		var newDim = prompt("Please enter the desired width.", 50);
		if (newDim != null) {
			dimension = newDim;
			console.log("new dim " + dimension);
			$(".container").empty();
			drawGrid();
		}
	});

	$("#random").on("click", function() {
		option = "random";
		var newDim = prompt("Please enter the desired width.", 50);
		if (newDim != null) {
			dimension = newDim;
			console.log("new dim " + dimension);
			$(".container").empty();
			drawGrid();
		}
	});

	$("#trail").on("click", function() {
		option = "trail";
		var newDim = prompt("Please enter the desired width.", 50);
		if (newDim != null) {
			dimension = newDim;
			console.log("new dim " + dimension);
			$(".container").empty();
			drawGrid();
		}
	});
});

function drawGrid () {
	container = $(".container"); 
	console.log("draw grid " + dimension);		
	squareWidth = container.width() / dimension;
	for (var i = 1; i <= dimension*dimension; i++) {
		container.append("<div class='tile'></div>");
	};
	$(".tile").css({width: squareWidth, height: squareWidth});

	if(option === "change") {
		$(".tile").mouseenter(function() {
			$(this).addClass("passed");
		});
	}
	else if (option === "darken") {
		$(".tile").mouseenter(function() {
			$(this).css("background-color", darkenColor($(this).css("background-color")));
		});
	}
	else if (option === "random") {
		$(".tile").mouseenter(function() {
			$(this).css("background-color", randomColor());
		});
	}
	else if (option === "trail") {
		$(".tile").hover(function() {
			$(this).css("opacity", 0);
		}, function() {
			$(this).fadeTo('slow', 1);
		});
	}
}

function darkenColor(rgb){
 	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 	var red=parseInt(rgb[1]);
 	var green=parseInt(rgb[2]);
 	var blue=parseInt(rgb[3]);

 	red = red - 50;
 	green = green - 50;
 	blue = blue - 50;
 	newRgb = "rgb(" + Math.floor(red) + "," + Math.floor(green) + "," + Math.floor(blue) + ")";
 	// console.log(newRgb);
 	return newRgb;
 };

function randomColor() {
	red = Math.floor(Math.random()*255);
	green = Math.floor(Math.random()*255);
	blue = Math.floor(Math.random()*255);
 	newRgb = "rgb(" + Math.floor(red) + "," + Math.floor(green) + "," + Math.floor(blue) + ")";
 	console.log(newRgb);
 	return newRgb;
}