import { ReactNode } from "react";

interface FormSectionProps {
  children: ReactNode;
}

export const FormSection = ({ children }: FormSectionProps) => {
  return <div className="mb-8">{children}</div>;
};
