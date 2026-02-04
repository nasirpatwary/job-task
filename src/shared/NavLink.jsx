"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({href, children}) => {
 const pathname = usePathname();
  const isActive = (href) => {
    if (!href) return false;
    // Exact match or nested path match
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };
  return (
    <Link href={href} className={isActive(href) ? "text-primary" : ""}>{children}</Link>
  )
}

export default NavLink