 $('document').ready(function(){
  
       var nombre = $(".nombre");
       var dni = $(".dni");
       var dir = $(".dir");
       var tributo = $(".tributo");
       var marca = $(".marca");
       var modelo = $(".modelo");
       var exp = $(".exp");

       nombre.blur(function(){
            $(".nombre2").text($(this).val()).show();
            nombre.css("display", "none");
            });

       dni.blur(function(){
            $(".dni2").text($(this).val()).show();
            dni.css("display", "none");
            });

      dir.blur(function(){
            $(".dir2").text($(this).val()).show();
            dir.css("display", "none");
            });

      tributo.blur(function(){
            $(".tributo2").text($(this).val()).show();
            tributo.css("display", "none");
            });

      marca.blur(function(){
            $(".marca2").text($(this).val()).show();
            marca.css("display", "none");
            });

      modelo.blur(function(){
            $(".modelo2").text($(this).val()).show();
            modelo.css("display", "none");
            });
      exp.blur(function(){
            $(".exp2").text($(this).val()).show();
            exp.css("display", "none");
            });



});    