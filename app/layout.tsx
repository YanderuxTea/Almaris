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
    <html lang="en" className={clsx("scroll-smooth", marcellus.className)}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
