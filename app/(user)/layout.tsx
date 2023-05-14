import { Footer, Navbar } from "@/components";
import { Space_Grotesk } from "@next/font/google";
import classNames from "classnames";
import React from "react";
import "../globals.css";

const inter = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <meta name="application-name" content="PWA App" />
//         <meta name="apple-mobile-web-app-capable" content="yes" />
//         <meta name="apple-mobile-web-app-status-bar-style" content="default" />
//         <meta name="apple-mobile-web-app-title" content="PWA App" />
//         <meta name="description" content="Best PWA App in the world" />
//         <meta name="format-detection" content="telephone=no" />
//         <meta name="mobile-web-app-capable" content="yes" />
//         <meta name="msapplication-config" content="/icons/browserconfig.xml" />
//         <meta name="msapplication-TileColor" content="#2B5797" />
//         <meta name="msapplication-tap-highlight" content="no" />
//         <meta name="theme-color" content="#000000" />

//         <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
//         <link
//           rel="apple-touch-icon"
//           sizes="152x152"
//           href="/icons/touch-icon-ipad.png"
//         />
//         <link
//           rel="apple-touch-icon"
//           sizes="180x180"
//           href="/icons/touch-icon-iphone-retina.png"
//         />
//         <link
//           rel="apple-touch-icon"
//           sizes="167x167"
//           href="/icons/touch-icon-ipad-retina.png"
//         />

//         <link
//           rel="icon"
//           type="image/png"
//           sizes="32x32"
//           href="/icons/favicon-32x32.png"
//         />
//         <link
//           rel="icon"
//           type="image/png"
//           sizes="16x16"
//           href="/icons/favicon-16x16.png"
//         />
//         <link rel="manifest" href="/manifest.json" />
//         <link
//           rel="mask-icon"
//           href="/icons/safari-pinned-tab.svg"
//           color="#5bbad5"
//         />
//         <link rel="shortcut icon" href="/favicon.ico" />

//         <meta name="twitter:card" content="summary" />
//         <meta name="twitter:url" content="https://yourdomain.com" />
//         <meta name="twitter:title" content="PWA App" />
//         <meta name="twitter:description" content="Best PWA App in the world" />
//         <meta
//           name="twitter:image"
//           content="https://yourdomain.com/icons/android-chrome-192x192.png"
//         />
//         <meta name="twitter:creator" content="@DavidWShadow" />
//         <meta property="og:type" content="website" />
//         <meta property="og:title" content="PWA App" />
//         <meta property="og:description" content="Best PWA App in the world" />
//         <meta property="og:site_name" content="PWA App" />
//         <meta property="og:url" content="https://yourdomain.com" />
//         <meta
//           property="og:image"
//           content="https://yourdomain.com/icons/apple-touch-icon.png"
//         />
//       </head>
//       <body
//         className={classNames(
//           inter.className,
//           "min-h-screen flex flex-col justify-between w-full bg-straw "
//         )}
//       >
//         <Navbar />
//         <div className="flex-1 2xl:container 2xl:mx-auto">
//           <RegisterPWA />
//           {children}
//         </div>
//         <Footer />
//       </body>
//     </html>
//   );
// }
import type { Metadata } from "next";

const APP_NAME = "PWA App";
const APP_DEFAULT_TITLE = "My Awesome PWA App";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Best PWA app in the world!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  themeColor: "#FFFFFF",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body
        className={classNames(
          inter.className,
          "min-h-screen flex flex-col w-full bg-straw"
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
