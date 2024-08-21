var form = $("form");
var centerDiv = $(".center");
var submissionMsg = $(".submission-message")

form.on("submit", message);

function message(event) {
  event.preventDefault();

  centerDiv.empty();

  submissionMsg.append("<h1 class='center'>Thank you for the submission! We will get back to you as soon as possible!</h1>");
}