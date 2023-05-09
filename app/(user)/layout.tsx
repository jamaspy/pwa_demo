import { Footer, Navbar } from "@/components";
import { Space_Grotesk } from "@next/font/google";
import classNames from "classnames";
import React from "react";
import "../globals.css";
const inter = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>PWA Test App</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
      </head>
      <body
        className={classNames(
          inter.className,
          "min-h-screen flex flex-col justify-between w-full bg-straw "
        )}
      >
        <Navbar />
        <div className="flex-1 2xl:container 2xl:mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
