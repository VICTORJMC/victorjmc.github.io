$(document).ready(function(){
	var caja = $("#caja");

$("#animar").click(function(){
          var logo = $("#logo");
    logo.animate({
            marginLeft: '700px'

           }, 'slow')
      .animate({
      
        marginTop: '480px'
      }, 'slow')
      .animate({
  
        marginLeft: '-600px'
      }, 'slow')
      .animate({
  
        marginTop: '0px'
      }, 'slow')
      .animate({
            marginLeft: '20px'

           }, 'slow')
    ;
  });
});