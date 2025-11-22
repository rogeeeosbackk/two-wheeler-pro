import { Link } from "react-router-dom";
import { Wrench, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-automotive-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-accent p-2 rounded-lg">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">AutoService</div>
                <div className="text-xs text-gray-400">Professional Care</div>
              </div>
            </div>
            <h3 className="font-bold text-lg pt-4">Complete Auto Repair Service</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Established in 1999, we've been providing trusted automotive service for over 25 years. 
              Our commitment to excellence and customer satisfaction has made us the preferred choice 
              for car owners across the region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  News & Blog
                </Link>
              </li>
              <li>
                <Link to="/career" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-accent transition-colors text-sm">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>General Maintenance</li>
              <li>Engine Diagnostics</li>
              <li>Brake & Suspension</li>
              <li>Transmission Service</li>
              <li>Electrical Systems</li>
              <li>Air Conditioning</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                <span>info@autoservice.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-accent" />
                <span>123 Service Road, Mumbai - 400001</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} AutoService Professional Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
