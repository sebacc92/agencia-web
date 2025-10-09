import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="services" class="relative bg-gradient-to-br from-white via-purple-50/40 to-blue-50/30 overflow-hidden py-22">
      {/* Animated Background Elements */}
      <div class="absolute inset-0">
        {/* Grid pattern - Light version */}
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Large geometric shapes - Light pastel colors */}
        <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-300/30 to-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-pink-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 4s"></div>
      </div>

      <div class="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div class="text-center mb-8">
          <div class="inline-block mb-4 px-4 py-2 bg-purple-100 border border-purple-300 rounded-full">
            <span class="text-purple-700 text-sm font-semibold uppercase tracking-wider">Nuestros servicios</span>
          </div>
          <p class="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Desarrollamos soluciones digitales innovadoras que transforman tu presencia online y aceleran el crecimiento de tu negocio.
          </p>
        </div>

        {/* Services Grid */}
        <div class="grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 xl:gap-16 mb-24">
          {/* Web Design Service */}
          <div class="group relative animate-fade-up" style="animation-delay: 0.1s">
            {/* Glow effect on hover */}
            <div class="absolute -inset-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 group-hover:blur-3xl"></div>
            
            <div class="relative bg-white border-2 border-purple-200 rounded-3xl p-8 h-full shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:border-purple-400">
              {/* Service Icon and Title Row */}
              <div class="mb-8">
                <div class="flex items-start gap-6 mb-4">
                  <div class="relative flex-shrink-0">
                    <div class="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-purple-300">
                      🌐
                    </div>
                    <div class="absolute -top-1 -right-1 w-6 h-6 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
                    <div class="absolute -top-1 -right-1 w-6 h-6 bg-cyan-400 rounded-full"></div>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-indigo-600 transition-all duration-300 leading-tight">
                      {"Diseño Web".split(" ").map((word, index) => (
                        <div key={index}>{word}</div>
                      ))}
                    </h3>
                  </div>
                </div>

                <p class="text-purple-700 font-medium text-base">Sitios web únicos y responsivos</p>
              </div>

              <ul class="space-y-4 mb-8">
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-purple-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-purple-600/50 transition-all"></span>
                  <span class="text-sm md:text-base">Landing Page</span>
                </li>
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-purple-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-purple-600/50 transition-all"></span>
                  <span class="text-sm md:text-base">Dominio web GRATIS</span>
                </li>
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-purple-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-purple-600/50 transition-all"></span>
                  <span class="text-sm md:text-base">Hosting y mantenimiento por 1 año</span>
                </li>
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-purple-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-purple-600/50 transition-all"></span>
                  <span class="text-sm md:text-base">Diseño 100% personalizado</span>
                </li>
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-purple-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-purple-600/50 transition-all"></span>
                  <span class="text-sm md:text-base">Botón de WhatsApp</span>
                </li>
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-purple-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-purple-600/50 transition-all"></span>
                  <span class="text-sm md:text-base">Enlace a Redes Sociales</span>
                </li>
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-purple-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-purple-600/50 transition-all"></span>
                  <span class="text-sm md:text-base">Mail corporativo (hola@mimarca.com)</span>
                </li>
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-purple-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-purple-600/50 transition-all"></span>
                  <span class="text-sm md:text-base">Soporte personalizado</span>
                </li>
              </ul>

              <button class="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group-hover:shadow-2xl">
                <span class="flex items-center justify-center gap-2">
                  Ver proyectos de diseño
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* AI Automations Service */}
          <div class="group relative animate-fade-up" style="animation-delay: 0.2s">
            {/* Glow effect on hover */}
            <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 group-hover:blur-3xl"></div>
            
            <div class="relative bg-white border-2 border-pink-200 rounded-3xl p-8 h-full shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:border-pink-400">
              {/* Service Icon and Title Row */}
              <div class="mb-8">
                <div class="flex items-start gap-6 mb-4">
                  <div class="relative flex-shrink-0">
                    <div class="w-20 h-20 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-pink-300">
                      🤖
                    </div>
                    <div class="absolute -top-1 -right-1 w-6 h-6 bg-orange-400 rounded-full animate-ping opacity-75"></div>
                    <div class="absolute -top-1 -right-1 w-6 h-6 bg-orange-400 rounded-full"></div>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-orange-600 transition-all duration-300 leading-tight">
                      {"Inteligencia Artificial".split(" ").map((word, index) => (
                        <div key={index}>{word}</div>
                      ))}
                    </h3>
                  </div>
                </div>

                <p class="text-pink-700 font-medium text-base">Soluciones de IA que transforman procesos</p>
              </div>

              <ul class="space-y-4 mb-8">
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-pink-600/50 transition-all"></span>
                  <span class="text-sm md:text-base">Asistentes virtuales con IA avanzada</span>
                </li>
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-pink-600/50 transition-all" style="animation-delay: 0.2s"></span>
                  <span class="text-sm md:text-base">Procesos empresariales automatizados</span>
                </li>
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-pink-600/50 transition-all" style="animation-delay: 0.4s"></span>
                  <span class="text-sm md:text-base">Análisis predictivo de datos empresariales</span>
                </li>
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-pink-600/50 transition-all" style="animation-delay: 0.6s"></span>
                  <span class="text-sm md:text-base">Creación automática de contenido inteligente</span>
                </li>
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-pink-600/50 transition-all" style="animation-delay: 0.8s"></span>
                  <span class="text-sm md:text-base">Sistemas de recomendación personalizados</span>
                </li>
              </ul>

              <button class="w-full px-6 py-4 bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group-hover:shadow-2xl">
                <span class="flex items-center justify-center gap-2">
                  Explorar automatizaciones
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Digital Marketing Service */}
          <div class="group relative animate-fade-up" style="animation-delay: 0.3s">
            {/* Glow effect on hover */}
            <div class="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-500 group-hover:blur-3xl"></div>
            
            <div class="relative bg-white border-2 border-emerald-200 rounded-3xl p-8 h-full shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:border-emerald-400">
              {/* Service Icon and Title Row */}
              <div class="mb-8">
                <div class="flex items-start gap-6 mb-4">
                  <div class="relative flex-shrink-0">
                    <div class="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border-2 border-emerald-300">
                      📈
                    </div>
                    <div class="absolute -top-1 -right-1 w-6 h-6 bg-cyan-400 rounded-full animate-ping opacity-75"></div>
                    <div class="absolute -top-1 -right-1 w-6 h-6 bg-cyan-400 rounded-full"></div>
                  </div>

                  <div class="flex-1">
                    <h3 class="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-cyan-600 transition-all duration-300 leading-tight">
                      {"Marketing Digital".split(" ").map((word, index) => (
                        <div key={index}>{word}</div>
                      ))}
                    </h3>
                  </div>
                </div>

                <p class="text-emerald-700 font-medium text-base">Estrategias personalizadas que convierten</p>
              </div>

              <ul class="space-y-4 mb-8">
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-emerald-600/50 transition-all"></span>
                  <span class="text-sm md:text-base">Estrategias de marketing personalizadas</span>
                </li>
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-emerald-600/50 transition-all" style="animation-delay: 0.2s"></span>
                  <span class="text-sm md:text-base">Campañas publicitarias de alto impacto</span>
                </li>
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-emerald-600/50 transition-all" style="animation-delay: 0.4s"></span>
                  <span class="text-sm md:text-base">Optimización de conversiones y ventas</span>
                </li>
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-emerald-600/50 transition-all" style="animation-delay: 0.6s"></span>
                  <span class="text-sm md:text-base">Posicionamiento SEO avanzado</span>
                </li>
                <li class="flex items-start text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  <span class="inline-block w-1.5 h-1.5 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-full mr-3 mt-2 group-hover:shadow-lg group-hover:shadow-emerald-600/50 transition-all" style="animation-delay: 0.8s"></span>
                  <span class="text-sm md:text-base">Gestión profesional de redes sociales</span>
                </li>
              </ul>

              <button class="w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group-hover:shadow-2xl">
                <span class="flex items-center justify-center gap-2">
                  Ver estrategias de marketing
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div class="relative">
          {/* Background decorative element */}
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/10 to-transparent rounded-3xl"></div>

          <div class="relative z-10 text-center pb-12">
            <div class="inline-block my-6 px-4 py-2 bg-purple-100 border border-purple-300 rounded-full animate-fade-up" style="animation-delay: 0.1s">
              <span class="text-purple-700 text-sm font-semibold uppercase tracking-wider">Proceso de trabajo</span>
            </div>
            <p class="text-lg md:text-xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-up" style="animation-delay: 0.3s">
              Metodología probada que garantiza resultados excepcionales con un enfoque ágil y centrado en el cliente
            </p>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative">
              {/* Step 1 */}
              <div class="relative group animate-fade-up" style="animation-delay: 0.4s">
                <div class="relative">
                  {/* Glow effect */}
                  <div class="absolute -inset-2 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"></div>
                  
                  <div class="relative bg-white border-2 border-purple-200 rounded-2xl p-6 hover:border-purple-400 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-lg">
                    <div class="relative mb-6 inline-block">
                      <div class="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-purple-300">
                        1
                      </div>
                      <div class="absolute -top-2 -right-2 w-3 h-3 bg-amber-400 rounded-full animate-pulse shadow-lg"></div>
                    </div>
                    <h4 class="font-bold text-xl mb-2 text-gray-900 group-hover:text-purple-700 transition-colors">Descubrimiento</h4>
                    <p class="text-gray-600 text-sm">Analizamos tu negocio y objetivos</p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div class="relative group animate-fade-up" style="animation-delay: 0.5s">
                <div class="relative">
                  {/* Glow effect */}
                  <div class="absolute -inset-2 bg-gradient-to-r from-pink-400 to-orange-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"></div>
                  
                  <div class="relative bg-white border-2 border-pink-200 rounded-2xl p-6 hover:border-pink-400 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-lg">
                    <div class="relative mb-6 inline-block">
                      <div class="w-16 h-16 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-pink-300">
                        2
                      </div>
                      <div class="absolute -top-2 -right-2 w-3 h-3 bg-emerald-400 rounded-full animate-pulse shadow-lg" style="animation-delay: 0.3s"></div>
                    </div>
                    <h4 class="font-bold text-xl mb-2 text-gray-900 group-hover:text-pink-700 transition-colors">Estrategia</h4>
                    <p class="text-gray-600 text-sm">Diseñamos soluciones personalizadas</p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div class="relative group animate-fade-up" style="animation-delay: 0.6s">
                <div class="relative">
                  {/* Glow effect */}
                  <div class="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"></div>
                  
                  <div class="relative bg-white border-2 border-emerald-200 rounded-2xl p-6 hover:border-emerald-400 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-lg">
                    <div class="relative mb-6 inline-block">
                      <div class="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-emerald-300">
                        3
                      </div>
                      <div class="absolute -top-2 -right-2 w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg" style="animation-delay: 0.6s"></div>
                    </div>
                    <h4 class="font-bold text-xl mb-2 text-gray-900 group-hover:text-emerald-700 transition-colors">Implementación</h4>
                    <p class="text-gray-600 text-sm">Desarrollamos con tecnología de vanguardia</p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div class="relative group animate-fade-up" style="animation-delay: 0.7s">
                <div class="relative">
                  {/* Glow effect */}
                  <div class="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"></div>
                  
                  <div class="relative bg-white border-2 border-cyan-200 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-lg">
                    <div class="relative mb-6 inline-block">
                      <div class="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-cyan-300">
                        4
                      </div>
                      <div class="absolute -top-2 -right-2 w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg" style="animation-delay: 0.9s"></div>
                    </div>
                    <h4 class="font-bold text-xl mb-2 text-gray-900 group-hover:text-cyan-700 transition-colors">Optimización</h4>
                    <p class="text-gray-600 text-sm">Medimos y mejoramos continuamente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }


        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }

        .card {
          padding: 2rem;
          border-radius: 1.5rem;
        }

        @media (max-width: 768px) {
          .card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
});