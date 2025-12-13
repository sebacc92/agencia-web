import { $, component$, type PropsOf } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

type InputProps = PropsOf<"input"> & {
  error?: string;
};

export const Input = component$<InputProps>(
  ({ name, error, id, ["bind:value"]: bindSig, value, onInput$, ...props }) => {
    const inputId = id || name;

    return (
      <>
        <input
          {...props}
          aria-errormessage={`${inputId}-error`}
          aria-invalid={!!error}
          // workaround to support two way data-binding on the Input component (https://github.com/QwikDev/qwik/issues/3926)
          value={bindSig ? bindSig.value : value}
          onInput$={[
            bindSig && $((_, el) => (bindSig.value = el.value)),
            onInput$,
          ]}
          class={cn(
            "flex h-12 w-full rounded-lg border-2 border-gray-200 bg-white px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-200 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50",
            props.class,
          )}
          id={inputId}
          name={name}
        />
        {error && (
          <div id={`${inputId}-error`} class="text-alert mt-1 text-sm">
            {error}
          </div>
        )}
      </>
    );
  },
);
