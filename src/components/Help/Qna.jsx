import { qnaData } from "@/data/QnaData";

const Qna = () => {
  //   const [openAns, setDelOpenAns] = useState(false);
  return (
    <>
      <div className="space-y-4">
        {qnaData.map(({ qus, ans }, index) => (
          <details
            key={index}
            className="group [&_summary::-webkit-details-marker]:hidden "
          >
            <summary
              className={`flex cursor-pointer items-center justify-between gap-1.5  p-4 t dark:text-white font-semibold px-3 py-5 border border-dark-200 rounded dark:active:bg-dark-200`}
            >
              <h2 className="font-medium">{qus}</h2>

              <p>
                <svg
                  className="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </p>
            </summary>

            <p
              className="
             leading-relaxed p-3 text-start"
            >
              {ans}
            </p>
          </details>
        ))}
      </div>
    </>
  );
};

export default Qna;
