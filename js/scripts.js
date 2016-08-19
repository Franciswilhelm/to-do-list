//Business Logic
var textList = [];
var ping3 = "ping";
var pong5 = "pong";
var pingPong15 = "ping-pong"

function numList(number) {
  textList.splice(0);
  textList.push(0);
  for (var i = 1; i <= number; i++) {
    textList.push(i);
    if (i % 15 === 0) {
      textList.splice(i, 1, pingPong15)
    } else if (i % 5 === 0) {
      textList.splice(i, 1, pong5)
    } else if (i % 3 === 0) {
      textList.splice(i, 1, ping3)
    }
  }
  return(textList.splice(0, 1));
}
//User Logic
$(document).ready(function() {
  $("#pong_form").submit(function(event){
    event.preventDefault();
    var startNum = parseInt($("#num_input").val());
    var output = numList(startNum)

    function arrayToList(){
      var nums = "";
      for (var i = 0; i < textList.length; i++) {
        nums += "<li>" + textList[i] + "</li>";
      }
      $("#pong_output").empty().append(nums);
    }
    arrayToList(textList);
  });
});
