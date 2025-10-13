import { component$, useSignal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuMenu, LuX } from "@qwikest/icons/lucide";
import Button from "~/components/ui/button/button";

export interface NavigationItem {
  label: string;
  href: string;
  isActive?: boolean;
}

export default component$(() => {
  const navigationItems: NavigationItem[] = [
    { label: "Servicios", href: "#services" },
    { label: "Nosotros", href: "#about" },
    { label: "Portafolio", href: "#portfolio" },
    { label: "Contacto", href: "#contacto" }
  ];

  const isMenuOpen = useSignal(false);

  return (
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
      <div class="container px-12 mx-auto">
        <nav class="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" class="no-underline">
            <div class="flex items-center space-x-12">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                <span class="text-white font-bold text-3xl">A</span>
              </div>
              <span class="text-3xl font-bold text-gray-900">Auratica</span>
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
              Empezar mi proyecto
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            class="lg:hidden p-5 text-gray-600 hover:text-purple-600 transition-colors duration-300"
            onClick$={() => isMenuOpen.value = !isMenuOpen.value}
          >
            {isMenuOpen.value ? <LuX class="w-12 h-12" /> : <LuMenu class="w-12 h-12" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen.value && (
          <div class="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg">
            <div class="px-12 py-12 space-y-10">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  class="block text-gray-600 hover:text-purple-600 transition-colors duration-300 text-2xl font-medium py-5 border-b border-gray-100"
                  onClick$={() => isMenuOpen.value = false}
                >
                  {item.label}
                </a>
              ))}
              <div class="pt-8">
                <Button variant="neumorphic-green" size="lg" class="w-full">
                  Empezar mi proyecto
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
});