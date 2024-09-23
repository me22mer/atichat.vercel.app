import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        status: "border-transparent text-white",
      },
      status: {
        "in-progress": "bg-yellow-700 hover:bg-yellow-600",
        complete: "bg-green-700 hover:bg-green-600",
        "on-hold": "bg-orange-700 hover:bg-orange-600",
        planned: "bg-blue-700 hover:bg-blue-600",
      },
    },
    compoundVariants: [
      {
        variant: "status",
        status: "in-progress",
        className: "bg-yellow-700 hover:bg-yellow-600",
      },
      {
        variant: "status",
        status: "complete",
        className: "bg-green-700 hover:bg-green-600",
      },
      {
        variant: "status",
        status: "on-hold",
        className: "bg-orange-700 hover:bg-orange-600",
      },
      {
        variant: "status",
        status: "planned",
        className: "bg-blue-700 hover:bg-blue-600",
      },
    ],
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, status, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, status }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
