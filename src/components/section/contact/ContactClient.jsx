
import PageHeroCard from "@/components/ui/PageHeroCard";
import ContactFaq from "@/components/section/contact/ContactFaq";
import ContactCard from "./ContactCard";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function ContactClient() {
  

  return (
    <>
    <PageHeroCard
          image="/images/banner/contact.webp"
          badge="Contact us"
          title="Let’s make it Vichitra, start a conversation that actually matters"
          description="Start with a message, leave with direction. This panda helps you think clearer, move smarter, and build with intent. Because the right conversation, at the right time, can turn uncertainty into confident, measurable action."
        />
    <section className="relative  sm: pt-10 pb-24 px-2 sm:px-6 ">
      
        <ContactCard/>

      {/* FAQ BLOCK */}
      <ContactFaq/>
    </section>
     <FloatingWhatsApp />
    </>
    
  );
}
