
document.getElementById("nombre").addEventListener("blur", function(evento) {
 
 const input = evento.currentTarget;
 const txtNombre = input.value;
 const feedbackNombre = document.getElementById("feedback-nombre");

    if( txtNombre.length < 2 ) {        
        feedbackNombre.innerHTML = "El nombre es muy corto.";
        feedbackNombre.classList.remove("d-none");
;
    } else {        
        feedbackNombre.innerHTML = "El nombre está OK";
        feedbackNombre.classList.remove("is-invalid");
        feedbackNombre.classList.add("is-valid");
        feedbackNombre.className = "valid-feedback";
    }
});

document.getElementById("apellido").addEventListener("blur", function(evento) {
 
    const input = evento.currentTarget;
    const txtNombre = input.value;
    const feedbackApellido = document.getElementById("feedback-apellido");
   
       if( txtNombre.length < 2 ) {        
           feedbackApellido.innerHTML = "El apellido es muy corto.";
           feedbackApellido.classList.remove("d-none");
   ;
       } else {        

           feedbackApellido.className = "valid-feedback";
       }
   });


document.getElementById("formularioContacto")
.addEventListener("submit", (submitEvent) =>{
    submitEvent.preventDefault();
    
    const tipoDocumento = submitEvent.currentTarget;
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const motive = document.getElementById("motivo").value;
    const comentario = document.getElementById("comentario").value;

    return false;
})

