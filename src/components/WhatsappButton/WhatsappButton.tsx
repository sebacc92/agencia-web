import { component$ } from "@builder.io/qwik";
import { BsWhatsapp } from "@qwikest/icons/bootstrap";

export default component$(() => {
  const phoneNumber = "+541123895482";
  const message = encodeURIComponent(
    "Hola, me gustaría solicitar un sitio web para mi negocio. ¿Podrían brindarme más información sobre los servicios y presupuesto?"
  );
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      class="whatsapp-button"
      title="Contactanos por WhatsApp"
    >
      <BsWhatsapp width="24" height="24" />
    </a>
  );
});
