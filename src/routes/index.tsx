import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ImageHero from "~/media/images/oso_panda_usando_notebook.png?jsx";

export default component$(() => {
  return (
    <>
      {/* Clean Navigation Header */}
      <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div class="container">
          <nav class="flex items-center justify-between h-16">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <span class="text-white font-bold text-lg">A</span>
              </div>
              <span class="text-2xl font-bold text-gray-900">AgenciaTech</span>
            </div>

            <div class="hidden md:flex items-center space-x-8">
              <a href="#services" class="text-gray-600 hover:text-purple-600 transition-all duration-300 relative group px-3 py-2 font-medium">
                Servicios
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/about" class="text-gray-600 hover:text-purple-600 transition-all duration-300 relative group px-3 py-2 font-medium">
                Nosotros
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/portfolio" class="text-gray-600 hover:text-purple-600 transition-all duration-300 relative group px-3 py-2 font-medium">
                Portafolio
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="/contact" class="text-gray-600 hover:text-purple-600 transition-all duration-300 relative group px-3 py-2 font-medium">
                Contacto
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>

            <button class="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Empezar
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main class="pt-16 min-h-screen flex items-center bg-gray-50">
        {/* Subtle Background Elements */}
        <div class="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-cyan-50"></div>
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>
        
        <div class="container relative z-10 py-20">
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
                <button class="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                  Saber más
                </button>
              </div>
            </div>

            {/* Right Column - Image (50%) */}
            <div class="flex justify-center lg:justify-end">
              <ImageHero
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span class="text-gray-500 text-sm font-medium mb-2">SCROLL</span>
          <div class="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent"></div>
        </div>
      </main>

      {/* Services Section */}
      <section id="services" class="relative">
        <div class="container">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Servicios especializados para{' '}
              <span class="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                startups innovadoras
              </span>
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos diseño excepcional, inteligencia artificial y estrategias de marketing probadas
              para llevar tu startup al siguiente nivel.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Web Design Service */}
            <div class="card group relative">
              {/* Service Icon */}
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-slate-900">
                  <span class="group-hover:rotate-12 transition-transform duration-300">🌐</span>
                </div>
              </div>
              
              <div class="text-center mb-6 pt-8">
                <h3 class="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">Diseño Web</h3>
                <p class="text-purple-300 font-medium">Sitios web modernos y responsivos</p>
              </div>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Portafolios profesionales para creativos
                </li>
                <li class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Sitios web corporativos para empresas
                </li>
                <li class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Portales web personalizados
                </li>
                <li class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  E-commerce de alto rendimiento
                </li>
                <li class="flex items-center text-neutral-300">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Landing pages optimizadas
                </li>
              </ul>
              
              <button class="btn btn-secondary w-full group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
                Ver proyectos de diseño
              </button>
            </div>

            {/* AI Automations Service */}
            <div class="card group relative">
              {/* Service Icon */}
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div class="w-20 h-20 bg-gradient-to-br from-pink-500 to-amber-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-slate-900">
                  <span class="group-hover:rotate-12 transition-transform duration-300">🤖</span>
                </div>
              </div>
              
              <div class="text-center mb-6 pt-8">
                <h3 class="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">IA & Automatización</h3>
                <p class="text-pink-300 font-medium">Soluciones inteligentes para tu negocio</p>
              </div>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-neutral-300 hover:text-pink-300 transition-colors">
                  <span class="w-2 h-2 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full mr-3 animate-pulse"></span>
                  Chatbots de atención al cliente 24/7
                </li>
                <li class="flex items-center text-neutral-300 hover:text-pink-300 transition-colors">
                  <span class="w-2 h-2 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full mr-3 animate-pulse" style="animation-delay: 0.2s"></span>
                  Procesos automatizados con workflows
                </li>
                <li class="flex items-center text-neutral-300 hover:text-pink-300 transition-colors">
                  <span class="w-2 h-2 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full mr-3 animate-pulse" style="animation-delay: 0.4s"></span>
                  Analytics inteligente y predictivo
                </li>
                <li class="flex items-center text-neutral-300 hover:text-pink-300 transition-colors">
                  <span class="w-2 h-2 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full mr-3 animate-pulse" style="animation-delay: 0.6s"></span>
                  Generación automática de contenido
                </li>
                <li class="flex items-center text-neutral-300 hover:text-pink-300 transition-colors">
                  <span class="w-2 h-2 bg-gradient-to-r from-pink-400 to-amber-400 rounded-full mr-3 animate-pulse" style="animation-delay: 0.8s"></span>
                  Sistemas de recomendación personalizada
                </li>
              </ul>
              
              <button class="btn btn-secondary w-full group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-amber-500 group-hover:text-white transition-all duration-300">
                Explorar automatizaciones
              </button>
            </div>

            {/* Digital Marketing Service */}
            <div class="card group relative">
              {/* Service Icon */}
              <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-slate-900">
                  <span class="group-hover:rotate-12 transition-transform duration-300">📈</span>
                </div>
              </div>
              
              <div class="text-center mb-6 pt-8">
                <h3 class="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">Marketing Digital</h3>
                <p class="text-emerald-300 font-medium">Estrategias que generan resultados</p>
              </div>
              
              <ul class="space-y-3 mb-8">
                <li class="flex items-center text-neutral-300 hover:text-emerald-300 transition-colors">
                  <span class="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-3 animate-pulse"></span>
                  Marketing de contenidos estratégico
                </li>
                <li class="flex items-center text-neutral-300 hover:text-emerald-300 transition-colors">
                  <span class="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-3 animate-pulse" style="animation-delay: 0.2s"></span>
                  Generación y nutrición de leads
                </li>
                <li class="flex items-center text-neutral-300 hover:text-emerald-300 transition-colors">
                  <span class="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-3 animate-pulse" style="animation-delay: 0.4s"></span>
                  Campañas de performance marketing
                </li>
                <li class="flex items-center text-neutral-300 hover:text-emerald-300 transition-colors">
                  <span class="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-3 animate-pulse" style="animation-delay: 0.6s"></span>
                  SEO técnico y de contenido
                </li>
                <li class="flex items-center text-neutral-300 hover:text-emerald-300 transition-colors">
                  <span class="w-2 h-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full mr-3 animate-pulse" style="animation-delay: 0.8s"></span>
                  Social media marketing avanzado
                </li>
              </ul>
              
              <button class="btn btn-secondary w-full group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300">
                Ver estrategias de marketing
              </button>
            </div>
          </div>

          {/* Process Section */}
          <div class="text-center relative">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100 to-transparent rounded-3xl"></div>
            <h3 class="text-4xl font-bold mb-4 text-gray-900 relative z-10">
              Nuestro proceso de trabajo
            </h3>
            <p class="text-xl text-gray-600 mb-12 relative z-10">
              Metodología probada que garantiza resultados excepcionales
            </p>
            
            <div class="grid md:grid-cols-4 gap-8 relative z-10">
              <div class="text-center group">
                <div class="relative mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-xl group-hover:scale-110 transition-all duration-300">
                    1
                  </div>
                  <div class="absolute -top-2 -right-2 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
                </div>
                <h4 class="font-bold text-lg mb-2 text-gray-900">Descubrimiento</h4>
                <p class="text-gray-600">Analizamos tu negocio y objetivos</p>
              </div>

              <div class="text-center group">
                <div class="relative mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-amber-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-xl group-hover:scale-110 transition-all duration-300">
                    2
                  </div>
                  <div class="absolute -top-2 -right-2 w-4 h-4 bg-emerald-400 rounded-full animate-pulse" style="animation-delay: 0.5s"></div>
                </div>
                <h4 class="font-bold text-lg mb-2 text-gray-900">Estrategia</h4>
                <p class="text-gray-600">Diseñamos soluciones personalizadas</p>
              </div>

              <div class="text-center group">
                <div class="relative mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-xl group-hover:scale-110 transition-all duration-300">
                    3
                  </div>
                  <div class="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 1s"></div>
                </div>
                <h4 class="font-bold text-lg mb-2 text-gray-900">Implementación</h4>
                <p class="text-gray-600">Desarrollamos con tecnología de vanguardia</p>
              </div>

              <div class="text-center group">
                <div class="relative mb-6">
                  <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl shadow-xl group-hover:scale-110 transition-all duration-300">
                    4
                  </div>
                  <div class="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse" style="animation-delay: 1.5s"></div>
                </div>
                <h4 class="font-bold text-lg mb-2 text-gray-900">Optimización</h4>
                <p class="text-gray-600">Medimos y mejoramos continuamente</p>
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
