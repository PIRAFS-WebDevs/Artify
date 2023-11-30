import Qna from "@/components/Help/Qna";
import HelpBar from "@/components/Shared/Help/HelpBar";
import Title from "@/components/Shared/Title/Title";

const page = () => {
  return (
    <>
      <Title title={"Help"} subTitle={"Frequently asked question"} />
      <section className="md:w-[80%] mx-auto md:flex p-5 bg-light-200 dark:bg-dark-400  rounded-sm mb-10">
        <HelpBar />
        <section className="md:w-[70%]  px-5 py-10 dark:text-dark-100">
          <Qna></Qna>
        </section>
      </section>
    </>
  );
};

export default page;
