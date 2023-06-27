let contador = 0;
const btnAgregarTarea = document.getElementById("btnAgregarTarea");
btnAgregarTarea.addEventListener('click', function (e) {
    contador++;
    console.log('contador: '+contador);
})



function agregarTarea() {
    const contenedor = document.getElementById("contenedor");
    const agregarTitulo = document.getElementById("tituloTarea");
    const agegarCuerpo = document.getElementById("cuerpoTarea");


    const divtarea = document.createElement("div");
    divtarea.id = 'tarea'+eval(contador);
    divtarea.className = "tarea verde";//de aca cambio la clase del div

    const divCuerpo = document.createElement("div");//div del cuer
    divCuerpo.id = "divCuerpo";
    const divBotones = document.createElement("div");//div de los botones ELIMINAR Y EDITAR
    divBotones.id = "divBotones";

    const titulo = document.createElement("p");
    titulo.id = "idTitulo";
    titulo.innerText = agregarTitulo.value;

    const textoTarea = document.createElement("p");
    textoTarea.id = "textoTarea";
    textoTarea.innerText = agegarCuerpo.value;
    /* creo el boton para eliminar */

    var btnDel = document.createElement('button');
    btnDel.id = eval(contador);
    console.log('btnDel.id:' + eval(contador))
    btnDel.type = 'button';
    btnDel.className = "botonEliminar";
    btnDel.textContent = 'eliminarTarea';
    btnDel.onclick = function(){
         const idBoton = obtenerIdBoton(this);
         eliminarTarea(idBoton);
    }




    divBotones.appendChild(btnDel);
    divtarea.appendChild(titulo);
    divtarea.appendChild(divCuerpo);
    divCuerpo.appendChild(textoTarea);
    divCuerpo.appendChild(divBotones);
    contenedor.appendChild(divtarea);

}
function obtenerIdBoton(boton) {
    idBoton = boton.id;
    console.log('tarea:'+idBoton);
    return idBoton;
  }

function eliminarTarea(idBoton) {
    const divcontenedor = document.querySelector('.div-contenedor');
    const tarea = document.querySelector('#tarea'+idBoton);
    divcontenedor.removeChild(tarea);
} 