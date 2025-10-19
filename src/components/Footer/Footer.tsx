import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuFacebook, LuInstagram, LuLinkedin, LuYoutube } from "@qwikest/icons/lucide";

export default component$(() => {
  return (
    <footer class="bg-gray-50 border-t border-gray-200">
      <div class="container mx-auto px-4 py-16">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div class="lg:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <span class="text-white font-bold text-sm">A</span>
              </div>
              <an class="text-xl font-bold text-gray-900">Auratica</an>
            </div>
            <p class="text-gray-600 mb-6 max-w-md">
              Soluciones completas de diseño web, automatizaciones con inteligencia artificial y marketing digital estratégico para impulsar tu negocio al siguiente nivel.
            </p>
            <div class="flex space-x-4">
               <a href="#" class="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-purple-600 transition-all duration-300">
                 <LuLinkedin class="w-5 h-5" />
               </a>
               <a href="#" class="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-purple-600 transition-all duration-300">
                 <LuYoutube class="w-5 h-5" />
               </a>
               <a href="#" class="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-purple-600 transition-all duration-300">
                 <LuFacebook class="w-5 h-5" />
               </a>
               <a href="#" class="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-white hover:bg-purple-600 transition-all duration-300">
                 <LuInstagram class="w-5 h-5" />
               </a>
             </div>
          </div>

          {/* Services */}
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Servicios</h4>
            <ul class="space-y-2">
              <li><Link href="/services/web-design" class="text-gray-600 hover:text-purple-600 transition-colors">Diseño Web</Link></li>
              <li><Link href="#" class="text-gray-600 hover:text-purple-600 transition-colors">IA & Automatización</Link></li>
              <li><Link href="#" class="text-gray-600 hover:text-purple-600 transition-colors">Marketing Digital</Link></li>
              <li><Link href="#services" class="text-gray-600 hover:text-purple-600 transition-colors">Consultoría</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 class="font-semibold text-gray-900 mb-4">Empresa</h4>
            <ul class="space-y-2">
              <li><a href="#about" class="text-gray-600 hover:text-purple-600 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#portfolio" class="text-gray-600 hover:text-purple-600 transition-colors">Portafolio</a></li>
              <li><a href="#" class="text-gray-600 hover:text-purple-600 transition-colors">Blog</a></li>
              <li><a href="#contacto" class="text-gray-600 hover:text-purple-600 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div class="pt-8">
          {/* Bottom Bar */}
          <div class="pt-8 border-t border-gray-200 text-center">
            <p class="text-gray-600 text-sm mb-4">
              Hecho con ❤️ para ayudar a tu negocio a crecer
            </p>
            <p class="text-gray-600 text-sm">
              © 2025 AgenciaTech. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
});