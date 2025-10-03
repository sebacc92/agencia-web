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
              <a href="/portfolio" class="text-indigo-400">Portafolio</a>
              <a href="/contact" class="text-neutral-300 hover:text-white transition-colors">Contacto</a>
            </div>
            
            <button class="btn btn-primary text-sm px-4 py-2">
              Empezar
            </button>
          </nav>
        </div>
      </header>

      {/* Portfolio Hero Section */}
      <section class="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-neutral-900 to-indigo-900/20"></div>
        
        <div class="container relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
              Nuestro{' '}
              <span class="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Portafolio
              </span>
            </h1>
            
            <p class="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Casos de éxito reales que demuestran cómo hemos ayudado a startups y empresas 
              a transformar su presencia digital y escalar sus negocios.
            </p>
            
            <div class="flex flex-wrap justify-center gap-4 text-sm">
              <button class="px-4 py-2 bg-indigo-500/10 text-indigo-400 rounded-full border border-indigo-500/20">
                Todos los proyectos
              </button>
              <button class="px-4 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-all">
                Diseño Web
              </button>
              <button class="px-4 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-all">
                IA & Automatización
              </button>
              <button class="px-4 py-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-all">
                Marketing Digital
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section class="py-20">
        <div class="container">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Proyectos destacados</h2>
            <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
              Una selección de nuestros trabajos más impactantes y los resultados obtenidos.
            </p>
          </div>

          <div class="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Project 1 - E-commerce Platform */}
            <div class="card group hover:scale-105 transition-transform duration-300">
              <div class="mb-6">
                <div class="w-full h-48 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                  <span class="text-white text-4xl">🛒</span>
                </div>
                <div class="flex items-center justify-between mb-2">
                  <span class="px-3 py-1 bg-indigo-500/10 text-indigo-400 rounded-full text-sm">Diseño Web</span>
                  <span class="text-neutral-400 text-sm">Completado: 2024</span>
                </div>
                <h3 class="text-2xl font-bold mb-2">Plataforma E-commerce TechStore</h3>
                <p class="text-neutral-400">
                  Desarrollo completo de una plataforma de e-commerce para una startup de tecnología, 
                  incluyendo diseño UX/UI moderno y funcionalidades avanzadas.
                </p>
              </div>
              
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="text-center">
                  <div class="text-2xl font-bold text-indigo-400">250%</div>
                  <div class="text-neutral-400 text-sm">Aumento de ventas</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-pink-400">50K</div>
                  <div class="text-neutral-400 text-sm">Usuarios mensuales</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-emerald-400">4.8★</div>
                  <div class="text-neutral-400 text-sm">Rating de usuarios</div>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-sm">React</span>
                <span class="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-sm">Node.js</span>
                <span class="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-sm">Stripe</span>
                <span class="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-sm">AWS</span>
              </div>
              
              <button class="btn btn-secondary w-full group-hover:bg-indigo-500 group-hover:text-white transition-all">
                Ver caso completo
              </button>
            </div>

            {/* Project 2 - AI Customer Service */}
            <div class="card group hover:scale-105 transition-transform duration-300">
              <div class="mb-6">
                <div class="w-full h-48 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg mb-4 flex items-center justify-center">
                  <span class="text-white text-4xl">🤖</span>
                </div>
                <div class="flex items-center justify-between mb-2">
                  <span class="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-sm">IA & Automatización</span>
                  <span class="text-neutral-400 text-sm">Completado: 2024</span>
                </div>
                <h3 class="text-2xl font-bold mb-2">Chatbot IA para Soporte Técnico</h3>
                <p class="text-neutral-400">
                  Implementación de un chatbot inteligente para una empresa de telecomunicaciones, 
                  capaz de resolver consultas técnicas complejas de manera autónoma.
                </p>
              </div>
              
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="text-center">
                  <div class="text-2xl font-bold text-pink-400">80%</div>
                  <div class="text-neutral-400 text-sm">Consultas resueltas</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-emerald-400">24/7</div>
                  <div class="text-neutral-400 text-sm">Disponibilidad</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-purple-400">2min</div>
                  <div class="text-neutral-400 text-sm">Tiempo de respuesta</div>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-sm">OpenAI GPT-4</span>
                <span class="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-sm">DialogFlow</span>
                <span class="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-sm">WhatsApp API</span>
                <span class="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-sm">Node.js</span>
              </div>
              
              <button class="btn btn-secondary w-full group-hover:bg-pink-500 group-hover:text-white transition-all">
                Ver caso completo
              </button>
            </div>

            {/* Project 3 - Digital Marketing Campaign */}
            <div class="card group hover:scale-105 transition-transform duration-300">
              <div class="mb-6">
                <div class="w-full h-48 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                  <span class="text-white text-4xl">📈</span>
                </div>
                <div class="flex items-center justify-between mb-2">
                  <span class="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm">Marketing Digital</span>
                  <span class="text-neutral-400 text-sm">Completado: 2024</span>
                </div>
                <h3 class="text-2xl font-bold mb-2">Campaña de Lanzamiento SaaS</h3>
                <p class="text-neutral-400">
                  Estrategia integral de marketing digital para el lanzamiento de una plataforma SaaS B2B, 
                  desde la generación de awareness hasta la conversión de enterprise clients.
                </p>
              </div>
              
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="text-center">
                  <div class="text-2xl font-bold text-emerald-400">500+</div>
                  <div class="text-neutral-400 text-sm">Leads generados</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-blue-400">$50K</div>
                  <div class="text-neutral-400 text-sm">MRR alcanzado</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-purple-400">320%</div>
                  <div class="text-neutral-400 text-sm">ROI obtenido</div>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-sm">Google Ads</span>
                <span class="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-sm">LinkedIn Ads</span>
                <span class="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-sm">Content Marketing</span>
                <span class="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-sm">Email Marketing</span>
              </div>
              
              <button class="btn btn-secondary w-full group-hover:bg-emerald-500 group-hover:text-white transition-all">
                Ver caso completo
              </button>
            </div>

            {/* Project 4 - Web Portal for Education */}
            <div class="card group hover:scale-105 transition-transform duration-300">
              <div class="mb-6">
                <div class="w-full h-48 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg mb-4 flex items-center justify-center">
                  <span class="text-white text-4xl">🎓</span>
                </div>
                <div class="flex items-center justify-between mb-2">
                  <span class="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Diseño Web</span>
                  <span class="text-neutral-400 text-sm">Completado: 2023</span>
                </div>
                <h3 class="text-2xl font-bold mb-2">Portal Educativo Interactivo</h3>
                <p class="text-neutral-400">
                  Desarrollo de un portal educativo completo para una edtech startup, 
                  con funcionalidades avanzadas de aprendizaje interactivo y gestión de cursos.
                </p>
              </div>
              
              <div class="grid grid-cols-3 gap-4 mb-6">
                <div class="text-center">
                  <div class="text-2xl font-bold text-orange-400">10K+</div>
                  <div class="text-neutral-400 text-sm">Estudiantes activos</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-emerald-400">95%</div>
                  <div class="text-neutral-400 text-sm">Tasa de completion</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl font-bold text-blue-400">4.9★</div>
                  <div class="text-neutral-400 text-sm">Satisfacción</div>
                </div>
              </div>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span class="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-sm">Next.js</span>
                <span class="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-sm">PostgreSQL</span>
                <span class="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-sm">Stripe</span>
                <span class="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-sm">WebRTC</span>
              </div>
              
              <button class="btn btn-secondary w-full group-hover:bg-orange-500 group-hover:text-white transition-all">
                Ver caso completo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section class="py-20 bg-neutral-800/50">
        <div class="container">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Lo que dicen nuestros clientes</h2>
            <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
              Testimonios reales de startups y empresas que han confiado en nosotros.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="card text-center p-8">
              <div class="mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold text-white">
                  MT
                </div>
                <h3 class="font-bold">María Tech</h3>
                <p class="text-neutral-400 text-sm">CEO, TechStore</p>
              </div>
              <p class="text-neutral-300 mb-4">
                "AgenciaTech transformó completamente nuestra presencia online. El nuevo sitio web 
                aumentó nuestras ventas en un 250% y mejoró significativamente la experiencia del usuario."
              </p>
              <div class="flex justify-center">
                {[1,2,3,4,5].map(i => (
                  <span key={i} class="text-yellow-400">⭐</span>
                ))}
              </div>
            </div>
            
            <div class="card text-center p-8">
              <div class="mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold text-white">
                  CL
                </div>
                <h3 class="font-bold">Carlos López</h3>
                <p class="text-neutral-400 text-sm">CTO, TelecomCorp</p>
              </div>
              <p class="text-neutral-300 mb-4">
                "El chatbot de IA desarrollado por AgenciaTech revolucionó nuestro servicio al cliente. 
                Ahora atendemos consultas 24/7 con una precisión increíble."
              </p>
              <div class="flex justify-center">
                {[1,2,3,4,5].map(i => (
                  <span key={i} class="text-yellow-400">⭐</span>
                ))}
              </div>
            </div>
            
            <div class="card text-center p-8">
              <div class="mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center text-xl font-bold text-white">
                  AG
                </div>
                <h3 class="font-bold">Ana García</h3>
                <p class="text-neutral-400 text-sm">CMO, SaaSPro</p>
              </div>
              <p class="text-neutral-300 mb-4">
                "La estrategia de marketing digital implementada por AgenciaTech superó todas nuestras 
                expectativas. Logramos nuestro break-even en tiempo récord."
              </p>
              <div class="flex justify-center">
                {[1,2,3,4,5].map(i => (
                  <span key={i} class="text-yellow-400">⭐</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section class="py-20">
        <div class="container">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Cómo trabajamos en cada proyecto</h2>
            <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
              Nuestro proceso probado que garantiza resultados excepcionales en cada entrega.
            </p>
          </div>
          
          <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-indigo-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 class="text-xl font-semibold mb-2">Briefing detallado</h3>
              <p class="text-neutral-400">Entendemos tu negocio y objetivos específicos</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 class="text-xl font-semibold mb-2">Propuesta personalizada</h3>
              <p class="text-neutral-400">Diseñamos la solución perfecta para tu caso</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 class="text-xl font-semibold mb-2">Desarrollo ágil</h3>
              <p class="text-neutral-400">Iteramos rápidamente con tu feedback constante</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">4</div>
              <h3 class="text-xl font-semibold mb-2">Lanzamiento y soporte</h3>
              <p class="text-neutral-400">Desplegamos y te acompañamos post-lanzamiento</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-neutral-800/50">
        <div class="container">
          <div class="card text-center p-12 max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold mb-6">¿Tu proyecto podría ser el siguiente caso de éxito?</h2>
            <p class="text-xl text-neutral-300 mb-8">
              Únete a las empresas que ya han transformado su negocio con nosotros.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="btn btn-primary px-8 py-4 text-lg">
                Empezar mi proyecto
              </button>
              <button class="btn btn-secondary px-8 py-4 text-lg">
                Ver más casos
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
                <li><a href="/services/digital-marketing" class="text-neutral-400 hover:text-white transition-colors">Marketing Digital</a></li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-white mb-4">Empresa</h4>
              <ul class="space-y-2">
                <li><a href="/about" class="text-neutral-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="/portfolio" class="text-indigo-400">Portafolio</a></li>
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
  title: "Portafolio - AgenciaTech | Casos de Éxito en Diseño Web, IA y Marketing",
  meta: [
    {
      name: "description",
      content: "Explora nuestro portafolio de proyectos exitosos: diseño web, automatizaciones con IA y campañas de marketing digital para startups y empresas.",
    },
    {
      name: "keywords",
      content: "portafolio, casos de éxito, proyectos, diseño web, IA, marketing digital, startups, resultados",
    },
  ],
};