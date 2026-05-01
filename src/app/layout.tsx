import type { Metadata } from "next";
import { Syne, DM_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Lucas Salvador — iOS & Full-Stack Developer",
  description:
    "Portfolio of Lucas Salvador, a developer from Lisbon, Portugal specialising in iOS (Swift/SwiftUI), full-stack web (Next.js, Supabase), and building real products people love.",
  keywords: ["iOS developer", "SwiftUI", "Swift", "React Native", "Next.js", "Portugal", "Lisbon", "mobile developer", "full-stack"],
  authors: [{ name: "Lucas Salvador" }],
  openGraph: {
    title: "Lucas Salvador — iOS & Full-Stack Developer",
    description: "Building beautiful iOS apps and full-stack web experiences from Lisbon, Portugal.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${dmMono.variable}`}>
        <div id="cursor" />
        <div id="cursor-ring" />
        <div className="ambient-orb orb1" />
        <div className="ambient-orb orb2" />
        <div className="ambient-orb orb3" />
        {children}
      </body>
    </html>
  );
}
