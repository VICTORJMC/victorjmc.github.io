$(document).ready(function(){

/* Selector de Tema*/
     var theme = $("#theme");
    
    $("#to-gold").click(function(){
       theme.attr("href", "css/gold.css");
    });

    $("#to-purple").click(function(){
      theme.attr("href", "css/purple.css");
    });

    $("#to-blue").click(function(){
      theme.attr("href", "css/blue.css");
    });

});

