import { component$, type PropsOf, Slot } from "@builder.io/qwik";
import { cn } from "@qwik-ui/utils";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "cursor-pointer group inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      look: {
        primary:
          "border-base bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:press active:shadow-base",
        secondary:
          "border-base bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90 active:press active:shadow-base",
        alert:
          "border-base bg-alert text-alert-foreground shadow-sm hover:bg-alert/90 active:press active:shadow-base",
        outline:
          "border bg-background text-foreground shadow-sm hover:bg-accent active:press active:shadow-base",
        ghost: "text-accent-foreground hover:bg-accent",
        link: "text-foreground hover:bg-transparent hover:text-foreground/80 hover:underline hover:underline-offset-2",
        gradient: "bg-gradient-to-br from-emerald-500 to-emerald-800 text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 hover:shadow-xl border border-emerald-400/20",
      },
      size: {
        sm: "h-8 px-4 py-2 text-sm",
        md: "h-12 px-8 py-3 text-base",
        lg: "h-auto px-10 py-4 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      look: "primary",
      size: "md",
    },
  },
);

type ButtonProps = PropsOf<"button"> & VariantProps<typeof buttonVariants>;

export const Button = component$<ButtonProps>(({ size, look, ...props }) => {
  return (
    <button {...props} class={cn(buttonVariants({ size, look }), props.class)}>
      <Slot />
    </button>
  );
});
