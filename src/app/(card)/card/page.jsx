import BackgroundShapes from "@/components/card/BackgroundShapes";
import CardHero from "@/components/card/CardHero";
import SocialLinks from "@/components/card/SocialLinks";
import Thankyou from "@/components/card/Thankyou";
import WhatsappCTA from "@/components/card/WhatsappCTA";

export default function CardPage() {
  return (
    <main className="relative min-h-screen bg-[#0b1d2a] text-white flex items-center justify-center px-6 py-10">
      <BackgroundShapes />

      <div className="w-full max-w-xl">
        <CardHero />

        <p className="text-center mt-10 text-cyan-400 tracking-widest text-sm">
          ✦ CONNECT WITH ME ✦
        </p>

        <SocialLinks />
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 border-t border-dashed border-yellow-400/40"></div>

          <span className="text-red-400 text-lg">★</span>

          <div className="flex-1 border-t border-dashed border-yellow-400/40"></div>
        </div>
        <WhatsappCTA />
        <Thankyou />
        <p className="text-center text-xs text-gray-500 mt-4">
        © 2026 be vichitra • All Rights Reserved
      </p>
      </div>
      
    </main>
  );
}
