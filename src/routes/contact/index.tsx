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
              <a href="/contact" class="text-indigo-400">Contacto</a>
            </div>
            
            <button class="btn btn-primary text-sm px-4 py-2">
              Empezar
            </button>
          </nav>
        </div>
      </header>

      {/* Contact Hero Section */}
      <section class="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-neutral-900 to-indigo-900/20"></div>
        
        <div class="container relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
              Hablemos de tu{' '}
              <span class="bg-gradient-to-r from-emerald-400 to-indigo-400 bg-clip-text text-transparent">
                proyecto
              </span>
            </h1>
            
            <p class="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              ¿Tienes una idea innovadora? ¿Necesitas transformar tu presencia digital? 
              Estamos aquí para ayudarte a hacer realidad tu visión.
            </p>
            
            <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div class="text-center">
                <div class="w-16 h-16 bg-indigo-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl">
                  💬
                </div>
                <h3 class="font-semibold mb-2">Consulta gratuita</h3>
                <p class="text-neutral-400 text-sm">Evaluación sin compromiso de tu proyecto</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-pink-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl">
                  ⏱️
                </div>
                <h3 class="font-semibold mb-2">Respuesta rápida</h3>
                <p class="text-neutral-400 text-sm">Te contactamos en menos de 24 horas</p>
              </div>
              <div class="text-center">
                <div class="w-16 h-16 bg-emerald-500/10 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl">
                  🎯
                </div>
                <h3 class="font-semibold mb-2">Solución personalizada</h3>
                <p class="text-neutral-400 text-sm">Estrategia adaptada a tus necesidades</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section class="py-20">
        <div class="container">
          <div class="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div class="card p-8">
              <h2 class="text-3xl font-bold mb-6">Envíanos un mensaje</h2>
              <p class="text-neutral-400 mb-8">
                Completa el formulario y te contactaremos para discutir cómo podemos ayudar a tu proyecto.
              </p>
              
              <form class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-neutral-300 mb-2">Nombre *</label>
                    <input 
                      type="text" 
                      class="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-neutral-300 mb-2">Email *</label>
                    <input 
                      type="email" 
                      class="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div class="grid md:grid-cols-2 gap-6">
                  <div>
                    <label class="block text-sm font-medium text-neutral-300 mb-2">Empresa</label>
                    <input 
                      type="text" 
                      class="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-neutral-300 mb-2">Teléfono</label>
                    <input 
                      type="tel" 
                      class="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="+54 11 1234-5678"
                    />
                  </div>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-neutral-300 mb-2">Servicio de interés</label>
                  <select class="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:outline-none focus:border-indigo-500 transition-colors">
                    <option value="">Seleccionar servicio</option>
                    <option value="web-design">Diseño Web</option>
                    <option value="ai-automations">IA & Automatización</option>
                    <option value="digital-marketing">Marketing Digital</option>
                    <option value="consulting">Consultoría General</option>
                  </select>
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-neutral-300 mb-2">Mensaje *</label>
                  <textarea 
                    rows={5}
                    class="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white placeholder-neutral-400 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, objetivos y timeline..."
                  ></textarea>
                </div>
                
                <div class="flex items-start space-x-3">
                  <input type="checkbox" id="privacy" class="mt-1" />
                  <label for="privacy" class="text-sm text-neutral-400">
                    Acepto la política de privacidad y recibir comunicaciones sobre servicios relacionados.
                  </label>
                </div>
                
                <button type="submit" class="btn btn-primary w-full py-4 text-lg">
                  Enviar mensaje
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div class="space-y-8">
              <div class="card p-8">
                <h3 class="text-2xl font-bold mb-6">Información de contacto</h3>
                
                <div class="space-y-6">
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                      <span class="text-indigo-400 text-xl">📍</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-1">Ubicación</h4>
                      <p class="text-neutral-400">Buenos Aires, Argentina</p>
                      <p class="text-neutral-400">Ciudad Autónoma de Buenos Aires</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-pink-500/10 rounded-lg flex items-center justify-center">
                      <span class="text-pink-400 text-xl">📞</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-1">Teléfono</h4>
                      <p class="text-neutral-400">+54 11 1234-5678</p>
                      <p class="text-neutral-400">Lun-Vie: 9:00 - 18:00</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-4">
                    <div class="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                      <span class="text-emerald-400 text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 class="font-semibold text-white mb-1">Email</h4>
                      <p class="text-neutral-400">hola@agenciatech.com</p>
                      <p class="text-neutral-400">Respuesta en 24 horas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card p-8">
                <h3 class="text-2xl font-bold mb-6">¿Por qué elegirnos?</h3>
                
                <div class="space-y-4">
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                    <span class="text-neutral-300">Especialistas en tecnología para startups</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                    <span class="text-neutral-300">Metodología ágil y transparente</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                    <span class="text-neutral-300">Resultados medibles y garantizados</span>
                  </div>
                  <div class="flex items-center space-x-3">
                    <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm">✓</div>
                    <span class="text-neutral-300">Soporte continuo post-proyecto</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section class="py-20 bg-neutral-800/50">
        <div class="container">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Preguntas frecuentes</h2>
            <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
              Respuestas a las dudas más comunes sobre nuestros servicios y procesos.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div class="space-y-6">
              <div class="card p-6">
                <h3 class="text-lg font-semibold mb-3">¿Cuánto tiempo toma un proyecto típico?</h3>
                <p class="text-neutral-400">
                  Los proyectos varían según la complejidad: sitios web básicos (2-3 semanas), 
                  plataformas complejas (6-8 semanas), campañas de marketing (3-4 semanas).
                </p>
              </div>
              
              <div class="card p-6">
                <h3 class="text-lg font-semibold mb-3">¿Ofrecen mantenimiento post-lanzamiento?</h3>
                <p class="text-neutral-400">
                  Sí, ofrecemos paquetes de mantenimiento que incluyen actualizaciones, 
                  monitoreo de seguridad y soporte técnico continuo.
                </p>
              </div>
              
              <div class="card p-6">
                <h3 class="text-lg font-semibold mb-3">¿Trabajan con startups internacionales?</h3>
                <p class="text-neutral-400">
                  Absolutamente. Hemos trabajado con startups de Latinoamérica, Estados Unidos 
                  y Europa, adaptándonos a diferentes zonas horarias.
                </p>
              </div>
            </div>
            
            <div class="space-y-6">
              <div class="card p-6">
                <h3 class="text-lg font-semibold mb-3">¿Cuál es el costo promedio de sus servicios?</h3>
                <p class="text-neutral-400">
                  Nuestros precios varían según el alcance: diseño web desde $800, 
                  automatizaciones IA desde $600, marketing digital desde $700.
                </p>
              </div>
              
              <div class="card p-6">
                <h3 class="text-lg font-semibold mb-3">¿Ofrecen garantías de resultados?</h3>
                <p class="text-neutral-400">
                  Garantizamos la calidad técnica de nuestro trabajo y ofrecemos 
                  revisiones hasta que estés 100% satisfecho con el resultado.
                </p>
              </div>
              
              <div class="card p-6">
                <h3 class="text-lg font-semibold mb-3">¿Cómo es su proceso de trabajo?</h3>
                <p class="text-neutral-400">
                  Seguimos una metodología ágil con comunicación constante, 
                  entregas parciales y ajustes basados en tu feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20">
        <div class="container">
          <div class="card text-center p-12 max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold mb-6">¿Listo para empezar?</h2>
            <p class="text-xl text-neutral-300 mb-8">
              Agenda una consulta gratuita y descubramos juntos cómo llevar tu proyecto al siguiente nivel.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="btn btn-primary px-8 py-4 text-lg">
                Agendar Consulta
              </button>
              <button class="btn btn-secondary px-8 py-4 text-lg">
                Llamar Ahora
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

            <div>
              <h4 class="font-semibold text-white mb-4">Servicios</h4>
              <ul class="space-y-2">
                <li><a href="/services/web-design" class="text-neutral-400 hover:text-white transition-colors">Diseño Web</a></li>
                <li><a href="/services/ai-automations" class="text-neutral-400 hover:text-white transition-colors">IA & Automatización</a></li>
                <li><a href="/services/digital-marketing" class="text-neutral-400 hover:text-white transition-colors">Marketing Digital</a></li>
                <li><a href="/#services" class="text-neutral-400 hover:text-white transition-colors">Ver todos</a></li>
              </ul>
            </div>

            <div>
              <h4 class="font-semibold text-white mb-4">Empresa</h4>
              <ul class="space-y-2">
                <li><a href="/about" class="text-neutral-400 hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="/portfolio" class="text-neutral-400 hover:text-white transition-colors">Portafolio</a></li>
                <li><a href="/contact" class="text-indigo-400">Contacto</a></li>
                <li><a href="/blog" class="text-neutral-400 hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>

          <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <p class="text-neutral-400 text-sm mb-4 md:mb-0">
              © 2024 AgenciaTech. Todos los derechos reservados.
            </p>
            <div class="flex space-x-6">
              <a href="#" class="text-neutral-400 hover:text-white text-sm transition-colors">Política de Privacidad</a>
              <a href="#" class="text-neutral-400 hover:text-white text-sm transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
});

export const head: DocumentHead = {
  title: "Contacto - AgenciaTech | Consulta Gratuita para tu Proyecto",
  meta: [
    {
      name: "description",
      content: "Contacta con AgenciaTech para tu proyecto de diseño web, IA o marketing digital. Consulta gratuita, respuesta en 24 horas. Buenos Aires, Argentina.",
    },
    {
      name: "keywords",
      content: "contacto, consulta gratuita, presupuesto, diseño web, IA, marketing digital, startups",
    },
  ],
};