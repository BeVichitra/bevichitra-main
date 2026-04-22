"use client";

import ContactPopup from "@/components/ui/ContactPopup";
import { useContact } from "@/context/ContactContext";

export default function ContactPopupWrapper() {
  const { open, setOpen } = useContact();

  return (
    <ContactPopup open={open} setOpen={setOpen} />
  );
}