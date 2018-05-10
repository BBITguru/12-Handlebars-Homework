// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-eat").on("click", function(event) {
    var id = $(this).data("id");
    var newEat = $(this).data("neweat");

    var newEatState = {
      devoured: newEat
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed state to", newEat);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burgName").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  ////// EAT IT! ////// 
  $(".eat-burger").on("click", function(event) {
    var id = $(this).data("id");
    event.preventDefault();

    var EatBurger = {
      name: $("#burgName").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the UPDATE request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: EatBurger
    }).then(
      function() {

        console.log("updated burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
