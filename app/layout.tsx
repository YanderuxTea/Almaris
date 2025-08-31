import type { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { marcellus } from "@/public/font";

export const metadata: Metadata = {
  title: "Almaris главная",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={clsx("scroll-smooth w-full h-full", marcellus.className)}
    >
      <body className="antialiased w-full h-full">{children}</body>
    </html>
  );
}
