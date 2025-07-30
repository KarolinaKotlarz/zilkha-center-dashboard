import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans"; // import font
import "./globals.css";

export const metadata: Metadata = {
  title: "Zilkha Center Dashboard",
  description: "View energy consumption data in the Zilkha Center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // add font to className, also add antialiased and dark mode
    <html lang="en" className={`${GeistSans.className} antialiased dark:bg-gray-950`}>
      <body>{children}</body>
    </html>
  );
}