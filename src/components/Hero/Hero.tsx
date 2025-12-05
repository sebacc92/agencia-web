import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { LuChevronDownCircle } from "@qwikest/icons/lucide";
import ImagePageSpeed from "~/media/images/pagespeed-100.png?quality=90&jsx";
import Button from "~/components/ui/button/button";
import Modal from "~/components/ui/modal/modal";
import AuditForm from "~/components/Forms/AuditForm";
import Toast from "~/components/ui/toast/toast";
import { usePopover } from '@qwik-ui/headless';

export default component$(() => {
  const showAuditModal = useSignal(false);
  const animationsLoaded = useSignal(false);
  const toastType = useSignal<'success' | 'error'>('success');
  const toastMsg = useSignal('');
  const { showPopover } = usePopover('audit-toast');

  const onCloseModal$ = $(() => {
    showAuditModal.value = false;
  });

  // Optimización: cargar animaciones después del LCP
  useVisibleTask$(
    () => {
      const win = window as typeof window & { requestIdleCallback?: typeof requestIdleCallback };
      if (typeof win.requestIdleCallback === 'function') {
        win.requestIdleCallback(() => {
          animationsLoaded.value = true;
        }, { timeout: 2000 });
      } else {
        setTimeout(() => {
          requestAnimationFrame(() => {
            animationsLoaded.value = true;
          });
        }, 100);
      }
    },
    { strategy: 'document-idle' }
  );

  const onShowToast$ = $((payload: { type: 'success' | 'error'; message: string }) => {
    toastType.value = payload.type;
    toastMsg.value = payload.message;
    requestAnimationFrame(() => {
      showPopover();
    });
  });

  return (
    <main class="min-h-[90vh] flex flex-col bg-white relative overflow-hidden">
      {/* Background sutil y limpio */}
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-50/50 via-white to-white"></div>

      {/* Main Content Container */}
      <div class="flex-1 flex items-center relative z-10">
        <div class="container mx-auto py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text Column */}
            <div class="space-y-8 text-center lg:text-left">
              {/* Badge */}
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span class="text-green-700 text-sm font-bold tracking-wide uppercase">Qwik Technology Partner</span>
              </div>

              {/* Headline Agresivo */}
              <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold leading-tight text-gray-900 tracking-tight">
                ¿Tu web carga lento? <br class="hidden lg:block" />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-500">
                  Estás perdiendo el 20% de tus ventas.*
                </span>
              </h1>

              {/* Subheadline Persuasivo */}
              <p class="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Desarrollamos Apps, Sitios y Landings de <span class="text-gray-900 font-bold">Carga Instantánea</span>.
                Usamos tecnología Qwik para eliminar los tiempos de espera.
                <span class="block mt-2">
                  Google te amará, tus clientes comprarán más.
                </span>
              </p>

              {/* CTA Buttons */}
              <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <Modal
                  title="Solicitar Auditoría Gratuita"
                  description="Analizaremos tu sitio web y te enviaremos un reporte detallado con mejoras específicas"
                  showFooter={false}
                  triggerClass="w-full sm:w-auto btn inline-flex items-center justify-center px-8 py-4 font-bold text-base uppercase tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 bg-green-600 text-white rounded-lg hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/30 hover:-translate-y-1"
                  triggerText="QUIERO MI AUDITORÍA GRATIS"
                  showSig={showAuditModal}
                >
                  <AuditForm
                    onCloseModal$={onCloseModal$}
                    onShowToast$={onShowToast$}
                  />
                </Modal>

                <Button
                  variant="ghost"
                  size="lg"
                  class="w-full sm:w-auto text-gray-600 hover:text-gray-900 font-semibold"
                  onClick$={() => {
                    const el = document.getElementById('services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Ver cómo funciona
                </Button>
              </div>

              {/* Subtle Citation */}
              <div class="pt-2 text-center lg:text-left">
                <a
                  href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs text-gray-400 hover:text-gray-600 underline decoration-dotted cursor-help transition-colors"
                >
                  * Fuente: Estudio Google/SOASTA sobre Latencia Móvil
                </a>
              </div>
            </div>

            {/* Image Column */}
            <div class="order-first lg:order-last mb-8 lg:mb-0">
              <div class="relative mx-auto max-w-[300px] sm:max-w-[400px] lg:max-w-full">
                {/* Glow effect */}
                <div class="absolute -inset-4 bg-green-500/20 blur-3xl rounded-full opacity-70 animate-pulse"></div>

                {/* Imagen PageSpeed */}
                <div class="relative transform transition-transform duration-700 hover:scale-105">
                  <ImagePageSpeed
                    alt="Puntaje perfecto 100/100 en Google PageSpeed Insights"
                    class="w-full h-auto drop-shadow-2xl rounded-2xl"
                    loading="eager"
                    fetchPriority="high"
                  />

                  {/* Floating Badge */}
                  <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 hidden sm:block animate-bounce duration-[3000ms]">
                    <div class="flex items-center gap-3">
                      <div class="flex -space-x-2">
                        <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-xs font-bold text-green-700 border-2 border-white">🚀</div>
                        <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-bold text-blue-700 border-2 border-white">⚡</div>
                      </div>
                      <div>
                        <p class="text-xs text-gray-500 font-semibold uppercase tracking-wider">Core Web Vitals</p>
                        <p class="text-sm font-bold text-gray-900">Optimizados</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div class="relative z-10 flex justify-center pb-8">
        <a
          href="#services"
          class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300"
          aria-label="Desplazarse hacia abajo"
        >
          <span class="text-xs text-gray-400 font-medium uppercase tracking-widest group-hover:text-green-600 transition-colors">
            Descubre más
          </span>
          <LuChevronDownCircle
            class="w-6 h-6 text-gray-300 group-hover:text-green-600 transition-all duration-300 group-hover:translate-y-1"
            aria-hidden="true"
          />
        </a>
      </div>

      {/* Toast component */}
      <Toast
        id="audit-toast"
        type={toastType.value}
        title={toastType.value === 'success' ? '¡Listo!' : 'Ups...'}
        message={toastMsg.value}
        duration={4000}
      />
    </main>
  );
});