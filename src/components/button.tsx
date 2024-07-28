import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "flex items-center gap-2 px-5 py-2 font-medium rounded-lg",

  variants: {
    variant: {
      primary: "text-lime-950 bg-lime-300 hover:bg-lime-400",
      secondary: "text-zinc-200 bg-zinc-800 hover:bg-zinc-700",
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={buttonVariants({ variant })}>
      {children}
    </button>
  );
};

export default Button;
