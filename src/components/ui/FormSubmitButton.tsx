import { useState } from "react";

type FormSubmitButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
  loadingSpinner?: React.ReactNode;
};

export default function FormSubmitButton({
  children,
  isLoading = false,
  loadingSpinner,
}: FormSubmitButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="submit"
      className="flex justify-center items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isLoading ? (
        loadingSpinner
      ) : (
        <div className={`w-full ${hovered ? 'bg-blue-700':'bg-blue-500'} transition py-3 text-white rounded-[6px] h-[64px] flex items-center justify-center`}>
          {children}
        </div>
      )}
    </button>
  );
}
