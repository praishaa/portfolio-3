import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Isha Portfolio | Frontend & Full-Stack Developer",
  description:
    "Portfolio of Isha, learning and building full-stack web applications with HTML, CSS, JavaScript, and React. Contributed to projects including a skill-matching platform and the official website of ACMW Manipal, a women-led tech club. Also involved in DAQ engineering with Team Manipal Racing.",
  keywords: [
    "Frontend Developer",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer India",
    "UI/UX Design",
    "JavaScript",
    "TypeScript",
    "ACMW Manipal",
    "DAQ Engineer",
    "Isha",
  ],
  authors: [{ name: "Isha" }],
  creator: "Isha",
  openGraph: {
    title: "Isha Portfolio | Frontend & Full-Stack Developer",
    description:
      "Building responsive, interactive web experiences with React, Next.js, and modern web technologies. Contributed to ACMW Manipal website and skill-matching platform projects.",
    url: "https://isha.dev",
    siteName: "Isha Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Isha Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Isha Portfolio | Frontend & Full-Stack Developer",
    description:
      "Building responsive, interactive web experiences with React, Next.js, and modern web technologies.",
    creator: "@isha",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
