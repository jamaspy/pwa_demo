import { Footer, Navbar } from "@/components";
import { DM_Sans } from "@next/font/google";
import classNames from "classnames";
import "../globals.css";
const inter = DM_Sans({
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
      <head />
      <body
        className={classNames(
          inter.className,
          "min-h-screen flex flex-col justify-between w-full bg-[#FEF9EF] "
        )}
      >
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
