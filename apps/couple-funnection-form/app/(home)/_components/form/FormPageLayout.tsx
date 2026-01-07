import { ReactNode } from "react";

interface FormPageLayoutProps {
  children: ReactNode;
}

export const FormPageLayout = ({ children }: FormPageLayoutProps) => {
  return (
    <section className="mx-auto h-dvh w-full max-w-md overflow-y-auto rounded-xl bg-[#FFF9F8] px-5 py-6">
      {children}
    </section>
  );
};
