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

  const animatedScores = useSignal<number[]>(scores.map(() => 0));
  const isAnimating = useSignal(false);

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
    
    .score-item:nth-child(1) {
      animation-delay: 0.1s;
      opacity: 0;
    }
    
    .score-item:nth-child(2) {
      animation-delay: 0.2s;
      opacity: 0;
    }
    
    .score-item:nth-child(3) {
      animation-delay: 0.3s;
      opacity: 0;
    }
    
    .score-item:nth-child(4) {
      animation-delay: 0.4s;
      opacity: 0;
    }
  `);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const intervals: number[] = [];
    const timeouts: NodeJS.Timeout[] = [];

    // Esperar un poco antes de iniciar la animación
    const timer = setTimeout(() => {
      isAnimating.value = true;

      // Animar cada score con un pequeño delay
      scores.forEach((_, index) => {
        const delay = index * 400; // 400ms entre cada score (más lento)
        const timeout = setTimeout(() => {
          const duration = 4000; // 4 segundos para llegar a 100 (más lento)
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function para una animación más suave
            const easedProgress = 1 - Math.pow(1 - progress, 3); // ease-out cubic

            const newValue = Math.round(scores[index].value * easedProgress);

            animatedScores.value = animatedScores.value.map((val, i) =>
              i === index ? newValue : val
            );

            if (progress < 1) {
              const frameId = requestAnimationFrame(animate);
              intervals.push(frameId);
            }
          };

          animate();
        }, delay);
        timeouts.push(timeout);
      });
    }, 600); // Esperar 600ms iniciales
    timeouts.push(timer);

    return () => {
      timeouts.forEach(clearTimeout);
      intervals.forEach((id) => cancelAnimationFrame(id));
    };
  });

  // Calcular el stroke-dasharray y stroke-dashoffset para el círculo
  const getCircleProgress = (value: number) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (value / 100) * circumference;
    return { circumference, offset };
  };

  return (
    <div class="w-full rounded-lg p-6">
      <div class="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {scores.map((score, index) => {
          const { circumference, offset } = getCircleProgress(animatedScores.value[index]);

          return (
            <div key={score.label} class="score-item flex flex-col items-center">
              {/* Circular Progress Bar */}
              <div class="relative w-24 h-24 mb-3">
                <svg
                  class="w-full h-full transform -rotate-90"
                  viewBox="0 0 100 100"
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
                  {/* Progress Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="#e5faef"
                    stroke="#10b981"
                    stroke-width="8"
                    stroke-linecap="round"
                    class="score-circle"
                    style={{
                      strokeDasharray: `${circumference}`,
                      strokeDashoffset: `${offset}`,
                      transition: isAnimating.value ? 'stroke-dashoffset 0.1s linear' : 'none',
                    }}
                  />
                </svg>
                {/* Score Number */}
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-2xl font-bold text-green-600">
                    {animatedScores.value[index]}
                  </span>
                </div>
              </div>
              {/* Label */}
              <span class="text-sm font-medium text-gray-700 text-center">
                {score.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
});

