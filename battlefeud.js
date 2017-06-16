$(document).ready(function(){

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBBo2iJfTMTmZk2QVZun4OsVTUQGfkB5Ks",
    authDomain: "battlefeud.firebaseapp.com",
    databaseURL: "https://battlefeud.firebaseio.com",
    projectId: "battlefeud",
    storageBucket: "battlefeud.appspot.com",
    messagingSenderId: "351121516171"
  };
  firebase.initializeApp(config);

var database = firebase.database();
var randomQuestion = questionBank[Math.floor(Math.random() * questionBank.length)];
// Displays the info/screen type popup:
// $(window).load(function() {
// 	$("#myModal").modal("show");
// });

// Function that displays the question information on the main screen and sets everything to unanswered:
function setQuestion(question) {
	$("#qDisplay").html("<h1><strong>" + question.title + "</strong></h1>");
	$("#display1").html("<h2 class='unanswered' id='space1'>" + question.answerOne + "</h2>").removeClass("btn-warning").addClass("btn-primary").val("");
	$("#display2").html("<h2 class='unanswered' id='space2'>" + question.answerTwo + "</h2>").removeClass("btn-warning").addClass("btn-primary").val("");
	$("#display3").html("<h2 class='unanswered' id='space3'>" + question.answerThree + "</h2>").removeClass("btn-warning").addClass("btn-primary").val("");
	$("#display4").html("<h2 class='unanswered' id='space4'>" + question.answerFour + "</h2>").removeClass("btn-warning").addClass("btn-primary").val("");
	$("#display5").html("<h2 class='unanswered' id='space5'>" + question.answerFive + "</h2>").removeClass("btn-warning").addClass("btn-primary").val("");
	$("#questionNumber").text("Question #" + question.number);
}

//displays a question on load:
setQuestion(randomQuestion);

	// Reruns setQuestion to display a new question when "Random Question" button is pressed:
	$("#randomQuestion").on("click", function(){
		setQuestion(randomQuestion);
		randomQuestion = questionBank[Math.floor(Math.random() * questionBank.length)];
	});

	// Passes through the clicked div, applies the appropriate class and checks which answer number to reveal
	function answerClick(answer){
			$(answer).removeClass("btn-primary").addClass("btn-warning");
			if(answer.id === "display1"){
				$("#space1").removeClass("unanswered");
				audioCorrect(answer)
				// $(answer).val("clicked");
			}if(answer.id === "display2"){
				$("#space2").removeClass("unanswered");
				audioCorrect(answer)
				// $(answer).val("clicked");
			}if(answer.id === "display3"){
				$("#space3").removeClass("unanswered");
				audioCorrect(answer)
				// $(answer).val("clicked");
			}if(answer.id === "display4"){
				$("#space4").removeClass("unanswered");
				audioCorrect(answer)
				// $(answer).val("clicked");
			}if(answer.id === "display5"){
				$("#space5").removeClass("unanswered");
				audioCorrect(answer)
				// $(answer).val("clicked");
		}
	};
		// Play the chime sound unless the button has already been clicked:
	function audioCorrect(clicked) {
		var correctSound = document.getElementById("correctAudio");
		correctSound.currentTime = 0;
		console.log("value of clicked div:" + clicked.value)
		if(clicked.value === ""){
			correctSound.play();
			$(clicked).val("clicked");
		}
	}

	// Displays the text, plays the chime sound, and changes the color of the answer when clicked:
	$("#display1, #display2, #display3, #display4, #display5").on("click", function(){
		answerClick(this);
	});

	// Will perform count answer as clicked if corresponding number on keyboard is pressed:
	document.addEventListener("keydown", function(e){
		if (e.keyCode === 49 || e.keyCode === 97) {
			answerClick(display1);
		} else if (e.keyCode === 50 || e.keyCode ===  98) {
			answerClick(display2);
		} else if (e.keyCode === 51 || e.keyCode === 99) {
			answerClick(display3);
		} else if (e.keyCode === 52 || e.keyCode === 100) {
			answerClick(display4);
		} else if (e.keyCode === 53 || e.keyCode === 101) {
			answerClick(display5);
		}
	});
});
