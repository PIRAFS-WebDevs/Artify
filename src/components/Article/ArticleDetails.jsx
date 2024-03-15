import Link from "next/link";
import { AiOutlineFile, AiOutlineHome } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";

const ArticleDetails = () => {
  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <AiOutlineFile size={"2rem"} />
        <div className="space-y-2">
          <h1 className="flex items-center gap-4 text-lg font-medium md:text-2xl text-dark-500 dark:text-light-100">
            Async Await Why Confusing?
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm dark:text-dark-100 text-dark-200">
            <AiOutlineHome /> /
            <Link href={"/application/1"}>API Questions</Link>
            <span>Async Await Why Confusing?</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4 py-4 text-xs font-medium md:text-sm text-dark-300 dark:text-dark-100 border-y border-dark-100 dark:border-dark-300">
        <p>August 18, 2043</p>
        <p className="flex items-center gap-2">
          <BiUserCircle /> Chis Morry
        </p>
        <p>API Question</p>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
          repudiandae suscipit harum inventore sapiente rem libero? Iste,
          laborum quod. Quidem, doloremque sint quia ex mollitia nesciunt nulla
          blanditiis enim eveniet necessitatibus voluptate hic, nihil
          consequatur consequuntur sequi. Ipsam unde nostrum illo repellendus,
          magnam optio consequatur consectetur explicabo eligendi repellat
          voluptates!
        </p>
      </div>

      <div className="space-y-4">
        <h1 className="text-xl font-medium text-dark-500 dark:text-light-100">
          The Earth
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod
          repudiandae suscipit harum inventore sapiente rem libero? Iste,
          laborum quod. Quidem, doloremque sint quia ex mollitia nesciunt nulla
          blanditiis enim eveniet necessitatibus voluptate hic, nihil
          consequatur consequuntur sequi. Ipsam unde nostrum illo repellendus,
          magnam optio consequatur consectetur explicabo eligendi repellat
          voluptates!
        </p>
      </div>
    </div>
  );
};

export default ArticleDetails;
