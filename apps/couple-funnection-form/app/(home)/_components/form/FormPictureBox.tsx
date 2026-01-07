import { ImagePlus } from "lucide-react";

interface FileUploadBoxProps {
  onSelect?: (file: File) => void;
}

export const FormPictureBox = ({ onSelect }: FileUploadBoxProps) => {
  return (
    <label className="border-gray-3 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed bg-white py-10 text-center">
      <ImagePlus className="text-primaryColor mb-3" />
      <p className="text-sm font-medium">사진 선택하기</p>
      <p className="text-gray-6 mt-1 text-xs">JPG, PNG 파일</p>
      <input
        type="file"
        accept="image/png,image/jpeg"
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            onSelect?.(e.target.files[0]);
          }
        }}
      />
    </label>
  );
};
