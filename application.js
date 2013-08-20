$(document).ready(function() {

  var todoTemplate = $.trim($('#todo_template').html());

  function buildTodo(todoName) {
    var $todo = $(todoTemplate);
    $todo.find('h2').text(todoName);
    return $todo;
  }

  var add = function(){
    $('button').on('click', function(){
      var todo_name = $(':input[class="todo"]').val();
      var new_todo = buildTodo(todo_name);
      $('.todo_list').append(new_todo);
    });
  };

  var remove = function(){
    $('.todo_list').on('click', '.delete', function(){
      console.log($(this).closest('div'));
      $(this).closest('div').remove();
    });
  };

  var complete = function(){
    $('.todo_list').on('click', '.complete', function(){
      $(this).closest('div').find('h2').append(" : completed");
    });
  };

  function bindEvents() {
      add();
      remove();
      complete();
  };

bindEvents();

});

