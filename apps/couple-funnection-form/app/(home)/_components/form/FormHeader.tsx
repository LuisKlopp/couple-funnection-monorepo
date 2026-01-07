import { ArrowLeft } from "lucide-react";

interface FormHeaderProps {
  onBack: () => void;
}

export const FormHeader = ({ onBack }: FormHeaderProps) => {
  return (
    <div className="relative flex h-10 w-full items-center justify-center">
      <ArrowLeft className="absolute left-0" onClick={onBack} />
      <span className="text-[18px] font-semibold">커플 퍼넥션 신청서</span>
    </div>
  );
};
