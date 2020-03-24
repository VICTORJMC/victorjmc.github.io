var numeroCPU = Math.floor((Math.random() * 100) + 1);
var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "INTENTO: " + count;
  
  
 var numeroUsuario = document.getElementById("myText").value;

 if(numeroUsuario == numeroCPU){
     /*console.log('ACERTASTE');*/
     document.getElementById("demo").innerHTML = 'ACERTASTE';
     document.body.style.backgroundImage = "url('simpson.gif')";
     document.body.style.backgroundRepeat = "no-repeat";
     document.getElementById("demo").style.fontSize = "68pt";
     document.getElementById("demo").style.color = "red";
     document.getElementById("hide").style.display = "block";
 
 }
 else{
     if(numeroUsuario < numeroCPU)
     document.getElementById("demo").innerHTML = 'EL Nº ES MAYOR';
     else{
     document.getElementById("demo").innerHTML = 'EL Nº ES MENOR';
     }
 }
 
};