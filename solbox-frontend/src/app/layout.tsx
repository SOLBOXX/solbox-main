import type { Metadata } from "next";
import 'boxicons/css/boxicons.min.css';
import { SolanaWalletProvider } from "../../context/WalletProvider";
import ClientLayout from "./ClientLayout";
import "./globals.css";

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
        className={` antialiased bg-[url('/bg.png')] bg-cover bg-no-repeat min-h-screen`}
      >
        <SolanaWalletProvider>
        <main className="flex-grow max-w-full p-0 m-0"><ClientLayout>{children}</ClientLayout></main>
        </SolanaWalletProvider> 
      </body>
    </html>
  );
}
