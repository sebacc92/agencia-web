import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Hero from "~/components/Hero/Hero";
import Services from "~/components/Services/Services";

export default component$(() => {
  return (
    <>
      <Hero />

      <Services />

      {/* Footer */}
      <footer class="bg-gray-50 border-t border-gray-200">
        <div class="container py-16">
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div class="lg:col-span-2">
              <div class="flex items-center space-x-2 mb-4">
                <div class="w-8 h-8 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-sm">A</span>
                </div>
                <span class="text-xl font-bold text-gray-900">AgenciaTech</span>
              </div>
              <p class="text-gray-600 mb-6 max-w-md">
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
            <div class="grid md:grid-cols-3 gap-8 mb-8">
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span class="text-purple-600">📍</span>
                </div>
                <div>
                  <p class="text-gray-900 font-medium">Ubicación</p>
                  <p class="text-gray-600 text-sm">Buenos Aires, Argentina</p>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span class="text-purple-600">📞</span>
                </div>
                <div>
                  <p class="text-gray-900 font-medium">Teléfono</p>
                  <p class="text-gray-600 text-sm">+54 11 1234-5678</p>
                </div>
              </div>

              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span class="text-purple-600">✉️</span>
                </div>
                <div>
                  <p class="text-gray-900 font-medium">Email</p>
                  <p class="text-gray-600 text-sm">hola@agenciatech.com</p>
                </div>
              </div>
            </div>

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
    </>
  );
});

export const head: DocumentHead = {
  title: "AgenciaTech - Diseño Web, IA y Marketing Digital para Startups",
  meta: [
    {
      name: "description",
      content: "Agencia especializada en diseño web moderno, automatizaciones con IA y marketing digital estratégico para startups y empresas tecnológicas. Escalamos tu presencia digital.",
    },
    {
      name: "keywords",
      content: "diseño web, automatización IA, marketing digital, startups, agencia digital, desarrollo web, inteligencia artificial, transformación digital, growth hacking, UX/UI",
    },
    {
      name: "author",
      content: "AgenciaTech",
    },
    // Open Graph / Facebook
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://agenciatech.com/",
    },
    {
      property: "og:title",
      content: "AgenciaTech - Diseño Web, IA y Marketing Digital para Startups",
    },
    {
      property: "og:description",
      content: "Especialistas en diseño web moderno, automatizaciones con IA y marketing digital estratégico para startups y empresas tecnológicas.",
    },
    {
      property: "og:image",
      content: "https://agenciatech.com/og-image.jpg",
    },
    // Twitter
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:url",
      content: "https://agenciatech.com/",
    },
    {
      property: "twitter:title",
      content: "AgenciaTech - Diseño Web, IA y Marketing Digital para Startups",
    },
    {
      property: "twitter:description",
      content: "Especialistas en diseño web moderno, automatizaciones con IA y marketing digital estratégico para startups.",
    },
    {
      property: "twitter:image",
      content: "https://agenciatech.com/twitter-image.jpg",
    },
    // Additional SEO
    {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    {
      name: "language",
      content: "Spanish",
    },
    {
      name: "geo.region",
      content: "AR-B",
    },
    {
      name: "geo.placename",
      content: "Buenos Aires",
    },
    {
      name: "geo.position",
      content: "-34.603722;-58.381592",
    },
    {
      name: "ICBM",
      content: "-34.603722, -58.381592",
    },
  ],
};
