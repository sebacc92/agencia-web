import { component$, isDev } from "@builder.io/qwik";
import { QwikCityProvider, RouterOutlet } from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {/* DNS prefetch para recursos externos */}
        <link rel="dns-prefetch" href="https://challenges.cloudflare.com" />
        {/* Preconnect para recursos críticos */}
        <link rel="preconnect" href="https://challenges.cloudflare.com" crossOrigin="anonymous" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        {/* Cloudflare Turnstile se carga solo cuando se necesita (en el formulario) */}
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        {/* <Chatbot /> */}
      </body>
    </QwikCityProvider>
  );
});
