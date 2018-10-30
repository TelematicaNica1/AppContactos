window.onload = Json;

var count = 1;

function Carga(objJson){
    var tabla = document.getElementById("tabla");
    var tr = document.createElement("tr");

    var nombre = document.createElement("td");
    nombre.innerHTML = objJson.nombre;
    tr.appendChild(nombre);

    var apellido = document.createElement("td");
    apellido.innerHTML = objJson.apellido;
    tr.appendChild(apellido);

    var edad = document.createElement("td");
    edad.innerHTML = objJson.edad;
    tr.appendChild(edad);

    var sexo = document.createElement("td");
    sexo.innerHTML = objJson.sexo;
    tr.appendChild(sexo);

    var domicilio = document.createElement("td");
    domicilio.innerHTML = objJson.domicilio;
    tr.appendChild(domicilio);

    var nacionalidad = document.createElement("td");
    nacionalidad.innerHTML = objJson.nacionalidad;
    tr.appendChild(nacionalidad);

    var tel = document.createElement("td");
    tel.innerHTML = objJson.tel;
    tr.appendChild(tel);

    tr.setAttribute("class", "doble");
    tr.setAttribute("id", count);
    count++;
    tabla.appendChild(tr);
    tr.onclick = fi;
}

function Json(){
    var objJson = {"nombre":"Jonathan", "apellido":"Velasquez", "edad":"20", "sexo":"M",
                    "domicilio":"El Viejo", "nacionalidad":"Nicaragua", "tel":"86691652"};

    Carga(objJson);
    var obj = {"nombre":"Daybeling", "apellido":"Lugo", "edad":"21", "sexo":"F",
                    "domicilio":"Guadalupe", "nacionalidad":"Nicaragua", "tel":"82234568"};
    Carga(obj);
    var obje = {"nombre":"Maria ", "apellido":"Jose", "edad":"22", "sexo":"F","domicilio":"San perdro", "nacionalidad":"Costa Rica", "tel":"82125678"};
    Carga(obje);
}

var seleccionado=null;            //contiene la fila seleccionada
    
function click() {
        if(seleccionado==this) {
            this.style.backgroundColor="transparent";
            seleccionado=null;
        }
        else {
            if(seleccionado!=null) 
                seleccionado.style.backgroundColor="transparent";
            this.style.backgroundColor="#e0b";
            seleccionado=this;
        }
        
}

function fi(){
    var filas=document.getElementById("tabla").getElementsByClassName("doble");
    for(var i=0; i<filas.length; i++) {
        filas[i].onclick=click;
    }

}

function eliminar() {
    if(seleccionado==null) return alert("Seleccione una fila haciendo click sobre ella");
    seleccionado.parentNode.removeChild(seleccionado);
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
    tr.setAttribute("class", "doble");

    tabla.appendChild(tr);

    nnombre.value = "";
    aapellido.value = "";
    eedad.value = "";
    ddomicilio.value = "";
    ttel.value = "";
}

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
    if( isNaN(valor) ) {
        alert("Debe introducir un numero de telefono correcto");
        return false;
    }
    crearTR();
    return true;
}


