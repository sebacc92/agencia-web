import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <section
      id="services"
      class="relative bg-gradient-to-br from-white via-purple-50/40 to-blue-50/30 overflow-hidden pt-22"
      aria-labelledby="services-heading"
    >
      {/* Background */}
      <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-300/30 to-blue-300/30 rounded-full blur-3xl motion-safe:animate-pulse"></div>
        <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-pink-300/20 to-orange-300/20 rounded-full blur-3xl motion-safe:animate-pulse" style="animation-delay: 2s"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-300/20 to-cyan-300/20 rounded-full blur-3xl motion-safe:animate-pulse" style="animation-delay: 4s"></div>
      </div>

      <div class="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div class="text-center mb-8">
          <div class="inline-block mb-4 px-4 py-2 bg-purple-100 border border-purple-300 rounded-full">
            <span class="text-purple-800 text-sm font-semibold uppercase tracking-wider">
              Nuestros servicios
            </span>
          </div>
          <h2 id="services-heading" class="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Todo lo que necesitas para hacer crecer tu negocio online
          </h2>
          <p class="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            Soluciones de alta calidad para potenciar tu presencia digital
          </p>
        </div>

        {/* Grid */}
        <div class="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 xl:gap-16 mb-24">
          {/* Desarrollo Web */}
          <div class="group relative motion-safe:animate-fade-up" style="animation-delay: 0.1s">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 group-hover:blur-3xl" aria-hidden="true"></div>

            <div class="relative bg-white border-2 border-purple-200 rounded-3xl p-8 h-full shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:border-purple-400">
              <div class="mb-8">
                <div class="flex items-start gap-6 mb-4">
                  <div class="relative flex-shrink-0">
                    <div class="w-20 h-20 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-purple-300 text-white">
                      🌐
                    </div>
                    <div class="absolute -top-1 -right-1 w-6 h-6 bg-cyan-500 rounded-full motion-safe:animate-ping opacity-75"></div>
                    <div class="absolute -top-1 -right-1 w-6 h-6 bg-cyan-500 rounded-full"></div>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                      Desarrollo Web
                    </h3>
                    <p class="text-sm text-purple-800 font-semibold mt-1">
                      De Alto Rendimiento
                    </p>
                  </div>
                </div>

                <p class="text-gray-800 font-medium text-base">
                  Diseñamos y desarrollamos sitios web rápidos, accesibles y fáciles de usar, con foco en negocio y conversión.
                </p>
              </div>

              <ul class="space-y-4 mb-8">
                {[
                  'Dominio web GRATIS',
                  'Hosting y mantenimiento por 1 año',
                  'Diseño 100% personalizado',
                  'Botón de WhatsApp',
                  'Enlace a Redes Sociales',
                  'Mail corporativo (minombre@dominio.com)',
                  'Soporte personalizado',
                ].map((txt) => (
                  <li class="flex items-start text-gray-800 transition-colors duration-300" key={txt}>
                    <span class="inline-block w-1.5 h-1.5 bg-purple-700 rounded-full mr-3 mt-2"></span>
                    <span class="text-sm md:text-base">{txt}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services/web-design"
                class="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-white no-underline bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group-hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
                aria-label="Ver planes y precios de Desarrollo Web de Alto Rendimiento"
              >
                <span class="flex items-center justify-center gap-2">
                  Ver planes y precios
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Inteligencia Artificial (Próximamente) */}
          <div class="group relative motion-safe:animate-fade-up" style="animation-delay: 0.2s">
            {/* No usar opacity global: baja contraste. En su lugar, colores accesibles controlados */}
            <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 group-hover:blur-3xl" aria-hidden="true"></div>

            <div class="relative bg-white border-2 border-pink-300 rounded-3xl p-8 h-full shadow-md">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2">
                <div class="bg-gradient-to-r from-pink-700 to-orange-700 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Próximamente
                </div>
              </div>

              <div class="mb-8">
                <div class="flex items-start gap-6 mb-4">
                  <div class="relative flex-shrink-0">
                    <div class="w-20 h-20 bg-gradient-to-br from-pink-700 to-orange-700 rounded-2xl flex items-center justify-center text-3xl shadow-lg border-2 border-pink-300 text-white">
                      🤖
                    </div>
                    <div class="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full motion-safe:animate-ping opacity-75"></div>
                    <div class="absolute -top-1 -right-1 w-6 h-6 bg-orange-500 rounded-full"></div>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                      <span class="block">Inteligencia</span>
                      <span class="block">Artificial</span>
                    </h3>
                  </div>
                </div>

                <p class="text-gray-800 font-medium text-base">
                  Estamos desarrollando soluciones con IA para automatizar atención, contenidos y procesos.
                </p>
              </div>

              <ul class="space-y-4 mb-8">
                {[
                  'WhatsApp automático',
                  'Asistentes virtuales con IA avanzada en tu web',
                  'Creación automática de contenido inteligente',
                  'Automatización de procesos',
                  'Sistemas de recomendación personalizados',
                ].map((txt) => (
                  <li class="flex items-start text-gray-800 transition-colors duration-300" key={txt}>
                    <span class="inline-block w-1.5 h-1.5 bg-gradient-to-r from-pink-700 to-orange-700 rounded-full mr-3 mt-2"></span>
                    <span class="text-sm md:text-base">{txt}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                aria-disabled="true"
                disabled
                class="w-full px-6 py-4 rounded-xl text-white bg-gradient-to-r from-gray-600 to-gray-700 font-semibold cursor-not-allowed"
              >
                <span class="flex items-center justify-center gap-2">
                  Próximamente disponible
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Marketing Digital (Próximamente) */}
          <div class="group relative motion-safe:animate-fade-up" style="animation-delay: 0.3s">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 group-hover:blur-3xl" aria-hidden="true"></div>

            <div class="relative bg-white border-2 border-emerald-300 rounded-3xl p-8 h-full shadow-md">
              <div class="absolute -top-3 left-1/2 -translate-x-1/2">
                <div class="bg-gradient-to-r from-emerald-700 to-cyan-700 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  Próximamente
                </div>
              </div>

              <div class="mb-8">
                <div class="flex items-start gap-6 mb-4">
                  <div class="relative flex-shrink-0">
                    <div class="w-20 h-20 bg-gradient-to-br from-emerald-700 to-cyan-700 rounded-2xl flex items-center justify-center text-3xl shadow-lg border-2 border-emerald-300 text-white">
                      📈
                    </div>
                    <div class="absolute -top-1 -right-1 w-6 h-6 bg-cyan-500 rounded-full motion-safe:animate-ping opacity-75"></div>
                    <div class="absolute -top-1 -right-1 w-6 h-6 bg-cyan-500 rounded-full"></div>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                      <span class="block">Marketing</span>
                      <span class="block">Digital</span>
                    </h3>
                  </div>
                </div>

                <p class="text-gray-800 font-medium text-base">
                  En formación y alianzas para ofrecer performance marketing, SEO avanzado y social.
                </p>
              </div>

              <ul class="space-y-4 mb-8">
                {[
                  'Estrategias de marketing personalizadas',
                  'Campañas publicitarias de alto impacto',
                  'Optimización de conversiones y ventas',
                  'Posicionamiento SEO avanzado',
                  'Gestión profesional de redes sociales',
                ].map((txt) => (
                  <li class="flex items-start text-gray-800 transition-colors duration-300" key={txt}>
                    <span class="inline-block w-1.5 h-1.5 bg-gradient-to-r from-emerald-700 to-cyan-700 rounded-full mr-3 mt-2"></span>
                    <span class="text-sm md:text-base">{txt}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                aria-disabled="true"
                disabled
                class="w-full px-6 py-4 rounded-xl text-white bg-gradient-to-r from-gray-600 to-gray-700 font-semibold cursor-not-allowed"
              >
                <span class="flex items-center justify-center gap-2">
                  Próximamente disponible
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});