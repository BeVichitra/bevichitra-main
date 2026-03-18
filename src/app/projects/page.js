"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import ProjectData from "@/components/section/projects/ProjectData";

export default function ProjectsPage() {

  const [active, setActive] = useState("photos");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <ProjectData/>
    </>
  );
}