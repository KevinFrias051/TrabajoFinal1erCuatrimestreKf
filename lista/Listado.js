//contador para id's var
let contador = 0;

const btnAgregarTarea = document.getElementById("btnAgregarTarea");
btnAgregarTarea.addEventListener('click', function (e) {
    contador++;
    console.log('contador: ' + contador);
})


function agregarTarea() {
    const contenedor = document.getElementById("contenedor");
    const agregarTitulo = document.getElementById("tituloTarea");
    const agegarCuerpo = document.getElementById("cuerpoTarea");

    /* crea el div tarea */
    const divtarea = document.createElement("div");
    divtarea.id = 'tarea' + eval(contador);
    divtarea.className = 'tarea';
    divtarea.classList.add(setColor());

    /* crea el div titulo */
    const divTitulo = document.createElement('div');
    divTitulo.id = "idDivTitulo";
    divTitulo.classList = 'divTitulo';
    divTitulo.classList.add(setColor());

    /* crea y asigna el titulo de la tares*/
    const titulo = document.createElement("p");
    titulo.id = "idTitulo";
    titulo.classList = "tituloTarea";
    titulo.classList.add(setColor());
    titulo.innerText = agregarTitulo.value;

    /* crea el div del cuerpo */
    const divCuerpo = document.createElement("div");
    divCuerpo.id = "divCuerpo";
    divCuerpo.classList = "divCuerpo";

    divCuerpo.classList.add(setColor());
    /* crea el texto de la tarea*/
    const textoTarea = document.createElement("p");
    textoTarea.id = "idTarea";
    textoTarea.classList = 'textoTarea';
    textoTarea.classList.add(setColor());
    textoTarea.innerText = agegarCuerpo.value;

    /* crea div de los botones */
    const divBotones = document.createElement("div");
    divBotones.className = 'divBotones';
    divBotones.classList.add(setColor());


    /* creo el boton para eliminar */
    var btnDel = document.createElement('button');
    const trashIcono = document.createElement("i");//crea el icono   
    trashIcono.className = "fa-solid fa-trash fa-lg";//tipo de icono
    trashIcono.style.color = '#4d4d4d';
    btnDel.id = eval(contador);
    console.log('btnDel.id:' + eval(contador))
    btnDel.type = 'button';
    btnDel.className = "botonEliminar";
    btnDel.classList.add(setColor());
    btnDel.onclick = function () {
        const idBoton = obtenerIdBoton(this);
        eliminarTarea(idBoton);
    }
    ///////////////////////////////////////////////////////////////////////
    //crea el div para el selector de estado
    const divSelectorEstado = document.createElement('div');
    divSelectorEstado.className = 'divSelectorEstados';
    divSelectorEstado.classList.add(setColor());
    //crea el selector de estado de la tarea

    ////////////////SELECTOR/////////////////////
    const selectEstado = document.createElement('select');
    selectEstado.id = "estadoDeTarea" + eval(contador);
    selectEstado.className = "botonSelecEstado";
    selectEstado.classList.add(setColor());
    selectEstado.onchange = function () {
        const idBoton = obtenerIdBoton(this);
        const eliminar = 'estadoDeTarea';
        const botonid = 'tarea' + idBoton.replace(eliminar, "");
        console.log('cambiartema:', botonid);
        cambiarTema(botonid);
    }

    //crea estado "pendiente" y lo asigna al selector
    const opcionPendiente = document.createElement('option');
    opcionPendiente.value = 'pendiente';
    opcionPendiente.text = 'Pendiente';
    //crea estado "en proceso" y lo asigna al selector
    const opcionEnProceso = document.createElement('option');
    opcionEnProceso.value = 'opcionEnProceso';
    opcionEnProceso.text = 'En Proceso';
    //crea estado "validar" y lo asigna al selector
    const opcionValidar = document.createElement('option');
    opcionValidar.value = 'validar';
    opcionValidar.text = 'A Validar';
    //crea estado "finalizado" y lo asigna al selector
    const opcionFinalizado = document.createElement('option');
    opcionFinalizado.value = 'finalizado';
    opcionFinalizado.text = 'Finalizado';


    ////////////////////////////////////////////////////////////

/**/ contenedor.appendChild(divtarea);
/**/   divtarea.appendChild(divTitulo);
/**/      divTitulo.appendChild(titulo);
/**/   divtarea.appendChild(divCuerpo);
/**/      divCuerpo.appendChild(textoTarea);
/**/   divtarea.appendChild(divBotones);
/**/         divBotones.appendChild(btnDel);
/**/            btnDel.appendChild(trashIcono);
/**/         divBotones.appendChild(divSelectorEstado)
/**/            divSelectorEstado.appendChild(selectEstado);
/**/                selectEstado.appendChild(opcionPendiente);
/**/                selectEstado.appendChild(opcionEnProceso);
/**/                selectEstado.appendChild(opcionValidar);
/**/                selectEstado.appendChild(opcionFinalizado);


    ////////////////////////
    //prueba para editar
    /* textoTarea.innerText = 'hola esto es una tarea '
    titulo.innerText = 'Este es el titulo de una tarea';
 */
    /////////////////////////////

}

///////////////////////
function obtenerIdBoton(boton) {
    idBoton = boton.id;
    return idBoton;
}

function eliminarTarea(idBoton) {
    const divContenedor = document.getElementById('contenedor');
    const tarea = document.getElementById('tarea' + idBoton);
    console.log('tarea eliminar:', tarea)
    divContenedor.removeChild(tarea);
}

function setColor() {
    const color = document.getElementById('idColor').value;
    //console.log('el color seleccionado es ' + color);
    return color;
}


function cambiarTema(boton) {
    //console.log('id manejado:', boton);

    const tarea = document.getElementById(boton);

    let idboton = boton;
    const eliminar = 'tarea';
    const idSelector = idboton.replace(eliminar, 'estadoDeTarea');
    const estado = document.getElementById(idSelector).value;


    if (estado === "finalizado") {
        tarea.classList.add('finalizado');
        console.log('finalizado');
        tarea.classList.remove('inProgress');
        tarea.classList.remove('aValidar');
        const palabras = tarea.querySelectorAll('.textoTarea');
        palabras.forEach(palabra => {
            palabra.style.textDecoration = 'line-through';
        });
    } else if (estado === "opcionEnProceso") {
        console.log('en proceso');
        tarea.classList.add('enProceso');
        tarea.classList.remove('aValidar');
        tarea.classList.remove('finalizado');
        const palabras = tarea.querySelectorAll('.textoTarea');
        palabras.forEach(palabra => {
            palabra.style.textDecoration = 'none';
        });
    } else if (estado === "validar") {
        console.log('en proceso');
        tarea.classList.add('aValidar');
        tarea.classList.remove('enProceso');
        tarea.classList.remove('finalizado');
        const palabras = tarea.querySelectorAll('.textoTarea');
        palabras.forEach(palabra => {
            palabra.style.textDecoration = 'none';
        });
    } else {
        console.log('pendiente');
        tarea.classList.remove('finalizado');
        tarea.classList.remove('enProceso');
        tarea.classList.remove('aValidar');
        const palabras = tarea.querySelectorAll('.textoTarea');
        palabras.forEach(palabra => {
            palabra.style.textDecoration = 'none';
        });
    }

}

