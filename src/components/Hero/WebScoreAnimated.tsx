import { component$, useSignal, useVisibleTask$, useStylesScoped$ } from '@builder.io/qwik';

interface ScoreItem {
  label: string;
  value: number;
}

export default component$(() => {
  const scores: ScoreItem[] = [
    { label: 'Rendimiento', value: 100 },
    { label: 'Accesibilidad', value: 100 },
    { label: 'Recomendaciones', value: 100 },
    { label: 'SEO', value: 100 },
  ];

  // Solo usamos señal para disparar la animación CSS de los círculos (una sola vez)
  const isAnimating = useSignal(false);

  // Referencia al contenedor para manipular el DOM directamente sin causar re-renders
  const containerRef = useSignal<Element>();

  useStylesScoped$(`
    .score-circle {
      transform-origin: center;
      transition: stroke-dashoffset 0.1s linear;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .score-item {
      animation: fadeIn 0.5s ease-out forwards;
    }
    
    /* Staggered delays para la aparición inicial */
    .score-item:nth-child(1) { animation-delay: 0.1s; opacity: 0; }
    .score-item:nth-child(2) { animation-delay: 0.2s; opacity: 0; }
    .score-item:nth-child(3) { animation-delay: 0.3s; opacity: 0; }
    .score-item:nth-child(4) { animation-delay: 0.4s; opacity: 0; }
  `);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    let frameId: number;

    const startTimeout = setTimeout(() => {
      // 1. Disparar animaciones CSS (Baratos)
      isAnimating.value = true;

      // 2. Iniciar animación de números (Manual / Direct DOM)
      if (!containerRef.value) return;

      // Seleccionamos los spans específicos dentro de este componente
      const textElements = containerRef.value.querySelectorAll('.score-value-text');
      const startTime = performance.now();
      const duration = 2500;

      const animate = (currentTime: number) => {
        const elapsedTotal = currentTime - startTime;
        let allFinished = true;

        textElements.forEach((el, index) => {
          const targetValue = scores[index].value;
          const itemStartDelay = index * 200; // Delay sincronizado con CSS

          if (elapsedTotal < itemStartDelay) return;

          const itemElapsed = elapsedTotal - itemStartDelay;
          const progress = Math.min(itemElapsed / duration, 1);

          // Cubic ease-out para suavidad
          const eased = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.round(targetValue * eased);

          // ACTUALIZACIÓN DIRECTA (Sin Reactividad = Sin Reflow Costoso)
          el.textContent = currentValue.toString();

          if (progress < 1) allFinished = false;
        });

        if (!allFinished) {
          frameId = requestAnimationFrame(animate);
        } else {
          // Asegurar el valor final exacto al terminar
          textElements.forEach((el, index) => {
            el.textContent = scores[index].value.toString();
          });
        }
      };

      frameId = requestAnimationFrame(animate);
    }, 600);

    cleanup(() => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(frameId);
    });
  });

  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <div 
      ref={containerRef} 
      class="hidden lg:grid grid-cols-2 gap-6 sm:grid-cols-4 w-full rounded-2xl p-6 relative overflow-visible z-10"
    >
      {scores.map((score, index) => {
        const targetOffset = 0;

        return (
          <div key={score.label} class="score-item flex flex-col items-center contain-content">
            {/* Circular Progress Bar */}
            <div class="relative w-24 h-24 mb-3">
              <svg
                class="w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
                width="96"
                height="96"
              >
                {/* Background Circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#e5e7eb"
                  stroke-width="8"
                />
                {/* Progress Circle - Animated via CSS Transitions */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="#e5faef"
                  stroke="#10b981"
                  stroke-width="8"
                  stroke-linecap="round"
                  class="score-circle transition-[stroke-dashoffset] duration-[2500ms] ease-out drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                  style={{
                    strokeDasharray: `${circumference}`,
                    strokeDashoffset: isAnimating.value ? `${targetOffset}` : `${circumference}`,
                    transitionDelay: `${index * 200}ms`
                  }}
                />
              </svg>

              {/* Score Number */}
              <div class="absolute inset-0 flex items-center justify-center">
                {/* Clase 'score-value-text' usada por JS para actualizar sin reflow */}
                <span class="score-value-text text-2xl font-bold text-gray-800 tabular-nums w-14 flex justify-center items-center">
                  0
                </span>
              </div>
            </div>

            {/* Label */}
            <span class="text-sm font-bold text-gray-600 text-center tracking-wide mt-1">
              {score.label}
            </span>
          </div>
        );
      })}
    </div>
  );
});