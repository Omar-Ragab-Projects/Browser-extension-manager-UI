import type { Metadata } from "next";
import {Noto_Sans} from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Browser extension manager UI",
  description: "Browser extension manager UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
