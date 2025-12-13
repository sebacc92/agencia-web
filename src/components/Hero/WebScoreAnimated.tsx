import { component$, useVisibleTask$, useStore } from "@builder.io/qwik";

export default component$(() => {
  const scores = useStore({
    performance: 0,
    accessibility: 0,
    bestPractices: 0,
    seo: 0,
  });

  useVisibleTask$(() => {
    const duration = 1500;
    const steps = 60;
    const intervalTime = duration / steps;

    // Metas finales
    const targetScores = {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
    };

    let step = 0;
    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
      
      scores.performance = Math.round(targetScores.performance * easeOut(progress));
      scores.accessibility = Math.round(targetScores.accessibility * easeOut(progress));
      scores.bestPractices = Math.round(targetScores.bestPractices * easeOut(progress));
      scores.seo = Math.round(targetScores.seo * easeOut(progress));

      if (step >= steps) clearInterval(interval);
    }, intervalTime);
  });

  return (
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-2xl mx-auto">
      <ScoreCircle label="Rendimiento" value={scores.performance} />
      <ScoreCircle label="Accesibilidad" value={scores.accessibility} />
      <ScoreCircle label="Recomendaciones" value={scores.bestPractices} />
      <ScoreCircle label="SEO" value={scores.seo} />
    </div>
  );
});

export const ScoreCircle = component$((props: { label: string; value: number }) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (props.value / 100) * circumference;
  
  // Lógica de colores (Semáforo)
  let colorClass = "text-[#00C950]"; // Verde vibrante tipo Lighthouse
  // Usamos tu color de fondo específico como base
  let bgClass = "bg-[#e5faef]"; 
  
  // Si el puntaje baja, cambiamos colores (opcional, pero recomendado)
  if (props.value < 50) {
    colorClass = "text-red-500";
    bgClass = "bg-red-50";
  } else if (props.value < 90) {
    colorClass = "text-orange-500";
    bgClass = "bg-orange-50";
  }

  return (
    <div class="flex flex-col items-center gap-3">
      <div class="relative w-24 h-24 flex items-center justify-center">
        
        {/* FONDO CIRCULAR CON TU COLOR #e5faef */}
        <div class={`absolute inset-0 rounded-full scale-90 ${bgClass}`}></div>
        
        <svg class="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          {/* Track gris muy sutil */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            stroke-width="6"
            fill="transparent"
            class="text-gray-200/50" 
          />
          {/* Progreso Animado */}
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            stroke-width="6"
            fill="transparent"
            stroke-dasharray={circumference}
            stroke-dashoffset={offset}
            stroke-linecap="round"
            class={`transition-all duration-500 ease-out ${colorClass}`}
          />
        </svg>

        {/* Número Central */}
        <div class={`absolute inset-0 flex items-center justify-center font-mono text-xl font-bold ${colorClass.replace('text-', 'text-green-800 ')}`}>
          {props.value}
        </div>
      </div>
      
      <span class="text-xs sm:text-sm font-semibold text-gray-600 tracking-wide uppercase">
        {props.label}
      </span>
    </div>
  );
});