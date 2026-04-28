import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lucas Salvador — iOS & Full-Stack Developer",
  description:
    "Portfolio of Lucas Salvador, a developer from Portugal specialising in iOS (Swift/SwiftUI), React Native, and full-stack web apps.",
  keywords: ["iOS developer", "SwiftUI", "React Native", "Next.js", "Portugal", "mobile developer"],
  authors: [{ name: "Lucas Salvador" }],
  openGraph: {
    title: "Lucas Salvador — iOS & Full-Stack Developer",
    description: "Building beautiful iOS apps and full-stack web experiences from Portugal.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
