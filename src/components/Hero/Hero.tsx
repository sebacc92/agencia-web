import { $, component$, useSignal } from "@builder.io/qwik";
import { LuChevronDownCircle } from "@qwikest/icons/lucide";
import ImagePanda from "~/media/images/oso_panda_usando_notebook.png?quality=72&jsx";
import Button from "~/components/ui/button/button";
import Modal from "~/components/ui/modal/modal";
import AuditForm from "~/components/Forms/AuditForm";
import Toast from "~/components/ui/toast/toast";
import { usePopover } from '@qwik-ui/headless';

export default component$(() => {
  const showAuditModal = useSignal(false);
  const toastType = useSignal<'success' | 'error'>('success');
  const toastMsg = useSignal('');
  const { showPopover } = usePopover('audit-toast');
  const onCloseModal$ = $(() => {
    showAuditModal.value = false;
  });
  const onShowToast$ = $((payload: { type: 'success' | 'error'; message: string }) => {
    toastType.value = payload.type;
    toastMsg.value = payload.message;
    showPopover();
  });
  return (
    <main class="min-h-screen flex flex-col bg-gray-50 relative">
      {/* Subtle Background Elements */}
      <div class="absolute inset-0 bg-gradient-to-br from-purple-200 via-white to-cyan-50"></div>
      <div class="absolute bottom-2/4 lg:bottom-1/4 right-1/3 lg:right-1/6 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-30"></div>

      {/* Main Content Container */}
      <div class="flex-1 flex items-center relative z-10">
        <div class="container mx-auto py-20 px-4 sm:px-6 lg:px-8 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] lg:gap-12 items-center">
            {/* Image Column - Shows first on mobile */}
            <div class="flex justify-center lg:justify-end order-first lg:order-last mt-6 lg:mb-0">
              <div class="relative animate-float max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                {/* Nube voladora con movimiento sutil */}
                <div>
                  <ImagePanda
                    alt="Panda trabajando en laptop sobre nube voladora"
                    class="drop-shadow-2xl hover:scale-105 transition-transform duration-700 panda-float-animation w-full"
                    sizes="(min-width: 1024px) 512px, (min-width: 768px) 448px, (min-width: 640px) 384px, 90vw"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>

                {/* Elementos flotantes alrededor que crean movimiento dinámico */}
                <div class="absolute top-8 left-30 text-2xl animate-bounce hidden md:block" style="animation-duration: 3s; animation-delay: 0.5s;">
                  ✨
                </div>
                <div class="absolute bottom-10 right-20 text-3xl animate-pulse hidden md:block" style="animation-duration: 2s; animation-delay: 1s;">
                  🚀
                </div>
                <div class="absolute top-1/2 left-10 text-xl animate-float hidden md:block" style="animation-duration: 3.5s; animation-delay: 1.5s;">
                  ⭐
                </div>
              </div>
            </div>

            {/* Text Column - Shows second on mobile */}
            <div class="space-y-8 order-last lg:order-first text-center lg:text-left lg:mt-4">
              {/* Eyebrow */}
              <div class="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 border border-purple-200">
                <span class="text-purple-700 text-sm font-medium">🚀 Webs de Alto Rendimiento para tu Marca</span>
              </div>

              {/* Main Headline */}
              <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                Webs{' '}
                <span class="bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  ultra-rápidas {' '}
                </span>
                que convierten
              </h1>

              {/* Subheadline */}
              <p class="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Creamos sitios webs veloces que mejoran tus Core Web Vitals. Más velocidad, mas retención, mejor SEO, más clientes. Simple.
              </p>

              {/* CTA Buttons */}
              <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button variant="neumorphic-green" size="lg">
                  Quiero mi Sitio Web
                </Button>
                <Modal
                  title="Solicitar Auditoría Gratuita"
                  description="Analizaremos tu sitio web y te enviaremos un reporte detallado con mejoras específicas"
                  showFooter={false}
                  triggerClass="btn inline-flex items-center justify-center px-8 py-4 font-semibold text-base transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 border-2 border-purple-300 rounded-lg hover:from-purple-100 hover:to-pink-100 hover:border-purple-500 hover:shadow-xl hover:scale-105 active:translate-y-0"
                  triggerText="Auditar mi Web Actual Gratis"
                  // bind:show
                  showSig={showAuditModal}
                >
                  <AuditForm
                    onCloseModal$={onCloseModal$}
                    onShowToast$={onShowToast$}
                  />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Fixed at bottom */}
      <div class="relative z-10 flex justify-center pb-6 sm:pb-8">
        <a
          href="#services"
          class="group cursor-pointer motion-safe:animate-bounce hover:scale-110 transition-transform duration-300 p-2 rounded-full hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
          aria-label="Ir a la sección Servicios"
          title="Ir a la sección Servicios"
        >
          <LuChevronDownCircle
            class="w-8 h-8 text-gray-500 group-hover:text-green-500 transition-colors duration-300"
            aria-hidden="true"
            focusable="false"
          />
        </a>
      </div>
      
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
