import { component$ } from '@builder.io/qwik';
import { LuTrendingUp, LuTimer, LuAlertTriangle, LuExternalLink, LuBarChart3 } from "@qwikest/icons/lucide";

export default component$(() => {
    const stats = [
        {
            company: 'Amazon',
            icon: LuTimer,
            color: 'text-orange-500',
            bg: 'bg-orange-50',
            stat: '-1% Ventas',
            context: 'por cada 100ms de retraso',
            description: 'El gigante del retail descubrió que incluso una fracción de segundo en latencia impacta directamente en la facturación anual.',
            source: 'Amazon Latency Study',
            link: 'https://www.conductor.com/academy/page-speed-resources/faq/amazon-page-speed-study/'
        },
        {
            company: 'Google & Deloitte',
            icon: LuTrendingUp,
            color: 'text-blue-600',
            bg: 'bg-blue-50',
            stat: '+8.4% Conversiones',
            context: 'al mejorar 0.1s la velocidad',
            description: 'El estudio "Milliseconds Make Millions" demostró que mejoras imperceptibles en móviles disparan las ventas en retail y turismo.',
            source: 'Milliseconds Make Millions Report',
            link: 'https://www.deloitte.com/ie/en/services/consulting/research/milliseconds-make-millions.html'
        },
        {
            company: 'Akamai',
            icon: LuAlertTriangle,
            color: 'text-red-600',
            bg: 'bg-red-50',
            stat: '53% Abandono',
            context: 'si tarda más de 3 segundos',
            description: 'La paciencia del usuario es mínima. Si tu web no carga instantáneamente en 4G, estás perdiendo la mitad de tu tráfico pagado.',
            source: 'Akamai Online Retail Performance',
            link: 'https://www.akamai.com/newsroom/press-release/akamai-releases-spring-2017-state-of-online-retail-performance-report'
        }
    ];

    return (
        <section class="py-24 bg-white relative overflow-hidden">
            <div class="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">

                {/* Intro Text */}
                <div class="text-center max-w-3xl mx-auto mb-16">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-4">
                        <LuBarChart3 class="w-4 h-4 text-gray-600" />
                        <span class="text-xs font-bold text-gray-600 uppercase tracking-wide">Data Driven Decisions</span>
                    </div>
                    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
                        No nos creas a nosotros. <br />
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                            Créeles a los datos.
                        </span>
                    </h2>
                    <p class="text-lg text-gray-600 leading-relaxed">
                        Las empresas más grandes del mundo han demostrado que la velocidad<br /> no es una métrica técnica, es una métrica financiera.
                    </p>
                </div>

                {/* Stats Grid */}
                <div class="grid md:grid-cols-3 gap-8">
                    {stats.map((item) => (
                        <div key={item.company} class="group relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                            {/* Header Card */}
                            <div class="flex items-center justify-between mb-6">
                                <div class={`p-3 rounded-xl ${item.bg} ${item.color}`}>
                                    <item.icon class="w-6 h-6" />
                                </div>
                                <span class="text-xs font-bold text-gray-400 uppercase tracking-wider">{item.company}</span>
                            </div>

                            {/* Big Stat */}
                            <div class="mb-2">
                                <h3 class={`text-4xl font-extrabold ${item.color} tracking-tight`}>
                                    {item.stat}
                                </h3>
                                <p class="text-sm font-semibold text-gray-900 mt-1">
                                    {item.context}
                                </p>
                            </div>

                            {/* Description */}
                            <p class="text-gray-500 text-sm leading-relaxed mb-6 border-t border-gray-100 pt-4 mt-4">
                                {item.description}
                            </p>

                            {/* Link Source */}
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                class="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 hover:text-green-600 transition-colors"
                            >
                                Ver estudio
                                <LuExternalLink class="w-3 h-3" />
                            </a>
                        </div>
                    ))}
                </div>

                {/* Conclusión / Bridge */}
                <div class="mt-16 text-center">
                    <p class="text-gray-500 text-sm mb-2">¿La conclusión?</p>
                    <p class="text-xl font-medium text-gray-900">
                        Una web lenta es un impuesto oculto a tu facturación. <br class="hidden sm:block" />
                        <span class="font-bold text-green-600">Cleverisma elimina ese impuesto.</span>
                    </p>
                </div>

            </div>
        </section>
    );
});