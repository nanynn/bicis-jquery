function validateForm(){
	/* Escribe tú código aquí */
}

$(document).ready(function(){
	$('.submit-btn').click(function(e) {
		e.preventDefault();
		var name = $('#name').val();
		var apellido = $('#lastname').val();
		var correo = $('#input-email').val();
		var contraseina = $('#input-password').val();
		var bicis = $('#input-social').val();
		
		//validacion nombre
		if (name == "") {
			$('#name').focus().after('<span>Debes ingresar un nombre</span>');
			return false;	
		} else if (name.charAt(0) != name.charAt(0).toUpperCase()){
			$('#name').focus().after('<span>La primera letra debe ser mayuscula</span>');
			return false;
		}else if(!/[A-Z][a-z]+/.test(name)){
			$('#name').focus().after('<span>Nombre debe contener letras de la a A la Z</span>');
			return false;
		}	

		//validacion apellido	
		if(apellido == ""){
			$('#apellido').focus().after('<span>Debes ingresar un apellido</span>');
		} else if (apellido.charAt(0) != apellido.charAt(0).toUpperCase()){
			$('#apellido').focus().after('<span>La primera letra debe ser mayuscula</span>');
			return false;
		} else if(!/[A-Z][a-z]+/.test(apellido)){
			$('#name').focus().after('<span>Nombre debe contener letras de la a A la Z</span>');
			return false;
		}	

		//validación correo
		if(correo ==""){
			$('#input-email').focus().after('<span>Debes ingresar un correo</span>');
			return false;
		} else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(correo)){
			$('#input-email').focus().after('<span>Ingrese correo valido <br> name@domain.co</span>');
			return false;
		}	

		if (contraseina == "") {
			$('#input-password').focus().after('<span>Debes ingresar una contraseña</span>');
			return false;
		} else if (contraseina == "password") {
			$('#input-password').focus().after('<span>Tu contraseña no puede ser password</span>');
			return false;
		} else if (!/[1,2,3,4,5,6][0,9,8,7,5,4]+/.test(contraseina)) {
			$('#input-password').focus().after('<span>Tu contraseña no puede ser numeros correlativos</span>');
			return false;
		} else if(contra.length > 6){
			$('#input-password').focus().after('<span>Tu contraseña debe tener 6 carácteres</span>');
			return false;
		}

		if (bicis == '0'){
			$('#input-social').focus().after('<span>Debes escoger una bicicleta</span>');
			return false;
		}
	});
});