import { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;

  isLoading?: boolean;
}

const PrimaryButton = ({
  title,
  isLoading = false,
  className,
  disabled,
  ...props
}: PrimaryButtonProps) => {
  return (
    <button
      className={cn(
        "bg-primaryColor w-60 max-w-sm rounded-xl py-3 text-base font-semibold text-white shadow-md transition hover:opacity-90",
        (disabled || isLoading) && "cursor-not-allowed opacity-50",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
