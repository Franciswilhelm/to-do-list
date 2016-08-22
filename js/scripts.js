//Business Logic
function ToDo(priorityItems, items) {
  this.priorityItems = priorityItems;
  this.items = items;
  // this.completed = false;
}

//User Logic
$(document).ready(function() {
  $("form#new-form").submit(function() {
    event.preventDefault();

    var userPriorityItem = ("input#new-priority-item").val();
    var userItem = ("input#new-item").val();

    var newToDo = new ToDo(userPriorityItem, userItem);

    console.log(userItem);
    console.log(userPriorityItem);
    console.log(newToDo);

    $("#ul-list").prepend("<li><span>" + newToDo.userPriorityItem + "</span></li>");
    $("#ul-list").append("<li><span>" + newToDo.userItem + "</span></li>");
  });
});
