import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { LuSparkles, LuTrendingUp, LuUsers, LuTarget, LuRocket, LuCheckCircle, LuArrowRight, LuStar, LuZap, LuHeart, LuLightbulb, LuBarChart3 } from "@qwikest/icons/lucide";
import Button from "~/components/ui/button/button";
import WorkProcess from "~/components/WorkProcess/WorkProcess";

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <main class="pt-16 min-h-screen flex justify-center items-center relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div class="absolute inset-0 bg-gradient-to-br from-purple-200 via-white to-cyan-50"></div>
        <div class="absolute bottom-2/4 lg:bottom-1/4 right-1/3 lg:right-1/6 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>

        <div class="container relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
              <LuSparkles class="w-4 h-4 text-purple-600 mr-2" />
              <span class="text-purple-600 text-sm font-medium">🚀 Para Emprendedores</span>
            </div>

            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              Sitios Web para{' '}
              <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Emprendedores
              </span>
            </h1>

            <p class="mt-4 text-xl text-gray-600 leading-relaxed max-w-2xl">
              Lleva tu emprendimiento al siguiente nivel con un sitio web profesional que convierta visitantes en clientes y refleje la esencia de tu marca.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button variant="neumorphic-green" size="lg">
                Consulta Gratuita
              </Button>
              <Button variant="secondary" size="lg">
                Ver Ejemplos
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-slate-700 mb-4">
              ¿Por qué necesitas un sitio web profesional?
            </h2>
            <p class="text-xl text-slate-500 max-w-3xl mx-auto">
              En el mundo digital actual, tu sitio web es tu tarjeta de presentación y tu mejor vendedor 24/7.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <LuTrendingUp class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-slate-700 mb-2">Aumenta tu Credibilidad</h3>
              <p class="text-slate-600">
                Un sitio web profesional genera confianza y muestra que tu emprendimiento es serio y establecido.
              </p>
            </div>

            <div class="text-center p-6">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <LuUsers class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-slate-700 mb-2">Llega a Más Clientes</h3>
              <p class="text-slate-600">
                Expande tu alcance más allá de las redes sociales y crea una presencia online sólida.
              </p>
            </div>

            <div class="text-center p-6">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <LuTarget class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-slate-700 mb-2">Convierte Más Ventas</h3>
              <p class="text-slate-600">
                Un sitio optimizado convierte visitantes en clientes reales con llamadas a la acción efectivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section class="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-slate-700 mb-4">
              Servicios Especializados para Emprendedores
            </h2>
            <p class="text-xl text-slate-500 max-w-3xl mx-auto">
              Diseños web pensados específicamente para las necesidades y presupuesto de emprendedores.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-xl p-8 shadow-lg border border-purple-100">
              <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <LuRocket class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-slate-700 mb-3">Landing Pages</h3>
              <p class="text-slate-600 mb-4">
                Páginas de aterrizaje optimizadas para captar leads y convertir visitantes en clientes potenciales.
              </p>
              <ul class="text-sm text-slate-500 space-y-2">
                <li class="flex items-center">
                  <LuCheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  Diseño responsivo
                </li>
                <li class="flex items-center">
                  <LuCheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  Formularios de contacto
                </li>
                <li class="flex items-center">
                  <LuCheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  Integración con redes sociales
                </li>
              </ul>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg border border-purple-100">
              <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <LuStar class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-slate-700 mb-3">Sitios Corporativos</h3>
              <p class="text-slate-600 mb-4">
                Presencia web profesional que refleja la identidad y valores de tu emprendimiento.
              </p>
              <ul class="text-sm text-slate-500 space-y-2">
                <li class="flex items-center">
                  <LuCheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  Múltiples páginas
                </li>
                <li class="flex items-center">
                  <LuCheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  Portfolio de productos/servicios
                </li>
                <li class="flex items-center">
                  <LuCheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  Blog integrado
                </li>
              </ul>
            </div>

            <div class="bg-white rounded-xl p-8 shadow-lg border border-purple-100">
              <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <LuZap class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-slate-700 mb-3">Tiendas Online</h3>
              <p class="text-slate-600 mb-4">
                Plataformas de e-commerce completas para vender tus productos las 24 horas del día.
              </p>
              <ul class="text-sm text-slate-500 space-y-2">
                <li class="flex items-center">
                  <LuCheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  Catálogo de productos
                </li>
                <li class="flex items-center">
                  <LuCheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  Carrito de compras
                </li>
                <li class="flex items-center">
                  <LuCheckCircle class="w-4 h-4 text-green-500 mr-2" />
                  Procesamiento de pagos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 class="text-3xl font-bold text-slate-700 mb-6">
                Beneficios Especiales para Emprendedores
              </h2>
              <div class="space-y-6">
                <div class="flex items-start">
                  <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <LuHeart class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-slate-700 mb-1">Precios Especiales</h3>
                    <p class="text-slate-600">Paquetes diseñados específicamente para emprendedores con presupuestos ajustados.</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <LuLightbulb class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-slate-700 mb-1">Asesoría Personalizada</h3>
                    <p class="text-slate-600">Te acompañamos en cada paso del proceso con consejos específicos para tu tipo de negocio.</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <LuBarChart3 class="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-slate-700 mb-1">Métricas y Analytics</h3>
                    <p class="text-slate-600">Configuración de herramientas de seguimiento para medir el éxito de tu sitio web.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8">
                <div class="bg-white rounded-xl p-6 shadow-lg">
                  <h3 class="text-xl font-semibold text-slate-700 mb-4">¿Estás listo para empezar?</h3>
                  <p class="text-slate-600 mb-6">
                    Agenda una consulta gratuita y descubramos juntos cómo podemos hacer crecer tu emprendimiento.
                  </p>
                  <Button variant="neumorphic-green" class="w-full">
                    Agendar Consulta Gratuita
                    <LuArrowRight class="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkProcess />

      {/* CTA Section */}
      <section class="py-20 bg-neutral-800/50">
        <div class="container mx-auto">
          <div class="card text-center p-12 max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold mb-6">¿Listo para lanzar tu emprendimiento al éxito?</h2>
            <p class="mt-4 text-xl text-gray-600 leading-relaxed max-w-2xl mb-8">
              No esperes más. Tu sitio web profesional puede ser el diferenciador que impulse tu negocio hacia adelante.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <Button class="px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Consulta Gratuita
              </Button>
              <Link href="/services/web-design">
                <Button variant="secondary" class="px-8 py-4 text-lg">
                  Ver Otros Servicios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Sitios Web para Emprendedores - AgenciaTech | Diseño Web Profesional",
  meta: [
    {
      name: "description",
      content: "Sitios web profesionales diseñados especialmente para emprendedores. Landing pages, sitios corporativos y tiendas online con precios especiales y asesoría personalizada.",
    },
    {
      name: "keywords",
      content: "sitios web emprendedores, diseño web startups, landing pages, sitios corporativos emprendedores, tiendas online pequeñas",
    },
  ],
};