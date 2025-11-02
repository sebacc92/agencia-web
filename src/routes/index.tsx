import { component$ } from "@builder.io/qwik";
import { routeAction$, type DocumentHead } from "@builder.io/qwik-city";
import emailjs from '@emailjs/nodejs';
import Hero from "~/components/Hero/Hero";
import Services from "~/components/Services/Services";
import WorkProcess from "~/components/WorkProcess/WorkProcess";
import About from "~/components/About/About";
import Portfolio from "~/components/Portfolio/Portfolio";
import Contacto from "~/components/Contacto/Contacto";

export const useAuditWebsite = routeAction$(async (data, requestEvent) => {
  console.log('useAuditWebsite data: ', data);

  // 1) Leer token de Turnstile agregado automáticamente al form
  const token = (data as any)['cf-turnstile-response'] as string | undefined;

  if (!token) {
    return { success: false, message: 'Falta la verificación anti-bots. Por favor, intenta nuevamente.' };
  }

  // 2) Validar el token en el servidor
  const SECRET_KEY = requestEvent.env.get('CLOUDFLARE_TURNSTILE_SECRET_KEY');
  if (!SECRET_KEY) {
    console.error('Falta TURNSTILE_SECRET_KEY en el servidor');
    return { success: false, message: 'Error de configuración del servidor (captcha).' };
  }

  // IP opcional (ayuda a la precisión)
  const remoteip =
    requestEvent.request.headers.get('cf-connecting-ip') ||
    requestEvent.request.headers.get('x-forwarded-for')?.split(',')[0] ||
    undefined;

  let result: any;
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        secret: SECRET_KEY,
        response: token,
        remoteip: remoteip
      })
    });

    result = await response.json();
    console.log('Turnstile verification result:', result);
  } catch (error) {
    console.error('Turnstile validation error:', error);
    return { success: false, 'error-codes': ['internal-error'] };
  }

  // 3) Chequeos avanzados opcionales (recomendado)
  // Si seteaste data-action="contact" en el widget:
  if (result?.action && result.action !== 'contact') {
    console.warn('Acción inesperada en Turnstile:', result.action);
    return { success: false, message: 'Validación de seguridad no válida (action mismatch).' };
  }

  // Si querés verificar hostname:
  // if (verifyJson?.hostname !== 'tudominio.com') { ... }

  if (!result?.success) {
    console.warn('Turnstile inválido:', result);
    const code = result['error-codes']?.join(', ') ?? 'desconocido';
    return { success: false, message: `La validación falló (${code}). Por favor, intenta nuevamente.` };
  }

  // 4) Si el token es válido, seguí con tu flujo (EmailJS)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_AUDIT_REQUEST_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_AUDIT_REQUEST_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const PRIVATE_KEY = requestEvent.env.get('EMAILJS_PRIVATE_KEY');

  if (!SERVICE_ID || !TEMPLATE_AUDIT_REQUEST_ID || !PUBLIC_KEY) {
    console.error('Faltan credenciales de EmailJS');
    return;
  }

  const payload = {
    websiteUrl: data.websiteUrl,
    email: data.email,
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_AUDIT_REQUEST_ID,
    payload,
    { publicKey: PUBLIC_KEY, privateKey: PRIVATE_KEY }
  ).then((response) => {
    console.log('SUCCESS!', response.status, response.text);
  }, (err) => {
    console.error('FAILED...', err);
  });
  return {
    success: true,
    message: '¡Solicitud enviada! Te contactaremos pronto con el reporte de auditoría.'
  }
});

