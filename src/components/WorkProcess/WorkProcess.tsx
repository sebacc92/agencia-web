import { component$ } from "@builder.io/qwik";
import { LuTarget, LuCode2, LuRocket, LuArrowRight } from "@qwikest/icons/lucide";

export default component$(() => {
  const steps = [
    {
      number: "01",
      icon: LuTarget,
      title: "Estrategia & Diseño",
      // Este texto cubre ambos casos: web nueva o existente.
      description: "Si ya tienes web, la auditamos. Si no, diseñamos tu plan desde cero. Definimos objetivos claros antes de escribir una línea de código.",
      colors: {
        badge: "bg-blue-700",
        bgIcon: "bg-blue-50 text-blue-600",
        border: "border-blue-200",
        hoverBorder: "group-hover:border-blue-400",
        glow: "from-blue-400 to-cyan-300"
      }
    },
    {
      number: "02",
      icon: LuCode2,
      title: "Desarrollo Acelerado",
      // Eliminamos tecnicismos excesivos, vendemos "personalización" y "velocidad".
      description: "Nada de plantillas lentas de WordPress. Construimos tu activo digital a medida con tecnología Qwik para una velocidad de carga instantánea.",
      colors: {
        badge: "bg-purple-700",
        bgIcon: "bg-purple-50 text-purple-600",
        border: "border-purple-200",
        hoverBorder: "group-hover:border-purple-400",
        glow: "from-purple-400 to-pink-300"
      }
    },
    {
      number: "03",
      icon: LuRocket,
      title: "Lanzamiento & Growth",
      // El beneficio final: Tráfico y Ventas.
      description: "Entrega final optimizada. Tu negocio queda listo para indexar en Google, recibir tráfico masivo y convertir visitas en dinero.",
      colors: {
        badge: "bg-green-700",
        bgIcon: "bg-green-50 text-green-600",
        border: "border-green-200",
        hoverBorder: "group-hover:border-green-400",
        glow: "from-green-400 to-emerald-300"
      }
    }
  ];

  return (
    <section class="relative bg-white overflow-hidden py-24">
      {/* Background sutil para no distraer */}
      <div class="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(closest-side_at_center,#000_70%,transparent_100%)] opacity-50"></div>

      <div class="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">

        {/* Header Section */}
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-6">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span class="text-xs font-bold text-gray-600 uppercase tracking-wide">Metodología Ágil</span>
          </div>

          <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
            Del concepto a la venta <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              en 3 pasos simples.
            </span>
          </h2>
          <p class="text-xl text-gray-600 leading-relaxed">
            Eliminamos la burocracia de las agencias tradicionales. <br class="hidden sm:block" />
            Sin vueltas, sin demoras y enfocado 100% en tu ROI.
          </p>
        </div>

        {/* Steps Grid */}
        <div class="grid md:grid-cols-3 gap-8 relative">

          {/* Connector Line (Desktop Only) */}
          <div class="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent -translate-y-1/2 z-0"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} class="relative group z-10 transition-all duration-300 hover:-translate-y-2">

                {/* Number Badge */}
                <div class={`
                  absolute -top-5 left-1/2 -translate-x-1/2 z-20
                  w-10 h-10 rounded-full ${step.colors.badge} text-white 
                  flex items-center justify-center font-bold text-sm shadow-lg ring-4 ring-white
                `}>
                  {step.number}
                </div>

                {/* Card Container */}
                <div class={`
                  h-full bg-white rounded-2xl p-8 
                  border-2 ${step.colors.border} ${step.colors.hoverBorder}
                  transition-all duration-300 group-hover:shadow-xl
                  flex flex-col items-center text-center relative overflow-hidden
                `}>

                  {/* Glow Effect on Hover */}
                  <div class={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.colors.glow}`}></div>

                  {/* Icon */}
                  <div class={`
                    mt-6 mb-6 w-20 h-20 rounded-2xl ${step.colors.bgIcon}
                    flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3
                  `}>
                    <Icon class="w-10 h-10" />
                  </div>

                  {/* Content */}
                  <h3 class="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p class="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Mobile Arrow (Visual Cue) */}
                  {index < steps.length - 1 && (
                    <div class="md:hidden mt-6 text-gray-300">
                      <LuArrowRight class="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
});