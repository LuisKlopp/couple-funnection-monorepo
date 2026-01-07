import { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;

  isLoading?: boolean;
}

export const PrimaryButton = ({
  title,
  isLoading = false,
  className,
  disabled,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      className={cn(
        "bg-primaryColor w-60 cursor-pointer rounded-xl py-3 text-base font-semibold text-white shadow-md transition hover:opacity-90",
        (disabled || isLoading) && "pointer-events-none opacity-50",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {title}
    </button>
  );
};
