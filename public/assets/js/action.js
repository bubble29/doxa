$(function() {
  // Useful variables
  var faded = false;

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
    var li = "<i class=\"fa fa-circle-o todo-circle text-warning\" id=\"first-co\" aria-hidden=\"true\">&nbsp;" + newTaskIn.val() + "</i>";
    $('#list-of-task').append(li);
  });

});
