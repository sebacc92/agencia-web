import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ImageHero from "~/media/images/oso_panda_usando_notebook.png?jsx";
import Button from "~/components/ui/button/button";
import { LuChevronDownCircle } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <main class="pt-32 min-h-screen flex items-center bg-gray-50">
        {/* Subtle Background Elements */}
        <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-cyan-50"></div>
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>
        
        <div class="container relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content (50%) */}
            <div class="space-y-8">
              {/* Badge */}
              {/* <div class="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 border border-purple-200">
                <span class="text-purple-700 text-sm font-medium">🚀 Diseño + desarrollo + automatizaciones + marketing + IA</span>
              </div> */}

              {/* Main Headline */}
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                Agencia de {' '}
                <span class="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Diseño Web
                </span>{', '}
                Marketing Digital e IA.
              </h1>

              {/* Subheadline */}
              <p class="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Somos tu socio estratégico para el crecimiento digital. Usamos diseño web moderno, marketing digital con estrategia e IA para automatizar procesos.
              </p>

              {/* CTA Button */}
              <div>
                <Button variant="neumorphic-green" size="lg">
                  Reservar llamada gratis
                </Button>
              </div>
            </div>

            {/* Right Column - Image (50%) */}
            <div class="flex justify-center lg:justify-end">
              <div class="relative animate-float">
                {/* Nube voladora con movimiento sutil */}
                <div>
                  <ImageHero
                    alt="Panda trabajando en laptop sobre nube voladora"
                    class="drop-shadow-2xl hover:scale-105 transition-transform duration-700 panda-float-animation"
                  />
                </div>

                {/* Elementos flotantes alrededor que crean movimiento dinámico */}
                <div class="absolute -top-8 -left-8 text-2xl animate-bounce" style="animation-duration: 3s; animation-delay: 0.5s;">
                  ✨
                </div>
                <div class="absolute -bottom-6 -right-6 text-3xl animate-pulse" style="animation-duration: 2s; animation-delay: 1s;">
                  🚀
                </div>
                <div class="absolute top-1/2 -left-10 text-xl animate-float" style="animation-duration: 3.5s; animation-delay: 1.5s;">
                  ⭐
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <button
            class="group cursor-pointer animate-bounce hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-white/10"
            onClick$={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                servicesSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
          >
            <LuChevronDownCircle
              class="w-8 h-8 text-gray-500 group-hover:text-green-500 transition-colors duration-300"
            />
          </button>
        </div>
      </main>

      {/* Services Section */}
      <section id="services" class="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
        {/* Animated Background Elements */}
        <div class="absolute inset-0">
          {/* Large geometric shapes */}
          <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-600/10 to-amber-600/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
        </div>

        <div class="container relative z-10">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span class="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Servicios
              </span>
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              Desarrollamos soluciones digitales innovadoras que transforman tu presencia online y aceleran el crecimiento de tu negocio.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Web Design Service */}
            <div class="card group relative animate-fade-in-up" style="animation-delay: 0.2s">
              {/* Service Icon */}
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-all duration-300">
                  <span class="group-hover:rotate-12 transition-transform duration-300">🌐</span>
                </div>
              </div>

              <div class="text-center mb-6 pt-6">
                <h3 class="text-2xl font-bold mb-2 text-white group-hover:text-purple-200 transition-colors duration-300">Diseño Web</h3>
                <p class="text-purple-300 font-medium">Sitios web únicos y responsivos</p>
              </div>

              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Páginas web profesionales para empresas
                </li>
                <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Tiendas online de alto rendimiento
                </li>
                <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Portafolios digitales personalizados
                </li>
                <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Landing pages optimizadas para conversiones
                </li>
                <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Aplicaciones web modernas y escalables
                </li>
              </ul>

              <button class="btn btn-secondary w-full group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                Ver proyectos de diseño
              </button>
            </div>

            {/* AI Automations Service */}
            <div class="card group relative animate-fade-in-up" style="animation-delay: 0.4s">
              {/* Service Icon */}
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-amber-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-all duration-300">
                  <span class="group-hover:rotate-12 transition-transform duration-300">🤖</span>
                </div>
              </div>

              <div class="text-center mb-6 pt-6">
                <h3 class="text-2xl font-bold mb-2 text-white group-hover:text-pink-200 transition-colors duration-300">Inteligencia Artificial</h3>
                <p class="text-pink-300 font-medium">Soluciones de IA que transforman procesos</p>
              </div>

              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span class="w-2 h-2 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full mr-3 animate-pulse"></span>
                  Asistentes virtuales con IA avanzada
                </li>
                <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span class="w-2 h-2 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full mr-3 animate-pulse" style="animation-delay: 0.2s"></span>
                  Procesos empresariales automatizados
                </li>
                <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span class="w-2 h-2 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full mr-3 animate-pulse" style="animation-delay: 0.4s"></span>
                  Análisis predictivo de datos empresariales
                </li>
                <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span class="w-2 h-2 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full mr-3 animate-pulse" style="animation-delay: 0.6s"></span>
                  Creación automática de contenido inteligente
                </li>
                <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span class="w-2 h-2 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full mr-3 animate-pulse" style="animation-delay: 0.8s"></span>
                  Sistemas de recomendación personalizados
                </li>
              </ul>

              <button class="btn btn-secondary w-full group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-amber-500 group-hover:text-white transition-all duration-300">
                Explorar automatizaciones
              </button>
            </div>

            {/* Digital Marketing Service */}
            <div class="card group relative animate-fade-in-up" style="animation-delay: 0.6s">
              {/* Service Icon */}
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-all duration-300">
                  <span class="group-hover:rotate-12 transition-transform duration-300">📈</span>
                </div>
              </div>

              <div class="text-center mb-6 pt-6">
                <h3 class="text-2xl font-bold mb-2 text-white group-hover:text-emerald-200 transition-colors duration-300">Marketing Digital</h3>
                <p class="text-emerald-300 font-medium">Estrategias personalizadas que convierten</p>
              </div>

              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span class="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-3 animate-pulse"></span>
                  Estrategias de marketing personalizadas
                </li>
                <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span class="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-3 animate-pulse" style="animation-delay: 0.2s"></span>
                  Campañas publicitarias de alto impacto
                </li>
                <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span class="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-3 animate-pulse" style="animation-delay: 0.4s"></span>
                  Optimización de conversiones y ventas
                </li>
                <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span class="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-3 animate-pulse" style="animation-delay: 0.6s"></span>
                  Posicionamiento SEO avanzado
                </li>
                <li class="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300">
                  <span class="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-3 animate-pulse" style="animation-delay: 0.8s"></span>
                  Gestión profesional de redes sociales
                </li>
              </ul>

              <button class="btn btn-secondary w-full group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300">
                Ver estrategias de marketing
              </button>
            </div>
          </div>

          {/* Process Section */}
          <div class="text-center relative">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/10 to-transparent rounded-3xl"></div>

            <h3 class="text-4xl md:text-5xl font-bold mb-6 text-white relative z-10 animate-fade-in-up" style="animation-delay: 0.2s">
              Nuestro proceso de trabajo
            </h3>
            <p class="text-xl md:text-2xl text-gray-300 mb-16 relative z-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.4s">
              Metodología probada que garantiza resultados excepcionales con un enfoque ágil y centrado en el cliente
            </p>
            
            <div class="grid md:grid-cols-4 gap-8 relative z-10">
              <div class="text-center group animate-fade-in-up" style="animation-delay: 0.6s">
                <div class="relative mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-xl group-hover:scale-110 transition-all duration-300">
                    1
                  </div>
                  <div class="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
                </div>
                <h4 class="font-bold text-lg mb-2 text-white">Descubrimiento</h4>
                <p class="text-gray-300">Analizamos tu negocio y objetivos</p>
              </div>

              <div class="text-center group animate-fade-in-up" style="animation-delay: 0.8s">
                <div class="relative mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-amber-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-xl group-hover:scale-110 transition-all duration-300">
                    2
                  </div>
                  <div class="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full animate-pulse" style="animation-delay: 0.5s"></div>
                </div>
                <h4 class="font-bold text-lg mb-2 text-white">Estrategia</h4>
                <p class="text-gray-300">Diseñamos soluciones personalizadas</p>
              </div>

              <div class="text-center group animate-fade-in-up" style="animation-delay: 1s">
                <div class="relative mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-xl group-hover:scale-110 transition-all duration-300">
                    3
                  </div>
                  <div class="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 1s"></div>
                </div>
                <h4 class="font-bold text-lg mb-2 text-white">Implementación</h4>
                <p class="text-gray-300">Desarrollamos con tecnología de vanguardia</p>
              </div>

              <div class="text-center group animate-fade-in-up" style="animation-delay: 1.2s">
                <div class="relative mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-xl group-hover:scale-110 transition-all duration-300">
                    4
                  </div>
                  <div class="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse" style="animation-delay: 1.5s"></div>
                </div>
                <h4 class="font-bold text-lg mb-2 text-white">Optimización</h4>
                <p class="text-gray-300">Medimos y mejoramos continuamente</p>
              </div>
            </div>
            
            {/* Connection Lines */}
            <div class="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent transform -translate-y-1/2"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-gray-50 border-t border-gray-200">
        <div class="container py-16">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div class="lg:col-span-2">
              <div class="flex items-center space-x-2 mb-4">
                <div class="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-sm">A</span>
                </div>
                <span class="text-xl font-bold text-gray-900">AgenciaTech</span>
              </div>
              <p class="text-gray-600 mb-6 max-w-md">
                Especialistas en diseño web moderno, automatizaciones con IA y marketing digital estratégico
                para startups y empresas tecnológicas.
              </p>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-indigo-500 transition-all duration-300">
                  <span class="text-lg">📘</span>
                </a>
                <a href="#" class="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-indigo-500 transition-all duration-300">
                  <span class="text-lg">🐦</span>
                </a>
                <a href="#" class="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-indigo-500 transition-all duration-300">
                  <span class="text-lg">💼</span>
                </a>
                <a href="#" class="w-10 h-10 bg-neutral-700 rounded-lg flex items-center justify-center text-neutral-400 hover:text-white hover:bg-indigo-500 transition-all duration-300">
                  <span class="text-lg">📧</span>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 class="font-semibold text-gray-900 mb-4">Servicios</h4>
              <ul class="space-y-2">
                <li><a href="/services/web-design" class="text-gray-600 hover:text-purple-600 transition-colors">Diseño Web</a></li>
                <li><a href="/services/ai-automations" class="text-gray-600 hover:text-purple-600 transition-colors">IA & Automatización</a></li>
                <li><a href="/services/digital-marketing" class="text-gray-600 hover:text-purple-600 transition-colors">Marketing Digital</a></li>
                <li><a href="#services" class="text-gray-600 hover:text-purple-600 transition-colors">Consultoría</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 class="font-semibold text-gray-900 mb-4">Empresa</h4>
              <ul class="space-y-2">
                <li><a href="/about" class="text-gray-600 hover:text-purple-600 transition-colors">Sobre Nosotros</a></li>
                <li><a href="/portfolio" class="text-gray-600 hover:text-purple-600 transition-colors">Portafolio</a></li>
                <li><a href="/blog" class="text-gray-600 hover:text-purple-600 transition-colors">Blog</a></li>
                <li><a href="/contact" class="text-gray-600 hover:text-purple-600 transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div class="border-t border-gray-200 pt-8">
            <div class="grid md:grid-cols-3 gap-8 mb-8">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span class="text-purple-600">📍</span>
                </div>
                <div>
                  <p class="text-gray-900 font-medium">Ubicación</p>
                  <p class="text-gray-600 text-sm">Buenos Aires, Argentina</p>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span class="text-purple-600">📞</span>
                </div>
                <div>
                  <p class="text-gray-900 font-medium">Teléfono</p>
                  <p class="text-gray-600 text-sm">+54 11 1234-5678</p>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span class="text-purple-600">✉️</span>
                </div>
                <div>
                  <p class="text-gray-900 font-medium">Email</p>
                  <p class="text-gray-600 text-sm">hola@agenciatech.com</p>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
              <p class="text-gray-600 text-sm mb-4 md:mb-0">
                © 2024 AgenciaTech. Todos los derechos reservados.
              </p>
              <div class="flex space-x-6">
                <a href="#" class="text-gray-600 hover:text-purple-600 text-sm transition-colors">Política de Privacidad</a>
                <a href="#" class="text-gray-600 hover:text-purple-600 text-sm transition-colors">Términos de Servicio</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
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
