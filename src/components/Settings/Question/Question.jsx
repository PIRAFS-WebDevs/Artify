import { AiFillLike, AiFillDislike } from "react-icons/ai";

const Question = () => {
  return (
    <div className="space-y-4">
      <p>My Question</p>

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
                <p className="text-white text-sm font-medium hover:text-primary cursor-pointer line-clamp-2">
                  ShppingPro Joomla Template
                </p>
                <p className="text-primary text-sm px-2 py-1 bg-dark-200 font-semibold inline-block rounded-full">
                  $39.00
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm bg-dark-300 p-4 rounded">
              <div className="space-y-2">
                <p className="text-white">
                  Q: Do you have React version of this theme?
                </p>
                <p className="text-white">
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
