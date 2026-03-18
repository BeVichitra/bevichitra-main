"use client"
import ProjectCards from "../projects/ProjectCards";
import SectionHeader from "@/components/ui/SectionHeader";

export default function ShowProjectData() {



  return (
    <section className="py-16">
       <SectionHeader label={"Featured Projects"} title={ <>
      Refined projects with <br /> purpose
    </>}/>
      <div>
      <ProjectCards/>
      </div>
      
    </section>
  );
}