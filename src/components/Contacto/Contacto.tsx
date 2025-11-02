import { component$, useSignal, useStylesScoped$, useVisibleTask$ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import Button from "~/components/ui/button/button";
import { useContact } from "~/routes/index";
import Toast from "~/components/ui/toast/toast";
import { usePopover } from "@qwik-ui/headless";

export default component$(() => {
  useStylesScoped$(`
    @keyframes gradient { 0%, 100% { background-position: 0% 50% } 50% { background-position: 100% 50% } }
    .animate-gradient { background-size: 200% auto; animation: gradient 3s ease infinite; }
    .card { padding: 2rem; border-radius: 1.5rem; }
    @media (max-width: 768px) { .card { padding: 1.5rem; } }
  `);

  const action = useContact();

  // Toast
  const toastType = useSignal<'success' | 'error'>('success');
  const toastMsg = useSignal('');
  const { showPopover } = usePopover('contact-toast');

  const formRef = useSignal<HTMLFormElement>();

  useVisibleTask$(({ track }) => {
    const res = track(() => action.value);
    if (!res) return;

    const { success, message } = res;
    toastType.value = success ? 'success' : 'error';
    toastMsg.value = message ?? (success ? '¡Mensaje enviado!' : 'Ocurrió un error');
    showPopover();

    if (success) {
      formRef.value?.reset();
    }
  });

  const TURNSTILE_SITE_KEY = import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY;

  return (
    <section id="contacto" class="relative bg-gradient-to-br from-white via-emerald-50/40 to-cyan-50/30 overflow-hidden py-22">
      {/* ... header y layout ... */}

      <div class="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center max-w-3xl mx-auto">
        <div class="animate-fade-up lg:max-w-none lg:mx-0" style={{ animationDelay: "0.3s" }}>
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/10 to-transparent rounded-3xl"></div>

            <div class="relative z-10 bg-white/80 backdrop-blur-sm border-2 border-emerald-200 rounded-2xl p-8 md:p-12 shadow-lg">
              <Form ref={formRef} action={action} class="space-y-6">
                {/* campos ... */}

                <div
                  class="cf-turnstile"
                  data-sitekey={TURNSTILE_SITE_KEY}
                  data-theme="light"
                  data-size="normal"
                  data-action="contact"
                  data-cdata="contact-form"
                ></div>

                <div class="text-center pt-4">
                  <Button
                    type="submit"
                    class="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={action.isRunning}
                  >
                    {action.isRunning ? (<><span class="mr-2">⏳</span> Enviando...</>) : (<><span class="mr-2">📩</span> Enviar mensaje</>)}
                  </Button>
                </div>

                <p class="text-center text-xs text-gray-600">
                  🔒 Tus datos están seguros. Solo los usamos para responder tu consulta.
                </p>
              </Form>
            </div>
          </div>
        </div>
      </div>

      <Toast
        id="contact-toast"
        type={toastType.value}
        title={toastType.value === 'success' ? '¡Listo!' : 'Ups...'}
        message={toastMsg.value}
        duration={4000}
      />
    </section>
  );
});