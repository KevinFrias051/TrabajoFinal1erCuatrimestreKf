function filtrarPorEstado(estado) {
    const divs = document.getElementsByClassName('tarea');
  
    for (let i = 0; i < divs.length; i++) {
      if (estado === 'todos') {
        divs[i].style.display = 'block';
      } else if (estado === 'finalizado' && divs[i].classList.contains('finalizado')) {
        divs[i].style.display = 'block';
      } else if (estado === 'pendiente' && divs[i].classList.contains('pendiente')) {
        divs[i].style.display = 'block';
      } else if (estado === 'enproceso' && divs[i].classList.contains('enProceso')) {
        divs[i].style.display = 'block';
      } else if (estado === 'validar' && divs[i].classList.contains('aValidar')) {
        divs[i].style.display = 'block';
      } else {
        divs[i].style.display = 'none';
      }
    }
  }
  