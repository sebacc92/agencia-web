import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="relative bg-gradient-to-br from-white via-purple-50/40 to-blue-50/30 overflow-hidden">
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
        {/* Process Section */}
        <div class="relative">
          {/* Background decorative element */}
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/10 to-transparent rounded-3xl"></div>

          <div class="relative z-10 text-center pb-12">
            <div class="inline-block my-6 px-4 py-2 bg-purple-100 border border-purple-300 rounded-full animate-fade-up" style="animation-delay: 0.1s">
              <span class="text-purple-700 text-sm font-semibold uppercase tracking-wider">Proceso de trabajo</span>
            </div>
            <p class="text-lg md:text-xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-up" style="animation-delay: 0.3s">
              De la idea al éxito en 5 pasos
            </p>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 md:gap-6 relative">
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
                    <h4 class="font-bold text-xl mb-2 text-gray-900 group-hover:text-purple-700 transition-colors">Consulta Inicial</h4>
                    <p class="text-gray-600 text-sm">Conversamos sobre tu negocio, objetivos y necesidades específicas.</p>
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
                    <p class="text-gray-600 text-sm">Diseñamos un plan personalizado con soluciones a medida para ti.</p>
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
                    <h4 class="font-bold text-xl mb-2 text-gray-900 group-hover:text-emerald-700 transition-colors">Desarrollo</h4>
                    <p class="text-gray-600 text-sm">Creamos tu presencia digital con las mejores prácticas y tecnología.</p>
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
                    <h4 class="font-bold text-xl mb-2 text-gray-900 group-hover:text-cyan-700 transition-colors">Lanzamiento</h4>
                    <p class="text-gray-600 text-sm">Publicamos tu proyecto y te damos soporte continuo para crecer.</p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div class="relative group animate-fade-up" style="animation-delay: 0.8s">
                <div class="relative">
                  {/* Glow effect */}
                  <div class="absolute -inset-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500"></div>

                  <div class="relative bg-white border-2 border-indigo-200 rounded-2xl p-6 hover:border-indigo-400 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-lg">
                    <div class="relative mb-6 inline-block">
                      <div class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-indigo-300">
                        5
                      </div>
                      <div class="absolute -top-2 -right-2 w-3 h-3 bg-indigo-400 rounded-full animate-pulse shadow-lg" style="animation-delay: 1.2s"></div>
                    </div>
                    <h4 class="font-bold text-xl mb-2 text-gray-900 group-hover:text-indigo-700 transition-colors">Optimización</h4>
                    <p class="text-gray-600 text-sm">
                      Medición de datos, análisis de interacciones y aplicación de mejoras continuas.
                    </p>
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