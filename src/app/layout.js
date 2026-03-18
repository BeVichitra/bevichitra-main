import { NavProvider } from "@/context/NavContext";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body>
        
        <NavProvider>
          <Navbar/>
        {children}
        </NavProvider>
        <Footer/>
        
        
      </body>
    </html>
  );
}

