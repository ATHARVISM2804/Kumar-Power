import { useState } from "react";
import { ChevronDown, ChevronUp, Facebook, Instagram, Linkedin } from "lucide-react";
import { useSmoothScroll } from "../../hooks/useSmoothScroll";

const Footer = () => {
  const [showGeneratorDropdown, setShowGeneratorDropdown] = useState(false);
  
  // Enable smooth scrolling for all in-page anchor links
  useSmoothScroll();

  return (
    <>
      {/* Call To Action Section */}
      <section className="bg-white border-t border-gray-200">
        <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-8 py-8 md:py-12 px-4 md:px-0">
          <div className="flex-1">
            <h2 className="text-2xl md:text-4xl font-bold text-black mb-2 md:mb-4">Call To Action</h2>
            <p className="text-black text-sm md:text-lg max-w-xl">
              Have questions or need more information? We're here to help! Click the "Enquire Now" button to get in touch with our team. Whether you're interested in learning more about our services, products, or pricing, simply send us your inquiry and we'll respond promptly. Let us help you find the right solution for your needs!
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <a
              href="#contact"
              className="bg-black text-white rounded-lg px-8 py-3 font-semibold text-base text-center shadow hover:bg-gray-900 transition w-full md:min-w-[240px]"
            >
              Enquire Now
            </a>
            <a
              href="/downloads/kumar-power-company-profile.pdf"
              download
              className="border border-black text-black rounded-lg px-8 py-3 font-semibold text-base text-center hover:bg-black hover:text-white transition w-full md:min-w-[240px]"
            >
              Download Our Company Profile
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer id="contact" className="bg-black text-white pt-0">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 pb-8 md:pb-10 pt-8 md:pt-12">
            {/* About */}
            <div>
              <h4 className="font-bold text-white text-lg mb-3">Kumar Power</h4>
              <p className="text-sm text-white/80 mb-2">
                Kumar Generator House is certified ISO 9001:2015 Company &amp; have emerged as the leading Power Solution Providers. Being an authorized Channel Partner of Kirloskar Oil Engines Limited, Kumar Generator House is committed to provide quality power solutions.
              </p>
            </div>
            {/* Our Products */}
            <div>
              <h4 className="font-bold text-white text-lg mb-3">Our Products</h4>
              <ul className="space-y-1 text-sm text-white/90">
                <li>
                  <button 
                    onClick={() => setShowGeneratorDropdown(!showGeneratorDropdown)}
                    className="flex items-center w-full hover:text-blue-300"
                  >
                    <span>Kirloskar Generators</span>
                    {showGeneratorDropdown ? 
                      <ChevronUp className="ml-1 h-4 w-4" /> : 
                      <ChevronDown className="ml-1 h-4 w-4" />
                    }
                  </button>
                  
                  {showGeneratorDropdown && (
                    <ul className="ml-4 mt-1 space-y-1 border-l border-white/20 pl-3">
                      <li><a href="#gas" className="text-white/80 hover:text-white">Kirloskar Gas Generators</a></li>
                      <li><a href="#portable" className="text-white/80 hover:text-white">Kirloskar Portable Generators</a></li>
                      <li><a href="#diesel" className="text-white/80 hover:text-white">Kirloskar Diesel Generators</a></li>
                    </ul>
                  )}
                </li>
                <li><a href="#electrical-panels" className="hover:text-blue-300">Electrical Panels</a></li>
                <li><a href="#servo-stabilizers" className="hover:text-blue-300">Servo Stabilizers</a></li>
               
                <li><a href="#transformers" className="hover:text-blue-300">Transformers</a></li>
                
              </ul>
            </div>
            {/* Useful Links */}
            <div>
              <h4 className="font-bold text-white text-lg mb-3">Useful Links</h4>
              <ul className="space-y-1 text-sm text-white/90">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#clients">Our Clients</a></li>
                <li><a href="#installation">Installation</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#certifications">Certifications</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#blogs">Blog</a></li>
              </ul>
            </div>
            {/* Contact Us */}
            <div>
              <h4 className="font-bold text-white text-lg mb-3">Contact Us</h4>
              <ul className="space-y-1 text-sm text-white/90">
                <li>904, Westend Mall, Janakpuri,<br />New Delhi 110058</li>
                <li>P : <a href="tel:+919773851767" className="hover:text-blue-300">+91 97738 51767</a>,<br />
                    <a href="tel:01145086389" className="hover:text-blue-300">011-45086389</a></li>
                <li>E : <a href="mailto:kumargeneratorhouse@gmail.com" className="hover:text-blue-300">kumargeneratorhouse@gmail.com</a></li>
                <li className="flex gap-4 mt-4">
                  <a href="https://facebook.com/kumarpower" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500 transition-colors">
                    <Facebook size={20} strokeWidth={1.5} />
                  </a>
                  <a href="https://instagram.com/kumarpower" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500 transition-colors">
                    <Instagram size={20} strokeWidth={1.5} />
                  </a>
                  <a href="https://linkedin.com/company/kumarpower" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
                    <Linkedin size={20} strokeWidth={1.5} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 py-6 text-xs text-white/60 flex flex-col md:flex-row items-center justify-between">
            <p>© {new Date().getFullYear()} Kumar Power. All rights reserved.</p>
            <p>Made with reliable power and great design.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;