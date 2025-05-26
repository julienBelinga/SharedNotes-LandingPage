import Navbar from "@/app/components/navbar/navbar";
import { ReactNode } from "react";

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
      </body>
    </html>
  );
}
