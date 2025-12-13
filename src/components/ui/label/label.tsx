import { component$, Slot, type PropsOf } from "@builder.io/qwik";
import { Label as HeadlessLabel } from "@qwik-ui/headless";
import { cn } from "@qwik-ui/utils";

type LabelProps = PropsOf<"label">;

export const Label = component$<LabelProps>((props) => {
  return (
    <HeadlessLabel
      {...props}
      class={cn(
        "text-sm font-semibold text-gray-700 mb-1.5 block",
        props.class,
      )}
    >
      <Slot />
    </HeadlessLabel>
  );
});
