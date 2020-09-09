$(document).ready(function() {

$(".send-message").click(
  function() {
    sendMessage();
  }
);

$("#input-message").keyup(
  function(event) {
    if (event.which == 13) {
      sendMessage();
    }
  }
);
});

function sendMessage() {
  var inputText = $("#input-message").val();

  if(inputText != "") {
    var templateMessage = $(".templates .message-row").clone();

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var time = hours + ":" + minutes;

    templateMessage.find(".message-text").text(inputText);
    templateMessage.find(".message-time").text(time);
    templateMessage.addClass("sent");

    $(".chat").append(templateMessage);
    $("#input-message").val("");
  }
}
