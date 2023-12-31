import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import getCurrentUser from "./actions/getCurrentUser";
import Script from "next/script";
import ToastProvider from "@/components/ToastProvider";
import Providers from "@/utils/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar currentUser={currentUser} />
          <ToastProvider />
          {children}
          <Script src="//dapi.kakao.com/v2/maps/sdk.js?appkey=61aeaac7811468bd5940a2eef2499f9b&libraries=services,clusterer&autoload=false" />
        </Providers>
      </body>
    </html>
  );
}
