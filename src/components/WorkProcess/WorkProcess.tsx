import { component$ } from "@builder.io/qwik";
import { LuRadar, LuZap, LuTrendingUp } from "@qwikest/icons/lucide";

export default component$(() => {
  const steps = [
    {
      number: "01",
      icon: LuRadar,
      title: "Diagnóstico",
      description: "Identificamos los cuellos de botella que frenan tus ventas.",
      colors: {
        badge: "bg-orange-500",
        border: "border-orange-300",
        hover: "hover:border-orange-400",
        text: "group-hover:text-orange-700",
        gradient: "from-orange-400 to-orange-500",
        glowFrom: "from-orange-400",
        glowTo: "to-orange-400"
      }
    },
    {
      number: "02",
      icon: LuZap,
      title: "Inyección Qwik",
      description: "Implementamos código de alto rendimiento (Resumability) para carga instantánea.",
      colors: {
        badge: "bg-purple-500",
        border: "border-purple-300",
        hover: "hover:border-purple-400",
        text: "group-hover:text-purple-700",
        gradient: "from-purple-400 to-purple-500",
        glowFrom: "from-purple-400",
        glowTo: "to-purple-400"
      }
    },
    {
      number: "03",
      icon: LuTrendingUp,
      title: "Escalado",
      description: "Tu web vuela, Google te posiciona mejor y la conversión sube.",
      colors: {
        badge: "bg-green-500",
        border: "border-green-300",
        hover: "hover:border-green-400",
        text: "group-hover:text-green-700",
        gradient: "from-green-400 to-green-500",
        glowFrom: "from-green-400",
        glowTo: "to-green-400"
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
              <span class="text-purple-700 text-sm font-semibold uppercase tracking-wider">Metodología Ágil</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900 animate-fade-up" style="animation-delay: 0.2s">
              Proceso <span class="text-cyan-500">Quirúrgico</span>
            </h2>
            <p class="text-lg md:text-xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-up" style="animation-delay: 0.3s">
              Sin burocracia. Resultados en tiempo récord.
            </p>

            <div class="grid md:grid-cols-3 gap-8 md:gap-6 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} class="relative group animate-fade-up" style={`animation-delay: ${0.4 + index * 0.1}s`}>
                    <div class="relative">
                      {/* Glow effect */}
                      <div class={`absolute -inset-2 bg-gradient-to-r ${step.colors.glowFrom} ${step.colors.glowTo} rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500`}></div>

                      <div class={`relative bg-white border-2 border-gray-100 rounded-2xl p-8 hover:${step.colors.border} transition-all duration-500 hover:-translate-y-2 group-hover:shadow-lg h-full flex flex-col items-center`}>
                        {/* Step Number Badge */}
                        <div class={`absolute -top-4 -left-4 w-10 h-10 ${step.colors.badge} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                          {step.number}
                        </div>

                        {/* Icon Container */}
                        <div class="relative mb-6 inline-block">
                          <div class={`w-24 h-24 bg-gradient-to-br ${step.colors.gradient} bg-opacity-10 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                            <Icon width={48} height={48} />
                          </div>
                        </div>

                        <h3 class={`font-bold text-2xl mb-3 text-gray-900 ${step.colors.text} transition-colors`}>{step.title}</h3>
                        <p class="text-gray-600 font-medium">{step.description}</p>
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
