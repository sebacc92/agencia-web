import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { LuSparkles, LuCheckCircle, LuArrowRight, LuHeart, LuLightbulb, LuBarChart3, LuTrendingUp, LuUsers, LuTarget, LuAward, LuClock, LuHeadphones, LuShield, LuCreditCard } from "@qwikest/icons/lucide";
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
              Sitio Web {' '}
              <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Económico
              </span>
            </h1>

            <p class="mt-4 text-xl text-gray-600 leading-relaxed max-w-2xl">
              <strong>¿Necesitás presencia web pero no querés gastar una fortuna?</strong> Nuestro Diseño Web Económico es perfecto para vos. Es una página web de una sola hoja donde tus clientes encuentran todo lo que necesitan con solo deslizar hacia abajo: quién sos, qué ofrecés, cómo contactarte. Simple, efectivo y profesional.
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

      {/* Development Process Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Pricing and Features */}
            <div class="space-y-6">
              <div>
                <h2 class="text-3xl font-bold text-slate-700 mb-4">
                  ¿Cómo se desarrolla un Sitio Web para Emprendedores?
                </h2>
                <p class="text-lg text-slate-600 mb-8">
                  Un sitio web para emprendedores es una solución completa que combina diseño atractivo con funcionalidades esenciales para hacer crecer tu negocio de manera sostenible.
                </p>
              </div>

              {/* Pricing Card */}
              <div class="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                <div class="text-center mb-6">
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-4">
                    Precios especiales hasta el 31 de octubre
                  </div>
                  <div class="mb-4">
                    <span class="text-2xl font-bold">Desde</span>
                  </div>
                  <div class="mb-6">
                    <span class="text-5xl font-bold">$150.000</span>
                  </div>
                </div>

                <div class="space-y-4 mb-8">
                  <div class="flex items-center">
                    <LuCheckCircle class="w-5 h-5 mr-3 flex-shrink-0" />
                    <span class="text-sm">Dominio web GRATIS por 1 año</span>
                  </div>
                  <div class="flex items-center">
                    <LuCheckCircle class="w-5 h-5 mr-3 flex-shrink-0" />
                    <span class="text-sm">Hosting incluido</span>
                  </div>
                  <div class="flex items-center">
                    <LuCheckCircle class="w-5 h-5 mr-3 flex-shrink-0" />
                    <span class="text-sm">Diseño 100% personalizado</span>
                  </div>
                  <div class="flex items-center">
                    <LuCheckCircle class="w-5 h-5 mr-3 flex-shrink-0" />
                    <span class="text-sm">Contenido estratégico</span>
                  </div>
                  <div class="flex items-center">
                    <LuCheckCircle class="w-5 h-5 mr-3 flex-shrink-0" />
                    <span class="text-sm">Botón de WhatsApp</span>
                  </div>
                  <div class="flex items-center">
                    <LuCheckCircle class="w-5 h-5 mr-3 flex-shrink-0" />
                    <span class="text-sm">Conexión con redes sociales</span>
                  </div>
                  <div class="flex items-center">
                    <LuCheckCircle class="w-5 h-5 mr-3 flex-shrink-0" />
                    <span class="text-sm">Optimización para móviles</span>
                  </div>
                  <div class="flex items-center">
                    <LuCheckCircle class="w-5 h-5 mr-3 flex-shrink-0" />
                    <span class="text-sm">Email corporativo personalizado</span>
                  </div>
                  <div class="flex items-center">
                    <LuCheckCircle class="w-5 h-5 mr-3 flex-shrink-0" />
                    <span class="text-sm">Certificado de seguridad SSL</span>
                  </div>
                  <div class="flex items-center">
                    <LuCheckCircle class="w-5 h-5 mr-3 flex-shrink-0" />
                    <span class="text-sm">Soporte técnico prioritario</span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div class="text-center">
                  <p class="text-sm mb-4 text-white/80">Medios de pago aceptados</p>
                  <div class="flex justify-center items-center space-x-4">
                    <div class="w-8 h-6 bg-white/20 rounded flex items-center justify-center">
                      <LuCreditCard class="w-4 h-4" />
                    </div>
                    <div class="text-xs text-white/60">Transferencia</div>
                    <div class="text-xs text-white/60">/ Depósito</div>
                  </div>
                </div>

                <div class="mt-8 text-center">
                  <Button variant="secondary" class="w-full bg-white text-purple-600 hover:bg-white/90">
                    Consultar Ahora
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Features Grid */}
            <div class="space-y-6">
              <h3 class="text-2xl font-semibold text-slate-700 mb-6">¿Por qué elegir nuestros sitios web?</h3>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="text-center p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <LuTrendingUp class="w-6 h-6 text-white" />
                  </div>
                  <h4 class="font-semibold text-slate-700 mb-2">Crecimiento</h4>
                  <p class="text-sm text-slate-600">
                    Diseñado para escalar junto a tu emprendimiento
                  </p>
                </div>

                <div class="text-center p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <LuUsers class="w-6 h-6 text-white" />
                  </div>
                  <h4 class="font-semibold text-slate-700 mb-2">Audiencia</h4>
                  <p class="text-sm text-slate-600">
                    Conecta con tus clientes ideales las 24 horas
                  </p>
                </div>

                <div class="text-center p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <LuTarget class="w-6 h-6 text-white" />
                  </div>
                  <h4 class="font-semibold text-slate-700 mb-2">Conversión</h4>
                  <p class="text-sm text-slate-600">
                    Convierte visitantes en clientes reales
                  </p>
                </div>

                <div class="text-center p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <LuAward class="w-6 h-6 text-white" />
                  </div>
                  <h4 class="font-semibold text-slate-700 mb-2">Profesionalismo</h4>
                  <p class="text-sm text-slate-600">
                    Proyecta una imagen seria y confiable
                  </p>
                </div>

                <div class="text-center p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <LuClock class="w-6 h-6 text-white" />
                  </div>
                  <h4 class="font-semibold text-slate-700 mb-2">Rapidez</h4>
                  <p class="text-sm text-slate-600">
                    Sitio web listo en 7-10 días hábiles
                  </p>
                </div>

                <div class="text-center p-4 rounded-xl bg-purple-50 border border-purple-100">
                  <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <LuHeadphones class="w-6 h-6 text-white" />
                  </div>
                  <h4 class="font-semibold text-slate-700 mb-2">Soporte</h4>
                  <p class="text-sm text-slate-600">
                    Asistencia técnica durante 3 meses
                  </p>
                </div>
              </div>

              {/* Guarantee Section */}
              <div class="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div class="flex items-center mb-3">
                  <LuShield class="w-6 h-6 text-green-600 mr-2" />
                  <h4 class="font-semibold text-slate-700">Garantía de Satisfacción</h4>
                </div>
                <p class="text-sm text-slate-600">
                  AgenciaTech es una empresa consolidada con más de 5 años de experiencia. Te brindamos respaldo profesional y garantía de calidad en cada proyecto, asegurando que tu inversión genere resultados concretos para tu emprendimiento.
                </p>
              </div>
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
                    <h3 class="text-lg font-semibold text-slate-700 mb-1">Mantenimiento</h3>
                    <p class="text-slate-600">Actualizamos la página para mantener un rendimiento óptimo.</p>
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