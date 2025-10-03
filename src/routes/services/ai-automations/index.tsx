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
        <div class="absolute inset-0 bg-gradient-to-br from-pink-900/20 via-neutral-900 to-pink-900/20"></div>
        
        <div class="container relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-8">
              <span class="text-pink-400 text-sm font-medium">🤖 Tecnología del futuro</span>
            </div>
            
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
              Automatización con{' '}
              <span class="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                Inteligencia Artificial
              </span>
            </h1>
            
            <p class="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Revoluciona tu negocio con soluciones de IA personalizadas que automatizan procesos, 
              mejoran la atención al cliente y generan insights valiosos.
            </p>
            
            <button class="btn btn-primary px-8 py-4 text-lg">
              Consulta IA Gratuita
            </button>
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section class="py-20">
        <div class="container">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Soluciones de IA especializadas</h2>
            <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
              Implementamos inteligencia artificial para resolver desafíos específicos de tu negocio.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            {/* Customer Service Bots */}
            <div class="card group">
              <div class="text-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl">
                  💬
                </div>
                <h3 class="text-2xl font-bold mb-2">Chatbots de Atención</h3>
                <p class="text-neutral-400">Atención al cliente 24/7</p>
              </div>
              
              <ul class="space-y-3 mb-8 text-neutral-300">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Respuestas automáticas inteligentes
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Integración con WhatsApp y web
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Aprendizaje continuo con IA
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Transferencia a humanos cuando es necesario
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Reportes de satisfacción automáticos
                </li>
              </ul>
              
              <div class="text-center">
                <p class="text-2xl font-bold text-pink-400 mb-2">Desde $600</p>
                <p class="text-neutral-400 text-sm">Tiempo de entrega: 1-2 semanas</p>
              </div>
            </div>

            {/* Automated Workflows */}
            <div class="card group">
              <div class="text-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl">
                  ⚙️
                </div>
                <h3 class="text-2xl font-bold mb-2">Procesos Automatizados</h3>
                <p class="text-neutral-400">Workflows inteligentes</p>
              </div>
              
              <ul class="space-y-3 mb-8 text-neutral-300">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Automatización de tareas repetitivas
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Integración de múltiples sistemas
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Triggers y condiciones inteligentes
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Notificaciones automáticas
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                  Monitoreo y alertas en tiempo real
                </li>
              </ul>
              
              <div class="text-center">
                <p class="text-2xl font-bold text-purple-400 mb-2">Desde $900</p>
                <p class="text-neutral-400 text-sm">Tiempo de entrega: 2-3 semanas</p>
              </div>
            </div>

            {/* Smart Analytics */}
            <div class="card group">
              <div class="text-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl">
                  📊
                </div>
                <h3 class="text-2xl font-bold mb-2">Analytics Inteligente</h3>
                <p class="text-neutral-400">Insights predictivos avanzados</p>
              </div>
              
              <ul class="space-y-3 mb-8 text-neutral-300">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Análisis predictivo de tendencias
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Detección automática de patrones
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Recomendaciones personalizadas
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Dashboards interactivos
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Reportes automáticos ejecutivos
                </li>
              </ul>
              
              <div class="text-center">
                <p class="text-2xl font-bold text-emerald-400 mb-2">Desde $1,500</p>
                <p class="text-neutral-400 text-sm">Tiempo de entrega: 3-4 semanas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Technologies Section */}
      <section class="py-20 bg-neutral-800/50">
        <div class="container">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 class="text-4xl font-bold mb-6">Tecnologías de IA utilizadas</h2>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-pink-500/10 rounded-lg flex items-center justify-center mt-1">
                    <span class="text-pink-400">🧠</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2">Machine Learning</h3>
                    <p class="text-neutral-400">Algoritmos que aprenden de tus datos para mejorar continuamente el rendimiento.</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center mt-1">
                    <span class="text-purple-400">💭</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2">Procesamiento de Lenguaje Natural</h3>
                    <p class="text-neutral-400">Chatbots que entienden y responden como humanos reales.</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center mt-1">
                    <span class="text-emerald-400">🔮</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2">Análisis Predictivo</h3>
                    <p class="text-neutral-400">Predice tendencias y comportamientos futuros con alta precisión.</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-indigo-500/10 rounded-lg flex items-center justify-center mt-1">
                    <span class="text-indigo-400">🔧</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2">Automatización Robótica</h3>
                    <p class="text-neutral-400">Robots de software que realizan tareas complejas automáticamente.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="card p-8">
              <h3 class="text-2xl font-bold mb-6 text-center">Plataformas y herramientas</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-4 bg-neutral-800/50 rounded-lg">
                  <div class="text-2xl mb-2">🤖</div>
                  <div class="font-semibold">OpenAI GPT</div>
                </div>
                <div class="text-center p-4 bg-neutral-800/50 rounded-lg">
                  <div class="text-2xl mb-2">📊</div>
                  <div class="font-semibold">TensorFlow</div>
                </div>
                <div class="text-center p-4 bg-neutral-800/50 rounded-lg">
                  <div class="text-2xl mb-2">⚡</div>
                  <div class="font-semibold">Zapier</div>
                </div>
                <div class="text-center p-4 bg-neutral-800/50 rounded-lg">
                  <div class="text-2xl mb-2">🔗</div>
                  <div class="font-semibold">Make.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section class="py-20">
        <div class="container">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Beneficios de la automatización IA</h2>
            <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
              Resultados reales que hemos logrado para nuestros clientes con soluciones de IA.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center card p-8">
              <div class="text-5xl mb-4">⏱️</div>
              <h3 class="text-2xl font-bold mb-2">Ahorro de Tiempo</h3>
              <p class="text-neutral-400 mb-4">Hasta 80% de reducción en tareas manuales repetitivas</p>
              <p class="text-3xl font-bold text-pink-400">80%</p>
            </div>
            
            <div class="text-center card p-8">
              <div class="text-5xl mb-4">💰</div>
              <h3 class="text-2xl font-bold mb-2">Reducción de Costos</h3>
              <p class="text-neutral-400 mb-4">Disminución significativa en costos operativos</p>
              <p class="text-3xl font-bold text-emerald-400">60%</p>
            </div>
            
            <div class="text-center card p-8">
              <div class="text-5xl mb-4">📈</div>
              <h3 class="text-2xl font-bold mb-2">Mejora de Productividad</h3>
              <p class="text-neutral-400 mb-4">Aumento en la eficiencia general del equipo</p>
              <p class="text-3xl font-bold text-purple-400">300%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section class="py-20 bg-neutral-800/50">
        <div class="container">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Proceso de implementación IA</h2>
            <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
              Metodología especializada para integrar soluciones de IA en tu negocio de forma segura y efectiva.
            </p>
          </div>
          
          <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 class="text-xl font-semibold mb-2">Análisis</h3>
              <p class="text-neutral-400">Evaluamos procesos y datos disponibles</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 class="text-xl font-semibold mb-2">Diseño</h3>
              <p class="text-neutral-400">Diseñamos la solución IA personalizada</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 class="text-xl font-semibold mb-2">Entrenamiento</h3>
              <p class="text-neutral-400">Entrenamos los modelos con tus datos</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-indigo-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">4</div>
              <h3 class="text-xl font-semibold mb-2">Despliegue</h3>
              <p class="text-neutral-400">Implementamos y monitoreamos el rendimiento</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20">
        <div class="container">
          <div class="card text-center p-12 max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold mb-6">¿Listo para automatizar tu negocio?</h2>
            <p class="text-xl text-neutral-300 mb-8">
              Descubre cómo la inteligencia artificial puede transformar tu forma de trabajar.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="btn btn-primary px-8 py-4 text-lg">
                Consulta IA Gratuita
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
                <li><a href="/services/ai-automations" class="text-pink-400">IA & Automatización</a></li>
                <li><a href="/services/digital-marketing" class="text-neutral-400 hover:text-white transition-colors">Marketing Digital</a></li>
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
  title: "Automatización con IA - AgenciaTech | Chatbots y Workflows Inteligentes",
  meta: [
    {
      name: "description",
      content: "Soluciones de inteligencia artificial: chatbots de atención al cliente, procesos automatizados y analytics predictivos para startups y empresas.",
    },
    {
      name: "keywords",
      content: "inteligencia artificial, chatbots, automatización, machine learning, analytics predictivos, workflows",
    },
  ],
};