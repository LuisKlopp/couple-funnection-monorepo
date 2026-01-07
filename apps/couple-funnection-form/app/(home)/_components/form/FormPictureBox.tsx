"use client";

import { ImagePlus } from "lucide-react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface FileUploadBoxProps {
  onSelect?: (file: File) => void;
}

export const FormPictureBox = ({ onSelect }: FileUploadBoxProps) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    onSelect?.(file);
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <label
      className={cn(
        "border-gray-3 relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-white py-10 text-center",
        previewUrl && "py-0"
      )}
    >
      {previewUrl ? (
        <img
          src={previewUrl}
          alt="미리보기"
          className="max-h-80 w-full rounded-lg object-contain"
        />
      ) : (
        <>
          <ImagePlus className="text-primaryColor mb-3" />
          <p className="text-sm font-medium">사진 선택하기</p>
          <p className="text-gray-6 mt-1 text-xs">JPG, PNG 파일</p>
        </>
      )}

      <input
        type="file"
        accept="image/png,image/jpeg"
        className="hidden"
        onChange={handleChange}
      />
    </label>
  );
};
