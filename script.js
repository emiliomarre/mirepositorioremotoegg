function showAlert() { alert('Hola, esta es una alerta desde javaScript!');}

const form = document.getElementById('myForm');

form.addEventListener('submit', function(event){
    event.preventDefault();
    validateForm();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}

function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value; 
if (!validateEmail(email)) {
alert('Por favor ingrese un email valido.')
} else{
    alert('Correo electronico enviado correctamente.');
}
}
document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")
 }
)
function toggleVideo() {
    var videoContainer = document.getElementById("tiktok-video");
    videoContainer.classList.toggle("hidden");
  }
                      