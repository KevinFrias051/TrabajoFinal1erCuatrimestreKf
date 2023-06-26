const nombreApellido = document.getElementById("inputName")
const mail = document.getElementById("inputEmail")
const cell = document.getElementById("imputCell")
const ciudad = document.getElementById("inputCiudad")
const zip = document.getElementById("inputZip")
const mensaje = document.getElementById("inputMensaje")

function SendInfo() {
    console.log("Datos Enviados!");
    console.log("Nombre : ", nombreApellido.value);
    console.log("mail : ", mail.value);
    console.log("cell : ", cell.value);
    console.log("ciudad : ", ciudad.value, " ", zip.value);
    console.log("mensaje :", mensaje.value);
}