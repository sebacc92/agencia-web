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
              <a href="/about" class="text-indigo-400">Nosotros</a>
              <a href="/portfolio" class="text-neutral-300 hover:text-white transition-colors">Portafolio</a>
              <a href="/contact" class="text-neutral-300 hover:text-white transition-colors">Contacto</a>
            </div>
            
            <button class="btn btn-primary text-sm px-4 py-2">
              Empezar
            </button>
          </nav>
        </div>
      </header>

      {/* About Hero Section */}
      <section class="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-neutral-900 to-pink-900/20"></div>
        
        <div class="container relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <h1 class="text-5xl md:text-6xl font-bold mb-6">
              Sobre{' '}
              <span class="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                AgenciaTech
              </span>
            </h1>
            <p class="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
              Somos un equipo apasionado de diseñadores, desarrolladores e especialistas en marketing 
              que creen en el poder de la tecnología para transformar negocios.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section class="py-20">
        <div class="container">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 class="text-4xl font-bold mb-6">Nuestra historia</h2>
              <div class="space-y-6 text-neutral-300">
                <p>
                  AgenciaTech nació en 2020 cuando un grupo de emprendedores tecnológicos se dio cuenta 
                  de que muchas startups luchaban por establecer una presencia digital sólida. Vimos la 
                  oportunidad de combinar nuestras habilidades en diseño, desarrollo e inteligencia artificial 
                  para crear soluciones integrales.
                </p>
                <p>
                  Desde entonces, hemos ayudado a más de 100 startups y empresas a lanzar productos digitales 
                  exitosos, automatizar procesos críticos y desarrollar estrategias de marketing que generan 
                  resultados reales.
                </p>
                <p>
                  Nuestro enfoque único combina la creatividad del diseño excepcional con el poder de la 
                  inteligencia artificial y estrategias de marketing basadas en datos, todo ello enfocado 
                  en las necesidades específicas de startups y empresas en crecimiento.
                </p>
              </div>
            </div>
            
            <div class="grid grid-cols-2 gap-6">
              <div class="card text-center p-6">
                <div class="text-3xl font-bold text-indigo-400 mb-2">100+</div>
                <div class="text-neutral-400">Proyectos completados</div>
              </div>
              <div class="card text-center p-6">
                <div class="text-3xl font-bold text-pink-400 mb-2">50+</div>
                <div class="text-neutral-400">Startups lanzadas</div>
              </div>
              <div class="card text-center p-6">
                <div class="text-3xl font-bold text-emerald-400 mb-2">98%</div>
                <div class="text-neutral-400">Clientes satisfechos</div>
              </div>
              <div class="card text-center p-6">
                <div class="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div class="text-neutral-400">Soporte técnico</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section class="py-20 bg-neutral-800/50">
        <div class="container">
          <div class="grid md:grid-cols-2 gap-16">
            <div class="card p-8">
              <div class="w-16 h-16 bg-indigo-500/10 rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl">
                🎯
              </div>
              <h3 class="text-2xl font-bold mb-4 text-center">Nuestra Misión</h3>
              <p class="text-neutral-300 text-center">
                Democratizar el acceso a tecnología de vanguardia para startups y empresas, 
                proporcionando soluciones integrales que combinen diseño excepcional, 
                inteligencia artificial y marketing estratégico.
              </p>
            </div>
            
            <div class="card p-8">
              <div class="w-16 h-16 bg-pink-500/10 rounded-2xl mx-auto mb-6 flex items-center justify-center text-2xl">
                👁️
              </div>
              <h3 class="text-2xl font-bold mb-4 text-center">Nuestra Visión</h3>
              <p class="text-neutral-300 text-center">
                Ser el socio tecnológico preferido para startups innovadoras en Latinoamérica, 
                impulsando la transformación digital y el crecimiento sostenible a través 
                de soluciones tecnológicas personalizadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section class="py-20">
        <div class="container">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Nuestros valores</h2>
            <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra cultura empresarial.
            </p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl">
                🚀
              </div>
              <h3 class="text-xl font-bold mb-4">Innovación</h3>
              <p class="text-neutral-400">
                Siempre buscamos las últimas tendencias y tecnologías para ofrecer 
                soluciones de vanguardia a nuestros clientes.
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl">
                🤝
              </div>
              <h3 class="text-xl font-bold mb-4">Colaboración</h3>
              <p class="text-neutral-400">
                Trabajamos estrechamente con nuestros clientes como socios estratégicos, 
                no solo como proveedores de servicios.
              </p>
            </div>
            
            <div class="text-center">
              <div class="w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl">
                📊
              </div>
              <h3 class="text-xl font-bold mb-4">Resultados</h3>
              <p class="text-neutral-400">
                Nos enfocamos en métricas reales y ROI medible. Cada proyecto debe 
                generar impacto positivo en el negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section class="py-20 bg-neutral-800/50">
        <div class="container">
          <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6">Conoce al equipo</h2>
            <p class="text-xl text-neutral-300 max-w-3xl mx-auto">
              Un equipo diverso de expertos apasionados por la tecnología y el diseño.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div class="card text-center p-8">
              <div class="w-24 h-24 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                SJ
              </div>
              <h3 class="text-xl font-bold mb-2">Sebastián Juárez</h3>
              <p class="text-indigo-400 mb-4">CEO & Founder</p>
              <p class="text-neutral-400 text-sm">
                Especialista en estrategia digital con más de 8 años de experiencia 
                ayudando a startups a escalar.
              </p>
            </div>
            
            {/* Team Member 2 */}
            <div class="card text-center p-8">
              <div class="w-24 h-24 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                MR
              </div>
              <h3 class="text-xl font-bold mb-2">María Rodríguez</h3>
              <p class="text-pink-400 mb-4">CTO & Head of AI</p>
              <p class="text-neutral-400 text-sm">
                Ingeniera en IA especializada en automatización y machine learning 
                aplicada a soluciones empresariales.
              </p>
            </div>
            
            {/* Team Member 3 */}
            <div class="card text-center p-8">
              <div class="w-24 h-24 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                AG
              </div>
              <h3 class="text-xl font-bold mb-2">Ana García</h3>
              <p class="text-emerald-400 mb-4">Head of Design</p>
              <p class="text-neutral-400 text-sm">
                Diseñadora UX/UI con experiencia en crear experiencias digitales 
                excepcionales para startups.
              </p>
            </div>
            
            {/* Team Member 4 */}
            <div class="card text-center p-8">
              <div class="w-24 h-24 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                CL
              </div>
              <h3 class="text-xl font-bold mb-2">Carlos López</h3>
              <p class="text-purple-400 mb-4">Marketing Director</p>
              <p class="text-neutral-400 text-sm">
                Experto en marketing digital y growth hacking, especializado en 
                estrategias de adquisición para startups.
              </p>
            </div>
            
            {/* Team Member 5 */}
            <div class="card text-center p-8">
              <div class="w-24 h-24 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                LM
              </div>
              <h3 class="text-xl font-bold mb-2">Laura Martín</h3>
              <p class="text-orange-400 mb-4">Full Stack Developer</p>
              <p class="text-neutral-400 text-sm">
                Desarrolladora full-stack especializada en tecnologías modernas 
                como React, Node.js y cloud platforms.
              </p>
            </div>
            
            {/* Team Member 6 */}
            <div class="card text-center p-8">
              <div class="w-24 h-24 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white">
                DG
              </div>
              <h3 class="text-xl font-bold mb-2">Diego González</h3>
              <p class="text-teal-400 mb-4">DevOps Engineer</p>
              <p class="text-neutral-400 text-sm">
                Ingeniero DevOps enfocado en infraestructura escalable, 
                automatización y entrega continua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20">
        <div class="container">
          <div class="card text-center p-12 max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold mb-6">¿Listo para trabajar juntos?</h2>
            <p class="text-xl text-neutral-300 mb-8">
              Únete a las startups que ya confían en nosotros para llevar sus proyectos al siguiente nivel.
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
            {/* Company Info */}
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

            {/* Services */}
            <div>
              <h4 class="font-semibold text-white mb-4">Servicios</h4>
              <ul class="space-y-2">
                <li><a href="/#services" class="text-neutral-400 hover:text-white transition-colors">Diseño Web</a></li>
                <li><a href="/#services" class="text-neutral-400 hover:text-white transition-colors">IA & Automatización</a></li>
                <li><a href="/#services" class="text-neutral-400 hover:text-white transition-colors">Marketing Digital</a></li>
                <li><a href="/#services" class="text-neutral-400 hover:text-white transition-colors">Consultoría</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 class="font-semibold text-white mb-4">Empresa</h4>
              <ul class="space-y-2">
                <li><a href="/about" class="text-indigo-400">Sobre Nosotros</a></li>
                <li><a href="/portfolio" class="text-neutral-400 hover:text-white transition-colors">Portafolio</a></li>
                <li><a href="/blog" class="text-neutral-400 hover:text-white transition-colors">Blog</a></li>
                <li><a href="/contact" class="text-neutral-400 hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
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
  title: "Sobre Nosotros - AgenciaTech | Diseño Web, IA y Marketing Digital",
  meta: [
    {
      name: "description",
      content: "Conoce la historia y el equipo de AgenciaTech. Especialistas en diseño web, automatizaciones con IA y marketing digital para startups.",
    },
    {
      name: "keywords",
      content: "sobre nosotros, equipo, historia, agencia digital, startups, tecnología, innovación",
    },
  ],
};