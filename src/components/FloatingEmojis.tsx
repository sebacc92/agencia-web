// src/components/ui/floating-emojis.tsx
import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

export const FloatingEmojis = component$(() => {
  const isVisible = useSignal(false);

  // Esto se ejecutará DESPUÉS de que el componente sea visible
  // y después de que el LCP se haya pintado.
  useVisibleTask$(() => {
    isVisible.value = true;
  });

  if (!isVisible.value) {
    return null; // No renderizar nada al inicio
  }

  return (
    <>
      <div class="absolute top-8 left-30 text-2xl animate-bounce hidden md:block" style="animation-duration: 3s; animation-delay: 0.5s;">
        ✨
      </div>
      <div class="absolute bottom-10 right-20 text-3xl animate-pulse hidden md:block" style="animation-duration: 2s; animation-delay: 1s;">
        🚀
      </div>
      <div class="absolute top-1/2 left-10 text-xl animate-float hidden md:block" style="animation-duration: 3.5s; animation-delay: 1.5s;">
        ⭐
      </div>
    </>
  );
});