export const useContact = routeAction$(async (data, requestEvent) => {
  console.log('useContact data: ', data);

  // 1) Leer token de Turnstile agregado automáticamente al form
  const token = (data as any)['cf-turnstile-response'] as string | undefined;

  if (!token) {
    return { success: false, message: 'Falta la verificación anti-bots. Por favor, intenta nuevamente.' };
  }

  // 2) Validar el token en el servidor
  const SECRET_KEY = requestEvent.env.get('CLOUDFLARE_TURNSTILE_SECRET_KEY');
  if (!SECRET_KEY) {
    console.error('Falta TURNSTILE_SECRET_KEY en el servidor');
    return { success: false, message: 'Error de configuración del servidor (captcha).' };
  }

  // IP opcional (ayuda a la precisión)
  const remoteip =
    requestEvent.request.headers.get('cf-connecting-ip') ||
    requestEvent.request.headers.get('x-forwarded-for')?.split(',')[0] ||
    undefined;

  let result: any;
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        secret: SECRET_KEY,
        response: token,
        remoteip: remoteip
      })
    });

    result = await response.json();
    console.log('Turnstile verification result:', result);
  } catch (error) {
    console.error('Turnstile validation error:', error);
    return { success: false, 'error-codes': ['internal-error'] };
  }

  // 3) Chequeos avanzados opcionales (recomendado)
  // Si seteaste data-action="contact" en el widget:
  if (result?.action && result.action !== 'contact') {
    console.warn('Acción inesperada en Turnstile:', result.action);
    return { success: false, message: 'Validación de seguridad no válida (action mismatch).' };
  }

  // Si querés verificar hostname:
  // if (verifyJson?.hostname !== 'tudominio.com') { ... }

  if (!result?.success) {
    console.warn('Turnstile inválido:', result);
    const code = result['error-codes']?.join(', ') ?? 'desconocido';
    return { success: false, message: `La validación falló (${code}). Por favor, intenta nuevamente.` };
  }

  // 4) Si el token es válido, seguí con tu flujo (EmailJS)
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_CONTACT_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const PRIVATE_KEY = requestEvent.env.get('EMAILJS_PRIVATE_KEY');

  if (!SERVICE_ID || !TEMPLATE_CONTACT_ID || !PUBLIC_KEY) {
    console.error('Faltan credenciales de EmailJS');
    return { success: false, message: 'Faltan credenciales de EmailJS' };
  }

  const payload = {
    from_name: (data as any).nombre,
    from_email: (data as any).email,
    telefono: (data as any).telefono,
    proyecto: (data as any).proyecto,
  };

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_CONTACT_ID,
      payload,
      { publicKey: PUBLIC_KEY, privateKey: PRIVATE_KEY }
    );
    return { success: true, message: '¡Mensaje enviado correctamente! Te responderemos pronto.' };
  } catch (err: any) {
    console.error('EmailJS error', err);
    return { success: false, message: 'Error al enviar el mensaje. Intenta nuevamente.' };
  }
});

export default component$(() => {
  return (
    <>
      <Hero />

      <Services />

      <WorkProcess />

      <About />

      <Portfolio />

      <Contacto />

    </>
  );
});

export const head: DocumentHead = {
  title: "Cleverisma - Diseño Web, IA y Marketing Digital para Startups",
  meta: [
    {
      name: "description",
      content: "Agencia especializada en diseño web moderno, automatizaciones con IA y marketing digital estratégico para startups y empresas tecnológicas. Escalamos tu presencia digital.",
    },
    {
      name: "keywords",
      content: "diseño web, automatización IA, marketing digital, startups, agencia digital, desarrollo web, inteligencia artificial, transformación digital, growth hacking, UX/UI",
    },
    {
      name: "author",
      content: "Cleverisma",
    },
    // Open Graph / Facebook
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://cleverisma.com/",
    },
    {
      property: "og:title",
      content: "Cleverisma - Diseño Web, IA y Marketing Digital para Startups",
    },
    {
      property: "og:description",
      content: "Especialistas en diseño web moderno, automatizaciones con IA y marketing digital estratégico para startups y empresas tecnológicas.",
    },
    {
      property: "og:image",
      content: "/images/oso_panda_usando_notebook.png",
    },
    // Twitter
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:url",
      content: "https://cleverisma.com/",
    },
    {
      property: "twitter:title",
      content: "Cleverisma - Diseño Web, IA y Marketing Digital para Startups",
    },
    {
      property: "twitter:description",
      content: "Especialistas en diseño web moderno, automatizaciones con IA y marketing digital estratégico para startups.",
    },
    {
      property: "twitter:image",
      content: "/images/oso_panda_usando_notebook.png",
    },
    // Additional SEO
    {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      name: "language",
      content: "Spanish",
    },
    {
      name: "geo.region",
      content: "AR-B",
    },
    {
      name: "geo.placename",
      content: "Buenos Aires",
    },
    {
      name: "geo.position",
      content: "-34.603722;-58.381592",
    },
    {
      name: "ICBM",
      content: "-34.603722, -58.381592",
    },
  ],
};

