
$(document).ready(function(){   
	 //alert("Estamos listos!!");
  $('#add_button').click(function(index){
    console.log($('#add_link').val()); //escribir en input y ver si aparece en consola
   $('#menu').append("<p>"+$("#add_p").val()+"</p>");
   $('#add_p').val(''); //vaciar input
   
  }); });

  
  
  
 
  function reloadLink(){
    $('a').each(function(index){
      var that = $(this);
      
    
      
  });  
  
 }


   