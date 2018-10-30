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

function crear(){
    let nom = document.getElementById("nombre");
    let ape = document.getElementById("apellido");
    let ed = document.getElementById("edad");
    let dom = document.getElementById("domicilio");
    let telf = document.getElementById("tel");
    let naci = document.getElementById("nacionalidad");
    let sex = document.getElementById("sexo");
    let creacont = document.getElementById("crear");
    
    if (creacont.value == "Agregar") {
        if(validacion() == -1) return;
        agregartabla(nom.value, ape.value, ed.value, dom.value, telf.value, naci.value, sex.value);
    }
}

function agregartabla(nombre, apellido, edad, domicilio, tel, nacionalidad, sexo){
    let tdnom, tdape, tded, tddom, tdtel, tdnac, tdsex;

    tdnom = document.createElement("td");
    tdnom.innerHTML = nombre;
    tdape = document.createElement("td");
    tdape.innerHTML = apellido;
    tded = document.createElement("td");
    tded.innerHTML = edad;
    tdsex = document.createElement("td");
    tdsex.innerHTML = sexo;
    tddom = document.createElement("td");
    tddom.innerHTML = domicilio;
    tdnac = document.createElement("td");
    tdnac.innerHTML = nacionalidad;
    tdtel = document.createElement("td");
    tdtel.innerHTML = tel;
    
   let filaCont = document.createElement(tr);
   filaCont.appendChild(tdnom);
   filaCont.appendChild(tdape);
   filaCont.appendChild(tded);
   filaCont.appendChild(tdsex);
   filaCont.appendChild(tddom);
   filaCont.appendChild(tdnac);
   filaCont.appendChild(tdtel);
    
   let tbody = document.getElementById("tablaCont");
    tbody.appendChild(filaCont);
}