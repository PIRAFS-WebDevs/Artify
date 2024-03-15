import Navbar from "@/components/Shared/HomeNavbar/Navbar";
import Link from "next/link";

const CheckoutLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-between w-full h-screen">
        {children}
        <p className="py-10 text-sm text-center text-light-500">
          ©2025{" "}
          <Link href="/" className="hover:text-primary">
            Artify
          </Link>
          . Copyright © REDQ. All rights reserved worldwide. REDQ
        </p>
      </div>
    </>
  );
};

export default CheckoutLayout;
