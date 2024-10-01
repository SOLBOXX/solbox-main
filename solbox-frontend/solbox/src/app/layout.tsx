import type { Metadata } from "next";
import localFont from "next/font/local";
import { SolanaWalletProvider } from "../../context/WalletProvider";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Solbox",
  description: "Where Music meets Freedom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[url('/bg.png')] bg-cover bg-no-repeat h-screen`}
      >
        <SolanaWalletProvider>
        <main className="flex-grow max-w-full p-0 m-0">{children}</main>
        </SolanaWalletProvider> 
      </body>
    </html>
  );
}
