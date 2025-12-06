import { component$, useSignal, useVisibleTask$, type QRL } from "@builder.io/qwik";
import { Form } from '@builder.io/qwik-city';
import Button from "~/components/ui/button/button";
import { Label } from '@qwik-ui/headless';
import { useAuditWebsite } from "~/routes/index";

interface AuditFormProps {
  onCloseModal$?: QRL<() => void>;
  onShowToast$?: QRL<(p: { type: 'success' | 'error'; message: string }) => void>;
}

export default component$<AuditFormProps>(({ onCloseModal$, onShowToast$ }) => {
  const action = useAuditWebsite();
  const handled = useSignal<any>(null);

  useVisibleTask$(({ track }) => {
    const value = track(() => action.value);
    track(() => action.isRunning);

    if (!action.isRunning && value && value !== handled.value) {
      handled.value = value;

      const type = value.success ? 'success' : 'error';
      const message = value.message ?? (value.success ? '¡Solicitud enviada!' : 'Ocurrió un error');

      if (value.success) onCloseModal$?.();
      onShowToast$?.({ type, message });
    }
  });

  const TURNSTILE_SITE_KEY = import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY;

  return (
    <Form action={action}>
      <div>
        <Label class="label" for="urlWebsite">URL de tu sitio web</Label>
        <input
          id="urlWebsite"
          name="websiteUrl"
          placeholder="https://misitioweb.com"
          type="text"
          class="w-full rounded-md border px-3 py-2"
          required
        />
      </div>

      <div class="mt-3">
        <Label class="label" for="email">Tu email</Label>
        <input
          id="email"
          name="email"
          placeholder="tu@email.com"
          type="email"
          class="w-full rounded-md border px-3 py-2"
          required
        />
      </div>

      <div class="mt-3 grid grid-cols-2 gap-3">
        <div>
          <Label class="label" for="phone">WhatsApp (Opcional)</Label>
          <input
            id="phone"
            name="phone"
            placeholder="+54 9 11..."
            type="tel"
            class="w-full rounded-md border px-3 py-2"
          />
        </div>
        <div>
          <Label class="label" for="revenue">Facturación Mensual</Label>
          <select
            id="revenue"
            name="revenue"
            class="w-full rounded-md border px-3 py-2 bg-white"
          >
            <option value="startup">Startup (&lt; $1k)</option>
            <option value="growing">Creciendo ($1k - $10k)</option>
            <option value="scaling">Escalando ($10k+)</option>
          </select>
        </div>
      </div>

      <div class="mt-3">

        <div
          class="cf-turnstile"
          data-sitekey={TURNSTILE_SITE_KEY}
          data-theme="light"
          data-size="normal"
          data-action="audit"
          data-cdata="audit-form"
        ></div>

        <Button type="submit" class="mt-4 w-full font-bold uppercase tracking-wide bg-green-600 hover:bg-green-500 text-white shadow-lg hover:shadow-green-500/30 transition-all duration-300" disabled={action.isRunning}>
          {action.isRunning ? 'Verificando...' : 'Verificar Disponibilidad'}
        </Button>

        <p class="mt-3 text-xs text-gray-500 text-center leading-relaxed">
          🔒 Análisis de viabilidad sin compromiso. Te responderemos en 24hs.
        </p>
      </div>
    </Form >
  );
});