//Business Logic
function ToDo(priorityItems, items) {
  this.priorityItems = priorityItems;
  this.items = items;
}

//User Logic
$(document).ready(function() {
  $("form#new-form").submit(function() {
    event.preventDefault();
    var userPriorityItem = $("input#new-priority-item").val();
    var userItem = $("input#new-item").val();

    var newToDo = new ToDo(userPriorityItem, userItem);

    console.log(userItem);
    console.log(userPriorityItem);
    console.log(newToDo);

    $("#ul-list").prepend("<li><strong><span class='strike red'>" + newToDo.priorityItems + "</span></strong></li>");
    $("#ul-list").append("<li><span class='strike'>" + newToDo.items + "</span></li>");

    $("input#new-priority-item").val("");
    $("input#new-item").val(" ");

    $(".strike").click(function () {
      $(this).addClass("complete");
    });
  });
});
