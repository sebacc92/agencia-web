import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      {/* Navigation Header */}
      <header class="fixed top-0 left-0 right-0 z-50 bg-neutral-900/80 backdrop-blur-lg border-b border-white/10">
        <div class="container">
          <nav class="flex items-center justify-between h-16">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">A</span>
              </div>
              <span class="text-xl font-bold text-white">AgenciaTech</span>
            </div>
            
            <div class="hidden md:flex items-center space-x-8">
              <a href="/" class="text-neutral-300 hover:text-white transition-colors">Inicio</a>
              <a href="/#services" class="text-neutral-300 hover:text-white transition-colors">Servicios</a>
              <a href="/about" class="text-neutral-300 hover:text-white transition-colors">Nosotros</a>
              <a href="/portfolio" class="text-neutral-300 hover:text-white transition-colors">Portafolio</a>
              <a href="/blog" class="text-indigo-400">Blog</a>
            </div>
            
            <button class="btn btn-primary text-sm px-4 py-2">
              Empezar
            </button>
          </nav>
        </div>
      </header>

      {/* Blog Hero Section */}
      <section class="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-neutral-900 to-indigo-900/20"></div>
        
        <div class="container relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
              Blog &{' '}
              <span class="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Recursos
              </span>
            </h1>
            
            <p class="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Insights, tendencias y guías prácticas sobre diseño web, inteligencia artificial 
              y marketing digital para startups y empresas tecnológicas.
            </p>
            
            <div class="flex flex-wrap justify-center gap-4 text-sm">
              <button class="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                Todos los artículos
              </button>
              <button class="px-4 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-all">
                Diseño Web
              </button>
              <button class="px-4 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-all">
                Inteligencia Artificial
              </button>
              <button class="px-4 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-all">
                Marketing Digital
              </button>
              <button class="px-4 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-all">
                Startups
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section class="py-20">
        <div class="container">
          <div class="mb-12">
            <span class="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm mb-4 inline-block">
              Artículo destacado
            </span>
            <div class="card p-8">
              <div class="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div class="flex items-center space-x-4 mb-4">
                    <span class="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded text-sm">Diseño Web</span>
                    <span class="text-neutral-400 text-sm">15 min de lectura</span>
                  </div>
                  <h2 class="text-3xl font-bold mb-4">
                    Las 10 tendencias en diseño web que dominarán 2024
                  </h2>
                  <p class="text-neutral-400 mb-6">
                    Descubre las tendencias más importantes en diseño web para este año, 
                    desde el diseño glassmorphism hasta la integración avanzada de IA en las interfaces de usuario.
                  </p>
                  <div class="flex items-center space-x-4">
                    <div class="w-10 h-10 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                      AG
                    </div>
                    <div>
                      <p class="font-semibold text-white">Ana García</p>
                      <p class="text-neutral-400 text-sm">Head of Design</p>
                    </div>
                  </div>
                </div>
                <div class="lg:h-64 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span class="text-white text-6xl">🎨</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section class="py-20 bg-neutral-800/50">
        <div class="container">
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article class="card p-6 group hover:scale-105 transition-transform duration-300">
              <div class="mb-4">
                <div class="w-full h-32 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg mb-4 flex items-center justify-center">
                  <span class="text-white text-2xl">🤖</span>
                </div>
                <div class="flex items-center space-x-2 mb-2">
                  <span class="px-2 py-1 bg-pink-500/10 text-pink-400 rounded text-xs">IA</span>
                  <span class="text-neutral-400 text-xs">8 min de lectura</span>
                </div>
                <h3 class="text-lg font-bold mb-2 group-hover:text-pink-400 transition-colors">
                  Cómo implementar chatbots en tu startup sin morir en el intento
                </h3>
                <p class="text-neutral-400 text-sm">
                  Guía práctica paso a paso para integrar chatbots de IA en tu negocio, 
                  desde la planificación hasta el despliegue.
                </p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-6 h-6 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    MR
                  </div>
                  <span class="text-neutral-400 text-xs">María Rodríguez</span>
                </div>
                <span class="text-neutral-400 text-xs">Hace 3 días</span>
              </div>
            </article>

            {/* Article 2 */}
            <article class="card p-6 group hover:scale-105 transition-transform duration-300">
              <div class="mb-4">
                <div class="w-full h-32 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                  <span class="text-white text-2xl">📈</span>
                </div>
                <div class="flex items-center space-x-2 mb-2">
                  <span class="px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded text-xs">Marketing</span>
                  <span class="text-neutral-400 text-xs">12 min de lectura</span>
                </div>
                <h3 class="text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                  Growth Hacking: Estrategias probadas para startups en 2024
                </h3>
                <p class="text-neutral-400 text-sm">
                  Técnicas avanzadas de growth hacking que realmente funcionan, 
                  con ejemplos reales y métricas medibles.
                </p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-6 h-6 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    CL
                  </div>
                  <span class="text-neutral-400 text-xs">Carlos López</span>
                </div>
                <span class="text-neutral-400 text-xs">Hace 1 semana</span>
              </div>
            </article>

            {/* Article 3 */}
            <article class="card p-6 group hover:scale-105 transition-transform duration-300">
              <div class="mb-4">
                <div class="w-full h-32 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-lg mb-4 flex items-center justify-center">
                  <span class="text-white text-2xl">⚛️</span>
                </div>
                <div class="flex items-center space-x-2 mb-2">
                  <span class="px-2 py-1 bg-indigo-500/10 text-indigo-400 rounded text-xs">Desarrollo</span>
                  <span class="text-neutral-400 text-xs">10 min de lectura</span>
                </div>
                <h3 class="text-lg font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                  Next.js 14: Todo lo que necesitas saber sobre la nueva versión
                </h3>
                <p class="text-neutral-400 text-sm">
                  Análisis detallado de las nuevas características de Next.js 14 
                  y cómo aprovecharlas en tus proyectos.
                </p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-6 h-6 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    LM
                  </div>
                  <span class="text-neutral-400 text-xs">Laura Martín</span>
                </div>
                <span class="text-neutral-400 text-xs">Hace 2 semanas</span>
              </div>
            </article>

            {/* Article 4 */}
            <article class="card p-6 group hover:scale-105 transition-transform duration-300">
              <div class="mb-4">
                <div class="w-full h-32 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg mb-4 flex items-center justify-center">
                  <span class="text-white text-2xl">🚀</span>
                </div>
                <div class="flex items-center space-x-2 mb-2">
                  <span class="px-2 py-1 bg-purple-500/10 text-purple-400 rounded text-xs">Startups</span>
                  <span class="text-neutral-400 text-xs">6 min de lectura</span>
                </div>
                <h3 class="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  MVP vs Producto completo: ¿Cuánto lanzar primero?
                </h3>
                <p class="text-neutral-400 text-sm">
                  Guía para decidir qué funcionalidades incluir en tu MVP 
                  y cómo validar tu idea de negocio rápidamente.
                </p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    SJ
                  </div>
                  <span class="text-neutral-400 text-xs">Sebastián Juárez</span>
                </div>
                <span class="text-neutral-400 text-xs">Hace 3 semanas</span>
              </div>
            </article>

            {/* Article 5 */}
            <article class="card p-6 group hover:scale-105 transition-transform duration-300">
              <div class="mb-4">
                <div class="w-full h-32 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-lg mb-4 flex items-center justify-center">
                  <span class="text-white text-2xl">🔥</span>
                </div>
                <div class="flex items-center space-x-2 mb-2">
                  <span class="px-2 py-1 bg-orange-500/10 text-orange-400 rounded text-xs">SEO</span>
                  <span class="text-neutral-400 text-xs">7 min de lectura</span>
                </div>
                <h3 class="text-lg font-bold mb-2 group-hover:text-orange-400 transition-colors">
                  SEO técnico: La guía definitiva para developers
                </h3>
                <p class="text-neutral-400 text-sm">
                  Aspectos técnicos del SEO que todo desarrollador debe conocer 
                  para crear sitios web optimizados desde el código.
                </p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-6 h-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    DG
                  </div>
                  <span class="text-neutral-400 text-xs">Diego González</span>
                </div>
                <span class="text-neutral-400 text-xs">Hace 1 mes</span>
              </div>
            </article>

            {/* Article 6 */}
            <article class="card p-6 group hover:scale-105 transition-transform duration-300">
              <div class="mb-4">
                <div class="w-full h-32 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-lg mb-4 flex items-center justify-center">
                  <span class="text-white text-2xl">💡</span>
                </div>
                <div class="flex items-center space-x-2 mb-2">
                  <span class="px-2 py-1 bg-teal-500/10 text-teal-400 rounded text-xs">Innovación</span>
                  <span class="text-neutral-400 text-xs">9 min de lectura</span>
                </div>
                <h3 class="text-lg font-bold mb-2 group-hover:text-teal-400 transition-colors">
                  El futuro del trabajo: Cómo la IA está transformando las startups
                </h3>
                <p class="text-neutral-400 text-sm">
                  Análisis de cómo la inteligencia artificial está cambiando 
                  la forma de trabajar en las startups modernas.
                </p>
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <div class="w-6 h-6 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    MR
                  </div>
                  <span class="text-neutral-400 text-xs">María Rodríguez</span>
                </div>
                <span class="text-neutral-400 text-xs">Hace 1 mes</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section class="py-20">
        <div class="container">
          <div class="card text-center p-12 max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold mb-6">¿Quieres recibir más contenido?</h2>
            <p class="text-xl text-neutral-300 mb-8">
              Suscríbete a nuestro newsletter y recibe semanalmente insights exclusivos 
              sobre tecnología, diseño y marketing para startups.
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="tu@email.com"
                class="flex-1 px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-purple-500 transition-colors"
              />
              <button class="btn btn-primary px-8 py-3">
                Suscribirme
              </button>
            </div>
            
            <p class="text-neutral-400 text-sm mt-4">
              No spam, solo contenido de valor. Puedes darte de baja en cualquier momento.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section class="py-20 bg-neutral-800/50">
        <div class="container">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Explora por categorías</h2>
            <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
              Contenido especializado para cada área de tu negocio digital.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center card p-8 group hover:scale-105 transition-transform duration-300">
              <div class="w-16 h-16 bg-indigo-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl">
                🌐
              </div>
              <h3 class="text-xl font-bold mb-2">Diseño Web</h3>
              <p class="text-neutral-400 text-sm mb-4">
                Tendencias, mejores prácticas y guías de UX/UI
              </p>
              <p class="text-indigo-400 font-semibold">12 artículos</p>
            </div>
            
            <div class="text-center card p-8 group hover:scale-105 transition-transform duration-300">
              <div class="w-16 h-16 bg-pink-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl">
                🤖
              </div>
              <h3 class="text-xl font-bold mb-2">Inteligencia Artificial</h3>
              <p class="text-neutral-400 text-sm mb-4">
                Guías de implementación y casos de uso reales
              </p>
              <p class="text-pink-400 font-semibold">8 artículos</p>
            </div>
            
            <div class="text-center card p-8 group hover:scale-105 transition-transform duration-300">
              <div class="w-16 h-16 bg-emerald-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl">
                📈
              </div>
              <h3 class="text-xl font-bold mb-2">Marketing Digital</h3>
              <p class="text-neutral-400 text-sm mb-4">
                Estrategias probadas y análisis de métricas
              </p>
              <p class="text-emerald-400 font-semibold">15 artículos</p>
            </div>
            
            <div class="text-center card p-8 group hover:scale-105 transition-transform duration-300">
              <div class="w-16 h-16 bg-purple-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl">
                🚀
              </div>
              <h3 class="text-xl font-bold mb-2">Startups</h3>
              <p class="text-neutral-400 text-sm mb-4">
                Consejos para emprendedores y founders
              </p>
              <p class="text-purple-400 font-semibold">10 artículos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-neutral-800 border-t border-white/10">
        <div class="container py-16">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div class="lg:col-span-2">
              <div class="flex items-center space-x-2 mb-4">
                <div class="w-8 h-8 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-sm">A</span>
                </div>
                <span class="text-xl font-bold text-white">AgenciaTech</span>
              </div>
              <p class="text-neutral-300 mb-6 max-w-md">
                Especialistas en diseño web moderno, automatizaciones con IA y marketing digital estratégico 
                para startups y empresas tecnológicas.
              </p>
            </div>

            <div>
              <h4 class="font-semibold text-white mb-4">Servicios</h4>
              <ul class="space-y-2">
                <li><a href="/services/web-design" class="text-neutral-400 hover:text-white transition-colors">Diseño Web</a></li>
                <li><a href="/services/ai-automations" class="text-neutral-400 hover:text-white transition-colors">IA & Automatización</a></li>
                <li><a href="/services/digital-marketing" class="text-neutral-400 hover:text-white transition-colors">Marketing Digital</a></li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-white mb-4">Contenido</h4>
              <ul class="space-y-2">
                <li><a href="/blog" class="text-indigo-400">Blog</a></li>
                <li><a href="/portfolio" class="text-neutral-400 hover:text-white transition-colors">Portafolio</a></li>
                <li><a href="/about" class="text-neutral-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="/contact" class="text-neutral-400 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <p class="text-neutral-400 text-sm mb-4 md:mb-0">
              © 2024 AgenciaTech. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: "Blog - AgenciaTech | Recursos sobre Diseño Web, IA y Marketing Digital",
  meta: [
    {
      name: "description",
      content: "Blog especializado en diseño web, inteligencia artificial y marketing digital para startups. Guías prácticas, tendencias y casos de estudio.",
    },
    {
      name: "keywords",
      content: "blog tecnología, diseño web, inteligencia artificial, marketing digital, startups, recursos, guías",
    },
  ],
};