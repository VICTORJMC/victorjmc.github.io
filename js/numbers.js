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
     document.body.style.backgroundRepeat = "no-repeat";
     document.getElementById("demo").style.fontSize = "68pt";
     document.getElementById("myText").style.fontSize = "68pt";
     document.getElementById("myText").style.color = "red";
     document.getElementById("demo").style.color = "red";
     document.getElementById("hide").style.display = "block";
     document.getElementById("none").style.display = "none";
     document.getElementById("img").src = "img/simpson.gif";
 }
 else{
     if(numeroUsuario < numeroCPU)
     document.getElementById("demo").innerHTML = 'EL Nº ES MAYOR - PON OTRO NÚMERO';
     else{
     document.getElementById("demo").innerHTML = 'EL Nº ES MENOR - PON OTRO NÚMERO';
     }
 }
 
};
