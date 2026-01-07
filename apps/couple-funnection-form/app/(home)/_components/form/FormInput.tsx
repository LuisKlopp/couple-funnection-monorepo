import { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export const FormInput = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={cn(
        `border-gray-3 focus:border-primaryColor w-full rounded-xl border bg-white px-4 py-3 text-xs transition-all duration-200 ease-out outline-none focus:shadow-[0_0_0_1px_rgba(255,112,67,0.4)]`,
        className
      )}
      {...props}
    />
  );
};
