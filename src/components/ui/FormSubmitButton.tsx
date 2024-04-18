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
  return (
    <button type="submit" className="flex justify-center items-center">
      {isLoading ? (
        loadingSpinner
      ) : (
        <div className="w-full bg-blue-500 py-3 text-white rounded-[6px] h-[64px] flex items-center justify-center">
          {children}
        </div>
      )}
    </button>
  );
}
