import { $, component$, type PropsOf } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";

type TextareaProps = PropsOf<"textarea"> & {
  error?: string;
};

export const Textarea = component$<TextareaProps>(
  ({ id, name, error, ["bind:value"]: bindSig, value, onInput$, ...props }) => {
    const textareaId = id || name;
    return (
      <>
        <textarea
          {...props}
          // workaround to support two way data-binding on the Input component (https://github.com/QwikDev/qwik/issues/3926)
          value={bindSig ? bindSig.value : value}
          onInput$={[
            bindSig && $((_, el) => (bindSig.value = el.value)),
            onInput$,
          ]}
          class={cn(
            "flex min-h-[120px] w-full rounded-xl border border-gray-200/60 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition-all duration-300 ease-in-out hover:border-gray-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary/40 focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50 resize-y",
            props.class,
          )}
          id={textareaId}
          name={name}
        />
        {error && <div id={`${textareaId}-error`}>{error}</div>}
      </>
    );
  },
);
