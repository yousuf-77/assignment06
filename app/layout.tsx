import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header-component/header";
import {Roboto} from 'next/font/google'

export const metadata: Metadata = {
  title: "Ddsgnr",
  description: "Assignment 06",
};
const roboto = Roboto({
  subsets:["latin"],
  weight:['300','400','500','700','900']
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}
      >
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
