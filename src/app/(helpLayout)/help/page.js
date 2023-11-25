import Qna from "@/components/Help/Qna";
import HelpBar from "@/components/Shared/Help/HelpBar";
import Title from "@/components/Shared/Title/Title";

const page = () => {
  return (
    <>
      <Title title={"Help"} subTitle={"Frequently asked question"} />
      <section className="w-[80%] mx-auto flex p-5 dark:bg-dark-500  rounded mb-10">
        <HelpBar />
        <section className="w-[70%] dark:bg-dark-400 px-5 py-10 dark:text-dark-100">
          <Qna></Qna>
        </section>
      </section>
    </>
  );
};

export default page;
