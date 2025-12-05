import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { LuCheck, LuZap, LuRocket, LuCode2 } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <section
      id="services"
      class="relative bg-gray-50 overflow-hidden pt-24 pb-32"
      aria-labelledby="pricing-heading"
    >
      <div class="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <div class="text-center mb-16">
          <h2 id="pricing-heading" class="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
            Planes de <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">Aceleración Web</span>
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sin sorpresas. Sin costos ocultos. Tecnología Enterprise a precio de suscripción.
          </p>
        </div>

        {/* Pricing Grid */}
        <div class="grid lg:grid-cols-3 gap-8 items-start">

          {/* PLAN 1: Landing Page Acelerada */}
          <div class="bg-white rounded-3xl shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow duration-300 relative">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Landing Page Acelerada</h3>
            <p class="text-gray-500 text-sm mb-6">Ideal para Profesionales y Servicios</p>

            <div class="flex items-baseline mb-8">
              <span class="text-4xl font-extrabold text-gray-900">$350</span>
              <span class="text-gray-500 ml-2">inicio</span>
            </div>
            <div class="flex items-baseline mb-8 -mt-6">
              <span class="text-2xl font-bold text-gray-500">+ $50</span>
              <span class="text-gray-500 ml-2">/mes</span>
            </div>

            <ul class="space-y-4 mb-8">
              {[
                'Diseño Ultra-Rápido en Qwik',
                'Hosting Edge Incluido',
                'Dominio .com incluido',
                'Cambios de texto ilimitados',
                'Certificado SSL Gratis',
                'Soporte por WhatsApp'
              ].map((feature) => (
                <li class="flex items-start gap-3" key={feature}>
                  <LuCheck class="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span class="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/#contact"
              class="w-full block text-center py-3 px-6 rounded-xl bg-green-50 text-green-700 font-bold hover:bg-green-100 transition-colors"
            >
              Elegir Plan Landing
            </Link>
          </div>

          {/* PLAN 2: E-commerce High Performance (DESTACADO) */}
          <div class="bg-white rounded-3xl shadow-2xl border-2 border-green-500 p-8 relative transform lg:-translate-y-4 z-10">
            <div class="absolute top-0 right-0 -mt-4 mr-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
              Más Popular
            </div>

            <h3 class="text-2xl font-bold text-gray-900 mb-2">E-commerce High Performance</h3>
            <p class="text-gray-500 text-sm mb-6">Para tiendas que quieren vender más</p>

            <div class="flex items-baseline mb-8">
              <span class="text-5xl font-extrabold text-gray-900">$800</span>
              <span class="text-gray-500 ml-2">inicio</span>
            </div>
            <div class="flex items-baseline mb-8 -mt-6">
              <span class="text-3xl font-bold text-green-600">+ $120</span>
              <span class="text-gray-500 ml-2">/mes</span>
            </div>

            <ul class="space-y-4 mb-8">
              {[
                'Frontend Qwik (Carga < 1s)',
                'Headless E-commerce (Shopify/Woo)',
                'Pasarela de Pagos Configurada',
                'Panel de Control Autogestionable',
                'Optimización de Imágenes con IA',
                'SEO Técnico Avanzado',
                'Mantenimiento Prioritario'
              ].map((feature) => (
                <li class="flex items-start gap-3" key={feature}>
                  <div class="bg-green-100 rounded-full p-1">
                    <LuCheck class="w-4 h-4 text-green-600 shrink-0" />
                  </div>
                  <span class="text-gray-900 font-medium text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/#contact"
              class="w-full block text-center py-4 px-6 rounded-xl bg-green-600 text-white font-bold text-lg shadow-lg hover:bg-green-700 hover:shadow-green-500/30 transition-all transform hover:-translate-y-1"
            >
              Empezar Ahora
            </Link>
          </div>

          {/* PLAN 3: App a Medida / SaaS */}
          <div class="bg-gray-900 rounded-3xl shadow-lg border border-gray-800 p-8 hover:shadow-xl transition-shadow duration-300 relative text-white">
            <h3 class="text-2xl font-bold text-white mb-2">App a Medida / SaaS</h3>
            <p class="text-gray-400 text-sm mb-6">Proyectos complejos y Startups</p>

            <div class="flex items-baseline mb-8">
              <span class="text-4xl font-extrabold text-white">Consultar</span>
            </div>
            <div class="flex items-baseline mb-8 -mt-6 h-8">
              {/* Spacer to align with other cards */}
            </div>

            <ul class="space-y-4 mb-8">
              {[
                'Arquitectura Dedicada',
                'Base de Datos Escalable',
                'Autenticación y Seguridad',
                'Integraciones API Complejas',
                'Panel de Administración Custom',
                'SLA Garantizado'
              ].map((feature) => (
                <li class="flex items-start gap-3" key={feature}>
                  <LuCheck class="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                  <span class="text-gray-300 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/#contact"
              class="w-full block text-center py-3 px-6 rounded-xl bg-gray-800 text-white font-bold border border-gray-700 hover:bg-gray-700 transition-colors"
            >
              Hablar con Consultor
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
});