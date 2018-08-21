 $( function() {
    $( ".draggable" ).draggable();
    $( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this ).find( "img" ).html();
       $(".draggable").hide(); 
      }
    });
 });
 
 function myFunction() {
    document.getElementById("myForm").submit();
}

