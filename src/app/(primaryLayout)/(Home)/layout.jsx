import Sidebar from "@/components/Shared/Sidebar/Sidebar";

const layout = ({ children }) => {
  return (
    <main className="min-h-screen bg-darkPrimary relative ">
      <section className="flex">
        <Sidebar />
        <div className="w-full mx-auto">{children}</div>
      </section>
    </main>
  );
};

export default layout;
