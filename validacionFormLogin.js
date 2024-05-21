// Obtener el formulario
const form = document.querySelector('form');

// Escuchar el evento submit del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de los campos
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  // Validar los campos
  let isValid = true;
  const errorTexts = document.querySelectorAll('.error-text');
  errorTexts.forEach(errorText => errorText.textContent = '');

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

  // Si la validación es exitosa
  if (isValid) {
    mostrarCartelExito();
  }
});

function mostrarCartelExito() {
  const cartel = document.createElement('div');
  cartel.classList.add('cartel-exito');
  cartel.textContent = 'Inicio de sesión exitoso';
  document.body.appendChild(cartel);

  setTimeout(() => {
    document.body.removeChild(cartel);
    window.location.href = "../index.html"; // Reemplaza '/home' con la ruta correcta de tu página de inicio
  }, 3000); // Redirigir después de 3 segundos
}