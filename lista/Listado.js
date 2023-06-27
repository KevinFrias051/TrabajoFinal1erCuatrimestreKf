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


    const divtarea = document.createElement("div");
    divtarea.id = 'tarea' + eval(contador);
    divtarea.className = "tarea";//de aca cambio la clase del div

    const divCuerpo = document.createElement("div");//div del cuer
    divCuerpo.id = "divCuerpo" + eval(contador);
    const divBotones = document.createElement("div");//div de los botones
    divBotones.id = "divBotones" + eval(contador);
    /* crea y asigna el titulo de la tares*/
    const titulo = document.createElement("p");
    titulo.id = "idTitulo" + eval(contador);
    titulo.style = "tituloTarea";
    titulo.innerText = agregarTitulo.value;
    /* crea el texto de la tarea*/
    const textoTarea = document.createElement("p");
    textoTarea.id = "idTarea";
    textoTarea.style = "textoTarea"
    textoTarea.innerText = agegarCuerpo.value;
    /* creo el boton para eliminar */
    var btnDel = document.createElement('button');
    btnDel.id = eval(contador);
    console.log('btnDel.id:' + eval(contador))
    btnDel.type = 'button';
    btnDel.className = "botonEliminar";
    btnDel.textContent = 'Eliminar Tarea';
    btnDel.onclick = function () {
        const idBoton = obtenerIdBoton(this);
        eliminarTarea(idBoton);
    }
    /* agrega estado */

    const selectEstado = document.createElement('select');
    const opcionPendiente = document.createElement('option');
    opcionPendiente.value = 'pendiente';
    opcionPendiente.text = 'Pendiente';

    selectEstado.appendChild(opcionPendiente);
    const opcionFinalizado = document.createElement('option');
    opcionFinalizado.value = 'finalizado';
    opcionFinalizado.text = 'Finalizado';

    selectEstado.appendChild(opcionFinalizado);
    divBotones.appendChild(selectEstado);


    divBotones.appendChild(btnDel);
    divtarea.appendChild(titulo);
    divtarea.appendChild(divCuerpo);
    divCuerpo.appendChild(textoTarea);
    divCuerpo.appendChild(divBotones);
    contenedor.appendChild(divtarea);

}
function obtenerIdBoton(boton) {
    idBoton = boton.id;
    console.log('tarea:' + idBoton);
    return idBoton;
}

function eliminarTarea(idBoton) {
    const divContenedor = document.getElementById('contenedor');
    const tarea = document.getElementById('tarea' + idBoton);
    divContenedor.removeChild(tarea);
}