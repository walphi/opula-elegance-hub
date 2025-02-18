
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://dhbholding.com/wp-content/uploads/2024/10/OPULA_Logo_Transparent.svg" 
              alt="Opula Logo" 
              className="h-8 md:h-10"
            />
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#project">About Project</NavLink>
            <NavLink href="#gallery">Gallery</NavLink>
            <NavLink href="#location">Location</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
          <Sheet>
            <SheetTrigger className="md:hidden p-2">
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <MobileNavLink href="#project">About Project</MobileNavLink>
                <MobileNavLink href="#gallery">Gallery</MobileNavLink>
                <MobileNavLink href="#location">Location</MobileNavLink>
                <MobileNavLink href="#contact">Contact</MobileNavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-primary/90 hover:text-primary transition-colors text-sm font-medium"
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="text-lg font-medium text-primary hover:text-primary/80 transition-colors"
  >
    {children}
  </a>
);
