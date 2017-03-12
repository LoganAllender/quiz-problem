// use to print message
function print(message) {
  document.write(message);
}


// Ask a question
function askQuestion(question){
  answer = prompt(question);
  return answer.toLowerCase;
} 

//  HTML Setup for Printing Results

var correctHTML = 'You got these question(s) correct: <ol>';
var wrongHTML =  'You got these question(s) wrong: <ol>'
  

// Arrays of Questions and Answers

var Quiz = [
  ['What is the Capitol of Texas?' , 'Austin'],
  ['How many states are in the USA?' , 50],
  ['Is Javascript getting harder' , 'Yes'],  
];
  
  
// Loop of Questions
  
  var correctAnswer = 0
  var quizQuestion = Quiz[i][0];
  var quizAnswer = Quiz[i][1];

   
  for ( var i = 0 ; i < Quiz.length ; i += 1 ) {
    askQuestion(quizQuestion);
    
} if ( answer === quizAnswer) {
  correctAnswer += 1;
  correctHTML += '<li>' + quizQuestion + '</li>'
} else {
  wrongHTML += '<li>' + quizQuestion+ '</li>'
}


// Print the Final HTML Results

correctHTML += '</ol>';
wrongHTML += '</ol>';

print(correctHTML);
print(wrongHTML);
  
