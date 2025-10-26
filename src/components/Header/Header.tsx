import { component$, useSignal, useStylesScoped$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import Button from "~/components/ui/button/button";

export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export default component$(() => {
  useStylesScoped$(`
    @keyframes slideInItem {
      from {
        opacity: 0;
        transform: translateX(20px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  `);

  const navigationItems: NavigationItem[] = [
    { label: "Servicios", href: "#services" },
    { label: "Nosotros", href: "#about" },
    { label: "Portafolio", href: "#portfolio" },
    { label: "Contacto", href: "#contacto" }
  ];

  const isMenuOpen = useSignal(false);

  return (
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-[0_4px_20px_rgba(0,0,0,0.08),0_1px_3px_rgba(0,0,0,0.12)]">
      <div class="container px-4 mx-auto">
        <nav class="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" class="no-underline">
            <div class="flex items-center space-x-12">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <span class="text-white font-bold text-3xl">A</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <div class="hidden lg:flex items-center gap-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                class="text-gray-600 hover:text-purple-600 transition-all duration-300 relative group px-4 py-5 font-medium text-xl"
              >
                {item.label}
                <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div class="hidden lg:block">
            <Button variant="neumorphic-green" size="lg">
              Hablanos
            </Button>
          </div>

          {/* Menú desplegable (mobile) */}
          <div class="block lg:hidden mr-4">
            <button
              class="flex justify-center items-center button-menu"
              type="button"
              aria-expanded={isMenuOpen.value}
              aria-label="Toggle navigation"
              onClick$={() => isMenuOpen.value = !isMenuOpen.value}
            >
              <div />
              <div />
              <div />
            </button>
          </div>
        </nav>

        {/* Overlay oscuro para cerrar el menú */}
        {isMenuOpen.value && (
          <div
            class="fixed top-20 left-0 right-0 bg-black/50 backdrop-blur-sm lg:hidden transition-opacity duration-300 z-40"
            style={{ height: 'calc(100vh - 80px)' }}
            onClick$={() => isMenuOpen.value = false}
          />
        )}

        {/* Mobile Menu - Desliza desde la derecha */}
        <div
          class={`fixed top-20 right-0 w-80 bg-white shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out z-50 ${
            isMenuOpen.value ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ height: 'calc(100vh - 80px)' }}
        >
          <div class="px-8 py-8 space-y-6 h-full overflow-y-auto">
            {navigationItems.map(item => (
              <Link
                key={item.href}
                href={item.href}
                class="block text-gray-700 hover:text-purple-600 transition-all duration-300 text-xl font-medium py-4 border-b border-gray-100 hover:pl-2"
                onClick$={() => isMenuOpen.value = false}
              >
                {item.label}
              </Link>
            ))}
            <div class="pt-6">
              <Button variant="neumorphic-green" size="lg" class="w-full">
                Empezar mi proyecto
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});