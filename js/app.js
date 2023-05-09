const modalImagen = document.querySelector("#modal-imagen");


if (modalImagen) {
  modalImagen.addEventListener("show.bs.modal", (e) => {
    const contenedorImagen = modalImagen.querySelector(".modal-body");
    const enlace = e.relatedTarget;
    const rutaImagen = enlace.getAttribute("data-bs-imagen");
    const imagen = document.createElement("IMG");
    imagen.src = `../img/${rutaImagen}.jpg`;
    imagen.alt = `imagen galería`;
    imagen.classList.add("img-fluid");
    contenedorImagen.appendChild(imagen);
  });

  modalImagen.addEventListener("hidden.bs.modal", (e) => {
    const contenedorImagen = modalImagen.querySelector(".modal-body");
    contenedorImagen.removeChild(contenedorImagen.firstChild);
  });
}

(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');
  console.log(forms)

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()