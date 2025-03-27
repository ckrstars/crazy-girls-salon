import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="font-playfair text-2xl mb-6">Luxe Spa</h3>
            <p className="font-lora text-gray-300 mb-6">
              Experience luxury wellness and rejuvenation at its finest. Your journey to relaxation begins here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4 font-lora">
              <li>
                <a href="#services" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#book-now" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Book Now
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-playfair text-xl mb-6">Contact Us</h4>
            <ul className="space-y-4 font-lora">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 text-gold mr-3" />
                <span className="text-gray-300">123 Relaxation Ave, Wellness City</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-3" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gold mr-3" />
                <a href="mailto:info@luxespa.com" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  info@luxespa.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-playfair text-xl mb-6">Opening Hours</h4>
            <ul className="space-y-4 font-lora">
              <li className="flex justify-between">
                <span className="text-gray-300">Monday - Friday</span>
                <span className="text-gold">9:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Saturday</span>
                <span className="text-gold">9:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Sunday</span>
                <span className="text-gold">10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-300 font-lora text-sm">
              © {new Date().getFullYear()} Luxe Spa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;