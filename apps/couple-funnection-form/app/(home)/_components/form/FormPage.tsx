"use client";

import { useState } from "react";

import { PrimaryButton } from "@/components/PrimaryButton";
import { FormData } from "@/types/formData.types";

import { FormArea } from "./FormArea";
import { FormHeader } from "./FormHeader";
import { FormInput } from "./FormInput";
import { FormLabel } from "./FormLabel";
import { FormPageLayout } from "./FormPageLayout";
import { FormPictureBox } from "./FormPictureBox";
import { FormSection } from "./FormSection";
import { FormTitle } from "./FormTitle";

interface FormPageProps {
  onBack: () => void;
}

export const FormPage = ({ onBack }: FormPageProps) => {
  const [formData, setFormData] = useState<FormData>({
    years: "",
    femaleNickname: "",
    maleNickname: "",
    expectation: "",
  });

  const isFormValid =
    formData.years.trim() !== "" &&
    formData.femaleNickname.trim() !== "" &&
    formData.maleNickname.trim() !== "" &&
    formData.expectation.trim() !== "" &&
    !!formData.photo;

  const updateField = <K extends keyof FormData>(
    key: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("제출 데이터:", formData);

    // TODO:
    // - validation
    // - API 호출
    // - 다음 스텝 이동
  };
  return (
    <FormPageLayout>
      <FormHeader onBack={onBack} />
      <div className="flex w-full flex-col items-center gap-2 px-6 py-12">
        <FormTitle />
        <span className="text-gray-7">두 분의 이야기를 들려주세요</span>
      </div>
      <FormSection>
        <FormLabel index={1} text="우리는 몇 년차 커플인가요?" />
        <FormInput
          placeholder="예: 3년차"
          value={formData.years}
          onChange={(e) => updateField("years", e.target.value)}
        />
      </FormSection>

      <FormSection>
        <FormLabel index={2} text="두 분의 닉네임을 알려주세요" />

        <div className="text-gray-8 mb-2 text-xs font-medium">
          <span className="text-primaryColor text-[20px]">•</span> 여자
        </div>
        <FormInput
          placeholder="닉네임 입력"
          value={formData.femaleNickname}
          onChange={(e) => updateField("femaleNickname", e.target.value)}
        />

        <div className="text-gray-8 mt-2 mb-2 text-xs font-medium">
          <span className="text-primaryColor text-[20px]">•</span> 남자
        </div>
        <FormInput
          placeholder="닉네임 입력"
          value={formData.maleNickname}
          onChange={(e) => updateField("maleNickname", e.target.value)}
        />
      </FormSection>

      <FormSection>
        <FormLabel index={3} text="커플 퍼넥션에 기대하는 점이 있나요?" />
        <FormArea
          rows={4}
          placeholder="자유롭게 작성해주세요"
          value={formData.expectation}
          onChange={(e) => updateField("expectation", e.target.value)}
        />
      </FormSection>

      <FormSection>
        <FormLabel index={4} text="함께 찍은 커플 사진을 올려주세요" />
        <p className="text-gray-7 mb-3 text-xs leading-6">
          컨텐츠에 일회성으로만 사용되며, 퍼넥션 종료 후 삭제됩니다. <br />
          커플 사진이 아직 없다면 이번 기회에 찍어보는게 어떨까요?
        </p>

        <FormPictureBox onSelect={(file) => updateField("photo", file)} />
      </FormSection>

      <PrimaryButton
        className="w-full"
        onClick={handleSubmit}
        title="신청서 제출하기"
        disabled={!isFormValid}
      />
    </FormPageLayout>
  );
};
