// Question Bank:
//Constructor proved to be more complicated than it was worth for this. 
const Question = function() {
	this.title = this,
	this.answerOne = this,
	this.answerTwo = this,
	this.answerThree = this,
	this.answerFour = this,
	this.answerFive = this,
	this.number = this,
	this.disclaimers = this
}

var citiesPopWorld = {
	title:"Most Populous Cities in the World",
	answerOne:"Tokyo - Japan",
	answerTwo:"Delhi - India",
	answerThree:"Shanghai - China",
	answerFour:"Mexico City - Mexico",
	answerFive:"Sao Paulo - Brazil",
	number: 1,
	disclaimers: "",
}

var smallStatesLand = {
	title:"Smallest United States by Land Mass",
	answerOne:"Rhode Island",
	answerTwo:"Delaware",
	answerThree:"Connecticut",
	answerFour:"New Jersey",
	answerFive:"New Hampshire",
	number: 2,
	disclaimers: "",
}

var largeEuropeLand = {
	title:"Largest European Countries by Land Mass",
	answerOne:"Russia",
	answerTwo:"Ukraine",
	answerThree:"France",
	answerFour:"Spain",
	answerFive:"Sweden",
	number: 3,
	disclaimers: "",
}

var largeCitiesUS = {
	title:"Largest US Cities by Population",
	answerOne:"New York, New York",
	answerTwo:"Los Angeles, California",
	answerThree:"Chicago, Illinois",
	answerFour:"Houston, Texas",
	answerFive:"Philadelphia, Pennsylvania",
	number: 4,
	disclaimers: "",
}

var MilitaryByMoney = {
	title:"Largest Militaries in the World (by Expenditure)",
	answerOne:"The United States",
	answerTwo:"China",
	answerThree:"Saudi Arabia",
	answerFour:"United Kingdom (Britain)",
	answerFive:"Russia",
	number: 5,
	disclaimers: "This question is ranked by national military budget in 2015",
}

var azCities = {
	title:"Most Populated Arizona Cities Outside of Phoenix Metro Area",
	answerOne:"Tucson",
	answerTwo:"Yuma",
	answerThree:"Flagstaff",
	answerFour:"Lake Havasu City",
	answerFive:"Casa Grande",
	number: 6,
	disclaimers: "Based off census 2010 data",
}



// The variable declaration of any new questions added to the question bank need to be added here seperated by a comma as well:
var questionBank = [smallStatesLand, citiesPopWorld, largeEuropeLand, largeCitiesUS, MilitaryByMoney, azCities];
