import { component$, useSignal, $, type QRL } from '@builder.io/qwik';

export interface AuditFormData {
  websiteUrl: string;
  email: string;
}

export interface HeroAuditFormProps {
  onSubmit$: QRL<(data: AuditFormData) => void>;
  isSubmitting?: boolean;
}

export default component$<HeroAuditFormProps>((props) => {
  const { onSubmit$, isSubmitting = false } = props;

  const formData = useSignal<AuditFormData>({
    websiteUrl: '',
    email: ''
  });

  const errors = useSignal<Partial<AuditFormData>>({});
  const isSubmittingSignal = useSignal(isSubmitting);

  const handleSubmit$ = $(async (event: Event) => {
    event.preventDefault();
    
    // Validación simple
    let hasErrors = false;
    
    if (!formData.value.websiteUrl) {
      errors.value = { ...errors.value, websiteUrl: 'La URL del sitio web es obligatoria' };
      hasErrors = true;
    } else {
      try {
        new URL(formData.value.websiteUrl.startsWith('http') ? formData.value.websiteUrl : `https://${formData.value.websiteUrl}`);
        errors.value = { ...errors.value, websiteUrl: undefined };
      } catch {
        errors.value = { ...errors.value, websiteUrl: 'Por favor, ingresa una URL válida' };
        hasErrors = true;
      }
    }
    
    if (!formData.value.email) {
      errors.value = { ...errors.value, email: 'El email es obligatorio' };
      hasErrors = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.value.email)) {
        errors.value = { ...errors.value, email: 'Por favor, ingresa un email válido' };
        hasErrors = true;
      } else {
        errors.value = { ...errors.value, email: undefined };
      }
    }
    
    if (hasErrors) {
      return;
    }

    isSubmittingSignal.value = true;
    
    try {
      await onSubmit$(formData.value);
      // Reset form on successful submission
      formData.value = { websiteUrl: '', email: '' };
    } catch (error) {
      console.error('Error submitting audit form:', error);
    } finally {
      isSubmittingSignal.value = false;
    }
  });

  const handleInputChange$ = $((field: keyof AuditFormData, value: string) => {
    formData.value = { ...formData.value, [field]: value };
    
    // Clear error when user starts typing
    if (errors.value[field]) {
      errors.value = { ...errors.value, [field]: undefined };
    }
  });

  return (
    <form onSubmit$={handleSubmit$} class="space-y-6" noValidate>
      {/* Website URL Field */}
      <div class="space-y-2">
        <label for="website-url" class="block text-sm font-medium text-gray-700">
          URL de tu sitio web *
        </label>
        <div class="relative">
          <input
            id="website-url"
            name="websiteUrl"
            type="url"
            required
            value={formData.value.websiteUrl}
            onInput$={(event) => handleInputChange$('websiteUrl', (event.target as HTMLInputElement).value)}
            placeholder="https://misitioweb.com"
            class={[
              'w-full px-4 py-3 border rounded-xl transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent',
              errors.value.websiteUrl
                ? 'border-red-300 focus:ring-red-500'
                : 'border-gray-300 hover:border-gray-400'
            ].join(' ')}
            aria-describedby={errors.value.websiteUrl ? 'website-url-error' : undefined}
            aria-invalid={!!errors.value.websiteUrl}
            disabled={isSubmittingSignal.value}
          />
          {errors.value.websiteUrl && (
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
              <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        {errors.value.websiteUrl && (
          <p id="website-url-error" class="text-sm text-red-600" role="alert">
            {errors.value.websiteUrl}
          </p>
        )}
      </div>

      {/* Email Field */}
      <div class="space-y-2">
        <label for="email" class="block text-sm font-medium text-gray-700">
          Tu email *
        </label>
        <div class="relative">
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.value.email}
            onInput$={(event) => handleInputChange$('email', (event.target as HTMLInputElement).value)}
            placeholder="tu@email.com"
            class={[
              'w-full px-4 py-3 border rounded-xl transition-colors duration-200',
              'focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent',
              errors.value.email
                ? 'border-red-300 focus:ring-red-500'
                : 'border-gray-300 hover:border-gray-400'
            ].join(' ')}
            aria-describedby={errors.value.email ? 'email-error' : undefined}
            aria-invalid={!!errors.value.email}
            disabled={isSubmittingSignal.value}
          />
          {errors.value.email && (
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center">
              <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
              </svg>
            </div>
          )}
        </div>
        {errors.value.email && (
          <p id="email-error" class="text-sm text-red-600" role="alert">
            {errors.value.email}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmittingSignal.value}
        class={[
          'w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500',
          isSubmittingSignal.value
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 transform hover:scale-105'
        ].join(' ')}
      >
        {isSubmittingSignal.value ? (
          <div class="flex items-center justify-center space-x-2">
            <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Enviando auditoría...</span>
          </div>
        ) : (
          'Enviar Auditoría'
        )}
      </button>

      {/* Privacy Note */}
      <p class="text-xs text-gray-500 text-center">
        🔒 Tus datos están seguros. Solo usaremos tu email para enviarte el reporte de auditoría.
      </p>
    </form>
  );
});