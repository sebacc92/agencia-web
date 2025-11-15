import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { LuChevronDownCircle } from "@qwikest/icons/lucide";
import ImageAllDevicesBlack from "~/media/images/all-devices-black.webp?quality=72&jsx";
import WebScoreAnimated from "./WebScoreAnimated";
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
    <main class="min-h-screen flex flex-col bg-gray-50 relative overflow-hidden">
      {/* Background optimizado - sin will-change innecesario */}
      <div class="absolute inset-0 bg-linear-to-br from-purple-200 via-white to-cyan-50"></div>
      <div 
        class="absolute bottom-1/2 lg:bottom-1/4 right-1/3 lg:right-1/6 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-100 rounded-full blur-3xl opacity-30 pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* Main Content Container */}
      <div class="flex-1 flex items-center relative z-10">
        <div class="container mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Text Column - Primero en móvil y desktop */}
            <div class="space-y-6 sm:space-y-8 text-center lg:text-left">
              {/* Badge mejorado */}
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 shadow-sm">
                <span class="text-purple-700 text-sm font-medium">🚀 Desarrollo Web de Alto Rendimiento</span>
                <span class="text-purple-600" aria-hidden="true">⚡</span>
              </div>

              {/* Headline con mejor jerarquía */}
              <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900">
                Webs{' '}
                <span class="bg-linear-to-r from-purple-600 via-purple-500 to-cyan-600 bg-clip-text text-transparent">
                  ultra-rápidas{' '}
                </span>
                que convierten
              </h1>

              {/* Subheadline mejorado */}
              <p class="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Creamos sitios web veloces que mejoran tus Core Web Vitals. Más velocidad, más retención, mejor SEO, más clientes. Simple.
              </p>

              {/* CTA Buttons mejorados */}
              <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <Button 
                  variant="neumorphic-green" 
                  size="lg"
                  class="w-full sm:w-auto"
                >
                  Quiero mi Sitio Web
                </Button>
                <Modal
                  title="Solicitar Auditoría Gratuita"
                  description="Analizaremos tu sitio web y te enviaremos un reporte detallado con mejoras específicas"
                  showFooter={false}
                  triggerClass="w-full sm:w-auto btn inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 font-semibold text-sm sm:text-base transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-2 border-purple-300 rounded-lg hover:from-purple-100 hover:to-pink-100 hover:border-purple-500 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
                  triggerText="Auditar mi Web Gratis"
                  showSig={showAuditModal}
                >
                  <AuditForm
                    onCloseModal$={onCloseModal$}
                    onShowToast$={onShowToast$}
                  />
                </Modal>
              </div>
            </div>

            {/* Image Column - Segundo en móvil, optimizado */}
            <div class="order-last lg:order-0">
              <div class="relative">
                {/* Imagen optimizada con mejor responsive */}
                <ImageAllDevicesBlack
                  alt="Sitio web mostrado en múltiples dispositivos: computadora, tablet y móvil"
                  class={[
                    'w-full h-auto max-w-full drop-shadow-2xl',
                    animationsLoaded.value && 'hover:scale-[1.02] transition-transform duration-700'
                  ]}
                  loading="eager"
                  fetchPriority="high"
                />
                
                {/* Scores - Mejorado con mejor espaciado */}
                <div class="mt-6 sm:mt-8">
                  <WebScoreAnimated />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator mejorado - más sutil y accesible */}
      <div class="relative z-10 flex justify-center pb-6 sm:pb-8">
        <a
          href="#services"
          class="group inline-flex flex-col items-center gap-2 cursor-pointer p-3 rounded-full hover:bg-white/20 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
          aria-label="Desplazarse hacia abajo para ver los servicios"
        >
          <span class="text-xs text-gray-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Ver servicios
          </span>
          <LuChevronDownCircle
            class="w-8 h-8 text-gray-400 group-hover:text-purple-600 transition-all duration-300 motion-safe:animate-bounce group-hover:scale-110"
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