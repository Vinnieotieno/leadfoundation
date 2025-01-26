import { Inter, Azeret_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const interSans = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
});

const azeretMono = Azeret_Mono({
  subsets: ["latin"],
  variable: "--font-azeret-mono",
});

export const metadata = {
  Image: "/logo.png",
  title: "Lead Africa Foundation",
  description:
    "We are committed to positive change in Africa through community programs, sustainable agriculture, education, and healthcare initiatives.",
  keywords: "NGO, Africa, community development, healthcare, education, sustainable agriculture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} ${azeretMono.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
