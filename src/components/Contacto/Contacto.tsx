import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import { Form } from "@builder.io/qwik-city";
import Button from "~/components/ui/button2/button";
import { useContact } from "~/routes/index";
import Toast from "~/components/ui/toast/toast";
import { usePopover } from "@qwik-ui/headless";

export default component$(() => {
    const action = useContact();

    // Toast
    const toastType = useSignal<'success' | 'error'>('success');
    const toastMsg = useSignal('');
    const { showPopover } = usePopover('contact-toast');
    const turnstileLoaded = useSignal(false);

    const formRef = useSignal<HTMLFormElement>();

    // Cargar Turnstile de forma diferida para mejorar el rendimiento
    const loadTurnstile = $(() => {
        if (turnstileLoaded.value) return;
        if (typeof window !== 'undefined' && !document.querySelector('script[src*="turnstile"]')) {
            const script = document.createElement('script');
            script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
            script.async = true;
            script.defer = true;
            // Usar requestAnimationFrame para evitar reflow forzado
            requestAnimationFrame(() => {
                document.head.appendChild(script);
                turnstileLoaded.value = true;
            });
        }
    });

    // Cargar Turnstile cuando el formulario esté visible
    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ track }) => {
        // Track el formRef para que se ejecute cuando esté disponible
        track(() => formRef.value);

        const formElement = formRef.value;
        if (!formElement) return;

        // Usar Intersection Observer para cargar solo cuando sea necesario
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    loadTurnstile();
                    // Desconectar después de cargar
                    observer.disconnect();
                }
            },
            { rootMargin: '200px' } // Cargar 200px antes de que sea visible
        );

        observer.observe(formElement);

        // También cargar al hacer focus en cualquier input del formulario
        const handleFocus = () => loadTurnstile();
        formElement.addEventListener('focus', handleFocus, { once: true, capture: true });

        return () => {
            observer.disconnect();
            formElement.removeEventListener('focus', handleFocus, { capture: true });
        };
    });

    // Mostrar toast y resetear al terminar
    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(({ track }) => {
        track(() => action.value);
        if (!action.value) return;

        const { success, message } = action.value;
        toastType.value = success ? 'success' : 'error';
        toastMsg.value = message ?? (success ? '¡Mensaje enviado!' : 'Ocurrió un error');

        // Usar requestAnimationFrame para evitar reflow forzado
        // cuando se muestre el popover y se modifique el DOM
        requestAnimationFrame(() => {
            showPopover();

            if (success) {
                // Resetear el formulario en el siguiente frame para evitar reflow
                requestAnimationFrame(() => {
                    formRef.value?.reset();
                });
            }
        });
    });

    const TURNSTILE_SITE_KEY = import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY

    return (
        <section id="contacto" class="relative bg-gradient-to-br from-white via-emerald-50/40 to-cyan-50/30 overflow-hidden py-22">
            {/* Fondo decorativo */}
            <div class="absolute inset-0">
                <div class="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
                <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-emerald-300/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-cyan-300/20 to-emerald-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-300/20 to-teal-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
            </div>

            <div class="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                {/* Header */}
                <div class="text-center mb-12">
                    <div class="inline-block my-6 px-4 py-2 bg-purple-100 border border-purple-300 rounded-full animate-fade-up" style="animation-delay: 0.1s">
                        <span class="text-purple-700 text-sm font-semibold uppercase tracking-wider">Contacto</span>
                    </div>
                    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        ¿Listo para
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Crecer</span>
                        ?
                    </h2>
                    <p class="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
                        Contanos sobre tu proyecto y descubrí cómo podemos ayudarte a llevar tu negocio al siguiente nivel.
                    </p>
                </div>

                <div class="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center max-w-3xl mx-auto">
                    <div class="animate-fade-up lg:max-w-none lg:mx-0" style={{ animationDelay: "0.3s" }}>
                        <div class="relative">
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/10 to-transparent rounded-3xl"></div>

                            <div class="relative z-10 bg-white/80 backdrop-blur-sm border-2 border-emerald-200 rounded-2xl p-8 md:p-12 shadow-lg">
                                <Form action={action} class="space-y-6" ref={formRef}>
                                    {/* Nombre y Email */}
                                    <div class="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label for="nombre" class="block text-sm font-semibold text-gray-900 mb-2">Nombre completo *</label>
                                            <input
                                                type="text" id="nombre" name="nombre" placeholder="Tu nombre"
                                                class="w-full rounded-md border px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white/50"
                                                required disabled={action.isRunning}
                                            />
                                        </div>
                                        <div>
                                            <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">Correo electrónico *</label>
                                            <input
                                                type="email" id="email" name="email" placeholder="tu@email.com"
                                                class="w-full rounded-md border px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white/50"
                                                required disabled={action.isRunning}
                                            />
                                        </div>
                                    </div>

                                    {/* Teléfono */}
                                    <div>
                                        <label for="telefono" class="block text-sm font-semibold text-gray-900 mb-2">Teléfono (opcional)</label>
                                        <input
                                            type="tel" id="telefono" name="telefono" placeholder="+34 600 000 000"
                                            class="w-full rounded-md border px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white/50"
                                            disabled={action.isRunning}
                                        />
                                    </div>

                                    {/* Proyecto */}
                                    <div>
                                        <label for="proyecto" class="block text-sm font-semibold text-gray-900 mb-2">Contanos sobre tu proyecto (opcional)</label>
                                        <textarea
                                            id="proyecto" name="proyecto" rows={5} placeholder="¿Qué necesitas? ¿Cuáles son tus objetivos?"
                                            class="w-full rounded-md border px-4 py-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-white/50 resize-none"
                                            disabled={action.isRunning}
                                        ></textarea>
                                    </div>

                                    {/* Cloudflare Turnstile */}
                                    <div
                                        class="cf-turnstile"
                                        data-sitekey={TURNSTILE_SITE_KEY}
                                        data-theme="light"
                                        data-size="normal"
                                        data-action="contact"
                                        data-cdata="contact-form"
                                    ></div>

                                    {/* Submit */}
                                    <div class="text-center pt-4">
                                        <Button
                                            type="submit"
                                            class="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                            disabled={action.isRunning}
                                        >
                                            {action.isRunning ? (
                                                <>
                                                    <span class="mr-2">⏳</span> Enviando...
                                                </>
                                            ) : (
                                                <>
                                                    <span class="mr-2">📩</span> Enviar mensaje
                                                </>
                                            )}
                                        </Button>
                                    </div>

                                    {/* Nota seguridad */}
                                    <p class="text-center text-xs text-gray-600">
                                        🔒 Tus datos están seguros. Solo los usamos para responder tu consulta.
                                    </p>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Toast bottom-center */}
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