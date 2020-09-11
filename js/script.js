$(document).ready(function() {

// FUNZIONE PER INSERIRE I MIEI MESSAGGI
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
// /FUNZIONE PER INSERIRE I MIEI MESSAGGI

// FUNZIONE PER RICEVERE RISPOSTE AUTOMATICHE
    setTimeout(receivedMessage, 1000);
  }
}
    function receivedMessage() {
      var receivedMessage = $(".templates .message-row").clone();
      receivedMessage.find(".message-text").text("OK");
      var date = new Date();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var time = hours + ":" + minutes;
      receivedMessage.find(".message-time").text(time);
      $(".chat").append(receivedMessage);
    }
// FUNZIONE PER RICEVERE RISPOSTE AUTOMATICHE

// FUNZIONE PER CANCELLARE MESSAGGIO
$(".dropdown").click(
  function() {
    $(this).siblings(".dropdown-menu").toggle();
  }
);
$("#cxl-msg").click(
  function() {
    $(this).parents(".message-row").remove();
  }
);
// /FUNZIONE PER CANCELLARE MESSAGGIO

// FUNZIONE PER CERCARE UN CONTATTO
$(".input-form").keyup(
  function() {
    searchContact();
  }
);

function searchContact() {
  var inputContent = $(".input-form").val().toLowerCase();
    $(".contacts-box").each(function() {
      var contacts = $(this).find(".contacts-text h4").text().toLowerCase();
      if (contacts.includes(inputContent)) {
        $(this).show();
      }
      else {
        $(this).hide();
      }
    }
  );
}
// /FUNZIONE PER CERCARE UN CONTATTO

// GRAFFA FINE FUNZIONE GENERALE
});
