import { NavProvider } from "../context/NavContext";
import "./globals.css";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import { ContactProvider } from "@/context/ContactContext";
import ContactPopupWrapper from "@/components/ui/ContactPopupWrapper";
import Script from "next/script";

const wildborn = localFont({
  src: "../../public/fonts/wildborn-Black.woff2",
  display: "swap",
  preload: true,
  variable: "--font-logo",
});

const fredoka = localFont({
  src: [
    {
      path: "../../public/fonts/Fredoka-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Fredoka-Medium.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap", // CRITICAL
  preload: true,   // CRITICAL
  variable: "--font-body",
});

export const metadata = {
  title: "Bevichitra | Creative Digital Agency",
  description: "We help brands grow with design, development and strategy.",

  verification: {
    google: "b79YhXEm8RwMUNLZMWRQBK_0ukq8jzNjVqfxOjkiKlU",
  },

  openGraph: {
    title: "Bevichitra",
    description: "Creative digital agency",
    url: "https://bevichitra.com",
    siteName: "Bevichitra",
    images: [
      {
        url: "https://bevichitra.com/images/URLimages/LogoIcon.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${wildborn.variable} ${fredoka.variable}}`}
      suppressHydrationWarning
    >
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-70NDWGC37C"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-70NDWGC37C');
  `}
        </Script>

        <ThemeProvider attribute="class">
          <NavProvider>
            <ContactProvider>
              <Navbar />
              {children}
              <ContactPopupWrapper />
              <Footer />
            </ContactProvider>
          </NavProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
