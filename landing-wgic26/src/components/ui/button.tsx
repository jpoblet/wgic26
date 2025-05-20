import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonBase = cva(
  "relative z-10 inline-flex items-center justify-center gap-2 font-semibold uppercase transition-all duration-500",
  {
    variants: {
      variant: {
        default: "bg-potus text-black shadow-[inset_0px_0px_0px_2px_black]",
        secondary: "bg-white text-black shadow-[inset_0px_0px_0px_2px_black]",
        inverse: "bg-black text-white shadow-[inset_0px_0px_0px_2px_white]",
      },
      size: {
        default: "h-10 text-xs px-4 has-[>svg]:px-3",
        sm: "h-8 text-xs px-3 has-[>svg]:px-2.5",
        lg: "h-12 text-sm px-5 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonBase> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  const isInverse = variant === "inverse"
  const pseudoColor = isInverse ? "text-white" : "text-black"

  return (
    <div
      className={cn(
        "relative group inline-block transition-transform duration-500 self-center origin-bottom-right",
        "hover:-translate-x-1 hover:-translate-y-1 hover:origin-bottom-right",
        "active:translate-x-1 active:translate-y-1 hover:origin-bottom-right"
      )}
    >

      {/* Pseudo elements for 3D effect */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 z-0",
          "before:absolute before:content-[''] before:w-2 before:h-full before:skew-y-[45deg] before:bg-current before:-right-2 before:-bottom-1 before:transition-all before:duration-500",
          "after:absolute after:content-[''] after:h-2 after:w-full after:skew-x-[45deg] after:bg-current after:left-1 after:-bottom-2 after:transition-all after:duration-500",
          "group-hover:before:-right-3 group-hover:before:-bottom-1.5 group-hover:before:w-3 group-hover:origin-bottom-right",
          "group-hover:after:-bottom-3 group-hover:after:h-3 group-hover:after:left-1.5",
          "group-active:before:-right-1 group-active:before:-bottom-0.5 group-active:before:w-1 group-active:origin-bottom-right",
          "group-active:after:-bottom-1 group-active:after:h-1 group-active:after:left-0.5",
          pseudoColor
        )}
      />
      <Comp
        data-slot="button"
        className={cn(buttonBase({ variant, size }), className)}
        {...props}
      />
    </div>
  )
}

export { Button, buttonBase as buttonVariants }
