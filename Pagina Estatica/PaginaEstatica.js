const esEmailValido = (email) => {
    const emailRegex = new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    return emailRegex.test(email)
}

const validarNombre = () => {
    const nombreInput = document.getElementById('nombre');
    if (nombreInput.value.trim() == "") {
        // error de required
        document.getElementById('error-nombre').innerHTML = "El nombre es requerido";
        nombreInput.classList.add('is-invalid');
    } else if (nombreInput.value.trim().length < 5) {
        // error de minLength
        document.getElementById('error-nombre').innerHTML = "El nombre debe tener al menos 5 caracteres";
        nombreInput.classList.add('is-invalid');
    } else {
        document.getElementById('error-nombre').innerHTML = "";
        nombreInput.classList.remove('is-invalid');
    }
}

const validarApellido = () => {
    const apellidoInput = document.getElementById('apellido');
    if (apellidoInput.value.trim() == "") {
        // error de required
        document.getElementById('error-apellido').innerHTML = "El apellido es requerido";
        apellidoInput.classList.add('is-invalid');
    } else if (apellidoInput.value.trim().length < 5) {
        // error de minLength
        document.getElementById('error-apellido').innerHTML = "El apellido debe tener al menos 5 caracteres";
        apellidoInput.classList.add('is-invalid');
    } else {
        document.getElementById('error-apellido').innerHTML = "";
        apellidoInput.classList.remove('is-invalid');
    }
}
const validarEmail = () => {
    const emailInput = document.getElementById('email');
    if (emailInput.value.trim() == "") {
        // error de required
        document.getElementById('error-email').innerHTML = "El email es requerido";
        emailInput.classList.add('is-invalid');
        formularioCorrecto = false;
    } else if (!esEmailValido(emailInput.value)) {
        // error de minLength
        document.getElementById('error-email').innerHTML = "Direccion de email incorrecta";
        emailInput.classList.add('is-invalid');
        formularioCorrecto = false;
    } else {
        document.getElementById('error-email').innerHTML = "";
        emailInput.classList.remove('is-invalid');
    }
}

const validarMensaje = () => {
    const mensajeInput = document.getElementById('mensaje');
    if (mensajeInput.value.trim() == "") {
        // error de required
        document.getElementById('error-mensaje').innerHTML = "El mensaje es requerido";
        mensajeInput.classList.add('is-invalid');
    } else if (mensajeInput.value.trim().length < 5) {
        // error de minLength
        document.getElementById('error-mensaje').innerHTML = "El mensaje debe tener al menos 5 caracteres";
        mensajeInput.classList.add('is-invalid');
    } else {
        document.getElementById('error-mensaje').innerHTML = "";
        mensajeInput.classList.remove('is-invalid');
    }
}

//is-invalid
const enviarFormulario = () => {
    let formularioCorrecto = true;


    const nombreInput = document.getElementById('nombre');
    if (nombreInput.value.trim() == "") {
        // error de required
        document.getElementById('error-nombre').innerHTML = "El nombre es requerido";
        nombreInput.classList.add('is-invalid');
    } else if (nombreInput.value.trim().length < 5) {
        // error de minLength
        document.getElementById('error-nombre').innerHTML = "El nombre debe tener al menos 5 caracteres";
        nombreInput.classList.add('is-invalid');
    } else {
        document.getElementById('error-nombre').innerHTML = "";
        nombreInput.classList.remove('is-invalid');
    }



    const apellidoInput = document.getElementById('apellido');
    if (apellidoInput.value.trim() == "") {
        // error de required
        document.getElementById('error-apellido').innerHTML = "El apellido es requerido";
        apellidoInput.classList.add('is-invalid');
    } else if (apellidoInput.value.trim().length < 5) {
        // error de minLength
        document.getElementById('error-apellido').innerHTML = "El apellido debe tener al menos 5 caracteres";
        apellidoInput.classList.add('is-invalid');
    } else {
        document.getElementById('error-apellido').innerHTML = "";
        apellidoInput.classList.remove('is-invalid');
    }


    const emailInput = document.getElementById('email');
    if (emailInput.value.trim() == "") {
        // error de required
        document.getElementById('error-email').innerHTML = "El email es requerido";
        emailInput.classList.add('is-invalid');
        formularioCorrecto = false;
    } else if (!esEmailValido(emailInput.value)) {
        // error de minLength
        document.getElementById('error-email').innerHTML = "Direccion de email incorrecta";
        emailInput.classList.add('is-invalid');
        formularioCorrecto = false;
    } else {
        document.getElementById('error-email').innerHTML = "";
        emailInput.classList.remove('is-invalid');

    }
    const mensajeInput = document.getElementById('mensaje');
    if (mensajeInput.value.trim() == "") {
        // error de required
        document.getElementById('error-mensaje').innerHTML = "El mensaje es requerido";
        mensajeInput.classList.add('is-invalid');
    } else if (mensajeInput.value.trim().length < 5) {
        // error de minLength
        document.getElementById('error-mensaje').innerHTML = "El mensaje debe tener al menos 5 caracteres";
        mensajeInput.classList.add('is-invalid');
    } else {
        document.getElementById('error-mensaje').innerHTML = "";
        mensajeInput.classList.remove('is-invalid');
    }



    const telefono = document.getElementById("imputCell");
    const ciudad = document.getElementById("inputCiudad");
    const zip = document.getElementById("inputZip")
    if (formularioCorrecto) {

        console.log("Nombre:", nombreInput.value);
        console.log("Nombre:", apellidoInput.value);
        console.log("Email:", emailInput.value);
        console.log("mensaje:", mensajeInput.value);
        console.log("telefono:", telefono.value);
        console.log("ciudad:", ciudad.value);
        console.log("zip:", zip.value);

    } else {
        console.log("Formulario incorrecto")
    }


}

const inicializarJs = () => {
    const boton = document.getElementById("enviar-btn");
    boton.addEventListener('click', function (e) {
        enviarFormulario();
    });

    document.getElementById('nombre').addEventListener('blur', function (e) {
        validarNombre();
    })
    document.getElementById('apellido').addEventListener('blur', function (e) {
        validarApellido();
    })
    document.getElementById('email').addEventListener('blur', function (e) {
        validarEmail();
    })
    document.getElementById('mensaje').addEventListener('blur', function (e) {
        validarMensaje();
    })

}

window.addEventListener('load', inicializarJs);