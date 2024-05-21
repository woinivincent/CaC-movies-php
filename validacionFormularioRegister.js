// Obtener el formulario
const form = document.querySelector('form');

// Escuchar el evento submit del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de los campos
  const nombre = document.querySelector('#nombre').value.trim();
  const apellido = document.querySelector('#apellido').value.trim();
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();
  const fechaNacimiento = document.querySelector('#fechaNacimiento').value.trim();
  const pais = document.querySelector('#pais').value.trim();
  const terminos = document.querySelector('#terminos').checked;

  // Validar los campos
  let isValid = true;
  const errorTexts = document.querySelectorAll('.error-text');
  errorTexts.forEach(errorText => errorText.textContent = '');

  if (nombre === '') {
    isValid = false;
    document.querySelector('#nombre + .error-text').textContent = 'Por favor, ingrese su nombre.';
  }

  if (apellido === '') {
    isValid = false;
    document.querySelector('#apellido + .error-text').textContent = 'Por favor, ingrese su apellido.';
  }

  if (email === '') {
    isValid = false;
    document.querySelector('#email + .error-text').textContent = 'Por favor, ingrese su email.';
  } else {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      isValid = false;
      document.querySelector('#email + .error-text').textContent = 'Por favor, ingrese un email válido.';
    }
  }

  if (password === '') {
    isValid = false;
    document.querySelector('#password + .error-text').textContent = 'Por favor, ingrese una contraseña.';
  }

  if (fechaNacimiento === '') {
    isValid = false;
    document.querySelector('#fechaNacimiento + .error-text').textContent = 'Por favor, ingrese su fecha de nacimiento.';
  }

  if (pais === '') {
    isValid = false;
    document.querySelector('#pais + .error-text').textContent = 'Por favor, seleccione un país.';
  }

  if (!terminos) {
    isValid = false;
    document.querySelector('#terminos + .error-text').textContent = 'Debe aceptar los términos y condiciones.';
  }

  // Si la validación es exitosa
  if (isValid) {
    mostrarCartelExito();
  }
});

function mostrarCartelExito() {
  const cartel = document.createElement('div');
  cartel.classList.add('cartel-exito');
  cartel.textContent = 'Registro exitoso';
  document.body.appendChild(cartel);

  setTimeout(() => {
    document.body.removeChild(cartel);
    window.location.href = "../index.html"; // Reemplaza '/home' con la ruta correcta de tu página de inicio
  }, 3000); // Redirigir después de 3 segundos
}