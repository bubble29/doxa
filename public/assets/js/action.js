$(function() {
  // Useful variables
  var faded = false;
  var fadeG = false;

  var newTaskIn = $('#new-task-in'); 
  var addTodo = $('#add-todo');
  var newTask = $('#new-task');
  var taskSubmit = $('#new-todo-submit');
  var circleCheck = $('circle-checked');

  // Controls adding new task
  addTodo.click(function(){
    if(faded == false) {
      newTask.fadeIn();
      faded = true;
    }
    else {
      newTask.fadeOut();
      faded = false;
    }
  });

  // Adds the new Task
  taskSubmit.click(function(){
    var li = "<i class=\"fa fa-circle-o todo-circle text-warning spec-task\" aria-hidden=\"true\">&nbsp;" + newTaskIn.val() + "</i>" + "<br>";
    $('#list-of-task').append(li);
    newTaskIn.val('');
  });

  // Check on click
  $('.spec-task').click(function(){
    $(this).addClass("checked");
  });

  // Adds new group

  // Controls adding new group
  $('#add-group').click(function(){
    if(fadeG == false) {
      $('#group-form').fadeIn();
      fadeG = true;
    }
    else {
      $('#group-form').fadeOut();
      fadeG = false;
    }

    // Adds new group
    $('#add-new-group').click(function(){
      var el = "<a href=\"chat.html\" class=\"btn btn-danger btn-lg group\">"+ $('#new-group-in').val() + "</a>";
      $('#group-list').append(el);
      $('#group-form').fadeOut();
      $('#new-group-in').val('');
    });








  });
});
