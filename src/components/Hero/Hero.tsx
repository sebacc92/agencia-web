import { $, component$, useSignal } from "@builder.io/qwik";
import { LuChevronDownCircle, LuServer, LuZap } from "@qwikest/icons/lucide"; // Nuevos iconos
import ImagePageSpeed from "~/media/images/1SLu7tZx-all-devices-black.webp?quality=75&jsx";
import Button from "~/components/ui/button/button";
import Modal from "~/components/ui/modal/modal";
import AuditForm from "~/components/Forms/AuditForm";
import Toast from "~/components/ui/toast/toast";
import { usePopover } from '@qwik-ui/headless';
import WebScoreAnimated from "./WebScoreAnimated";

export default component$(() => {
  const showAuditModal = useSignal(false);
  // animationsLoaded removed as it was unused
  const toastType = useSignal<'success' | 'error'>('success');
  const toastMsg = useSignal('');
  const { showPopover } = usePopover('audit-toast');

  const onCloseModal$ = $(() => {
    showAuditModal.value = false;
  });



  const onShowToast$ = $((payload: { type: 'success' | 'error'; message: string }) => {
    toastType.value = payload.type;
    toastMsg.value = payload.message;
    requestAnimationFrame(() => {
      showPopover();
    });
  });

  return (
    <main class="min-h-[90vh] flex flex-col bg-white relative overflow-hidden">
      {/* Background sofisticado */}
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-50/40 via-white to-white"></div>

      {/* Grid Pattern sutil */}
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      {/* Main Content Container */}
      <div class="flex-1 flex flex-col justify-center relative z-10 pt-10 pb-0">
        <div class="container mx-auto py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-8 w-full">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text Column */}
            <div class="space-y-8 text-center lg:text-left relative">

              {/* Badge Dual: Cubre Creación y Optimización */}
              <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-900 border border-gray-800 shadow-lg group hover:scale-105 transition-transform cursor-default">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span class="text-white text-xs sm:text-sm font-bold tracking-wide uppercase">
                  Agencia de Alto Rendimiento
                </span>
              </div>

              {/* Headline Híbrido */}
              <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold leading-tight text-gray-900 tracking-tight">
                Lanzamos y Aceleramos <br class="hidden lg:block" />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-600">
                  Negocios Digitales.
                </span>
              </h1>

              {/* Subheadline Inclusivo (Nuevo vs Lento) */}
              <p class="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Ya sea que necesites una <span class="text-gray-900 font-bold">web nueva desde cero</span> o revivir un sitio lento que pierde ventas.
                <span class="block mt-2">
                  Diseñamos activos digitales que cargan en milisegundos y convierten visitas en dinero.
                </span>
              </p>

              {/* CTA Buttons */}
              <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
                <Button
                  variant="primary"
                  size="lg"
                  class="w-full sm:w-auto font-bold text-base shadow-lg hover:shadow-green-500/30 hover:-translate-y-1 transition-all duration-300"
                  onClick$={() => {
                    const el = document.getElementById('services');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Ver Planes y Precios
                </Button>

                {/* Modal ajustado conceptualmente */}
                <Modal
                  title="Consulta Estratégica"
                  description="Hablemos de tu proyecto. Si ya tienes web, la auditamos gratis. Si no, diseñamos tu lanzamiento."
                  showFooter={false}
                  triggerClass="w-full sm:w-auto btn inline-flex items-center justify-center px-8 py-4 font-semibold text-base transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 bg-white text-gray-700 border-2 border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 hover:text-green-700"
                  triggerText="Hablar con un Experto"
                  showSig={showAuditModal}
                >
                  <AuditForm
                    onCloseModal$={onCloseModal$}
                    onShowToast$={onShowToast$}
                  />
                  {/* Nota visual dentro del modal para nuevos clientes */}
                  <p class="text-center text-xs text-gray-400 mt-4">
                    ¿Aún no tienes sitio web? Deja el campo URL vacío o pon "Nuevo".
                  </p>
                </Modal>
              </div>

              {/* Secondary Lead Magnet: Auditoría */}
              <div class="mt-6 text-sm text-gray-500 font-medium flex items-center justify-center lg:justify-start gap-1">
                ¿Ya tienes web?
                <button
                  onClick$={() => showAuditModal.value = true}
                  class="text-orange-600 underline decoration-gray-300 hover:decoration-green-500 hover:text-green-700 transition-all"
                >
                  Solicita una Auditoría Técnica Gratuita
                </button>
              </div>
            </div>

            {/* Image Column */}
            <div class="relative mb-8 lg:mb-0">
              <div class="relative mx-auto max-w-[300px] sm:max-w-[400px] lg:max-w-full group">
                {/* Glow effect */}
                <div class="absolute -inset-4 bg-gradient-to-tr from-green-500/20 to-teal-500/20 blur-3xl rounded-full opacity-70 animate-pulse"></div>

                {/* Imagen Principal */}
                <div class="relative transform transition-transform duration-700 group-hover:scale-[1.02]">
                  <ImagePageSpeed
                    alt="Dashboard de rendimiento web"
                    class="w-full h-auto drop-shadow-2xl rounded-2xl border border-gray-100/50"
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                    sizes="(min-width: 1024px) 50vw, (min-width: 640px) 400px, 300px"
                  />
                </div>

                {/* Animated Scores */}
                <div class="mt-8 relative lg:mb-0 lg:z-10 lg:px-4">
                  <WebScoreAnimated />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* LOGO STRIP / TECH STACK (Corregido y Honesto) */}
        <div class="w-full border-t border-gray-100 bg-gray-50/50 backdrop-blur-sm mt-8 sm:mt-0">
          <div class="container mx-auto px-4 py-8">
            <p class="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">
              Potenciado por Infraestructura Enterprise
            </p>
            <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">

              {/* QWIK */}
              <div class="flex items-center gap-2 group">
                <LuZap class="w-6 h-6 text-gray-400 group-hover:text-[#AC7EF4]" />
                <span class="text-xl font-bold text-gray-700 group-hover:text-[#AC7EF4] transition-colors">Qwik</span>
              </div>

              {/* NETLIFY */}
              <div class="flex items-center gap-2 group">
                <LuServer class="w-6 h-6 text-gray-400 group-hover:text-[#00C7B7]" />
                <span class="text-xl font-bold text-gray-700 group-hover:text-[#00C7B7] transition-colors">Netlify Edge</span>
              </div>

              {/* STRAPI */}
              <div class="flex items-center gap-2 group">
                <span class="text-xl font-bold text-gray-700 group-hover:text-[#4945FF] transition-colors">Strapi</span>
              </div>

              {/* SHOPIFY */}
              <div class="flex items-center gap-2 group cursor-help" title="E-commerce Headless">
                <span class="text-2xl font-bold text-green-700">
                  Shopify
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div class="relative z-10 flex justify-center pb-6 bg-gray-50/50">
        <a
          href="#services"
          class="group flex flex-col items-center gap-2 cursor-pointer transition-all duration-300 hover:translate-y-1"
          aria-label="Ver servicios"
        >
          <span class="text-[10px] text-gray-400 font-bold uppercase tracking-widest group-hover:text-green-600">
            Explorar Soluciones
          </span>
          <LuChevronDownCircle
            class="w-5 h-5 text-gray-300 group-hover:text-green-600 transition-colors"
          />
        </a>
      </div>

      {/* Toast component */}
      <Toast
        id="audit-toast"
        type={toastType.value}
        title={toastType.value === 'success' ? '¡Solicitud Recibida!' : 'Error'}
        message={toastMsg.value}
        duration={4000}
      />
    </main>
  );
});