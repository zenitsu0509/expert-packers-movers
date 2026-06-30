import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Expert Packers & Movers — India's Trusted Relocation Company",
  description:
    "Safe, fast and affordable packers & movers across India. House shifting, office relocation, car & bike transport, warehousing and international moves with GPS tracking and full insurance.",
  openGraph: {
    title: "Expert Packers & Movers — India's Trusted Relocation Company",
    description: "GPS-tracked, fully insured packers & movers — 15+ years, 5000+ moves, 24×7 support. Get a free quote in minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
