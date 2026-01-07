"use client";

import { useState } from "react";

import { FormPage } from "./_components/form/FormPage";
import HomeIntro from "./_components/intro/HomeIntro";

export default function Home() {
  const [step, setStep] = useState<0 | 1>(0);

  return (
    <div className="relative h-dvh w-full overflow-hidden">
      <div
        className="flex h-full w-[200%] transition-transform duration-300 ease-in-out"
        style={{
          transform: step === 0 ? "translateX(0%)" : "translateX(-50%)",
        }}
      >
        <div className="w-1/2">
          <HomeIntro onNext={() => setStep(1)} />
        </div>

        <div className="w-1/2">
          <FormPage onBack={() => setStep(0)} />
        </div>
      </div>
    </div>
  );
}
