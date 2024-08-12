import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable)} >
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
