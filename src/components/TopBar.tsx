import { Phone, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-automotive-dark text-white py-2 border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span>+91 98765 43210</span>
            </a>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock className="h-4 w-4" />
              <span>Mon-Sat: 8AM - 8PM</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-accent transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
