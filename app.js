
$(document).ready(function(){
	var numClicks = 1;
		

	$("#generateLines").click(function(){
		var addLine = "<div>Line #" + numClicks + " <button class='color'>Change Color</button><button class='remove'>Remove</button></div>";
		$("#lines").append(addLine);
		numClicks++;
	});

	$("#lines").on("click", ".remove", function(){
		$(this).parent("div").remove();
	});

	$("#lines").on("click", ".color", function(){
		$(this).parent("div").toggleClass('colorChange');
	});

});