"use client"
import ContactFlow from "./ContactFlow";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { useState } from "react";


export default function ContactCard() {
    const [step, setStep] = useState(1);
  return (
    <>
       <Reveal>
                  <SectionHeader
                    align="center"
                    title="Which Helps us to know you better"
                    label={"process"}
                    className="mb-10"
                  />
                  
                </Reveal>

                <Reveal>
                    <ContactFlow step={step} setStep={setStep} />
                </Reveal>
    </>
  )
}
