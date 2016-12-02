$(document).ready(function() {
  console.log("Ready!")
  var intervalo;
  var id_tortas=0;
//====================================================
  $("body").on("submit",".create-oven",function(event){
    event.preventDefault();
    $(".oven").css({"visibility":"visible"});
  });
//====================================================
  $("body").on("submit","#new_torta",function(event){
    event.preventDefault();
    var type=$(this).children()[0].value
    var time=$(this).children()[1].value
    torta(type,time);
  });
//====================================================
// Class Torta
  function torta (type,time) {
    id_tortas=id_tortas+1;
    var new_time=parseFloat(time);
    var cook_time=0;
    intervalo=setInterval(function(){
      bake(type,new_time,cook_time)
      cook_time=cook_time+1;
      new_time=new_time-1;
    }, 1000);
  };
//====================================================
  function bake(type,time,cook){
    if (time>=0) {
     var estado = status(type,cook);
     $("#timer").attr("class",estado);
     $("#countdown").html(time);
     $("#status").html(estado);
    } else{
     var estado = status(type,cook-1);
      $("#history").css({"visibility":"visible"});
      $("#history").append("<h3>"+id_tortas+". "+type+" "+estado+"</h3>");
      console.log("YA");
      clearInterval(intervalo);    
    };
  }
//====================================================
  function bakeTime(type) {
    var bake_time=0
    switch(type) {
    case "jamon":
        bake_time=3;
        break;
    case "queso":
        bake_time=8;
        break;
    case "milanesa":
        bake_time=10;
    }
    return bake_time;
  };
//====================================================
function status(type,time) {
  var cook_time=time/bakeTime(type)
  var estado="error";
  switch(true) {
    case (cook_time < 0.5):
        estado = "Crudo";
        break;
    case (cook_time< 0.7):
        estado = "Casi-listo";
        break;
    case (cook_time<=1) :
        estado = "LISTO";
        break;
    case (cook_time> 1):
        estado = "QUEMADO";
  }
  return estado;
}

    // $("#timer").attr("class","Crudo")
    // $("#countdown").html(time)
    // $("#status").append("Crudo")
//====================================================
// Class TortaBatch
//====================================================
// Class Oven
});
//====================================================
  // function myFunction() {
  //   setInterval(function(){ 
  //     alert("Hello"); 
  //   }, 3000);
  // };
//   var myVar = setInterval(function(){ myTimer() }, 1000);

//   function myTimer() {
//     var d = new Date();
//     var t = d.toLocaleTimeString();
//     document.getElementById("demo").innerHTML = t;
//   }

// function myStopFunction() {
//     clearInterval(myVar);
// }