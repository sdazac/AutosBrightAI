import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white border-t-4 border-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black uppercase">
              Auto's <span className="text-primary">Bright</span>
            </h3>
            <p className="text-gray-300 leading-relaxed font-medium">
              Professional mobile auto detailing services in New Jersey. 
              We bring premium car care directly to your location.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-white hover:text-primary hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-primary uppercase">Our Services</h4>
            <ul className="space-y-2 text-gray-300 font-medium">
              <li>Full Detailing</li>
              <li>Ceramic Coating</li>
              <li>Paint Correction</li>
              <li>Headlight Restoration</li>
              <li>Paint Protection Film</li>
              <li>Engine Detailing</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-primary uppercase">Quick Links</h4>
            <ul className="space-y-2 text-gray-300 font-medium">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Get Quote</a></li>
              <li><a href="#certifications" className="hover:text-primary transition-colors">Certifications</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-primary uppercase">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 font-medium">New Jersey, USA</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 font-medium">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-gray-300 font-medium">info@autosbright.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm font-medium">
              © 2024 Auto's Bright. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 font-medium">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;