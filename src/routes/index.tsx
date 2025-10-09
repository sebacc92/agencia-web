import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/Hero/Hero";
import Services from "~/components/Services/Services";
import About from "~/components/About/About";
import Portfolio from "~/components/Portfolio/Portfolio";

export default component$(() => {
  return (
    <>
      <Hero />

      <Services />

      <About />

      <Portfolio />

    </>
  );
});

export const head: DocumentHead = {
  title: "AgenciaTech - Diseño Web, IA y Marketing Digital para Startups",
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
      content: "AgenciaTech",
    },
    // Open Graph / Facebook
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://agenciatech.com/",
    },
    {
      property: "og:title",
      content: "AgenciaTech - Diseño Web, IA y Marketing Digital para Startups",
    },
    {
      property: "og:description",
      content: "Especialistas en diseño web moderno, automatizaciones con IA y marketing digital estratégico para startups y empresas tecnológicas.",
    },
    {
      property: "og:image",
      content: "https://agenciatech.com/og-image.jpg",
    },
    // Twitter
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:url",
      content: "https://agenciatech.com/",
    },
    {
      property: "twitter:title",
      content: "AgenciaTech - Diseño Web, IA y Marketing Digital para Startups",
    },
    {
      property: "twitter:description",
      content: "Especialistas en diseño web moderno, automatizaciones con IA y marketing digital estratégico para startups.",
    },
    {
      property: "twitter:image",
      content: "https://agenciatech.com/twitter-image.jpg",
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
