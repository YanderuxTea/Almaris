import type { Metadata } from "next";
import "./globals.css";
import { marcellus } from "@/public/Fonts";

export const metadata: Metadata = {
  title: "Almaris главная",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marcellus.className} antialiased`}>{children}</body>
    </html>
  );
}
