export const metadata = {
  title: "EEXI ? Energy Efficiency for Existing Ships",
  description:
    "Professional presentation on IMO's Energy Efficiency Existing Ship Index (EEXI): scope, calculation, compliance strategies, and retrofit options.",
};

import "./globals.css";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#0b1220" />
      </head>
      <body>{children}</body>
    </html>
  );
}
