"use client"
import NavLink from "@/shared/NavLink";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@heroui/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
      setIsMenuOpen(false);
    }, [pathname]);

  const navLinks = <>
    <NavLink href={"/items"}>Items</NavLink>
    <NavLink href={"/add-items"}>Add Items</NavLink>
    </>
  return (
    <Navbar 
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen} maxWidth="xl" position="sticky">
       
      <NavbarContent justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
           <nav className="space-x-6">
            {navLinks}
          </nav>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="">
          <Link href="/login">Login</Link>
        </NavbarItem>
      </NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
      <NavbarMenu>
          <NavbarMenuItem>
            <nav className="flex flex-col space-y-4">
              {navLinks}
            </nav>
          </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}

