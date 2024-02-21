function validateForm () {
  
  const name = $("#name").val();
  const lastname = $("#lastname").val();
  const email = $("#input-email").val();
  const password = $("#input-password").val();
  const bike = $("#bike").val();

  const expresionRegular = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/;

  let ERemail = '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}';
  

  if(name.length < 1 || lastname.length < 1 || email.length < 1 || password.length < 1){
    alert('Debe rellenar todos los campos')
  }
  if(name.charAt(0) != name.charAt(0).toUpperCase() || lastname.charAt(0) != lastname.charAt(0).toUpperCase()){

    alert('la primera letra de los campos nombre y apellido debe ser en mayusculas')


  }
  if(name.length < 3 || name.length > 8){
    alert('El campo nombre debe tener entre 3 y 8 caracteres')
  }
  if(lastname.length < 3 || lastname.length > 8){
    alert('El campo apellido debe tener entre 3 y 8 caracteres')
  }

  if(!expresionRegular.test(password)){
    alert("la clave debe tener almenos una letra y un numero, ademas de 6 caracteres de longitud minimo")
  }
  if(!ERemail.test(email)){
    alert("El email no es válido")
  }


}