"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";
import Dummy01_, { Dummy02_ } from "./components/Dummy01_";
import Hero_ from "./components/Hero_";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "LwaziNF's Portfolio",
  description: "Welcome to Lwazi Ndlovu's Web Design portfolio..",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* @ts-ignore */}
      <title>{metadata?.title}</title>
      <body className={inter.className}>
        <RecoilRoot>
          <Hero_/>
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}
