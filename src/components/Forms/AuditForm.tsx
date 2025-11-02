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
    // rastrea cambios en la respuesta de la action
    const value = track(() => action.value);
    track(() => action.isRunning);

    if (!action.isRunning && value && value !== handled.value) {
      handled.value = value;

      const type = value.success ? 'success' : 'error';
      const message = value.message ?? (value.success ? '¡Solicitud enviada!' : 'Ocurrió un error');

      // cierra modal solo si fue exitoso
      if (value.success) {
        onCloseModal$?.();
      }

      // muestra el toast
      onShowToast$?.({ type, message });
    }
  });

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

        <Button type="submit" class="mt-4 w-full" disabled={action.isRunning}>
          {action.isRunning ? 'Enviando solicitud...' : 'Solicitar Auditoría Gratuita'}
        </Button>

        <p class="mt-2 text-xs text-gray-500 text-center">
          🔒 Tus datos están seguros. Solo usaremos tu email para enviarte el reporte de auditoría.
        </p>
      </div>
    </Form>
  );
});