import { component$, $ } from "@builder.io/qwik";
import { type DocumentHead, Link, useNavigate } from "@builder.io/qwik-city";
import Button from "~/components/ui/button/button";

export default component$(() => {
  const nav = useNavigate();

  const scrollToContact$ = $(async () => {
    // Navegar a la página principal
    await nav('/#contacto');
    
    // Esperar a que la página se cargue completamente y luego hacer scroll
    // Intentar múltiples veces para asegurar que el elemento esté disponible
    const scrollToElement = () => {
      const contactoElement = document.getElementById('contacto');
      if (contactoElement) {
        // Ajustar el scroll para considerar el header fijo
        const headerOffset = 80;
        const elementPosition = contactoElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        return true;
      }
      return false;
    };

    // Intentar inmediatamente
    if (!scrollToElement()) {
      // Si no está disponible, intentar después de un delay
      setTimeout(() => {
        if (!scrollToElement()) {
          // Último intento después de más tiempo
          setTimeout(scrollToElement, 300);
        }
      }, 100);
    }
  });

  return (
    <div class="min-h-screen bg-gradient-to-br from-white via-purple-50/40 to-blue-50/30">
      {/* Hero Section */}
      <section class="relative overflow-hidden pt-24 pb-16">
        {/* Background */}
        <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div class="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-300/30 to-blue-300/30 rounded-full blur-3xl motion-safe:animate-pulse"></div>
          <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-pink-300/20 to-orange-300/20 rounded-full blur-3xl motion-safe:animate-pulse" style="animation-delay: 2s"></div>
        </div>

        <div class="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div class="text-center mb-12">
            <div class="inline-block mb-4 px-4 py-2 bg-purple-100 border border-purple-300 rounded-full">
              <span class="text-purple-800 text-sm font-semibold uppercase tracking-wider">
                Servicios de Diseño Web
              </span>
            </div>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
              Soluciones Web{' '}
              <span class="bg-linear-to-r from-purple-600 via-purple-500 to-cyan-600 bg-clip-text text-transparent">
                a Medida
              </span>
            </h1>
            <p class="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
              Desde landing pages hasta aplicaciones web complejas. Encontramos la solución perfecta para tu negocio.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="relative py-16 pb-24">
        <div class="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div class="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Landing Page */}
            <div class="group relative motion-safe:animate-fade-up">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 group-hover:blur-3xl" aria-hidden="true"></div>

              <div class="relative bg-white border-2 border-purple-200 rounded-3xl p-8 h-full shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:border-purple-400">
                <div class="mb-6">
                  <div class="flex items-start gap-6 mb-4">
                    <div class="relative flex-shrink-0">
                      <div class="w-20 h-20 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-purple-300 text-white">
                        📄
                      </div>
                      <div class="absolute -top-1 -right-1 w-6 h-6 bg-cyan-500 rounded-full motion-safe:animate-ping opacity-75"></div>
                      <div class="absolute -top-1 -right-1 w-6 h-6 bg-cyan-500 rounded-full"></div>
                    </div>

                    <div class="flex-1">
                      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        Landing Page
                      </h2>
                    </div>
                  </div>

                  <p class="text-gray-800 font-medium text-base mb-4">
                    Una página única y optimizada diseñada para convertir visitantes en clientes. Perfecta para promociones, lanzamientos o campañas específicas.
                  </p>
                </div>

                <div class="mb-6">
                  <h3 class="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">¿Para qué sirve?</h3>
                  <ul class="space-y-3">
                    {[
                      'Promocionar un producto o servicio específico',
                      'Captar leads y generar conversiones',
                      'Lanzar campañas de marketing',
                      'Crear páginas de aterrizaje para anuncios',
                      'Presentar ofertas especiales o descuentos',
                    ].map((txt) => (
                      <li class="flex items-start text-gray-800" key={txt}>
                        <span class="inline-block w-1.5 h-1.5 bg-purple-700 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span class="text-sm md:text-base">{txt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div class="mb-6 pt-6 border-t border-gray-200">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-gray-900 mb-2">
                      $90.000 <span class="text-lg font-normal text-gray-600">ARS</span>
                    </div>
                    <div class="text-xl font-semibold text-purple-700 mb-1">
                      o $70 USD
                    </div>
                  </div>
                </div>

                <button
                  onClick$={scrollToContact$}
                  class="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-white no-underline bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group-hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                >
                  <span class="flex items-center justify-center gap-2">
                    Solicitar Presupuesto
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Sitio Web Completo */}
            <div class="group relative motion-safe:animate-fade-up" style="animation-delay: 0.1s">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 group-hover:blur-3xl" aria-hidden="true"></div>

              <div class="relative bg-white border-2 border-purple-200 rounded-3xl p-8 h-full shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:border-purple-400">
                <div class="mb-6">
                  <div class="flex items-start gap-6 mb-4">
                    <div class="relative flex-shrink-0">
                      <div class="w-20 h-20 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-purple-300 text-white">
                        🌐
                      </div>
                      <div class="absolute -top-1 -right-1 w-6 h-6 bg-cyan-500 rounded-full motion-safe:animate-ping opacity-75"></div>
                      <div class="absolute -top-1 -right-1 w-6 h-6 bg-cyan-500 rounded-full"></div>
                    </div>

                    <div class="flex-1">
                      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        Sitio Web Completo
                      </h2>
                    </div>
                  </div>

                  <p class="text-gray-800 font-medium text-base mb-4">
                    Un sitio web completo con múltiples páginas, navegación intuitiva y todas las funcionalidades que tu negocio necesita para destacar online.
                  </p>
                </div>

                <div class="mb-6">
                  <h3 class="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">¿Para qué sirve?</h3>
                  <ul class="space-y-3">
                    {[
                      'Establecer presencia profesional en internet',
                      'Mostrar todos tus productos o servicios',
                      'Generar confianza y credibilidad',
                      'Atraer clientes a través de múltiples páginas',
                      'Incluir blog, galería, contacto y más',
                    ].map((txt) => (
                      <li class="flex items-start text-gray-800" key={txt}>
                        <span class="inline-block w-1.5 h-1.5 bg-purple-700 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span class="text-sm md:text-base">{txt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div class="mb-6 pt-6 border-t border-gray-200">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-gray-900 mb-2">
                      $250.000 <span class="text-lg font-normal text-gray-600">ARS</span>
                    </div>
                    <div class="text-xl font-semibold text-purple-700 mb-1">
                      o $200 USD
                    </div>
                  </div>
                </div>

                <button
                  onClick$={scrollToContact$}
                  class="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-white no-underline bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group-hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                >
                  <span class="flex items-center justify-center gap-2">
                    Solicitar Presupuesto
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Web Apps */}
            <div class="group relative motion-safe:animate-fade-up" style="animation-delay: 0.2s">
              <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 group-hover:blur-3xl" aria-hidden="true"></div>

              <div class="relative bg-white border-2 border-purple-200 rounded-3xl p-8 h-full shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:border-purple-400">
                <div class="mb-6">
                  <div class="flex items-start gap-6 mb-4">
                    <div class="relative flex-shrink-0">
                      <div class="w-20 h-20 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-purple-300 text-white">
                        ⚡
                      </div>
                      <div class="absolute -top-1 -right-1 w-6 h-6 bg-cyan-500 rounded-full motion-safe:animate-ping opacity-75"></div>
                      <div class="absolute -top-1 -right-1 w-6 h-6 bg-cyan-500 rounded-full"></div>
                    </div>

                    <div class="flex-1">
                      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                        Web Apps
                      </h2>
                    </div>
                  </div>

                  <p class="text-gray-800 font-medium text-base mb-4">
                    Aplicaciones web interactivas con funcionalidades avanzadas, bases de datos, autenticación de usuarios y lógica de negocio personalizada.
                  </p>
                </div>

                <div class="mb-6">
                  <h3 class="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">¿Para qué sirve?</h3>
                  <ul class="space-y-3">
                    {[
                      'Automatizar procesos de negocio',
                      'Gestionar datos y usuarios',
                      'Crear plataformas interactivas',
                      'Desarrollar sistemas personalizados',
                      'Integrar con APIs y servicios externos',
                    ].map((txt) => (
                      <li class="flex items-start text-gray-800" key={txt}>
                        <span class="inline-block w-1.5 h-1.5 bg-purple-700 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span class="text-sm md:text-base">{txt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div class="mb-6 pt-6 border-t border-gray-200">
                  <div class="text-center">
                    <div class="text-3xl font-bold text-gray-900 mb-2">
                      Consultar
                    </div>
                    <p class="text-sm text-gray-600 mt-2">
                      El precio depende de los requerimientos y necesidades específicas de cada proyecto.
                    </p>
                  </div>
                </div>

                <button
                  onClick$={scrollToContact$}
                  class="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-white no-underline bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group-hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                >
                  <span class="flex items-center justify-center gap-2">
                    Consultar Presupuesto
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="relative py-16 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div class="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para comenzar tu proyecto?
          </h2>
          <p class="text-lg text-purple-100 mb-8">
            Contáctanos y te ayudaremos a encontrar la solución perfecta para tu negocio.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="neumorphic-green" 
              size="lg"
              onClick$={scrollToContact$}
            >
              Contactar Ahora
            </Button>
            <Link href="/" class="no-underline">
              <button
                class="btn inline-flex items-center justify-center px-10 py-4 text-lg rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50"
              >
                Volver al Inicio
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Servicios de Diseño Web - Landing Pages, Sitios Completos y Web Apps | Cleverisma",
  meta: [
    { name: "description", content: "Ofrecemos servicios de diseño web: landing pages desde $90.000 ARS, sitios web completos desde $250.000 ARS y web apps personalizadas. Soluciones a medida para tu negocio." },
    { name: "keywords", content: "diseño web, landing page, sitio web completo, web apps, desarrollo web, precios diseño web, presupuesto web" },
    { name: "author", content: "Cleverisma" },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://cleverisma.com/services/web-design" },
    { property: "og:title", content: "Servicios de Diseño Web - Landing Pages, Sitios Completos y Web Apps | Cleverisma" },
    { property: "og:description", content: "Landing pages desde $90.000 ARS, sitios web completos desde $250.000 ARS y web apps personalizadas. Soluciones a medida para tu negocio." },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:url", content: "https://cleverisma.com/services/web-design" },
    { property: "twitter:title", content: "Servicios de Diseño Web - Landing Pages, Sitios Completos y Web Apps | Cleverisma" },
    { property: "twitter:description", content: "Landing pages desde $90.000 ARS, sitios web completos desde $250.000 ARS y web apps personalizadas." },
    { name: "robots", content: "index, follow" },
  ],
};

