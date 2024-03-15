import Qna from "./Qna";

const Help = () => {
  return (
    <>
      <section className="my-16 text-sm dark:text-dark-100">
        <div className="mb-10 text-center">
          <h4 className="text-2xl font-semibold dark:dark:text-light-100">
            Help
          </h4>
          <p className="dark:text-dark-100">Frequentlydsdss asked question</p>
        </div>
        <section className="w-[80%] mx-auto md:flex p-5  rounded-sm ">
          <div className="w-[30%] dark:bg-dark-400 bg-light-500 px-5 py-10 dark:text-dark-100 text-sm space-y-8">
            <p className="cursor-pointer hover:dark:text-light-100">
              Licensing Agreement
            </p>
            <p className="cursor-pointer hover:dark:text-light-100">
              Terms & Conditions
            </p>
            <p className="cursor-pointer hover:dark:text-light-100">
              Privacy Policy
            </p>
          </div>
          <div>
            <Qna />
          </div>
        </section>
      </section>
    </>
  );
};

export default Help;
