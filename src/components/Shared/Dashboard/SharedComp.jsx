import Link from "next/link";

const SharedComp = ({ type, AddType, link }) => {
  return (
    <div className="md:min-h-[96px] dark:border-dark-300 rounded-sm border dark:bg-dark-400 bg-light-100 w-full mb-5 flex justify-between items-center px-5 py-4">
      <p className="text-xl text-center md:text-start">{type && type}</p>

      <Link className={link || "hidden"} href={link ? link : ""}>
        <button className="w-full h-12 font-semibold text-light-100 rounded-sm md:w-auto px-7 bg-primary">
          + {AddType}
        </button>
      </Link>
    </div>
  );
};

export default SharedComp;
