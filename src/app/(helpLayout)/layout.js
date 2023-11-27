import RootNavbar from "@/components/Shared/RootNavbar/RootNavbar";

const layout = ({ children }) => {
  return (
    <main className="relative min-h-screen text-sm dark:bg-dark-500 ">
      <RootNavbar />
      <section className="mt-14">{children}</section>
    </main>
  );
};

export default layout;
