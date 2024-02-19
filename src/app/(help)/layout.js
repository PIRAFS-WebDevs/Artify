import RootNavbar from "@/components/Shared/RootNavbar/RootNavbar";

const layout = ({ children }) => {
  return (
    <main className="relative min-h-screen text-sm bg-light-300 dark:bg-dark-500 ">
      <RootNavbar />
      <section className="pb-10 mt-14">{children}</section>
    </main>
  );
};

export default layout;
