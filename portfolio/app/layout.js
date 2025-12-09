import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

// Rename constants to avoid conflicts
const outfitFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovoFont = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio-Dimuthu",
  description:
    "Personal portfolio built with Next.js showcasing my projects, skills, and developer journey. Features clean UI, responsive design, and modern web best practices. Highlights my work, experience, and commitment to building high-quality software.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfitFont.variable} ${ovoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
