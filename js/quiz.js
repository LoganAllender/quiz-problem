/*
1. Ask questions
2. Store answers
3. Compare user answer with quiz answer
4. If answer is right:
    - save it to the variable "correctAnswer";
    - print the question;
5. If answer is wrong:
    - print the question;
*/

// use to print message
function print(message) {
  document.write(message);
}

//ask question
function askQuestion(question) {
     answer = prompt(question);
     return answer.toLowerCase();
}

//Create array with questions and answers 
var quiz = [
    ['What is the capital of Denmark?', 'copenhagen'],
    ['What are we learning now?', 'javascript'],
    ['Do you like to write code', 'yes']
];
var correctAnswer = 0;
var question;
var quizAnswer;

// Print the result
function printResult(arr) {
    var correctListHtml = '<h2>You got these question(s) correct:</h2> <ol>';
    var wrongListHtml = '<h2>You got these question(s) wrong:</h2> <ol>';

// Compare user answer with quiz answer
    for (var i = 0; i < arr.length; i++) {
        question = arr[i][0];
        quizAnswer = arr[i][1];

        if (askQuestion(question) === quizAnswer) {
            correctAnswer++;
            correctListHtml += '<li>' + question + '</li>';
        } else {
            wrongListHtml += '<li>' + question + '</li>';
        }
    }

    correctListHtml += '</ol>';
    wrongListHtml += '</ol>';


    print('You got ' + correctAnswer + ' question(s) right');
    print(correctListHtml);
    print(wrongListHtml);
}

printResult(quiz);