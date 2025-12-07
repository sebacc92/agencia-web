// src/components/ui/floating-emojis.tsx
import { component$ } from '@builder.io/qwik';

export const FloatingEmojis = component$(() => {
  // Render emojis directly, relying on CSS for animation and responsive display
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