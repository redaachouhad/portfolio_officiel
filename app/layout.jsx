import NavBar from "@ext/components/NavBar/NavBar";

import { Inter } from "next/font/google";
import myImg from "./../public/images/my_image.jpeg";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Portfolio Reda Achouhad</title>
        <link
          rel="icon"
          href={myImg.src}
          type="image/jpeg"
          className="rounded-full"
        />
      </head>
      <body className="w-full">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
