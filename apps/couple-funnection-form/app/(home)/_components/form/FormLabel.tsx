interface FormLabelProps {
  index: number;
  text: string;
}

export const FormLabel = ({ index, text }: FormLabelProps) => {
  return (
    <label className="text-primaryColor/90 mb-3 block text-[16px] font-semibold">
      {index}. {text}
    </label>
  );
};
