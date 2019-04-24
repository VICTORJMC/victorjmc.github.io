$(document).ready(function(){


    /*Scroll arriba de la web*/
    $(".subir").click(function(e){
      e.preventDefault();         // previene la acción por defecto asociada a ese evento (ir a otra url); 

      $('html, body').animate({
           scrollTop: 0         //suba pixel 0 en 500 miliseg
      }, 4000);
      
      return false;             //previene comportamiento default, error
    });




    


  
  


});
