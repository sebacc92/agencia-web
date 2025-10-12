import { component$ } from "@builder.io/qwik";
import { LuFacebook, LuTwitter, LuLinkedin, LuYoutube } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <footer class="bg-gray-50 border-t border-gray-200">
      <div class="container mx-auto py-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">A</span>
              </div>
              <span class="text-xl font-bold text-gray-900">Auratica</span>
            </div>
            <p class="text-gray-600 mb-6 max-w-md">
              Soluciones completas de diseño web, automatizaciones con inteligencia artificial y marketing digital estratégico para impulsar tu negocio al siguiente nivel.
            </p>
            <div class="flex space-x-4">
               <a href="#" class="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-purple-600 transition-all duration-300">
                 <LuFacebook class="w-5 h-5" />
               </a>
               <a href="#" class="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-purple-600 transition-all duration-300">
                 <LuTwitter class="w-5 h-5" />
               </a>
               <a href="#" class="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-purple-600 transition-all duration-300">
                 <LuLinkedin class="w-5 h-5" />
               </a>
               <a href="#" class="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-purple-600 transition-all duration-300">
                 <LuYoutube class="w-5 h-5" />
               </a>
             </div>
          </div>

          {/* Services */}
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Servicios</h4>
            <ul class="space-y-2">
              <li><a href="/services/web-design" class="text-gray-600 hover:text-purple-600 transition-colors">Diseño Web</a></li>
              <li><a href="/services/ai-automations" class="text-gray-600 hover:text-purple-600 transition-colors">IA & Automatización</a></li>
              <li><a href="/services/digital-marketing" class="text-gray-600 hover:text-purple-600 transition-colors">Marketing Digital</a></li>
              <li><a href="#services" class="text-gray-600 hover:text-purple-600 transition-colors">Consultoría</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Empresa</h4>
            <ul class="space-y-2">
              <li><a href="/about" class="text-gray-600 hover:text-purple-600 transition-colors">Sobre Nosotros</a></li>
              <li><a href="/portfolio" class="text-gray-600 hover:text-purple-600 transition-colors">Portafolio</a></li>
              <li><a href="/blog" class="text-gray-600 hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="/contact" class="text-gray-600 hover:text-purple-600 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div class="border-t border-gray-200 pt-8">
          {/* Bottom Bar */}
          <div class="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
            <p class="text-gray-600 text-sm mb-4 md:mb-0">
              © 2024 AgenciaTech. Todos los derechos reservados.
            </p>
            <div class="flex space-x-6">
              <a href="#" class="text-gray-600 hover:text-purple-600 text-sm transition-colors">Política de Privacidad</a>
              <a href="#" class="text-gray-600 hover:text-purple-600 text-sm transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});