import { useRouter } from "next/navigation";

const UploadButton = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <div></div>
      <div className="w-full p-8 space-y-4 rounded-sm md:col-span-2">
        <div className="flex justify-end gap-8">
          <button
            onClick={() => router.back()}
            className="px-6 py-4 text-sm font-semibold transition-all bg-transparent border rounded-sm dark:text-light-100 dark:border-dark-200 border-light-500 hover:bg-primarySec active:scale-95 hover:text-light-100 dark:hover:text-dark-400"
          >
            Back
          </button>
          <button
            type="submit"
            className="px-6 py-4 text-sm font-semibold text-light-100 transition-all rounded-sm bg-primary hover:bg-primarySec active:scale-95"
          >
            Upload Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadButton;
