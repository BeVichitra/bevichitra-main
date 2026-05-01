import { NavProvider } from "../context/NavContext";
import "./globals.css";
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
    },
    {
      path: "../../public/fonts/Fredoka-Medium.woff2",
      weight: "700",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--font-body",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${wildborn.variable} ${fredoka.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* Analytics */}
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

        {/* GLOBAL PROVIDERS */}
        <ThemeProvider attribute="class">
          <NavProvider>
            <ContactProvider>
              {children}
              <ContactPopupWrapper />
            </ContactProvider>
          </NavProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}