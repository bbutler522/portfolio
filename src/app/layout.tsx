import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Layout } from "@/components/Layout";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brennanbutler.com"),
  title: {
    default: "Brennan Butler — Software engineer in Brooklyn",
    template: "%s — Brennan Butler",
  },
  description:
    "Senior software engineer in Brooklyn, open to opportunities. Product surfaces at Squarespace, Launch by NTT Data, PBS NewsHour, and side projects.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brennanbutler.com",
    siteName: "Brennan Butler",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${dmSans.variable} min-h-full flex flex-col antialiased`}
      >
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
