var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var questions = [
  {
      question: "When was OnlyFans created?",
      a: "2012",
      b: "2010",
      c: "2016",
      answer: "C"
    },
    {
      question: "When did OnlyFans seen a search increased due to the panademic?",
      a: "March 2020",
      b: "September 2020",
      c: "January 2021",
      answer: "A"
    },
  {
      question: "True or False: Parasocial Relationships is a new concept",
      a: "True",
      b: "False",
      c: "Unsure",
      answer: "B"
    },
  
  {
      question: "True or False: Technology help influnced Parasocial Relationships",
      a: "True",
      b: "False",
      c: "Unsure",
      answer: "A"
    }
  ];
	
function get(x){
  return document.getElementById(x);
}


function renderQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h2>You got " +correct+" of "+questions.length+" questions correct </h2>";
    get("test_status").innerHTML = "Quiz Completed";
    pos = 0;
    correct = 0;
    return false;
  }

  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;

  test.innerHTML = "<h3>"+question+"</h3>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }

  if(choice == questions[pos].answer){
    correct++;
  }  
  pos++;
  renderQuestion();
}

window.addEventListener("load", renderQuestion);