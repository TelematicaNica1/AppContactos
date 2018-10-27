function validacion(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var edad = document.getElementById("edad").value;
    var domicilio = document.getElementById("domicilio").value;
    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
        alert("Debe llenar el campo nombre");
        return false;
    }
    if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
        alert("Debe llenar el campo apellido");
        return false;
    }
    if( edad == null || edad.length == 0 || /^\s+$/.test(edad) ) {
        alert("Debe llenar el campo edad");
        return false;
    }
    if( domicilio == null || domicilio.length == 0 || /^\s+$/.test(domicilio) ) {
        alert("Debe llenar el campo domicilio");
        return false;
    }
    valor = document.getElementById("tel").value;
    if( valor == null || valor.length == 0 || /^\s+$/.test(valor) ) {
        alert("Debe llenar el Telefono");
        return false;
    }
    return true;
}

//funcion para aceptar solo numeros enteros del input telefono.
onload = function(){ 
  var tele = document.getElementById("tel");

  tele.onkeypress = function(e){
  if(isNaN(this.value+String.fromCharCode(e.charCode)))
    return false;
  }
  tele.onpaste = function(e){
    e.preventDefault();
  }
}

