document.getElementById("login-form").addEventListener("submit", (submitEvent) => {
    submitEvent.preventDefault();

    const usuario       = document.getElementById("usuario").value;
    const contrasena    = document.getElementById("contrasena").value;

    if( usuario == 'admin' && contrasena == '1234') {
        accederAdministracion();
    } else {
        mostrarMensajeError();
    }

    return false;
});

function accederAdministracion() {
    window.location = "../admin/admin.html";
}

function mostrarMensajeError() {
    const mensajes = document.getElementById("mensajes");
    mensajes.innerHTML = "<h5>El usuario o contraseña es incorrecto!</h5>";
    mensajes.classList.remove("d-none");
}