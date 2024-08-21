var countA = 0;
var countB = 0;
var countC = 0;
var countD = 0;

var form = $("form");
var resultA = $(".result-a");
var resultB = $(".result-b");
var resultC = $(".result-c");
var resultD = $(".result-d");
var resultOther = $(".other-result");

form.on("submit", result);

function result(event) {
  event.preventDefault();
  
  var answer1 = $("input[name = 'activity']:checked").val();
  var answer2 = $("input[name = 'environment']:checked").val();
  var answer3 = $("input[name = 'challenge']:checked").val();
  var answer4 = $("input[name = 'fulfilling']:checked").val();
  var answer5 = $("input[name = 'team']:checked").val();
  var answer6 = $("input[name = 'motiviation']:checked").val();
  var answer7 = $("input[name = 'skill']:checked").val();
  var answer8 = $("input[name = 'project']:checked").val();
  var answer9 = $("input[name = 'job']:checked").val();
  var answer10 = $("input[name = 'balance']:checked").val();

  var answers = [answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10]
  console.log(answers);

  answers.forEach(function countAnswers(answer) {
    if (answer == "a") {
      countA++;
    } else if (answer == "b") {
      countB++;
    } else if (answer == "c") {
      countC++;
    } else {
      countD++;
    }
  });

  form.empty();
  $(".change").text("Some career choices you may want to consider are...");
  
  if (countA > countB && countA > countC && countA > countD) { // if A is the most picked
    resultA.css("display", "block");
    // alert("finance, engineering, project management, or law...");
    
  } else if (countB > countA && countB > countC && countB > countD) { // if B is the most picked
    resultB.css("display", "block");
    // alert("graphic design, writing, marketing, or the arts, film/video producer, potter");
  } else if (countC > countA && countC > countB && countC > countD) { // if C is the most picked
    resultC.css("display", "block");
    // alert("teaching, counseling, social work, or healthcare");
  } else if (countD > countA && countD > countB && countD > countC) { // if D is the most picked
    resultD.css("display", "block");
    // alert("construction, skilled trades (electrician, plumber), architecture, or environmental science...");
  } else { // when there isn't an answer that's the most picked
    resultOther.css("display", "block");
    // alert("Entrepreneur, product manager, event planner, journalist, marketing manager, consultant")
  }

  
}