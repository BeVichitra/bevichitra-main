import CardHero from "@/components/card/CardHero";
import Footer from "@/components/card/Footer";
import SocialLinks from "@/components/card/SocialLinks";

export default function Page() {
  return (
    <div className="
      min-h-screen
      bg-[radial-gradient(circle_at_top,_#fef9c3,_#ecfeff_60%,_#eef2ff)]
      text-gray-800
    ">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <CardHero />
        <SocialLinks/>
        <Footer/>
      </div>
    </div>
  );
}