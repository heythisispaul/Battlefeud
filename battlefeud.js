var randomQuestion = questionBank[Math.floor(Math.random() * questionBank.length)];

$(document).ready( function(){

function setQuestion(question) {
	$("#display1").html("<h3>" + question.answerOne + "</h3>");
	$("#display2").html("<h3>" + question.answerTwo + "</h3>");
	$("#display3").html("<h3>" + question.answerThree + "</h3>");
	$("#display4").html("<h3>" + question.answerFour + "</h3>");
	$("#display5").html("<h3>" + question.answerFive + "</h3>");
}

$("#newQuestion").on("click", function(){
	setQuestion(randomQuestion);
	console.log(randomQuestion);
	randomQuestion = questionBank[Math.floor(Math.random() * questionBank.length)];
	console.log(randomQuestion);
});

});
