import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "@/shared/styles/globals.css";
import { siteMetadata } from "@/shared/config/metadata.config";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className}`}>{children}</body>
    </html>
  );
}
