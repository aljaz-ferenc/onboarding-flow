export default function FormSubmitButton({ children }: any) {
  return (
    <button
      type="submit"
      className="w-full bg-blue-500 py-3 text-white rounded"
    >
      {children}
    </button>
  );
}