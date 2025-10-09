import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section id="portfolio" class="relative bg-gradient-to-br from-white via-indigo-50/40 to-purple-50/30 overflow-hidden py-22">
      {/* Animated Background Elements */}
      <div class="absolute inset-0">
        {/* Grid pattern - Light version */}
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Large geometric shapes - Indigo/purple colors */}
        <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-indigo-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-purple-300/20 to-indigo-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: "2s"}}></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-indigo-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: "4s"}}></div>
      </div>

      <div class="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Title Section */}
        <div class="text-center">
            <div class="inline-block my-6 px-4 py-2 bg-purple-100 border border-purple-300 rounded-full animate-fade-up" style="animation-delay: 0.1s">
                <span class="text-purple-700 text-sm font-semibold uppercase tracking-wider">Portafolio</span>
            </div>
        </div>

        {/* Main Content Section */}
        <div class="text-center max-w-4xl mx-auto">
          <div class="animate-fade-up" style={{animationDelay: "0.2s"}}>
            <div class="space-y-8">
              {/* Main Heading */}
              <div>
                <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                  🚀 Estamos construyendo algo
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> increíble</span>
                </h3>
                <p class="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                  Como agencia nueva, estamos trabajando en nuestros primeros proyectos emocionantes. Cada proyecto es una oportunidad para demostrar nuestra pasión por el diseño web moderno, las automatizaciones inteligentes y el marketing digital estratégico.
                </p>
              </div>

              {/* Coming Soon Message */}
              <div class="relative">
                {/* Background decorative element */}
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-300/10 to-transparent rounded-3xl"></div>

                <div class="relative z-10 bg-white/80 backdrop-blur-sm border-2 border-indigo-200 rounded-2xl p-8 md:p-12 shadow-lg">
                  <div class="space-y-6">
                    <div class="text-6xl md:text-7xl">⚡</div>
                    <h4 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      ¡Próximamente!
                    </h4>
                    <p class="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
                      Estamos desarrollando proyectos innovadores que mostrarán todo nuestro potencial. Desde sitios web de alto rendimiento hasta automatizaciones con IA que transforman negocios, cada proyecto será una muestra de nuestra dedicación y expertise.
                    </p>

                    {/* Features Preview */}
                    <div class="grid md:grid-cols-3 gap-6 mt-8">
                      <div class="text-center">
                        <div class="text-3xl mb-3">🎨</div>
                        <h5 class="font-semibold text-gray-900 mb-2">Diseño Web Moderno</h5>
                        <p class="text-sm text-gray-600">Sitios web que convierten visitantes en clientes</p>
                      </div>
                      <div class="text-center">
                        <div class="text-3xl mb-3">🤖</div>
                        <h5 class="font-semibold text-gray-900 mb-2">Automatizaciones IA</h5>
                        <p class="text-sm text-gray-600">Procesos inteligentes que ahorran tiempo y dinero</p>
                      </div>
                      <div class="text-center">
                        <div class="text-3xl mb-3">📈</div>
                        <h5 class="font-semibold text-gray-900 mb-2">Marketing Digital</h5>
                        <p class="text-sm text-gray-600">Estrategias que generan resultados reales</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div class="animate-fade-up" style={{animationDelay: "0.4s"}}>
                <div class="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
                  <h4 class="text-2xl font-bold mb-4">¿Quieres ser parte de nuestros primeros proyectos?</h4>
                  <p class="text-indigo-100 mb-6 text-lg">
                    Estamos buscando empresas valientes que quieran crecer con nosotros. ¡Seamos pioneros juntos!
                  </p>
                  <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="/contact"
                      class="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Empezar un Proyecto
                    </a>
                    <a
                      href="#about"
                      class="inline-block border-2 border-white/30 text-white font-semibold px-8 py-3 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      Conocer Más Sobre Nosotros
                    </a>
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