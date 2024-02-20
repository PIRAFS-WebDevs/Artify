import { Inter } from "next/font/google";
import "./globals.css";

import Toaster from "@/components/Shared/Toaster/Toaster";
import NextThemeProviders from "@/providers/NextThemeProviders";
import QueryProvider from "@/providers/QueryProvider";
import Providers from "../providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artify",
  description: "Generated by Artify team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <QueryProvider>
        <Providers>
          <body
            className={`${inter.className} dark:bg-dark-500 bg-light-300 scrollbar`}
          >
            <NextThemeProviders>
              {children}
              <Toaster />
            </NextThemeProviders>
          </body>
        </Providers>
      </QueryProvider>
    </html>
  );
}
