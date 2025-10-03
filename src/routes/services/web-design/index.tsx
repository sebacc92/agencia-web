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
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-neutral-900 to-indigo-900/20"></div>
        
        <div class="container relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
              <span class="text-indigo-400 text-sm font-medium">🌐 Servicio especializado</span>
            </div>
            
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
              Diseño Web{' '}
              <span class="bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text text-transparent">
                Profesional
              </span>
            </h1>
            
            <p class="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Creamos sitios web modernos, responsivos y optimizados que no solo se ven increíbles, 
              sino que convierten visitantes en clientes leales.
            </p>
            
            <button class="btn btn-primary px-8 py-4 text-lg">
              Consulta Gratuita
            </button>
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section class="py-20">
        <div class="container">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Tipos de proyectos web</h2>
            <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
              Especializados en diferentes tipos de sitios web según las necesidades de tu negocio.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-8">
            {/* Portfolio Sites */}
            <div class="card group">
              <div class="text-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl">
                  🎨
                </div>
                <h3 class="text-2xl font-bold mb-2">Portafolios Profesionales</h3>
                <p class="text-neutral-400">Para creativos y freelancers</p>
              </div>
              
              <ul class="space-y-3 mb-8 text-neutral-300">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Diseño personalizado único
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Galería de proyectos optimizada
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Integración con redes sociales
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  SEO para mayor visibilidad
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
                  Blog integrado opcional
                </li>
              </ul>
              
              <div class="text-center">
                <p class="text-2xl font-bold text-indigo-400 mb-2">Desde $800</p>
                <p class="text-neutral-400 text-sm">Tiempo de entrega: 2-3 semanas</p>
              </div>
            </div>

            {/* Business Websites */}
            <div class="card group">
              <div class="text-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl">
                  🏢
                </div>
                <h3 class="text-2xl font-bold mb-2">Sitios Web Corporativos</h3>
                <p class="text-neutral-400">Para empresas y negocios</p>
              </div>
              
              <ul class="space-y-3 mb-8 text-neutral-300">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Diseño profesional corporativo
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Páginas de servicios detalladas
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Formularios de contacto avanzados
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Integración con CRM
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Analytics y seguimiento
                </li>
              </ul>
              
              <div class="text-center">
                <p class="text-2xl font-bold text-pink-400 mb-2">Desde $1,200</p>
                <p class="text-neutral-400 text-sm">Tiempo de entrega: 3-4 semanas</p>
              </div>
            </div>

            {/* Web Portals */}
            <div class="card group">
              <div class="text-center mb-6">
                <div class="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl">
                  🚪
                </div>
                <h3 class="text-2xl font-bold mb-2">Portales Web</h3>
                <p class="text-neutral-400">Plataformas complejas personalizadas</p>
              </div>
              
              <ul class="space-y-3 mb-8 text-neutral-300">
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Arquitectura escalable
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Sistemas de gestión de usuarios
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Bases de datos complejas
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  APIs personalizadas
                </li>
                <li class="flex items-center">
                  <span class="w-2 h-2 bg-emerald-400 rounded-full mr-3"></span>
                  Panel de administración
                </li>
              </ul>
              
              <div class="text-center">
                <p class="text-2xl font-bold text-emerald-400 mb-2">Desde $2,500</p>
                <p class="text-neutral-400 text-sm">Tiempo de entrega: 6-8 semanas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section class="py-20 bg-neutral-800/50">
        <div class="container">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 class="text-4xl font-bold mb-6">Características incluidas</h2>
              <div class="space-y-6">
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-indigo-500/10 rounded-lg flex items-center justify-center mt-1">
                    <span class="text-indigo-400">📱</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2">Diseño Responsivo</h3>
                    <p class="text-neutral-400">Tu sitio se ve perfecto en todos los dispositivos, desde móviles hasta desktop.</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-pink-500/10 rounded-lg flex items-center justify-center mt-1">
                    <span class="text-pink-400">⚡</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2">Optimización de Rendimiento</h3>
                    <p class="text-neutral-400">Sitios web ultrarrápidos que cargan en menos de 2 segundos.</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center mt-1">
                    <span class="text-emerald-400">🔍</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2">SEO Optimizado</h3>
                    <p class="text-neutral-400">Estructura y contenido optimizados para motores de búsqueda.</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-4">
                  <div class="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center mt-1">
                    <span class="text-purple-400">🛡️</span>
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold mb-2">Seguridad Avanzada</h3>
                    <p class="text-neutral-400">Certificados SSL, protección contra ataques y backups automáticos.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="card p-8">
              <h3 class="text-2xl font-bold mb-6 text-center">Tecnologías utilizadas</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-4 bg-neutral-800/50 rounded-lg">
                  <div class="text-2xl mb-2">⚛️</div>
                  <div class="font-semibold">React/Next.js</div>
                </div>
                <div class="text-center p-4 bg-neutral-800/50 rounded-lg">
                  <div class="text-2xl mb-2">🎨</div>
                  <div class="font-semibold">Tailwind CSS</div>
                </div>
                <div class="text-center p-4 bg-neutral-800/50 rounded-lg">
                  <div class="text-2xl mb-2">🚀</div>
                  <div class="font-semibold">Vercel/Netlify</div>
                </div>
                <div class="text-center p-4 bg-neutral-800/50 rounded-lg">
                  <div class="text-2xl mb-2">📊</div>
                  <div class="font-semibold">Google Analytics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section class="py-20">
        <div class="container">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Proceso de desarrollo</h2>
            <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
              Metodología probada para garantizar resultados excepcionales en cada proyecto.
            </p>
          </div>
          
          <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="w-16 h-16 bg-indigo-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">1</div>
              <h3 class="text-xl font-semibold mb-2">Descubrimiento</h3>
              <p class="text-neutral-400">Analizamos tu negocio, objetivos y audiencia objetivo</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-pink-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">2</div>
              <h3 class="text-xl font-semibold mb-2">Diseño</h3>
              <p class="text-neutral-400">Creamos wireframes y diseños visuales personalizados</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-emerald-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">3</div>
              <h3 class="text-xl font-semibold mb-2">Desarrollo</h3>
              <p class="text-neutral-400">Construimos tu sitio con código limpio y optimizado</p>
            </div>
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-500 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl">4</div>
              <h3 class="text-xl font-semibold mb-2">Lanzamiento</h3>
              <p class="text-neutral-400">Desplegamos y optimizamos para el rendimiento máximo</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-neutral-800/50">
        <div class="container">
          <div class="card text-center p-12 max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold mb-6">¿Listo para crear algo increíble?</h2>
            <p class="text-xl text-neutral-300 mb-8">
              Hablemos de tu proyecto web y cómo podemos ayudarte a alcanzar tus objetivos.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <button class="btn btn-primary px-8 py-4 text-lg">
                Consulta Gratuita
              </button>
              <button class="btn btn-secondary px-8 py-4 text-lg">
                Ver Portafolio
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
                <li><a href="/services/web-design" class="text-indigo-400">Diseño Web</a></li>
                <li><a href="/services/ai-automations" class="text-neutral-400 hover:text-white transition-colors">IA & Automatización</a></li>
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
  title: "Diseño Web Profesional - AgenciaTech | Sitios Web Modernos",
  meta: [
    {
      name: "description",
      content: "Servicios profesionales de diseño web: portafolios, sitios corporativos y portales web personalizados. Diseños responsivos y optimizados para startups.",
    },
    {
      name: "keywords",
      content: "diseño web, sitios web profesionales, portafolios, sitios corporativos, portales web, diseño responsivo",
    },
  ],
};