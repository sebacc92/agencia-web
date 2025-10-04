import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
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
  );
});