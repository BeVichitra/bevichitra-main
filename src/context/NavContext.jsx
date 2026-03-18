"use client";

import { createContext, useState, useContext } from "react";

const NavContext = createContext();

export function NavProvider({ children }) {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavContext.Provider value={{ menuOpen, setMenuOpen }}>
      {children}
    </NavContext.Provider>
  );
}

export function useMenu() {
  return useContext(NavContext);
}