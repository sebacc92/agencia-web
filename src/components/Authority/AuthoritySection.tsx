import { component$ } from "@builder.io/qwik";
import { LuTrendingDown, LuTimer, LuTrendingUp } from "@qwikest/icons/lucide";

export default component$(() => {
    return (
        <section class="py-16 bg-white">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-12">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        ¿Por qué la velocidad importa?
                    </h2>
                    <p class="mt-4 text-lg text-gray-600">
                        No es solo técnica, es rentabilidad.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Amazon */}
                    <div class="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                        <div class="p-3 bg-red-100 rounded-full mb-4 text-red-600">
                            <LuTrendingDown class="w-8 h-8" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Amazon</h3>
                        <p class="text-gray-600 font-medium">
                            <span class="text-red-600 font-bold">-1% de ventas</span> por cada <span class="text-gray-900 font-bold">100ms</span> de retraso.
                        </p>
                    </div>

                    {/* Google */}
                    <div class="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                        <div class="p-3 bg-orange-100 rounded-full mb-4 text-orange-600">
                            <LuTimer class="w-8 h-8" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Google</h3>
                        <p class="text-gray-600 font-medium">
                            <span class="text-orange-600 font-bold">53% de abandono</span> si tarda <span class="text-gray-900 font-bold">&gt;3 segundos</span>.
                        </p>
                    </div>

                    {/* Deloitte */}
                    <div class="flex flex-col items-center text-center p-6 rounded-2xl bg-green-50 border border-green-100 hover:shadow-lg transition-shadow duration-300 ring-1 ring-green-200">
                        <div class="p-3 bg-green-100 rounded-full mb-4 text-green-600">
                            <LuTrendingUp class="w-8 h-8" />
                        </div>
                        <h3 class="text-xl font-bold text-gray-900 mb-2">Deloitte</h3>
                        <p class="text-gray-600 font-medium">
                            <span class="text-green-600 font-bold">+8.4% de conversión</span> al mejorar solo <span class="text-gray-900 font-bold">0.1s</span>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
});
