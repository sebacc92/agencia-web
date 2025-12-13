import { component$, useSignal, useVisibleTask$, type QRL } from "@builder.io/qwik";
import { Form } from '@builder.io/qwik-city';
import { useContact } from "~/routes/index";
import { Button, Input, Label, Textarea } from "~/components/ui";

interface AuditFormProps {
  onCloseModal$?: QRL<() => void>;
  onShowToast$?: QRL<(p: { type: 'success' | 'error'; message: string }) => void>;
}

export default component$<AuditFormProps>(({ onCloseModal$, onShowToast$ }) => {
  const action = useContact();
  const handled = useSignal<any>(null);

  // eslint-disable-next-line qwik/no-use-visible-task
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

      <div>
        <Label for="audit-website">Sitio Web</Label>
        <Input
          id="audit-website"
          name="website"
          placeholder="https://tu-sitio.com"
          type="url"
          required
        />
      </div>

      <div>
        <Label for="audit-nombre">Tu Nombre</Label>
        <Input
          id="audit-nombre"
          name="nombre"
          placeholder="Ej: Juan Pérez"
          type="text"
          required
        />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <Label for="audit-email">Tu Email</Label>
          <Input
            id="audit-email"
            name="email"
            placeholder="tu@email.com"
            type="email"
            required
          />
        </div>
        <div>
          <Label for="audit-telefono">WhatsApp (Opcional)</Label>
          <Input
            id="audit-telefono"
            name="telefono"
            placeholder="+54 9 11..."
            type="tel"
          />
        </div>
      </div>

      <div>
        <Label for="audit-proyecto">¿Qué necesitas?</Label>
        <Textarea
          id="audit-proyecto"
          name="proyecto"
          placeholder="Ej: Quiero lanzar una tienda online, rediseñar mi web, etc."
          required
        />
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

        <Button type="submit" class="mt-4 py-8 w-full font-bold uppercase tracking-wide bg-gray-900 hover:bg-gray-800 text-white shadow-lg transition-all duration-300" disabled={action.isRunning}>
          {action.isRunning ? 'Enviando...' : 'Solicitar Asesoría Gratis'}
        </Button>

        <p class="mt-3 text-xs text-gray-500 text-center leading-relaxed">
          🔒 Sin compromiso. Analizamos tu caso y te damos una estrategia.
        </p>
      </div>
    </Form >
  );
});