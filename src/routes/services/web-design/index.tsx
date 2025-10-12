import { component$, useSignal } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { LuApple, LuBed, LuBookOpen, LuBuilding, LuBuilding2, LuCalculator, LuCamera, LuDumbbell, LuEye, LuGlobe, LuGraduationCap, LuHeadphones, LuHeart, LuHome, LuMapPin, LuScale, LuShoppingBag, LuSliders, LuSparkles, LuStethoscope, LuUtensils, LuWind, LuZap } from "@qwikest/icons/lucide";

export default component$(() => {
  const activeTab = useSignal('business');
  return (
    <>
      {/* Service Hero Section */}
      <section class="pt-16 min-h-screen flex justify-center items-center relative overflow-hidden">
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
              Creamos sitios web modernos y optimizados que no solo se ven increíbles, 
              sino que convierten visitantes en clientes leales.
            </p>
            
            <button class="btn btn-primary px-8 py-4 text-lg">
              Consulta Gratuita
            </button>
          </div>
        </div>
      </section>

      {/* Designs Section */}
      <section id="designs" class="py-16 bg-white">
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
              class={activeTab.value === 'business' ? 'bg-orange-600 text-white px-6 py-2 rounded-t-md font-semibold border-b-2 border-orange-600' : 'bg-slate-200 text-slate-700 px-6 py-2 rounded-t-md font-semibold border-b-2 border-slate-200 hover:bg-slate-300 transition'}
            >
              Para Negocios
            </button>
            <button
              onClick$={() => activeTab.value = 'professionals'}
              class={activeTab.value === 'professionals' ? 'bg-orange-600 text-white px-6 py-2 rounded-t-md font-semibold border-b-2 border-orange-600' : 'bg-slate-200 text-slate-700 px-6 py-2 rounded-t-md font-semibold border-b-2 border-slate-200 hover:bg-slate-300 transition'}
            >
              Para Profesionales
            </button>
          </div>
          {activeTab.value === 'business' && (
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuSparkles class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Emprendedores
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuBuilding class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Empresas
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuSliders class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Autogestionables
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuShoppingBag class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Tiendas
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuHome class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Inmobiliarias
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuBed class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Hoteles
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuHeart class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Prepagas
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuBuilding2 class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Pymes
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuMapPin class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Barrios cerrados
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuGraduationCap class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Escuelas
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuUtensils class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Restaurantes
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuBookOpen class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Cursos
                </h3>
              </div>
            </div>
          )}
          {activeTab.value === 'professionals' && (
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuCalculator class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Contadores
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuScale class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Abogados
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuHeadphones class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Psicologos
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuCamera class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Fotografos
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuApple class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Nutricionistas
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuDumbbell class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Entrenadores
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuStethoscope class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Medicos
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuEye class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Oftamologicos
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuHeart class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Odontologos
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuGlobe class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Traductores
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
                <div class="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <LuZap class="text-3xl text-slate-700" />
                </div>
                <h3 class="text-2xl font-semibold text-slate-700 mb-4">
                  Electricistas
                </h3>
              </div>
              <div class="bg-white rounded-lg p-6 text-center border border-slate-200 cursor-pointer shadow-[6px_6px_12px_rgba(0,0,0,0.1),-6px_-6px_12px_rgba(255,255,255,0.8)] transition-shadow duration-200 hover:shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.8)]">
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
              class="bg-orange-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition"
            >
              Consultar por otros tipos de diseños
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section class="py-20 bg-neutral-800/50">
        <div class="container mx-auto ">
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