import Link from "next/link";
import { usePathname } from "next/navigation";


const AdminSideNavLink = ({
  href,
  title,
  icon,
  
}) => {
  const path = usePathname();

 

  return (
    <div className={`hover:text-white hover:bg-dark-300 ${
      path === href ? "text-white bg-dark-300" : "text-gray-300"
    }`}>
      <Link href={href} >
        <div
          className={`w-full py-3 flex xl:pl-6 gap-5 pl-6 group items-center  justify-normal `}
        >
          <span className="text-sm ">{icon}</span>
          <span className={`text-sm`}>{title}</span>
        </div>
      </Link>
    </div>
  );
};

export default AdminSideNavLink;
