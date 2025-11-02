import { component$ } from "@builder.io/qwik";
import { routeAction$, type DocumentHead } from "@builder.io/qwik-city";
import emailjs from '@emailjs/nodejs';
import Hero from "~/components/Hero/Hero";
import Services from "~/components/Services/Services";
import WorkProcess from "~/components/WorkProcess/WorkProcess";
import About from "~/components/About/About";
import Portfolio from "~/components/Portfolio/Portfolio";
import Contacto from "~/components/Contacto/Contacto";

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const useAuditWebsite = routeAction$(async (data, requestEvent) => {
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_AUDIT_REQUEST_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_AUDIT_REQUEST_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const PRIVATE_KEY = requestEvent.env.get('EMAILJS_PRIVATE_KEY');

  if (!SERVICE_ID || !TEMPLATE_AUDIT_REQUEST_ID || !PUBLIC_KEY) {
      console.error('Faltan credenciales de EmailJS');
      return;
  }
  
  const IS_TEST_MODE = true
  if (IS_TEST_MODE) {
      console.log('*** MODO DE PRUEBA ACTIVADO: Simulación de emailjs.send ***');
      console.log('Datos que se enviarían:', {
          websiteUrl: data.websiteUrl,
          email: data.email,
      });
      // Simula una respuesta exitosa y devuélvela rápidamente
      await delay(3000);

      console.log('Simulación exitosa de envío de email.');

      return {
          success: true,
          message: '¡Solicitud enviada! (Simulado en modo de prueba)'
      }
  }

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_AUDIT_REQUEST_ID,
    {
      websiteUrl: data.websiteUrl,
      email: data.email,
    },
    {
      publicKey: PUBLIC_KEY,
      privateKey: PRIVATE_KEY
    }
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
  console.log('data: ', data);
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const PRIVATE_KEY = requestEvent.env.get('EMAILJS_PRIVATE_KEY');

  // reCAPTCHA v3
  const RECAPTCHA_SECRET = requestEvent.env.get('RECAPTCHA_SECRET_KEY_V3');
  const token = (data as any)['g-recaptcha-response'] as string | undefined;
  const expectedAction = ((data as any)['recaptcha_action'] ?? 'contact') as string;

  const IS_TEST_MODE = import.meta.env.DEV; // en dev podés saltear verificación/ envío real
  const SCORE_THRESHOLD = 0.6; // ajustable

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.error('Faltan credenciales de EmailJS');
    return { success: false, message: 'Faltan credenciales de EmailJS' };
  }

  if (!IS_TEST_MODE) {
    if (!RECAPTCHA_SECRET) {
      console.error('Falta RECAPTCHA_SECRET_KEY_V3');
      return { success: false, message: 'Error de configuración de reCAPTCHA' };
    }
    if (!token) {
      return { success: false, message: 'Por favor intenta nuevamente (captcha).' };
    }

    try {
      const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ secret: RECAPTCHA_SECRET, response: token }),
      });
      const json = await res.json();
      // json: { success, score, action, challenge_ts, hostname }
      if (!json.success) {
        return { success: false, message: 'No pudimos validar el captcha. Intenta nuevamente.' };
      }
      if (json.action && json.action !== expectedAction) {
        return { success: false, message: 'Acción de captcha inválida.' };
      }
      if (typeof json.score === 'number' && json.score < SCORE_THRESHOLD) {
        return { success: false, message: 'Detección de actividad sospechosa. Intenta de nuevo.' };
      }
    } catch (err) {
      console.error('Error verificando reCAPTCHA v3', err);
      return { success: false, message: 'Error al verificar reCAPTCHA' };
    }
  } else {
    console.log('[CONTACTO] Test mode: salteando verificación reCAPTCHA v3');
  }

  const payload = {
    from_name: (data as any).nombre,
    from_email: (data as any).email,
    telefono: (data as any).telefono,
    proyecto: (data as any).proyecto,
    'g-recaptcha-response': token,
  };

  if (IS_TEST_MODE) {
    console.log('[CONTACTO] Test mode: simulando envío EmailJS', payload);
    return { success: true, message: '¡Mensaje enviado! (Simulado en modo test)' };
  }

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
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
      content: "https://cleverisma.com/og-image.jpg",
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
      content: "https://cleverisma.com/twitter-image.jpg",
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
