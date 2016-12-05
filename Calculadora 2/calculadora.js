$( document ).ready(function() {
  console.log( "ready!" );
  makeNumbers();
  makeSpace();
  var totalCards=0;
  var total=0;
//=====================================================================================================================================
// Create the pile of shuffled cards
  function makeNumbers() {
    //numbers.sort( function() { return Math.random() - .5 } );
   for ( var i=0; i<10; i++ ) {
      number(i).attr('id','card'+i).appendTo('#cardPile').draggable({
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      helper: 'clone',
      revert: true
      });
    }
  }
//=====================================================================================================================================
  function makeSpace() {
    // Create the card slots
    //var words = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];
    $('#cardSlots').droppable({
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    });
  }
//=====================================================================================================================================  
  function handleCardDrop( event, ui ) {
    if (totalCards<10) {
      var cardNumber = ui.draggable.data( 'number' );
      total+=cardNumber
      $('#total_sum').html(total)
      number(cardNumber).appendTo($(this));
      //ui.draggable.addClass( 'correct' );
      //ui.draggable.draggable( 'disable' );
      // $(this).droppable( 'disable' );
      // $(this).html(cardNumber)
      //ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
      ui.draggable.draggable( 'option', 'revert', false );
      totalCards++;
    };
  }
//=====================================================================================================================================  
  function number(num) {
    return $('<div>' + num + '</div>').data( 'number', num );
  };
//=====================================================================================================================================  
});