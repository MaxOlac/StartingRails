$( document ).ready(function() {
  console.log( "ready!" );
  var Board = function( selector ) {
    // Aqui denerá ir el código que tenga que ver con tu tablero 
    
    // Utiliza esta sintaxis para referirte al selector que representa al tablero.
    // De esta manera no dependerás tanto de tu HTML.  
    var $elem = $( selector );
    
    function initialize() {
      // Que debe de pasar cuando se crea un nuevo tablero?
    };

    initialize();
  };

  var PostIt = function() {
  //     <div id="master" class="post-it">
  //   <div class="header">
  //     <div class="close">X</div>
  //   </div>
  //   <div class="content" contenteditable="true">...</div>
  // </div>
    // Aquí va el código relacionado con un post-it
  };

  $(function() {
    // Esta es la fucnión que correrá cuando este listo el DOM 
    new Board('#board');
  });
//==================================================================
  $("#board").dblclick(function(){
    console.log($(this));
       
  });
//==================================================================
});
