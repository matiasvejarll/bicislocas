function validateForm() {

  const name = $("#name").val();
  const lastname = $("#lastname").val();
  const email = $("#input-email").val();
  const password = $("#input-password").val();
  const bike = $("#bike").val();
  const social = $("#input-social").val();
  const mensajesError = $(".mensajesError").val();

  let tipoBicicleta = $('select[name=bike]').find("option:selected").val();

  const expresionRegular = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;

  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  if ( email.length < 1 || password.length < 1 || social < 1) {
    
    mensajeDeError("input-email", "debe llenar todos los campos")
    mensajeDeError("input-password", "debe llenar todos los campos")
    mensajeDeError("input-social", "debe llenar todos los campos")
  }else
  if (name.charAt(0) != name.charAt(0).toUpperCase()) {
    
    mensajeDeError("name", "La primera letra debe estar en mayúsculas")


  } else {
    if (name.length < 3 || name.length > 8) {
      
      mensajeDeError("name", "El campo nombre debe tener entre 3 y 8 caracteres")

    }

  }
  if (lastname.charAt(0) != lastname.charAt(0).toUpperCase()) {
   
    mensajeDeError("lastname", "La primera letra debe estar en mayúsculas")
  } else {

    if (lastname.length < 3 || lastname.length > 8) {
      
      mensajeDeError("lastname", "El campo apellido debe tener entre 3 y 8 caracteres")
    }
  }


  
    if (!expresionRegular.test(password)) {
      
      mensajeDeError("input-password", "la clave debe tener almenos una letra y un numero, ademas de 6 caracteres de longitud minimo")
    }
  
    if (!validEmail.test(email)) {
      
      mensajeDeError("input-email", "el formato del correo es incorrecto")
    }
    if (tipoBicicleta == 0) {
      
      mensajeDeError("input-social", "debe seleccionar un tipo de bicicleta")
     
    }
}
function mensajeDeError(variable, mensaje) {
  
  return $("#" + `${variable}`).parent().append("<span class='errores'>" + mensaje + "</span>");

}
function quitarSpan(){
  $(".errores").remove()
}

