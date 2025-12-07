import { $, component$, useOnWindow, useSignal } from "@builder.io/qwik";
import { LuChevronUp } from "@qwikest/icons/lucide";

export const ScrollToTop = component$(() => {
  const show = useSignal(false);

  useOnWindow(
    "scroll",
    $(() => {
      // Use requestAnimationFrame for smooth UI updates
      requestAnimationFrame(() => {
        show.value = window.scrollY > 120;
      });
    })
  );

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick$={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      class={`cursor-pointer fixed z-50 bottom-6 right-6 bg-[#7c3aed] text-white rounded-full shadow-lg p-3 transition-opacity duration-300 hover:bg-[#6d3aed] focus:outline-none focus:ring-2 focus:ring-[#7c3aed] ${show.value ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <LuChevronUp class="h-6 w-6" />
    </button>
  );
}); 