import { settingsSidebarData } from "@/data/SettingsSidebarData";

const Sidebar = () => {
  return (
    <div className="w-[250px] md:border-r border-dark-200">
      {settingsSidebarData.map((data) => {
        const { name, icon } = data;

        return (
          <div className="flex items-center gap-4 py-4 px-6 text-dark-100 hover:text-white cursor-pointer w-full active:bg-dark-300 select-none">
            {icon}
            <p className="text-dark-100 text-sm">{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
