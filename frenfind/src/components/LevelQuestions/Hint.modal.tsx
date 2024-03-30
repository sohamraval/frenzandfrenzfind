import{ FC } from "react";

interface HintModalProps {
  hint: string;
}

export const HintModal: FC<HintModalProps> = ({ hint}) => {
  return (
    <div className="absolute -top-20 right-40 w-full animate-bounce bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        <h2 className="lg:text-2xl text-base font-extrabold whitespace-nowrap">{hint}</h2>
      </div>
    </div>
  );
};
