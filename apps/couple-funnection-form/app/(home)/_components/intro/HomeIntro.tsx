import { Clock, Heart, MessageCircleMore } from "lucide-react";

import { PrimaryButton } from "@/components/PrimaryButton";

import { FormTitle } from "../form/FormTitle";

interface HomeIntroProps {
  onNext: () => void;
}

export default function HomeIntro({ onNext }: HomeIntroProps) {
  return (
    <section className="flex min-h-dvh w-full flex-col items-center justify-center px-6 text-center">
      <FormTitle />
      <div className="bg-primaryColor mt-2 h-1 w-10 rounded-full" />

      <h2 className="mdl:text-[28px] text-primaryColor mt-10 text-[24px] leading-snug font-extrabold">
        우리는 서로,
        <br />
        얼마나 알고 있을까요?
      </h2>

      <p className="text-gray mt-6 text-sm leading-6 font-medium">
        커플 퍼넥션은
        <br />
        직접 묻기엔 어색한 질문을
        <br />
        게임처럼, 편안하게 나눌 수 있는 시간이에요.
      </p>

      <ul className="mt-10 flex flex-col gap-1.5 text-sm">
        <li className="flex items-center gap-3">
          <span className="bg-primaryColor/10 text-primaryColor flex h-8 w-8 items-center justify-center rounded-full">
            <Heart size={20} />
          </span>
          관계를 더 단단하게
        </li>
        <li className="flex items-center gap-3">
          <span className="bg-primaryColor/10 text-primaryColor flex h-8 w-8 items-center justify-center rounded-full">
            <MessageCircleMore size={20} />
          </span>
          솔직하지만 부담 없는 질문
        </li>
        <li className="flex items-center gap-3">
          <span className="bg-primaryColor/10 text-primaryColor flex h-8 w-8 items-center justify-center rounded-full">
            <Clock size={20} />
          </span>
          오래 남는 대화
        </li>
      </ul>

      <div className="mt-8">
        <PrimaryButton onClick={onNext} title="다음" />
      </div>
    </section>
  );
}
