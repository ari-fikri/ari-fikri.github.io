import { Suspense } from "react";
import "./globals.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Analytics from "../src/components/Analytics";

export const metadata = {
  title: 'Ari Fikri | Digital Transformation & Strategy Leader',
  description: 'Personal portfolio and blog of Ari Fikri, showcasing experience in digital transformation, program / project management, strategy, and technology leadership.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
