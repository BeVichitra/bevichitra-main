"use client"
import Hero from "../components/section/home/hero";
import Navbar from "../components/layout/Navbar";
import ShowProjectData from "../components/section/home/projects/ShowProjectData";
import Services from "../components/section/home/services/Services";
import VideoBanner from "../components/section/home/VideoBanner";
import CollaborativeApproach from "../components/section/home/CollaborativeApproach";
import FAQ from "../components/section/home/FAQ";
import Footer from "../components/layout/Footer";
import Testimonial from "@/components/section/home/Testimonial";
import BookCallCard from "@/components/ui/BookCallCard";


export default function Home() {
  

  return (
    <>
    
    <Hero/>
    <VideoBanner/>
    <Services/>
    <ShowProjectData/>
    <CollaborativeApproach/>
    <Testimonial/>
    <FAQ/>
    <BookCallCard/>
    
    </>
  );
}
