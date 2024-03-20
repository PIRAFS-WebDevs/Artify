import Navbar from "@/components/Shared/HomeNavbar/Navbar";
import Link from "next/link";

const CheckoutLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20">
        {children}
        <p className="py-10 text-sm text-center dark:text-light-500 text-dark-200">
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
