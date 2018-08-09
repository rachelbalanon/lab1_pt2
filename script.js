//Exercise One

var message = "Enter A Number!";
var number = prompt(message);
var total = 0;

for (var t = 1; t <= number; t++) {
   total = total + t;
}

console.log (total);

//Exercise Two

var reponse = "";
var wordString = "";

var firstQ = prompt("Do you want to play?");

do {
    var secondQ = prompt("Enter a word.");
    wordString = (wordString + " " + secondQ);
    var thirdQ = prompt("Do you want to play again?");
}
while (thirdQ == "yes") 

alert(wordString);

//Exercise Three

var firstQ = prompt("What is your name?");
var secondQ = "yes"
var exclamationPt = ""

while (secondQ == "yes") {
  secondQ = prompt("Would you like to print your name?");

  if (secondQ == "yes") {
    exclamationPt = exclamationPt + "!"
  console.log("Hello. My name is " + firstQ + exclamationPt)
  }
}

//Exercise Four

var breakfast = "eggs and toast."
var lunch = "a salad."
var dinner = "chicken and rice."

  var question = prompt("What time of day is it?")
  if (question == "morning") {
    console.log("Since it is morning, you should be eating breakfast. We suggest " + breakfast)
  }
  else if (question == "noon") {
    console.log("Since it is noon, you should be eating lunch. We suggest " + lunch)
  }
  else if (question == "evening") {
    console.log("Since it is evening, you should be eating dinner. We suggest " + dinner)
  }