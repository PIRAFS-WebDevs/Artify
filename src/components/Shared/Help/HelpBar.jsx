import Link from "next/link";

const HelpBar = () => {
  return (
    <>
      <div className="w-[30%] dark:bg-dark-400 px-5 py-10 dark:text-dark-100 text-sm space-y-8 ">
        <Link
          href={"/help"}
          className="cursor-pointer hover:dark:text-white block"
        >
          Help
        </Link>

        <Link
          href={"/licensing"}
          className="cursor-pointer hover:dark:text-white block"
        >
          Licensing Agreement
        </Link>
        <Link
          href={"/terms"}
          className="cursor-pointer hover:dark:text-white block"
        >
          Terms & Conditions
        </Link>
        <Link
          href={"/privacy"}
          className="cursor-pointer hover:dark:text-white block"
        >
          Privacy Policy
        </Link>
      </div>
    </>
  );
};

export default HelpBar;
