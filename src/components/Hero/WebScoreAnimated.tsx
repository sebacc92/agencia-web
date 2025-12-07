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
    let frameId: number;
    const startTimeout = setTimeout(() => {
      isAnimating.value = true;
      const startTime = Date.now();
      const duration = 2500; // Duration per item

      const animate = () => {
        const now = Date.now();
        const elapsedTotal = now - startTime;
        let allFinished = true;

        const newScores = scores.map((score, index) => {
          const itemStartDelay = index * 200; // Stagger start time
          if (elapsedTotal < itemStartDelay) return 0;

          const itemElapsed = elapsedTotal - itemStartDelay;
          const progress = Math.min(itemElapsed / duration, 1);

          // Cubic ease-out
          const eased = 1 - Math.pow(1 - progress, 3);

          if (progress < 1) allFinished = false;

          return Math.round(score.value * eased);
        });

        // Optimization: Update signal only if values changed significantly or to ensure final 100
        animatedScores.value = newScores;

        if (!allFinished) {
          frameId = requestAnimationFrame(animate);
        }
      };

      frameId = requestAnimationFrame(animate);
    }, 600);

    return () => {
      clearTimeout(startTimeout);
      cancelAnimationFrame(frameId);
    };
  });

  // Calculate static circumference (r=40)
  const radius = 40;
  const circumference = 2 * Math.PI * radius;

  return (
    <div class="w-full rounded-lg p-6">
      <div class="grid grid-cols-2 gap-6 sm:grid-cols-4">
        {scores.map((score, index) => {
          // All scores target 100, so target offset is 0. 
          // If scores were dynamic, we'd calculate targetOffset = circumference - (score.value / 100) * circumference
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
                  {/* Progress Circle - Animated via CSS */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="#e5faef"
                    stroke="#10b981"
                    stroke-width="8"
                    stroke-linecap="round"
                    class="score-circle transition-[stroke-dashoffset] duration-[2500ms] ease-out"
                    style={{
                      strokeDasharray: `${circumference}`,
                      strokeDashoffset: isAnimating.value ? `${targetOffset}` : `${circumference}`,
                      transitionDelay: `${index * 200}ms` // Match the number stagger
                    }}
                  />
                </svg>
                {/* Score Number */}
                <div class="absolute inset-0 flex items-center justify-center">
                  <span class="text-2xl font-bold text-green-600 tabular-nums w-14 flex justify-center items-center">
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

