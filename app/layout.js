import { Outfit } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weights: ["400", "500", "600", "700"],
}); 


export const metadata = {
  title: "Portfolio - Man of all Stacks",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    // adding smooth scrolling in the html tag
    <html lang="en" className="scroll-smooth ">
      
      {/* adding line height with "leading-8" */}
      <body className={`${outfit.className} antialiased leading-8 overflow-x-hidden dark:bg-[#11001f] dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
