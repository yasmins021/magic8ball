    var userName = "";
    var userInput = prompt('enter your username');
    userName = userInput;
    
    if (userInput !== userName) {
    console.log(`Hello, ${userInput} !`);
    } 
    else {
    console.log("Hello!");
    }
    
    var userQuestion = prompt('ask me anything you want!');
    if (userQuestion) {
  console.log("You asked:" + userQuestion);
    }
    var randomNumber = Math.floor(Math.random() * 8);

    var eightBall = "";
    var randomNumber = Math.floor(Math.random() * 8);

    var eightBall = "";

    switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "outlook not so good";
    break;
  case 7:
    eightBall = " signs point to yes";
    break;
  default:
    eightBall = "Sorry, my powers are limited. Please ask another question.";
    }

    console.log("Magic 8-Ball says: " + eightBall);