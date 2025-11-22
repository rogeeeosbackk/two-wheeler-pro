import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "News", path: "/news" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-automotive-dark p-3 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300">
              <Wrench className="h-7 w-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl text-automotive-dark tracking-tight">AutoService</span>
              <span className="text-xs text-muted-foreground font-medium">Professional Care</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-automotive-dark"
                    : "text-gray-600 hover:text-automotive-dark"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button 
              asChild 
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/booking">Request a service</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-automotive-dark hover:bg-muted"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-automotive-dark"
                    : "text-gray-600 hover:text-automotive-dark"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Button asChild className="w-full bg-accent hover:bg-accent/90">
                <Link to="/booking" onClick={() => setIsOpen(false)}>
                  Request a service
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
