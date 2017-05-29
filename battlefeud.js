$(document).ready( function(){

var randomQuestion = questionBank[Math.floor(Math.random() * questionBank.length)];
// Flags to declare status of buttons:
var clicked1 = false;
var clicked2 = false;
var clicked3 = false;
var clicked4 = false;
var clicked5 = false;

// Displays the info/screen type popup:
// $(window).load(function() {
// 	$("#myModal").modal("show");
// });

// Function that displays the question information on the main screen and sets everything to unanswered:
function setQuestion(question) {
	$("#qDisplay").html("<h1><strong>" + question.title + "</strong></h1>");
	$("#display1").html("<h2 class='unanswered' id='space1'>" + question.answerOne + "</h2>").removeClass("btn-warning").addClass("btn-primary");
	$("#display2").html("<h2 class='unanswered' id='space2'>" + question.answerTwo + "</h2>").removeClass("btn-warning").addClass("btn-primary");
	$("#display3").html("<h2 class='unanswered' id='space3'>" + question.answerThree + "</h2>").removeClass("btn-warning").addClass("btn-primary");
	$("#display4").html("<h2 class='unanswered' id='space4'>" + question.answerFour + "</h2>").removeClass("btn-warning").addClass("btn-primary");
	$("#display5").html("<h2 class='unanswered' id='space5'>" + question.answerFive + "</h2>").removeClass("btn-warning").addClass("btn-primary");
	$("#questionNumber").text("Question #" + question.number);
	clicked1 = false;
	clicked2 = false;
	clicked3 = false;
	clicked4 = false;
	clicked5 = false;
}

//displays a question on load:
setQuestion(randomQuestion);

// Reruns setQuestion to display a new question when "Random Question" button is pressed:
$("#newQuestion").on("click", function(){
	setQuestion(randomQuestion);
	randomQuestion = questionBank[Math.floor(Math.random() * questionBank.length)];
});

// Play the chime sound:
function AudioCorrect() {
	var correctSound = document.getElementById("correctAudio");
	correctSound.currentTime = 0;
	correctSound.play();
}

// Displays the text, plays the chime sound, and changes the color of the answer when clicked:
$("#display1").on("click", function(){
	$("#space1").removeClass("unanswered");
	$(this).removeClass("btn-primary").addClass("btn-warning");
	if (clicked1 === false) {
		AudioCorrect();
	}
	clicked1 = true;
});

$("#display2").on("click", function(){
	$("#space2").removeClass("unanswered")
	$(this).removeClass("btn-primary").addClass("btn-warning");
	if (clicked2 === false) {
	AudioCorrect();
	}
	clicked2 = true;
});

$("#display3").on("click", function(){
	$("#space3").removeClass("unanswered");
	$(this).removeClass("btn-primary").addClass("btn-warning");
	if (clicked3 === false) {
	AudioCorrect();
	}
	clicked3 = true;
});

$("#display4").on("click", function(){
	$("#space4").removeClass("unanswered");
	$(this).removeClass("btn-primary").addClass("btn-warning");
	if (clicked4 === false) {
	AudioCorrect();
	}
	clicked4 = true;
});

$("#display5").on("click", function(){
	$("#space5").removeClass("unanswered");
	$(this).removeClass("btn-primary").addClass("btn-warning");
	if (clicked5 === false) {
	AudioCorrect();
	}
	clicked5 = true;
});
});
