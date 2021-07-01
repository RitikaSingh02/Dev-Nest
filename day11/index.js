var questionNumber = document.querySelector(".question-number");
var questionText = document.querySelector(".question-text");
var optionContainer = document.querySelector(".option-container");
var answerIndicatorContainer = document.querySelector(".answer-indicator");
var homeBox = document.querySelector("div.home-box");
var quizBox = document.querySelector("div.quiz-box");
// console.log(quizBox , homeBox);
var resultBox = document.querySelector(".result-box");

const quiz = [
    {
        q:'Which month comes right before june ?',
        options:['may','september','july','august'],
        answer:0
    },
    {
        q:'What color is banana ? ',
        options:['red','yellow','white','blue'],
        answer:1
    },
    {
        q:'3 + 4 = 7 ?',
        options:['true','false'],
        answer:1
    },
    {
       q:'when do you have breakfast ? ',
       options:['afternoon','morning','evening'],
       answer:1
    },
    {
        q:'what is 22 + 6 = ?',
      options:['99','56','16','28'],
      answer:3
  
    }
  ]
  
var questionCounter=0;
var currentQuestion;
var availableQuestions = [];
var availableOptions=[];
var correctAnswers = 0;
var attempt =0 ;

function setAvailableQuestions(){
  const totalQuestion = quiz.length;
  for(let i=0;i<totalQuestion;i++){
      availableQuestions.push(quiz[i])
  }

}


function getNewQuestion(){
  
    document.querySelector(".question-number").innerHTML = "Question " + (questionCounter + 1) + " of " + quiz.length;

    const questionIndex = availableQuestions[Math.floor(Math.random()*availableQuestions.length)]
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;

    const index1=availableQuestions.indexOf(questionIndex);
    availableQuestions.splice(index1,1);

    const optionLen = currentQuestion.options.length
    for(let i=0;i<optionLen;i++){
        availableOptions.push(i);
    }
     
    optionContainer.innerHTML = '';

     let animationDelay = 0.15;


    for(let i=0;i<optionLen;i++){
        const optionIndex = availableOptions[Math.floor(Math.random()*availableOptions.length)];
        const index2 = availableOptions.indexOf(optionIndex);
        availableOptions.splice(index2,1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option);
        option.setAttribute("onclick","getResult(this)");
    }

    questionCounter++;
}

function getResult(element){
    const id = parseInt(element.id);
    if(id===currentQuestion.answer){
        element.classList.add("correct")
       updateAnswerIndicator("correct");
       correctAnswers++;
    }
    else{
        element.classList.add("wrong");
        updateAnswerIndicator("wrong");
         const optionLen = optionContainer.children.length;
         for(let i=0;i<optionLen;i++){
             if(parseInt(optionContainer.children[i].id)===currentQuestion.answer){
                optionContainer.children[i].classList.add("correct");
             }
         }

    }
  attempt++;
  unclickableOptions();

}

function unclickableOptions(){
    const optionLen = optionContainer.children.length;
    for(let i=0;i<optionLen;i++)
    {
        optionContainer.children[i].classList.add("already-answered");
    }
}


function answerIndicator(){
    answerIndicatorContainer.innerHTML= '';
    const totalQuestion = quiz.length;
    for(let i=0;i<totalQuestion;i++){
        const indicator = document.createElement("div");
        answerIndicatorContainer.appendChild(indicator);
    }
}


function updateAnswerIndicator(marktype){
    answerIndicatorContainer.children[questionCounter-1].classList.add(marktype);
}


function next(){
    if(questionCounter===quiz.length){
        console.log("quiz over");
        quizOver();
    }
    else{
        getNewQuestion();
    }
}


function quizOver(){
   document.querySelector("div.quiz-box").classList.add("hide");
   resultBox.classList.remove("hide");
   quizresult();
}

 function quizresult(){
     resultBox.querySelector(".total-question").innerHTML = quiz.length;
     resultBox.querySelector(".total-attempt").innerHTML = attempt;
     resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
     resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;
      const percentage = (correctAnswers/quiz.length)*100;
      resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2)+"%";
      resultBox.querySelector(".total-score").innerHTML = correctAnswers+"/"+quiz.length;

 }

 function resetQuiz(){
     questionCounter=0;
     correctAnswers=0;
     attempt=0;
 }

function tryAgainQuiz(){
    resultBox.classList.add("hide");
    document.querySelector("div.quiz-box").classList.remove("hide");

    resetQuiz();
    startQuiz();
}

function goToHome(){
    resultBox.classList.add("hide");
    document.querySelector("div.home-box").classList.remove("hide");
}

function startQuiz(){
    document.querySelector("div.home-box").classList.add("hide");
    document.querySelector("div.quiz-box").classList.remove("hide");
    setAvailableQuestions();
    getNewQuestion();

   answerIndicator();

}

window.onload=function(){
    document.querySelector("span.total-question").innerHTML = quiz.length;
}