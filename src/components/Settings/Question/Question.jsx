import { AiFillLike, AiFillDislike } from "react-icons/ai";

const Question = () => {
  return (
    <div className="space-y-4">
      <p className="dark:text-white text-dark-500">My Question</p>

      <div className="flex flex-col divide-y divide-dark-200">
        {[1, 2, 3, 4, 5, 6].map((e, i) => (
          <div key={i} className="flex flex-col gap-4 py-4">
            <div className="flex gap-4">
              <img
                src="https://pixer.redq.io/_next/image?url=https%3A%2F%2Fpixarlaravel.s3.ap-southeast-1.amazonaws.com%2F512%2Fimage07.png&w=2048&q=75"
                alt=""
                className="w-[150px]"
              />

              <div className="space-y-1">
                <p className="text-sm font-medium cursor-pointer dark:text-white text-dark-500 hover:text-primary line-clamp-2">
                  ShppingPro Joomla Template
                </p>
                <p className="inline-block px-2 py-1 text-sm font-semibold rounded-full text-primary dark:bg-dark-200 bg-light-500">
                  $39.00
                </p>
              </div>
            </div>

            <div className="p-4 space-y-2 text-xs rounded md:space-y-4 md:text-sm dark:bg-dark-300 bg-light-200">
              <div className="space-y-1 md:space-y-2">
                <p className="dark:text-white text-dark-500">
                  Q: Do you have React version of this theme?
                </p>
                <p className="dark:text-white text-dark-500">
                  A: Yes we do have react version of the theme
                </p>
              </div>
              <div className="flex items-center gap-4 text-dark-100">
                <p>Date: 11 May, 2022</p>
                <AiFillLike size={"1.2rem"} />
                <span>0</span>
                <AiFillDislike size={"1.2rem"} />
                <span>0</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
