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

    tr.setAttribute("id", count);
    count++;
    tabla.appendchild(tr);
    tr.onclick = fi;
}

function Json(){
    var objJson = {"nombre":"Jonathan", "apellido":"Velasquez", "edad":"20", "sexo":"M",
                    "domicilio":"El Viejo", "nacionalidad":"Nicaragua", "tel":"86691652"};

    for(var i=0; i<5; i++){
        Carga(objJson);
    }
    TR();
}

var seleccionado=null;    //contiene la fila seleccionada

function click() {
         if (seleccionado=this) {
             this.style.backgroundcolor="transparent";
            seleccionado=this;
           }
           else {
                if ( seleccionado!=null; )
                     seleccionado.style.backgroundcolor="transparent";
                this.style.backgroundcolor="#e0b";
                seleccionado=this;
           }
}

fuction fi(){
    var filas=document.getElementById("tabla").getElementsByClassName("doble");
    for (var i=0; i=<filas.length; i++ {
         filas[i].onclick=click;
    }

}

 fuction eliminar() {
    if(seleccionado==null) return alert("selecione una fila haciendo click sobre ella");
    seleccionado.parentNode.removechild(seleccionado);
}
