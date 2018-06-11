var correct=0;
var incorrect=0;
var unanswered=0;
function getScore(){
    var question1 = $('input[name=second]:checked').attr('class');
    var question2 = $('input[name=better]:checked').attr('class');
    var question3 = $('input[name=lead]:checked').attr('class');
    var question4 = $('input[name=song]:checked').attr('class');
    var question5 = $('input[name=dave]:checked').attr('class');
    var question6 = $('input[name=thrash]:checked').attr('class');
    var question7 = $('input[name=spotify]:checked').attr('class');
    var questionset = [question1, question2, question3, question4, question5, question6, question7];

    for (i=0; i<questionset.length; i++){
        if(questionset[i] == "correct"){
            correct = correct + 1;
            console.log("correct: " + correct);
        }
        else if(questionset[i] == "wrong"){
            incorrect = incorrect + 1;
            console.log("incorrect: " + incorrect);
        }
        else {
            unanswered = unanswered + 1;
            console.log("unanswered: " + unanswered);
        }
    }
}
function displayScore(){
    document.getElementById("rescorrect").innerHTML=correct;
    document.getElementById("resincorrect").innerHTML=incorrect;
    document.getElementById("resunanswered").innerHTML=unanswered;
}
var count = 45;
var counter=setInterval(timer, 1000);
function timer(){
  count=count-1;
  if (count == 0)
  {
    results();
  }
  else {
    document.getElementById("timer").innerHTML= count + " secs";
  }
}
function results(){
    getScore();
    clearInterval(counter);
    $("#text").remove();
    document.getElementById("results").style.display = "block";
    displayScore();
}