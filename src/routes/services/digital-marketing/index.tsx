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
              <a href="/#services" class="text-indigo-400">Servicios</a>
              <a href="/about" class="text-neutral-300 hover:text-white transition-colors">Nosotros</a>
              <a href="/portfolio" class="text-neutral-300 hover:text-white transition-colors">Portafolio</a>
              <a href="/contact" class="text-neutral-300 hover:text-white transition-colors">Contacto</a>
            </div>
            
            <button class="btn btn-primary text-sm px-4 py-2">
              Empezar
            </button>
          </nav>
        </div>
      </header>

      {/* Service Hero Section */}
      <section class="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-neutral-900 to-emerald-900/20"></div>
        
        <div class="container relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-8">
              <span class="text-emerald-400 text-sm font-medium">📈 Marketing del futuro</span>
            </div>
            
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
              Marketing Digital{' '}
              <span class="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                Estratégico
              </span>
            </h1>
            
            <p class="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Desarrollamos estrategias de marketing digital basadas en datos que generan leads 
              calificados y aumentan las conversiones de manera sostenible.
            </p>
            
            <button class="btn btn-primary px-8 py-4 text-lg">
              Consulta de Marketing
            </button>
          </div>
        </div>
      </section>

      {/* Marketing Services Section */}
      <section class="py-20">
        <div class="container">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Servicios de marketing especializados</h2>
            <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
              Estrategias personalizadas para cada etapa del embudo de ventas de tu negocio.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            {/* Content Marketing */}
            <div class="card group">
              <div class="text-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl">
                  📝
                </div>
                <h3 class="text-2xl font-bold mb-2">Marketing de Contenido</h3>
                <p class="text-neutral-400">Contenido que atrae y convierte</p>
              </div>
              
              <ul class="space-y-3 mb-8 text-neutral-300">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Estrategia de contenido personalizada
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Creación de blog posts optimizados
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Whitepapers y ebooks profesionales
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Infografías y contenido visual
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Newsletter y email marketing
                </li>
              </ul>
              
              <div class="text-center">
                <p class="text-2xl font-bold text-emerald-400 mb-2">Desde $700</p>
                <p class="text-neutral-400 text-sm">Tiempo de entrega: 2-3 semanas</p>
              </div>
            </div>

            {/* Lead Generation */}
            <div class="card group">
              <div class="text-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl">
                  🎯
                </div>
                <h3 class="text-2xl font-bold mb-2">Generación de Leads</h3>
                <p class="text-neutral-400">Captación de clientes potenciales</p>
              </div>
              
              <ul class="space-y-3 mb-8 text-neutral-300">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Landing pages de alta conversión
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Formularios optimizados
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Lead magnets efectivos
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Campañas de nurturing
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  Scoring y calificación de leads
                </li>
              </ul>
              
              <div class="text-center">
                <p class="text-2xl font-bold text-blue-400 mb-2">Desde $900</p>
                <p class="text-neutral-400 text-sm">Tiempo de entrega: 2-4 semanas</p>
              </div>
            </div>

            {/* Performance Marketing */}
            <div class="card group">
              <div class="text-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl">
                  🚀
                </div>
                <h3 class="text-2xl font-bold mb-2">Performance Marketing</h3>
                <p class="text-neutral-400">Resultados medibles y escalables</p>
              </div>
              
              <ul class="space-y-3 mb-8 text-neutral-300">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Campañas de Google Ads
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Publicidad en redes sociales
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Remarketing avanzado
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  A/B testing continuo
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Optimización de ROI
                </li>
              </ul>
              
              <div class="text-center">
                <p class="text-2xl font-bold text-purple-400 mb-2">Desde $1,200</p>
                <p class="text-neutral-400 text-sm">Tiempo de entrega: 3-4 semanas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Channels Section */}
      <section class="py-20 bg-neutral-800/50">
        <div class="container">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 class="text-4xl font-bold mb-6">Canales de marketing especializados</h2>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center mt-1">
                    <span class="text-emerald-400">🔍</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2">SEO Técnico y de Contenido</h3>
                    <p class="text-neutral-400">Optimización avanzada para motores de búsqueda con enfoque en contenido de calidad.</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center mt-1">
                    <span class="text-blue-400">📘</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2">Social Media Marketing</h3>
                    <p class="text-neutral-400">Estrategias orgánicas y pagadas en todas las plataformas sociales relevantes.</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center mt-1">
                    <span class="text-purple-400">📧</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2">Email Marketing Automation</h3>
                    <p class="text-neutral-400">Secuencias automatizadas que convierten suscriptores en clientes.</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center mt-1">
                    <span class="text-orange-400">🎯</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2">Publicidad Programática</h3>
                    <p class="text-neutral-400">Compra inteligente de espacios publicitarios con targeting avanzado.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="card p-8">
              <h3 class="text-2xl font-bold mb-6 text-center">Herramientas y plataformas</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-4 bg-neutral-800/50 rounded-lg">
                  <div class="text-2xl mb-2">📊</div>
                  <div class="font-semibold">Google Ads</div>
                </div>
                <div class="text-center p-4 bg-neutral-800/50 rounded-lg">
                  <div class="text-2xl mb-2">📘</div>
                  <div class="font-semibold">Meta Ads</div>
                </div>
                <div class="text-center p-4 bg-neutral-800/50 rounded-lg">
                  <div class="text-2xl mb-2">🔍</div>
                  <div class="font-semibold">SEMrush</div>
                </div>
                <div class="text-center p-4 bg-neutral-800/50 rounded-lg">
                  <div class="text-2xl mb-2">📧</div>
                  <div class="font-semibold">Mailchimp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section class="py-20">
        <div class="container">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Resultados que hemos logrado</h2>
            <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
              Casos de éxito reales con métricas concretas de nuestros clientes.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center card p-8">
              <div class="text-5xl mb-4">📈</div>
              <h3 class="text-2xl font-bold mb-2">Aumento de Tráfico</h3>
              <p class="text-neutral-400 mb-4">Incremento promedio en visitas orgánicas</p>
              <p class="text-3xl font-bold text-emerald-400">250%</p>
            </div>
            
            <div class="text-center card p-8">
              <div class="text-5xl mb-4">🎯</div>
              <h3 class="text-2xl font-bold mb-2">Generación de Leads</h3>
              <p class="text-neutral-400 mb-4">Más leads calificados por mes</p>
              <p class="text-3xl font-bold text-blue-400">180%</p>
            </div>
            
            <div class="text-center card p-8">
              <div class="text-5xl mb-4">💰</div>
              <h3 class="text-2xl font-bold mb-2">ROI en Publicidad</h3>
              <p class="text-neutral-400 mb-4">Retorno de inversión promedio</p>
              <p class="text-3xl font-bold text-purple-400">320%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Process Section */}
      <section class="py-20 bg-neutral-800/50">
        <div class="container">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Proceso de marketing estratégico</h2>
            <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
              Metodología data-driven para garantizar el éxito de tus campañas de marketing.
            </p>
          </div>
          
          <div class="grid md:grid-cols-5 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 class="text-xl font-semibold mb-2">Auditoría</h3>
              <p class="text-neutral-400">Análisis del estado actual</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 class="text-xl font-semibold mb-2">Estrategia</h3>
              <p class="text-neutral-400">Planificación detallada</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 class="text-xl font-semibold mb-2">Ejecución</h3>
              <p class="text-neutral-400">Implementación de campañas</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-orange-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">4</div>
              <h3 class="text-xl font-semibold mb-2">Monitoreo</h3>
              <p class="text-neutral-400">Seguimiento en tiempo real</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">5</div>
              <h3 class="text-xl font-semibold mb-2">Optimización</h3>
              <p class="text-neutral-400">Mejora continua basada en datos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20">
        <div class="container">
          <div class="card text-center p-12 max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold mb-6">¿Listo para hacer crecer tu negocio?</h2>
            <p class="text-xl text-neutral-300 mb-8">
              Desarrollamos estrategias de marketing que generan resultados reales y medibles.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="btn btn-primary px-8 py-4 text-lg">
                Consulta de Marketing
              </button>
              <button class="btn btn-secondary px-8 py-4 text-lg">
                Ver Casos de Éxito
              </button>
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
                Especialistas en diseño web moderno, automatizaciones con IA y marketing digital estratégico.
              </p>
            </div>

            <div>
              <h4 class="font-semibold text-white mb-4">Servicios</h4>
              <ul class="space-y-2">
                <li><a href="/services/web-design" class="text-neutral-400 hover:text-white transition-colors">Diseño Web</a></li>
                <li><a href="/services/ai-automations" class="text-neutral-400 hover:text-white transition-colors">IA & Automatización</a></li>
                <li><a href="/services/digital-marketing" class="text-emerald-400">Marketing Digital</a></li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-white mb-4">Empresa</h4>
              <ul class="space-y-2">
                <li><a href="/about" class="text-neutral-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="/portfolio" class="text-neutral-400 hover:text-white transition-colors">Portafolio</a></li>
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
  title: "Marketing Digital Estratégico - AgenciaTech | SEO, SEM y Content Marketing",
  meta: [
    {
      name: "description",
      content: "Servicios de marketing digital: content marketing, generación de leads, performance marketing, SEO y estrategias digitales para startups.",
    },
    {
      name: "keywords",
      content: "marketing digital, content marketing, generación de leads, performance marketing, SEO, SEM, startups",
    },
  ],
};