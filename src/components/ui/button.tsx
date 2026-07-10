import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-white hover:bg-primary-dark hover:shadow-[0_4px_20px_rgba(91,33,230,0.45)]",
        accent:
          "bg-accent text-[#0d1210] hover:bg-[#0ea872] hover:shadow-[0_0_20px_rgba(16,187,131,0.35)]",
        outline:
          "border border-white/20 text-foreground hover:border-white/45 hover:bg-white/5",
        ghost: "text-muted hover:text-foreground",
      },
      size: {
        default: "h-11 px-7",
        sm: "h-9 px-4",
        lg: "h-13 px-9 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
