import Navbar from "@/app/components/navbar/navbar";
import { ReactNode } from "react";
import "./globals.scss";
import Footer from "./components/footer/footer";

export const metadata = {
  title: "Shared Notes",
  description: "Landing page de Shared Notes",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
