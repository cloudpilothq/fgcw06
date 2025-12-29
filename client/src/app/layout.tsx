import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lora, Inter } from 'next/font/google';

const lora = Lora({ subsets: ['latin'], variable: '--font-serif' });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: "FGCW 06 | Pro Unitate",
  description: "The Official Digital Home for FGCW Class of 2006",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen relative selection:bg-green-100 selection:text-green-900 ${lora.variable} ${inter.variable}">
        {/* Background Mesh Gradient (Alma Style) */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-green-50 blur-[120px] opacity-60" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] rounded-full bg-green-100 blur-[100px] opacity-40" />
        </div>
        
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />  
      </body>
    </html>
  );
}