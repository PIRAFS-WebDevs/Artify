import helpNavData from "@/data/helpNavData";
import HelpNavLink from "../NavLink/HelpNavLink";

const HelpBar = () => {
  return (
    <>
      <div className="md:w-[30%] flex md:block justify-center items-center  md:px-5 py-10  text-sm md:space-y-8 dark:text-dark-100 ">
        {helpNavData.map((data, index) => (
          <HelpNavLink
            key={index}
            href={data.path}
            title={data.title}
            exact={data?.path === "/"}
            activeClassName="text-light-100"
          />
        ))}
      </div>
    </>
  );
};

export default HelpBar;
