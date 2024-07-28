import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "flex items-center gap-2 px-5 py-2 font-medium rounded-lg justify-center",

  variants: {
    variant: {
      primary: "text-lime-950 bg-lime-300 hover:bg-lime-400",
      secondary: "text-zinc-200 bg-zinc-800 hover:bg-zinc-700",
    },

    size: {
      default: "py-2",
      full: "w-full h-11",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button = ({ children, variant, size, ...props }: ButtonProps) => {
  return (
    <button {...props} className={buttonVariants({ variant, size })}>
      {children}
    </button>
  );
};

export default Button;
