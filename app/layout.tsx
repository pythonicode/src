import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const font = Nunito_Sans({ subsets: ["latin"], });

export const metadata: Metadata = {
  title: "Stanford Running Club",
  description: "The Stanford Running Club is a student organization that promotes running and fitness at Stanford University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
