import Navbar from "@/components/Shared/Navbar/Navbar";

const layout = ({ children }) => {
  return (
    <main className="min-h-screen bg-darkPrimary relative ">
      <Navbar />
      <section className="flex">
        <div className="w-full mx-auto">{children}</div>
      </section>
    </main>
  );
};

export default layout;
