const modalImagen = document.querySelector("#modal-imagen");
const contenedorImagen = modalImagen.querySelector(".modal-body");

modalImagen.addEventListener("show.bs.modal", (e) => {
  const enlace = e.relatedTarget;
  const rutaImagen = enlace.getAttribute("data-bs-imagen");
  const imagen = document.createElement("IMG");
  imagen.src = `../img/${rutaImagen}.jpg`;
  imagen.alt = `imagen galería`;
  imagen.classList.add("img-fluid");
  contenedorImagen.appendChild(imagen);
});

modalImagen.addEventListener("hidden.bs.modal", (e) => {
  contenedorImagen.removeChild(contenedorImagen.firstChild);
});
