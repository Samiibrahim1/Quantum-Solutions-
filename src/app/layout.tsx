import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { Navbar } from "@/components/ui/navbar";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Quantum Solutions | Premium Digital Systems",
  description:
    "Ultra-premium portfolio for a software agency delivering websites, apps, ERP, POS, AI integrations, and automation.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Quantum Solutions | Premium Digital Systems",
    description:
      "Futuristic portfolio experience for a software agency and freelancer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${display.variable} ${body.variable} bg-bg text-text antialiased`}>
        <Providers>
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}