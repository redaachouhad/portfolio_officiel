import NavBar from "@ext/components/NavBar/NavBar";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
