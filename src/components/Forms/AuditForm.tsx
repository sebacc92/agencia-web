import { component$, useSignal, useVisibleTask$, type QRL } from "@builder.io/qwik";
import { Form } from '@builder.io/qwik-city';
import Button from "~/components/ui/button/button";
import { Label } from '@qwik-ui/headless';
import { useContact } from "~/routes/index";

interface AuditFormProps {
  onCloseModal$?: QRL<() => void>;
  onShowToast$?: QRL<(p: { type: 'success' | 'error'; message: string }) => void>;
}

export default component$<AuditFormProps>(({ onCloseModal$, onShowToast$ }) => {
  const action = useContact();
  const handled = useSignal<any>(null);

  useVisibleTask$(({ track }) => {
    const value = track(() => action.value);
    track(() => action.isRunning);

    if (!action.isRunning && value && value !== handled.value) {
      handled.value = value;

      const type = value.success ? 'success' : 'error';
      const message = value.message ?? (value.success ? '¡Mensaje enviado!' : 'Ocurrió un error');

      if (value.success) onCloseModal$?.();
      onShowToast$?.({ type, message });
    }
  });

  const TURNSTILE_SITE_KEY = import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY;

  return (
    <Form action={action} class="space-y-4">

      {/* Nombre */}
      <div>
        <Label class="label" for="nombre">Tu Nombre</Label>
        <input
          id="nombre"
          name="nombre"
          placeholder="Ej: Juan Pérez"
          type="text"
          class="w-full rounded-md border px-3 py-2"
          required
        />
      </div>

      {/* Email */}
      <div>
        <Label class="label" for="email">Tu Email</Label>
        <input
          id="email"
          name="email"
          placeholder="tu@email.com"
          type="email"
          class="w-full rounded-md border px-3 py-2"
          required
        />
      </div>

      {/* Web + Teléfono */}
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <Label class="label" for="website">Sitio Web (Opcional)</Label>
          <input
            id="website"
            name="website"
            placeholder="Si tienes..."
            type="text"
            class="w-full rounded-md border px-3 py-2"
          />
        </div>
        <div>
          <Label class="label" for="telefono">WhatsApp (Opcional)</Label>
          <input
            id="telefono"
            name="telefono"
            placeholder="+54 9 11..."
            type="tel"
            class="w-full rounded-md border px-3 py-2"
          />
        </div>
      </div>

      {/* Proyecto / Necesidad */}
      <div>
        <Label class="label" for="proyecto">¿Qué necesitas?</Label>
        <textarea
          id="proyecto"
          name="proyecto"
          placeholder="Ej: Quiero lanzar una tienda online, rediseñar mi web, etc."
          class="w-full rounded-md border px-3 py-2 h-24 resize-none"
          required
        ></textarea>
      </div>

      {/* Turnstile & Submit */}
      <div>
        <div
          class="cf-turnstile"
          data-sitekey={TURNSTILE_SITE_KEY}
          data-theme="light"
          data-size="normal"
          data-action="contact"
          data-cdata="audit-form"
        ></div>

        <Button type="submit" class="mt-4 w-full font-bold uppercase tracking-wide bg-gray-900 hover:bg-gray-800 text-white shadow-lg transition-all duration-300" disabled={action.isRunning}>
          {action.isRunning ? 'Enviando...' : 'Solicitar Asesoría Gratis'}
        </Button>

        <p class="mt-3 text-xs text-gray-500 text-center leading-relaxed">
          🔒 Sin compromiso. Analizamos tu caso y te damos una estrategia.
        </p>
      </div>
    </Form >
  );
});