$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var devourState = $(this).data("devourState");

    var newDevourState = {
      devoured: devourState
    };
  $.ajax("/api/burgers" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devoured to", devourState);
        location.reload();
      }
    );
  });
  $(".add-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        name: $("#name_input").val().trim(),
      };
  console.log(newBurger);
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
    $(".undevour").on("click", function(event) {
      var id = $(this).data("id");
  
      $.ajax("/api/burgers" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          location.reload();
        }
      );
    });
  });
  