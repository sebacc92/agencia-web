import { component$, useSignal } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { LuApple, LuBed, LuBookOpen, LuBuilding, LuBuilding2, LuCalculator, LuCamera, LuChevronDownCircle, LuDumbbell, LuEye, LuGlobe, LuGraduationCap, LuHeadphones, LuHeart, LuHome, LuMapPin, LuScale, LuShoppingBag, LuSliders, LuSparkles, LuStethoscope, LuTarget, LuTrendingUp, LuUsers, LuUtensils, LuWind, LuZap } from "@qwikest/icons/lucide";
import Button from "~/components/ui/button/button";
import WorkProcess from "~/components/WorkProcess/WorkProcess";

export default component$(() => {
  const activeTab = useSignal('business');
  return (
    <>
      {/* Service Hero Section */}
      <main class="pt-16 min-h-screen flex justify-center items-center relative overflow-hidden">
        {/* Subtle Background Elements */}
        <div class="absolute inset-0 bg-gradient-to-br from-purple-200 via-white to-cyan-50"></div>
        <div class="absolute bottom-2/4 lg:bottom-1/4 right-1/3 lg:right-1/6 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>

        <div class="container relative z-10">
          <div class="max-w-4xl mx-auto text-center">
            <div class="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-8">
              <span class="text-indigo-400 text-sm font-medium">🌐 Servicio especializado</span>
            </div>

            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              Diseño Web{' '}
              <span class="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Profesional
              </span>
            </h1>

            <p class="mt-4 text-xl text-gray-600 leading-relaxed max-w-2xl">
              Creamos sitios web modernos y optimizados que no solo se ven increíbles,
              sino que convierten visitantes en clientes leales.
            </p>

            <Button class="mt-8" variant="neumorphic-green" size="lg">
              Consulta Gratuita
            </Button>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <button
            class="group cursor-pointer animate-bounce hover:scale-110 transition-all duration-300 p-2 rounded-full hover:bg-white/10"
            onClick$={() => {
              const servicesSection = document.getElementById('designs');
              if (servicesSection) {
                servicesSection.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }}
          >
            <LuChevronDownCircle
              class="w-8 h-8 text-gray-500 group-hover:text-green-500 transition-colors duration-300"
            />
          </button>
        </div>
      </main>

      {/* Designs Section */}
      <section id="designs" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-slate-700 mb-4">
              Tipos de Diseño Web
            </h2>
            <p class="text-xl text-slate-500 max-w-3xl mx-auto">
              Elige el tipo de sitio web según las necesidades de tu negocio o marca personal.
            </p>
          </div>
          <div class="flex justify-center mb-8 space-x-4">
            <button
              onClick$={() => activeTab.value = 'business'}
              class={activeTab.value === 'business' ? 'bg-[#7c3aed] text-white px-6 py-2 rounded-t-md font-semibold border-b-2 border-[#7c3aed]' : 'bg-slate-200 text-slate-700 px-6 py-2 rounded-t-md font-semibold border-b-2 border-slate-200 hover:bg-slate-300 transition'}
            >
              Para Negocios
            </button>
            <button
              onClick$={() => activeTab.value = 'professionals'}
              class={activeTab.value === 'professionals' ? 'bg-[#7c3aed] text-white px-6 py-2 rounded-t-md font-semibold border-b-2 border-[#7c3aed]' : 'bg-slate-200 text-slate-700 px-6 py-2 rounded-t-md font-semibold border-b-2 border-slate-200 hover:bg-slate-300 transition'}
            >
              Para Profesionales
            </button>
          </div>
          {activeTab.value === 'business' && (
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              <Link href="/services/web-design/economico">
                <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                  <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LuSparkles class="text-3xl text-slate-700" />
                  </div>
                  <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                    Económico
                  </h3>
                </div>
              </Link>
              <Link href="/services/web-design/empresas">
                <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                  <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LuBuilding class="text-3xl text-slate-700" />
                  </div>
                  <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                    Empresas
                  </h3>
                </div>
              </Link>
              <Link href="/services/web-design/autogestionables">
                <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                  <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LuSliders class="text-3xl text-slate-700" />
                  </div>
                  <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                    Autogestionables
                  </h3>
                </div>
              </Link>
              <Link href="/services/web-design/tiendas">
                <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                  <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LuShoppingBag class="text-3xl text-slate-700" />
                  </div>
                  <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                    Tiendas
                  </h3>
                </div>
              </Link>
              <Link href="/services/web-design/inmobiliarias">
                <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                  <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LuHome class="text-3xl text-slate-700" />
                  </div>
                  <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                    Inmobiliarias
                  </h3>
                </div>
              </Link>
              <Link href="/services/web-design/hoteles">
                <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                  <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LuBed class="text-3xl text-slate-700" />
                  </div>
                  <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                    Hoteles
                  </h3>
                </div>
              </Link>
              <Link href="/services/web-design/prepagas">
                <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                  <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LuHeart class="text-3xl text-slate-700" />
                  </div>
                  <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                    Prepagas
                  </h3>
                </div>
              </Link>
              <Link href="/services/web-design/pymes">
                <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                  <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LuBuilding2 class="text-3xl text-slate-700" />
                  </div>
                  <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                    Pymes
                  </h3>
                </div>
              </Link>
              <Link href="/services/web-design/barrios-cerrados">
                <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                  <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LuMapPin class="text-3xl text-slate-700" />
                  </div>
                  <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                    Barrios cerrados
                  </h3>
                </div>
              </Link>
              <Link href="/services/web-design/escuelas">
                <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                  <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LuGraduationCap class="text-3xl text-slate-700" />
                  </div>
                  <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                    Escuelas
                  </h3>
                </div>
              </Link>
              <Link href="/services/web-design/restaurantes">
                <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                  <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LuUtensils class="text-3xl text-slate-700" />
                  </div>
                  <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                    Restaurantes
                  </h3>
                </div>
              </Link>
              <Link href="/services/web-design/cursos">
                <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                  <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <LuBookOpen class="text-3xl text-slate-700" />
                  </div>
                  <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                    Cursos
                  </h3>
                </div>
              </Link>
            </div>
          )}
          {activeTab.value === 'professionals' && (
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuCalculator class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Contadores
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuScale class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Abogados
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuHeadphones class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Psicologos
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuCamera class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Fotografos
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuApple class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Nutricionistas
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuDumbbell class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Entrenadores
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuStethoscope class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Medicos
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuEye class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Oftamologicos
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuHeart class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Odontologos
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuGlobe class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Traductores
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuZap class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Electricistas
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-all duration-300 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)] hover:bg-purple-50 hover:-translate-y-2 hover:border-purple-300">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuWind class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Tecnicos
                </h3>
              </div>
            </div>
          )}
          <div class="text-center">
            <Link
              href="#contact"
              class="bg-[#7c3aed] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#6d3aed] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition"
            >
              Consultar por otros tipos de diseños
            </Link>
          </div>
        </div>
      </section>

      <WorkProcess />

      {/* Features Section */}
      <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-slate-700 mb-4">
              ¿Por qué necesitas un sitio web profesional?
            </h2>
            <p class="text-xl text-slate-500 max-w-3xl mx-auto">
              En el mundo digital actual, tu sitio web es tu tarjeta de presentación y tu mejor vendedor 24/7.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <LuTrendingUp class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-slate-700 mb-2">Aumenta tu Credibilidad</h3>
              <p class="text-slate-600">
                Un sitio web profesional genera confianza y muestra que tu emprendimiento es serio y establecido.
              </p>
            </div>

            <div class="text-center p-6">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <LuUsers class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-slate-700 mb-2">Llega a Más Clientes</h3>
              <p class="text-slate-600">
                Expande tu alcance más allá de las redes sociales y crea una presencia online sólida.
              </p>
            </div>

            <div class="text-center p-6">
              <div class="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <LuTarget class="w-8 h-8 text-white" />
              </div>
              <h3 class="text-xl font-semibold text-slate-700 mb-2">Convierte Más Ventas</h3>
              <p class="text-slate-600">
                Un sitio optimizado convierte visitantes en clientes reales con llamadas a la acción efectivas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-20 bg-neutral-800/50">
        <div class="container mx-auto ">
          <div class="card text-center p-12 max-w-4xl mx-auto">
            <h2 class="text-4xl font-bold mb-6">¿Listo para crear algo increíble?</h2>
            <p class="mt-4 text-xl text-gray-600 leading-relaxed max-w-2xl mb-8">
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