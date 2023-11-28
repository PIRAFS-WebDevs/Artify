import Link from "next/link";

const UploadButton = () => {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <div></div>
      <div className="w-full p-8 space-y-4 rounded-sm md:col-span-2">
        <div className="flex justify-end gap-8">
          <Link
            href="/dashboard/admin/tags"
            type="button"
            className="px-6 py-4 text-sm font-semibold text-white transition-all bg-transparent border rounded-sm border-dark-200 hover:bg-primarySec active:scale-95"
          >
            Back
          </Link>
          <button
            type="submit"
            className="px-6 py-4 text-sm font-semibold text-white transition-all rounded-sm bg-primary hover:bg-primarySec active:scale-95"
          >
            Upload Tag
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadButton;
