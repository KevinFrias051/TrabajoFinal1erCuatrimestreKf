const el = document.querySelector("#btnAdd");


function listaTareas() {
    let tarea = document.getElementById('form').value;
    let texto = document.createTextNode(tarea);
    let nuevaTarea = document.createElement("li");
    
    var checkboxmaker = document.createElement('input');
    checkboxmaker.type = "checkbox";
    checkboxmaker.id= "id";
    checkboxmaker.classList = "corrected"; 
    
    /* var checkboxmakerDel = document.createElement('input');
    checkboxmakerDel.type = "checkbox";
    checkboxmakerDel.id ="eliminar";
    checkboxmakerDel.classList = "visible";  */

    nuevaTarea.appendChild(checkboxmaker);
    nuevaTarea.appendChild(texto);
    
   /*  nuevaTarea.appendChild(checkboxmakerDel); */
    
    document.getElementById("lista").appendChild(nuevaTarea);

}

el.addEventListener("click", listaTareas)

function finalizar(e) {
    if (e.target.type == "checkbox") {
        e.target.parentNode.classList.toggle("terminado")
    }
}
lista.addEventListener("click", function (e) {
    finalizar(e)
});



