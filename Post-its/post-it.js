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
    // Aquí va el código relacionado con un post-it
    this.create = function(x_pos,y_pos){
      var master = $('<div id="master"class="post-it"></div>');
      master.appendTo("#board");
      var header = $('<div class="header"></div>');
      header.appendTo(master);
      master.draggable({
        containment: '#board',
        handle :header,
        stack: '#master',
      });
      $('<div class="close">X</div>').appendTo(header);
      $('<div class="content" contenteditable="true">...</div>').appendTo(master)
      master.css("left",x_pos+'px');
      master.css("top",y_pos+'px');
    }
  };

  $(function() {
    // Esta es la fucnión que correrá cuando este listo el DOM 
    new Board('#board');
  });
//==================================================================
  $("#board").on('click','.close',function(event){
    event.stopPropagation();
    var post= $(this).parent().parent();
    post.remove();
  });

//==================================================================
$( "#board" ).dblclick(function() {
  if(event.target.nodeName === "BODY"){
    var pageX = event.pageX;
    var pageY = event.pageY;
    var post_it = new PostIt();
    post_it.create(pageX,pageY);
  };
 });
//==================================================================
});
