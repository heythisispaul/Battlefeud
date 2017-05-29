var randomQuestion = questionBank[Math.floor(Math.random() * questionBank.length)];

$(document).ready( function(){

function setQuestion(question) {
	$("#qDisplay").html("<h1><strong>" + question.title + "</strong></h1>");
	$("#display1").html("<h2 class='unanswered' id='space1'>" + question.answerOne + "</h2>").removeClass("btn-success").addClass("btn-danger");
	$("#display2").html("<h2 class='unanswered' id='space2'>" + question.answerTwo + "</h2>").removeClass("btn-success").addClass("btn-danger");;
	$("#display3").html("<h2 class='unanswered' id='space3'>" + question.answerThree + "</h2>").removeClass("btn-success").addClass("btn-danger");;
	$("#display4").html("<h2 class='unanswered' id='space4'>" + question.answerFour + "</h2>").removeClass("btn-success").addClass("btn-danger");;
	$("#display5").html("<h2 class='unanswered' id='space5'>" + question.answerFive + "</h2>").removeClass("btn-success").addClass("btn-danger");;
}

//displays a question on load:

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
	$(this).removeClass("btn-danger").addClass("btn-success");
	AudioCorrect();
});

$("#display2").on("click", function(){
	$("#space2").removeClass("unanswered")
	$(this).removeClass("btn-danger").addClass("btn-success");
	AudioCorrect();
});

$("#display3").on("click", function(){
	$("#space3").removeClass("unanswered");
	$(this).removeClass("btn-danger").addClass("btn-success");
	AudioCorrect();
});

$("#display4").on("click", function(){
	$("#space4").removeClass("unanswered");
	$(this).removeClass("btn-danger").addClass("btn-success");
	AudioCorrect();
});

$("#display5").on("click", function(){
	$("#space5").removeClass("unanswered");
	$(this).removeClass("btn-danger").addClass("btn-success");
	AudioCorrect();
});
});
