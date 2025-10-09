import { component$ } from "@builder.io/qwik";

export default component$(() => {
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
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600"> empezar</span>
                        ?
                    </h3>
                    <p class="text-lg md:text-xl text-gray-700 mt-4 max-w-2xl mx-auto">
                        Cuéntanos sobre tu proyecto y trabajemos juntos para llevar tu visión al siguiente nivel
                    </p>
                </div>

                {/* Contact Form Section */}
                <div class="max-w-2xl mx-auto">
                    <div class="animate-fade-up" style={{ animationDelay: "0.2s" }}>
                        <div class="relative">
                            {/* Background decorative element */}
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-300/10 to-transparent rounded-3xl"></div>

                            <div class="relative z-10 bg-white/80 backdrop-blur-sm border-2 border-emerald-200 rounded-2xl p-8 md:p-12 shadow-lg">
                                <form class="space-y-6">
                                    {/* Nombre */}
                                    <div>
                                        <label for="nombre" class="block text-sm font-semibold text-gray-900 mb-2">
                                            Nombre completo
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            placeholder="Tu nombre completo"
                                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label for="email" class="block text-sm font-semibold text-gray-900 mb-2">
                                            Correo electrónico
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="tu@email.com"
                                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                        />
                                    </div>

                                    {/* Teléfono */}
                                    <div>
                                        <label for="telefono" class="block text-sm font-semibold text-gray-900 mb-2">
                                            Teléfono
                                        </label>
                                        <input
                                            type="tel"
                                            id="telefono"
                                            name="telefono"
                                            placeholder="+54 11 1234-5678"
                                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                                        />
                                    </div>

                                    {/* Mensaje */}
                                    <div>
                                        <label for="mensaje" class="block text-sm font-semibold text-gray-900 mb-2">
                                            Mensaje
                                        </label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            rows={5}
                                            placeholder="Cuéntanos sobre tu proyecto..."
                                            class="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <div class="text-center pt-4">
                                        <button
                                            type="submit"
                                            class="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                                        >
                                            <span class="mr-2">🚀</span>
                                            Enviar Mensaje
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Contact Info */}
                <div class="mt-16 text-center animate-fade-up" style={{ animationDelay: "0.4s" }}>
                    <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div class="bg-white/60 backdrop-blur-sm border border-emerald-200 rounded-2xl p-6 hover:border-emerald-400 transition-all duration-300 hover:-translate-y-1">
                            <div class="text-3xl mb-3">📧</div>
                            <h4 class="font-semibold text-gray-900 mb-2">Email</h4>
                            <p class="text-gray-600 text-sm">hola@auratica.com</p>
                        </div>
                        <div class="bg-white/60 backdrop-blur-sm border border-emerald-200 rounded-2xl p-6 hover:border-emerald-400 transition-all duration-300 hover:-translate-y-1">
                            <div class="text-3xl mb-3">📱</div>
                            <h4 class="font-semibold text-gray-900 mb-2">Teléfono</h4>
                            <p class="text-gray-600 text-sm">+54 11 1234-5678</p>
                        </div>
                        <div class="bg-white/60 backdrop-blur-sm border border-emerald-200 rounded-2xl p-6 hover:border-emerald-400 transition-all duration-300 hover:-translate-y-1">
                            <div class="text-3xl mb-3">⏰</div>
                            <h4 class="font-semibold text-gray-900 mb-2">Respuesta</h4>
                            <p class="text-gray-600 text-sm">En 24 horas</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom animations */}
            <style>{`

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
      `}</style>
        </section>
    );
});