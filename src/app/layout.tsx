import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Spotlight from "@/components/Spotlight";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tze Chong · Software Developer",
  description:
    "Tze Chong is a full-stack developer with a builder's bias. Self-taught by habit, building whatever is interesting.",
  metadataBase: new URL("https://tzechong.dev"),
  openGraph: {
    title: "Tze Chong · Software Developer",
    description:
      "Full-stack developer with a builder's bias. Self-taught by habit, building whatever is interesting.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <Spotlight />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
