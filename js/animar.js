$(document).ready(function(){
	var caja = $("#caja");

$("#animar").click(function(){
          var logo = $("#logo");
    logo.animate({
            marginLeft: '700px'

           }, 'slow')
      .animate({
      
        marginTop: '680px'
      }, 'slow')
      .animate({
  
        marginLeft: '-800px'
      }, 'slow')
      .animate({
  
        marginTop: '50px'
      }, 'slow')
      .animate({
            marginLeft: '20px'

           }, 'slow')
    ;
  });
});