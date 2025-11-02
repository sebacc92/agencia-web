import { component$ } from "@builder.io/qwik";
import { LuMessageCircle, LuLightbulb, LuCode, LuRocket } from "@qwikest/icons/lucide";

export default component$(() => {
  const steps = [
    {
      number: "01",
      icon: LuMessageCircle,
      title: "Consulta Inicial",
      description: "Conversamos sobre tu negocio, objetivos y necesidades específicas.",
      colors: {
        badge: "bg-cyan-500",
        border: "border-cyan-300",
        hover: "hover:border-cyan-400",
        text: "group-hover:text-cyan-700",
        gradient: "from-cyan-400 to-cyan-500",
        glowFrom: "from-cyan-400",
        glowTo: "to-cyan-400"
      }
    },
    {
      number: "02",
      icon: LuLightbulb,
      title: "Estrategia",
      description: "Diseñamos un plan personalizado con soluciones a medida para vos.",
      colors: {
        badge: "bg-cyan-500",
        border: "border-cyan-300",
        hover: "hover:border-cyan-400",
        text: "group-hover:text-cyan-700",
        gradient: "from-cyan-400 to-cyan-500",
        glowFrom: "from-cyan-400",
        glowTo: "to-cyan-400"
      }
    },
    {
      number: "03",
      icon: LuCode,
      title: "Desarrollo",
      description: "Creamos tu presencia digital con las mejores prácticas y tecnología.",
      colors: {
        badge: "bg-cyan-500",
        border: "border-cyan-300",
        hover: "hover:border-cyan-400",
        text: "group-hover:text-cyan-700",
        gradient: "from-cyan-400 to-cyan-500",
        glowFrom: "from-cyan-400",
        glowTo: "to-cyan-400"
      }
    },
    {
      number: "04",
      icon: LuRocket,
      title: "Lanzamiento",
      description: "Publicamos tu proyecto y te damos soporte continuo para crecer.",
      colors: {
        badge: "bg-cyan-500",
        border: "border-cyan-300",
        hover: "hover:border-cyan-400",
        text: "group-hover:text-cyan-700",
        gradient: "from-cyan-400 to-cyan-500",
        glowFrom: "from-cyan-400",
        glowTo: "to-cyan-400"
      }
    }
  ];

  return (
    <section class="relative bg-gradient-to-br from-white via-purple-50/40 to-blue-50/30 overflow-hidden">
      {/* Animated Background Elements */}
      <div class="absolute inset-0">
        {/* Grid pattern - Light version */}
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

        {/* Large geometric shapes - Light pastel colors */}
        <div class="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-purple-300/30 to-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-pink-300/20 to-orange-300/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-300/20 to-cyan-300/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 4s"></div>
      </div>

      <div class="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Process Section */}
        <div class="relative">
          {/* Background decorative element */}
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-purple-300/10 to-transparent rounded-3xl"></div>

          <div class="relative z-10 text-center pb-12">
            <div class="inline-block my-6 px-4 py-2 bg-purple-100 border border-purple-300 rounded-full animate-fade-up" style="animation-delay: 0.1s">
              <span class="text-purple-700 text-sm font-semibold uppercase tracking-wider">Proceso de trabajo</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 animate-fade-up" style="animation-delay: 0.2s">
              Proceso <span class="text-cyan-500">Simple</span>
            </h2>
            <p class="text-lg md:text-xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-up" style="animation-delay: 0.3s">
              De la idea al éxito en 4 pasos
            </p>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} class="relative group animate-fade-up" style={`animation-delay: ${0.4 + index * 0.1}s`}>
                    <div class="relative">
                      {/* Glow effect */}
                      <div class={`absolute -inset-2 bg-gradient-to-r ${step.colors.glowFrom} ${step.colors.glowTo} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}></div>

                      <div class={`relative bg-white border-2 border-cyan-200 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-2 group-hover:shadow-lg`}>
                        {/* Step Number Badge */}
                        <div class="absolute -top-4 -left-4 w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                          {step.number}
                        </div>

                        {/* Icon Container */}
                        <div class="relative mb-6 inline-block">
                          <div class="w-24 h-24 bg-gradient-to-br from-cyan-100 to-cyan-50 rounded-2xl flex items-center justify-center text-cyan-500 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 border-2 border-cyan-300">
                            <Icon width={56} height={56} />
                          </div>
                        </div>

                        <h4 class="font-bold text-xl mb-2 text-gray-900 group-hover:text-cyan-700 transition-colors">{step.title}</h4>
                        <p class="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
