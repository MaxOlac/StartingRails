$(document).ready(function() {
  console.log("Ready!")
  $("body").on("submit",".create-oven",function(event){
    event.preventDefault();
    $(".oven").css({"visibility":"visible"});
  });
  $("body").on("submit","#new_torta",function(event){
    event.preventDefault();
    var type=$(this).children()[0].value
    var time=$(this).children()[1].value
    torta(type,time);
  });
});

// Class Torta
function torta (type,time) {
  $("#timer").attr("class","Crudo")
  $("#countdown").html(time)
  $("#status").append("Crudo")

}

// Class TortaBatch

// Class Oven
