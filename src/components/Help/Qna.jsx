import { qnaData } from "@/data/QnaData";

const Qna = () => {
  return (
    <>
      <div className="space-y-4">
        {qnaData.map(({ qus, ans }, index) => (
          <details
            key={index}
            className="group [&_summary::-webkit-details-marker]:hidden "
          >
            <summary
              className={`flex cursor-pointer items-center justify-between gap-1.5  p-4 t dark:text-light-100 font-semibold px-3 py-5 border border-dark-200 rounded-sm dark:active:bg-dark-200`}
            >
              <h2 className="font-medium">{qus}</h2>

              <p>
                <svg
                  className="w-5 h-5 transition duration-300 shrink-0 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </p>
            </summary>

            <p className="p-3 leading-relaxed text-start">{ans}</p>
          </details>
        ))}
      </div>
    </>
  );
};

export default Qna;
