import { component$, useStore, useSignal, $, useStylesScoped$, useVisibleTask$, isDev } from "@builder.io/qwik";
import Button from "~/components/ui/button/button";
import emailjs from '@emailjs/browser';

declare const grecaptcha: any;

export default component$(() => {
    useStylesScoped$(`
        @keyframes gradient {
            0%, 100% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
        }

        .animate-gradient {
            background-size: 200% auto;
            animation: gradient 3s ease infinite;
        }

        .card {
            padding: 2rem;
            border-radius: 1.5rem;
        }

        @media (max-width: 768px) {
            .card {
                padding: 1.5rem;
            }
        }
    `);

    const formData = useStore({
        nombre: "",
        email: "",
        telefono: "",
        tipoNegocio: "",
        servicio: "",
        proyecto: ""
    });
    const isSubmitted = useSignal(false);
    const loading = useSignal(false);
    const error = useSignal<string | null>(null);

    // Signals para reCAPTCHA v2
    const recaptchaRef = useSignal<Element>();
    const recaptchaToken = useSignal<string | null>(null);

    // Hook para renderizar reCAPTCHA cuando el componente es visible
    useVisibleTask$(({ track }) => {
        if(isDev) return; // No cargar reCAPTCHA en desarrollo
        // Asegúrate de que la referencia al div esté lista
        track(() => recaptchaRef.value);

        const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY_V2; // Asegúrate que esta sea tu clave v2
        
        if (!RECAPTCHA_SITE_KEY) {
            console.error('Falta VITE_RECAPTCHA_SITE_KEY_V2 en .env');
            return;
        }

        // Comprueba si grecaptcha está cargado y si el div existe
        if (typeof grecaptcha !== 'undefined' && grecaptcha.render && recaptchaRef.value) {
            grecaptcha.render(recaptchaRef.value, {
                'sitekey': RECAPTCHA_SITE_KEY,
                'callback': (token: string) => {
                    // Guarda el token cuando el usuario completa el desafío
                    recaptchaToken.value = token;
                    error.value = null; // Limpia el error si lo había
                },
                'expired-callback': () => {
                    // Limpia el token si expira
                    recaptchaToken.value = null;
                }
            });
        }
    });

    const handleSubmit$ = $(async () => {
        loading.value = true;
        error.value = null;

        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
            error.value = 'Faltan credenciales de EmailJS';
            loading.value = false;
            return;
        }

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    from_name: formData.nombre,
                    from_email: formData.email,
                    telefono: formData.telefono,
                    tipo_negocio: formData.tipoNegocio,
                    servicio: formData.servicio,
                    proyecto: formData.proyecto,
                    'g-recaptcha-response': recaptchaToken.value
                },
                PUBLIC_KEY
            );

            isSubmitted.value = true;
            // Reset form
            formData.nombre = "";
            formData.email = "";
            formData.telefono = "";
            formData.tipoNegocio = "";
            formData.servicio = "";
            formData.proyecto = "";

            // Resetear reCAPTCHA después del envío
            if (typeof grecaptcha !== 'undefined') {
                grecaptcha.reset();
            }
            recaptchaToken.value = null;

            // Reset success message after 5 seconds
            setTimeout(() => {
                isSubmitted.value = false;
            }, 5000);

        } catch (err: any) {
            error.value = 'Error al enviar: ' + (err?.message || 'Desconocido');
        } finally {
            loading.value = false;
        }
    });

    return (
        <section id="contacto" class="relative bg-gradient-to-br from-white via-emerald-50/40 to-cyan-50/30 overflow-hidden py-22">
            {/* Animated Background Elements */}
            <div class="absolute inset-0">
                {/* Grid pattern - Light version */}
                <div class="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

                {/* Large geometric shapes - Emerald/cyan colors */}
                <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-emerald-300/30 to-cyan-300/30 rounded-full blur-3xl animate-pulse"></div>
                <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-cyan-300/20 to-emerald-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-300/20 to-teal-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
            </div>

            <div class="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
                {/* Title Section */}
                <div class="text-center mb-12">
                    <div class="inline-block my-6 px-4 py-2 bg-purple-100 border border-purple-300 rounded-full animate-fade-up" style="animation-delay: 0.1s">
                        <span class="text-purple-700 text-sm font-semibold uppercase tracking-wider">Contacto</span>
                    </div>

                    <h3 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        ¿Listo para
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> Crecer</span>
                        ?
                    </h3>
                    <p class="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
                        Contanos sobre tu proyecto y descubre cómo podemos ayudarte a llevar tu negocio al siguiente nivel.
                    </p>
                </div>

                {/* Contact Section - Single Column Layout */}
                <div class="grid lg:grid-cols-1 gap-12 lg:gap-16 items-center max-w-3xl mx-auto">
                    {/* Contact Form */}
                    <div class="animate-fade-up lg:max-w-none lg:mx-0" style={{ animationDelay: "0.3s" }}>
                        <div class="relative">
                            {/* Background decorative element */}
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/10 to-transparent rounded-3xl"></div>

                            <div class="relative z-10 bg-white/80 backdrop-blur-sm border-2 border-emerald-200 rounded-2xl p-8 md:p-12 shadow-lg">
                                <form preventdefault:submit onSubmit$={handleSubmit$} class="space-y-6">
                                    {/* Nombre y Email en dos columnas */}
                                    <div class="grid md:grid-cols-2 gap-6">
                                        {/* Nombre */}
                                        <div>
                                            <label for="nombre" class="block text-sm font-semibold text-gray-900 mb-2">
                                                Nombre completo *
                                            </label>
                                            <input
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                placeholder="mejorar la estrategia de"
                                                value={formData.nombre}
                                                onInput$={(e) => (formData.nombre = (e.target as HTMLInputElement).value)}
                                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                                required
                                                disabled={loading.value}
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">
                                                Correo electrónico *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="tu@email.com"
                                                value={formData.email}
                                                onInput$={(e) => (formData.email = (e.target as HTMLInputElement).value)}
                                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                                required
                                                disabled={loading.value}
                                            />
                                        </div>
                                    </div>

                                    {/* Teléfono y Tipo de negocio en dos columnas */}
                                    <div class="grid md:grid-cols-2 gap-6">
                                        {/* Teléfono (opcional) */}
                                        <div>
                                            <label for="telefono" class="block text-sm font-semibold text-gray-900 mb-2">
                                                Teléfono (opcional)
                                            </label>
                                            <input
                                                type="tel"
                                                id="telefono"
                                                name="telefono"
                                                placeholder="+34 600 000 000"
                                                value={formData.telefono}
                                                onInput$={(e) => (formData.telefono = (e.target as HTMLInputElement).value)}
                                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                                disabled={loading.value}
                                            />
                                        </div>

                                        {/* Tipo de negocio */}
                                        <div>
                                            <label for="tipo-negocio" class="block text-sm font-semibold text-gray-900 mb-2">
                                                Tipo de negocio *
                                            </label>
                                            <select
                                                id="tipo-negocio"
                                                name="tipo-negocio"
                                                value={formData.tipoNegocio}
                                                onChange$={(e) => (formData.tipoNegocio = (e.target as HTMLSelectElement).value)}
                                                class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                                required
                                                disabled={loading.value}
                                            >
                                                <option value="">Selecciona una opción</option>
                                                <option value="startup">Startup</option>
                                                <option value="pyme">PyME</option>
                                                <option value="empresa">Empresa</option>
                                                <option value="emprendedor">Emprendedor</option>
                                                <option value="otro">Otro</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* ¿Qué servicio te interesa más? */}
                                    <div>
                                        <label for="servicio" class="block text-sm font-semibold text-gray-900 mb-2">
                                            ¿Qué servicio te interesa más? *
                                        </label>
                                        <select
                                            id="servicio"
                                            name="servicio"
                                            value={formData.servicio}
                                            onChange$={(e) => (formData.servicio = (e.target as HTMLSelectElement).value)}
                                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                            required
                                            disabled={loading.value}
                                        >
                                            <option value="">Selecciona un servicio</option>
                                            <option value="web-design">Diseño Web</option>
                                            <option value="marketing">Marketing Digital</option>
                                            <option value="automatizaciones">Automatizaciones con IA</option>
                                            <option value="otro">Otro</option>
                                        </select>
                                    </div>

                                    {/* Cuéntanos sobre tu proyecto */}
                                    <div>
                                        <label for="proyecto" class="block text-sm font-semibold text-gray-900 mb-2">
                                            Cuéntanos sobre tu proyecto (opcional)
                                        </label>
                                        <textarea
                                            id="proyecto"
                                            name="proyecto"
                                            rows={5}
                                            placeholder="¿Qué necesitas? ¿Cuáles son tus objetivos?"
                                            value={formData.proyecto}
                                            onInput$={(e) => (formData.proyecto = (e.target as HTMLTextAreaElement).value)}
                                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                                            disabled={loading.value}
                                        ></textarea>
                                    </div>

                                    {/* ESTE ES EL DIV PARA reCAPTCHA v2 */}
                                    {!isDev && (
                                        <div class="flex justify-center pt-4">
                                            <div ref={recaptchaRef}></div>
                                        </div>
                                    )}

                                    {/* Submit Button */}
                                    <div class="text-center pt-4">
                                        <Button
                                            type="submit"
                                            class="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                            disabled={loading.value}
                                        >
                                            {loading.value ? (
                                                <>
                                                    <span class="mr-2">⏳</span>
                                                    Enviando...
                                                </>
                                            ) : (
                                                <>
                                                    <span class="mr-2">🚀</span>
                                                    Solicitar Consulta Gratis
                                                </>
                                            )}
                                        </Button>
                                    </div>

                                    {/* Success Message */}
                                    {isSubmitted.value && (
                                        <div class="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                                            <p class="text-green-700 text-center font-medium">
                                                ¡Mensaje enviado correctamente! Te responderé pronto.
                                            </p>
                                        </div>
                                    )}

                                    {/* Error Message */}
                                    {error.value && (
                                        <div class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                                            <p class="text-red-700 text-center font-medium">
                                                {error.value}
                                            </p>
                                        </div>
                                    )}

                                    {/* Security message */}
                                    <div class="text-center text-sm text-gray-600 mt-4">
                                        <span>🔒 Tu información está segura y nunca será compartida</span>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});
