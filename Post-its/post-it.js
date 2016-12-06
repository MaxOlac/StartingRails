$( document ).ready(function() {
  console.log( "ready!" );
  var board_id=0;
  var boards=[];
  var current;
//==================================================================
  var Board = function( selector,id ) {
    // Aqui denerá ir el código que tenga que ver con tu tablero 
    this.selector=selector;
    this.iD=id;
    selector.data( 'number', id );
    this.hide=function(){
      selector.hide();
    }
    this.show=function(){
      selector.show();
    }
    // Utiliza esta sintaxis para referirte al selector que representa al tablero.
    // De esta manera no dependerás tanto de tu HTML.  
    function initialize() {
      // Que debe de pasar cuando se crea un nuevo tablero?
    };

    initialize();
  };
//==================================================================
  var PostIt = function(selector) {
    this.padre = selector;
    // Aquí va el código relacionado con un post-it
    this.create = function(x_pos,y_pos){
      var master = $('<div id="master"class="post-it"></div>');
      master.appendTo(selector);
      var header = $('<div class="header"></div>');
      header.appendTo(master);
      master.draggable({
        containment: selector,
        handle :header,
        stack: '#master',
      });
      $('<div class="close">X</div>').appendTo(header);
      $('<div class="content" contenteditable="true">...</div>').appendTo(master)
      master.css("left",x_pos+'px');
      master.css("top",y_pos+'px');
    }
  };

  // $(function() {
  //   // Esta es la fucnión que correrá cuando este listo el DOM 
  //   boards.push(new Board('.board'));
  // });
//==================================================================
  $("body").on('click','.close',function(event){
    event.stopPropagation();
    var post= $(this).parent().parent();
    post.remove();
  });

//==================================================================
$( "body").dblclick('.board',function(event) {
  if(event.target.id == "board"){
    // var pageX = event.pageX;
    // var pageY = event.pageY;
    var pageX = event.offsetX;  
    var pageY = event.offsetY;
    var post_it = new PostIt(boards[current].selector);
    post_it.create(pageX,pageY);
  };
 });
//==================================================================
  $("body").on("click","#btn_newB",function(){
    newBorad();
  });
  //==================================================================
  $("body").on("click",".link",function(event){
    current=event.target.id;
    hideBoards(boards[current].selector)
  });
//==================================================================
function newBorad() {
    var boardName = prompt("Please enter the name of new Board", "New Bord");
    if (boardName != null) {
        $("<div class='link' id='"+board_id+"' contenteditable='true'>"+boardName+"</div>").appendTo("#nav_bar")
        var div = $('<div class="board" id="board"></div>').appendTo("body");
        current=board_id;
        var tablero = new Board(div,board_id)
        boards.push(tablero);
        hideBoards(tablero);
        board_id++;
    }else{
      alert("You need a name");
      newBorad();
    }
}
//==================================================================
  function hideBoards(selector){
    $( ".board" ).each(function(){
      $(this).hide();
    });
    selector.show();
  }
//==================================================================
});
