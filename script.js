document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("formulario");

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !telefono) {
      alert("Por favor completa tu nombre y teléfono");
      return;
    }

    const texto = `Hola, soy ${nombre}.
Teléfono: ${telefono}.
Quiero cotizar circonias dentales.
Caso: ${mensaje || "No especificado"}`;

    const numeroWhatsApp = "523313990776";

    window.open(
      `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`,
      "_blank"
    );

    formulario.reset();
  });
});
