const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

navbarToggler.addEventListener("click", function () {
  navbarCollapse.classList.toggle("hide");
});

const navbarLinks = document.querySelectorAll(".navbar-nav > li > a");

navbarLinks.forEach(function (navbarLink) {
  navbarLink.addEventListener("click", function () {
    navbarCollapse.classList.remove("show");
  });
});

function mostrarFormulario() {
  let formulario = document.getElementById("form_1");
  formulario.style.display = "block";
}

function mostrarFormulario2() {
  let formulario2 = document.getElementById("form_2");
  formulario2.style.display = "block";
}

const datos_form_1 = document.getElementById("form_1");

datos_form_1.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("form_name").value;
  const email = document.getElementById("form_email").value;
  const phone = document.getElementById("form_phone").value;
  const motivo = document.getElementById("form_motivo").value;
  const area = document.getElementById("form_area").value;

  console.log("su nombre es:", nombre);
  console.log("su correo es:", email);
  console.log("su telefono es:", phone);
  console.log("su motivo es:", motivo);
  console.log("su segerencia es:", area);

  document.getElementById("form_name").value = "";
  document.getElementById("form_email").value = "";
  document.getElementById("form_phone").value = "";
  document.getElementById("form_motivo").value = "";
  document.getElementById("form_area").value = "";

  alert(
    `muchas gracias ${nombre} " hemos recibido su sugerencia y enviaremos una pronta respuesta al correo" ${email} `
  );
});


const datos_form_2 = document.getElementById("form_2");

datos_form_2.addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("form_name_2").value;
  const email = document.getElementById("form_email_2").value;
  const phone = document.getElementById("form_phone_2").value;
  const fecha = document.getElementById("form_date").value;
  const hora = document.getElementById("form_time").value;
  const asist = document.getElementById("form_asist").value;

  console.log("su nombre es:", nombre);
  console.log("su correo es:", email);
  console.log("su telefono es:", phone);
  console.log("la fecha reservada es:",fecha );
  console.log("la hora reservada es:", hora);
  console.log("numero de asistentes :", asist)

  document.getElementById("form_name_2").value = "";
  document.getElementById("form_email_2").value = "";
  document.getElementById("form_phone_2").value = "";
  document.getElementById("form_date").value = "";
  document.getElementById("form_time").value = "";
  document.getElementById("form_asist").value = "";

  alert(
    `muchas gracias ${nombre} " hemos recibido su reserva para el dia ${fecha}"en el horario ${hora} recibira la confirmacion en ${email} `
  );
});


