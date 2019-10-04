 $('#contenedor1').ready(function(){
       var form = $("#myform");
       var img  = $("#desapareceDiv");
       var alta = $("#alta");

       
      $('#myform')[0].reset();
       var nombre = $("#nombre");
       var dni = $("#dni");
       var dir = $("#dir");
       var ref = $("#ref");
       

       nombre.blur(function(){
       $("#nombre2").text($(this).val()).show();
       });

       dni.blur(function(){
       $("#dni2").text($(this).val()).show();
       });

       dir.blur(function(){
       $("#dir2").text($(this).val()).show();
       });

       ref.blur(function(){
       $("#ref2").text($(this).val()).show();
       });

       alta.click(function(){
       form.css("display", "none");
       img.css("display", "block");
       });
     

});


 $('#contenedor2').ready(function(){
       var alta = $("#alta2");
       var form = $("#myform2");
       var img  = $("#desapareceDiv2");

       $('#myform2')[0].reset();
       var name = $("#name1");
       var ind = $("#ind1");
       var rid = $("#rid1");
       var fer = $("#fer1");
       


       name.blur(function(){
       $("#name").text($(this).val()).show();
       });

       ind.blur(function(){
       $("#ind").text($(this).val()).show();
       });

       rid.blur(function(){
       $("#rid").text($(this).val()).show();
       });

       fer.blur(function(){
       $("#fer").text($(this).val()).show();
       });


       

       alta.click(function(){
       form.css("display", "none");
       img.css("display", "block");
       });
     

});



$('#contenedor').ready(function(){
      $('#myform3')[0].reset();
       var refci = $("#refci");
       var desci = $("#desci");
       var asuci = $("#asuci");
       var alta3 = $("#alta3");
       var form3 = $("#myform3");

       refci.blur(function(){
       $("#refci2").text($(this).val()).show();
       });
       desci.blur(function(){
       $("#desci2").text($(this).val()).show();
       });
       asuci.blur(function(){
       $("#asuci2").text($(this).val()).show();
       });
            

       alta3.click(function(){
       form3.css("display", "none");
       });

      
            
   });



$('#contenedor3').ready(function(){
      $('#myform4')[0].reset();
       var negname = $("#negname");
       var negdni = $("#negdni");
       
       var alta4 = $("#alta4");
       var form4 = $("#myform4");

       negname.blur(function(){
       $("#negname2").text($(this).val()).show();
       });
       negdni.blur(function(){
       $("#negdni2").text($(this).val()).show();
       });
       
            

       alta4.click(function(){
       form4.css("display", "none");
       });

      
            
   });


/*$('#contenedor4').ready(function(){
      $('#myform5')[0].reset();
      var rediref = $("#rediref");
      var rediexp = $("#rediexp");
      var rediname = $("#rediname");
      var redinif = $("#redinif");
      var redidir = $("#redidir");
             
      var alta5 = $("#alta5");
      var form5 = $("#myform5");

      rediref.blur(function(){
       $("#rediref2").text($(this).val()).show();
       });
      rediexp.blur(function(){
       $("#rediexp2").text($(this).val()).show();
       });
      redinif.blur(function(){
       $("#redinif2").text($(this).val()).show();
       });
      redidir.blur(function(){
       $("#redidir2").text($(this).val()).show();
       $("#redidir3").text($(this).val()).show();
       });
      rediname.blur(function(){
       $("#rediname2").text($(this).val()).show();
       $("#rediname3").text($(this).val()).show();
       });
       
            

       alta5.click(function(){
       form5.css("display", "none");
       });*/
 $('#contenedor4').ready(function(){
      $('input').val('');
      var rediref = $("#rediref2");
      var rediexp = $("#rediexp2");
      var redinif = $("#redinif2");
      var rediname = $("#rediname2");
      var rediname3 = $("#rediname3");
      var redidir = $("#redidir2");
      var redidir3 = $("#redidir3");
      var redicon = $("#redicon2");
      var redides = $("#redides2");
      var rediprin = $("#rediprin2");
      var rediapr = $("#rediapr2");
      var redipro = $("#redipro2");
       
            

       $('#alta5').click(function(){
       rediref.text($("#rediref").val()).show(); 
       rediexp.text($("#rediexp").val()).show(); 
       redinif.text($("#redinif").val()).show(); 
       rediname.text($("#rediname").val()).show(); 
       rediname3.text($("#rediname").val()).show();
       redidir.text($("#redidir").val()).show(); 
       redidir3.text($("#redidir").val()).show();
       redicon.text($("#redicon").val()).show();
       redides.text($("#redides").val()).show();
       rediprin.text($("#rediprin").val()).show();
       rediapr.text($("#rediapr").val()).show();
       redipro.text($("#redipro").val()).show();     
       $('input').css("display", "none"); 
       $('#alta5').css("display", "none");
       });

      
            
   });


      
            
   


      
