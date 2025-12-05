import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LuZap, LuRocket, LuCode2, LuCheckCircle2 } from "@qwikest/icons/lucide";

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
        <div class="text-center mb-12">
          <div class="inline-block mb-4 px-4 py-2 bg-green-100 border border-green-300 rounded-full">
            <span class="text-green-800 text-sm font-bold uppercase tracking-wider">
              Escalera de Valor
            </span>
          </div>
          <h2 id="services-heading" class="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 tracking-tight">
            Soluciones de Ingeniería para <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600">Escalar Facturación</span>
          </h2>
          <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
            Deja de perder clientes por tiempos de carga lentos. Elige tu acelerador.
          </p>
        </div>

        {/* Grid */}
        <div class="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-8 mb-24 items-start">

          {/* TARJETA 1: Auditoría Flash (Entry Level) */}
          <div class="group relative motion-safe:animate-fade-up h-full" style="animation-delay: 0.1s">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" aria-hidden="true"></div>

            <div class="relative bg-white border border-gray-200 rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col">
              <div class="mb-6">
                <div class="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LuZap class="w-8 h-8" />
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Auditoría Flash</h3>
                <p class="text-sm text-orange-600 font-bold uppercase tracking-wide mb-4">Entry Level</p>
                <p class="text-gray-600">
                  Optimizamos tus Core Web Vitals en 72h sin reconstruir tu sitio.
                </p>
              </div>

              <ul class="space-y-3 mb-8 flex-1">
                {[
                  'Diagnóstico de cuellos de botella',
                  'Optimización de imágenes y scripts',
                  'Mejora inmediata de LCP y CLS',
                  'Informe de impacto en ingresos'
                ].map((item) => (
                  <li class="flex items-start gap-3 text-gray-700" key={item}>
                    <LuCheckCircle2 class="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span class="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                class="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-orange-700 bg-orange-50 hover:bg-orange-100 border border-orange-200 font-bold transition-all duration-300"
              >
                Acelerar mi web hoy
              </Link>
            </div>
          </div>

          {/* TARJETA 2: Migración Qwik E-commerce (Producto Estrella) */}
          <div class="group relative motion-safe:animate-fade-up transform lg:-translate-y-4 z-10" style="animation-delay: 0.2s">
            <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 via-cyan-500 to-purple-600 rounded-3xl opacity-75 blur-lg group-hover:opacity-100 group-hover:blur-xl transition-all duration-500 animate-pulse" aria-hidden="true"></div>

            <div class="relative bg-white border-2 border-purple-500 rounded-3xl p-8 h-full shadow-2xl flex flex-col">
              <div class="absolute -top-5 left-1/2 -translate-x-1/2">
                <div class="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider flex items-center gap-2">
                  <span>🔥 Recomendado para ROI alto</span>
                </div>
              </div>

              <div class="mb-6 mt-2">
                <div class="w-20 h-20 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-3 transition-transform duration-300">
                  <LuRocket class="w-10 h-10" />
                </div>
                <h3 class="text-3xl font-extrabold text-gray-900 mb-2">Migración Qwik E-commerce</h3>
                <p class="text-sm text-purple-600 font-bold uppercase tracking-wide mb-4">Producto Estrella</p>
                <p class="text-gray-600 font-medium">
                  Reconstrucción total con tecnología Qwik. Carga instantánea para tiendas que pierden ventas.
                </p>
              </div>

              <ul class="space-y-4 mb-8 flex-1">
                {[
                  'Carga instantánea (< 1s) garantizada',
                  'Resumability: 0 JS hydration',
                  'Integración Headless (Shopify/Woo)',
                  'SEO Técnico perfecto (100/100)'
                ].map((item) => (
                  <li class="flex items-start gap-3 text-gray-800" key={item}>
                    <div class="bg-purple-100 rounded-full p-1">
                      <LuCheckCircle2 class="w-5 h-5 text-purple-600 shrink-0" />
                    </div>
                    <span class="text-base font-bold">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                class="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl text-white bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 font-bold text-lg shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02] transition-all duration-300"
              >
                Migrar a Velocidad Luz
              </Link>
            </div>
          </div>

          {/* TARJETA 3: SaaS & Apps a Medida (High Ticket) */}
          <div class="group relative motion-safe:animate-fade-up h-full" style="animation-delay: 0.3s">
            <div class="absolute -inset-0.5 bg-gradient-to-r from-gray-700 to-gray-900 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" aria-hidden="true"></div>

            <div class="relative bg-white border border-gray-200 rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col">
              <div class="mb-6">
                <div class="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-gray-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <LuCode2 class="w-8 h-8" />
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">SaaS & Apps a Medida</h3>
                <p class="text-sm text-gray-500 font-bold uppercase tracking-wide mb-4">High Ticket</p>
                <p class="text-gray-600">
                  Arquitectura de software escalable en Edge Computing para Startups.
                </p>
              </div>

              <ul class="space-y-3 mb-8 flex-1">
                {[
                  'Arquitectura Serverless / Edge',
                  'Diseño de Producto (UX/UI) para conversión',
                  'Desarrollo Full Stack Escalable',
                  'Mantenimiento y Soporte 24/7'
                ].map((item) => (
                  <li class="flex items-start gap-3 text-gray-700" key={item}>
                    <LuCheckCircle2 class="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                    <span class="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/#contact"
                class="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl text-gray-700 bg-gray-50 hover:bg-gray-100 border border-gray-200 font-bold transition-all duration-300"
              >
                Cotizar Proyecto
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});