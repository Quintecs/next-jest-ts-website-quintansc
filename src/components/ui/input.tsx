import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-lg border border-white/25 bg-transparent px-4 text-sm text-foreground placeholder:text-muted focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary",
        className
      )}
      {...props}
    />
  );
}

export { Input };
