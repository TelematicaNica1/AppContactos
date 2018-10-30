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

    crearTR();

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

function crearTR(){
    var tabla = document.getElementById("tabla");
    var tr = document.createElement("tr");

    var nnombre = document.getElementById("nombre");
    var aapellido = document.getElementById("apellido");
    var eedad = document.getElementById("edad");
    var ssexo = document.getElementById("sexo");
    var nnacionalidad = document.getElementById("nacionalidad");
    var ddomicilio = document.getElementById("domicilio");
    var ttel = document.getElementById("tel");

    var nombre = document.createElement("td");
    nombre.innerHTML = nnombre.value;
    tr.appendChild(nombre);

    var apellido = document.createElement("td");
    apellido.innerHTML = aapellido.value;
    tr.appendChild(apellido);

    var edad = document.createElement("td");
    edad.innerHTML = eedad.value;
    tr.appendChild(edad);

    var sexo = document.createElement("td");
    sexo.innerHTML = ssexo.value;
    tr.appendChild(sexo);

    var nacionalidad = document.createElement("td");
    nacionalidad.innerHTML = nnacionalidad.value;

    var domicilio = document.createElement("td");
    domicilio.innerHTML = ddomicilio.value;

    var tel = document.createElement("td");
    tel.innerHTML = ttel.value;

    tr.appendChild(domicilio);
    tr.appendChild(nacionalidad);
    tr.appendChild(tel);

    tabla.appendChild(tr);

    nnombre.value = "";
    aapellido.value = "";
    eedad.value = "";
    ddomicilio.value = "";
    ttel.value = "";
}
