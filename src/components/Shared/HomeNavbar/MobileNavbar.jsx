import homeSidebarData from "@/data/homeSidebarData";
import HomeSidebarLink from "../HomeSidebar/HomeSidebarLink";
import { motion as m, AnimatePresence } from "framer-motion";

const MobileNavbar = ({ mobileView, setMobileView }) => {
  return (
    <AnimatePresence>
      {mobileView && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileView(false)}
          className="fixed inset-0 z-50 grid p-4 overflow-y-auto cursor-pointer bg-slate-900/20 backdrop-blur place-items-center scrollbar"
        >
          <m.div
            initial={{ x: 240 }}
            animate={{
              x: 0,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{ x: 240 }}
            onClick={(e) => e.stopPropagation()}
            className={`${"w-full min-[400px]:w-[240px] min-h-screen dark:bg-dark-400 fixed right-0 top-0 z-[60] overflow-y-auto"} `}
          >
            {homeSidebarData.map((data, index) => (
              <div key={index}>
                <HomeSidebarLink
                  href={data.path}
                  icon={data.icon}
                  title={data.title}
                />
              </div>
            ))}
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavbar;
