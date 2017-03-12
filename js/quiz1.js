var Quiz = [
  ['How many states are in the USA?' , 50], 
  ['How many continents are there?' , 7],
  ['How many legs does a spider have?' , 8],
];

var correctAnswers = 0 ;
var question;
var answer;
var response;
var html;
var correctAnswersArray = []; // Collect correct answers to new array 
var wrongAnswersArray = []; //  College wrong answers to new array 

function print(message){
 var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
  var listHTML = '<ol>';
  for ( var i = 0 ; i < arr.length ; i += 1 ){
    listHTML += '<li>' + arr[i] + '</li>' ;
  }
  listHTML += '</ol>';
  return listHTML; 
}


for ( var i = 0 ; i < Quiz.length ; i += 1 ){
     question = Quiz[i][0];
     answer = Quiz[i][1];
     response = prompt(question);
     response = parseInt(response);
} if ( response === answer ) {
  correctAnswers += 1;
  correctAnswersArray.push(question);
} else {
  wrongAnswersArray.push(question);
}


html = 'You got ' + correctAnswers + ' correct <br>';
html += 'You got these questions correct:';
html += buildList(correctAnswersArray);
html += 'You got these questions wrong:';
html += buildList(wrongAnswersArray);
print(html);


  
