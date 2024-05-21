
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

 
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
    window.location.href = "../index.html"; 
  }, 3000); 
}