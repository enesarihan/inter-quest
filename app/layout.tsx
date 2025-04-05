import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const bai = Bai_Jamjuree({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "InterQuest",
  description: "An AI-powered platform for preparing for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${bai.className} antialiased pattern`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
