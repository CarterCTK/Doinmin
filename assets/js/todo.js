var set;

$("ul").on("click", ".task", function() {
	$(this).toggleClass("completed")	
})

$("ul").on("click", ".delete", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	})
	event.stopPropagation();
	clearTimeout(set);
})

var audio = document.getElementById("audio");



$("#add").on("click", function() {

		var i = $("#task").val();
		$("#task, #time").val("");
		$("ul").append("<li><span class='delete'><i class='fa fa-times' aria-hidden='true'></i></span> " + "&nbsp" + "<span class='start'><i class='fa fa-play' aria-hidden='true'></i> </span>" + "<span class='task'>" + i + "</span>" + "&nbsp" + "<input type='text' class='time' placeholder='time'>" + "  min" + "</li>");	
})


$("ul").on("click", ".start", function() {
	console.log("started");
	var timeInput = $(this).parent().children('.time');
	var timeInputValue = timeInput.val();
	var milliSeconds = Number(timeInputValue)*60*1000;
	console.log(milliSeconds);
	set = setTimeout( () => {
		audio.play();
		$(".popup").css("display", "block");
		$(".closePop").on("click", function() {
			$(".popup").css("display", "none");
			audio.pause();
		})
		$(this).parent().children('.task').toggleClass("completed");
	}
		, milliSeconds);
})

$(".help-icon").on("click", function() {
	$(".help").css({
		display: "block"
	});

	// $(this).fadeOut(200);
	// $("h1, input, button").fadeOut(200);
});

$(".close-icon").on("click", function() {
	$(".help").css({
		display: "none"

	})

	// $("h1, input, button, .help-icon").fadeIn(200);ionG
	
})









