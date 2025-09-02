import { Menu, ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  // Add state for tracking expanded product categories
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  // Add state for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to close mobile menu (useful when clicking on a link)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-7xl px-6 mx-auto flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755013519/logo_vptmta.png"
            alt="Kumar Power Logo"
            className="h-12 w-auto"
          />
        </Link>
        <ul className="hidden md:flex items-center gap-6 text-base font-medium">
          <li>
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          </li>
          
          {/* About Us dropdown - updated: no link, only dropdown */}
          <li className="relative group">
            <span className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer py-4">
              About Us <ChevronDown className="w-4 h-4" />
            </span>
            <div className="absolute left-0 top-[90%] pt-3 hidden group-hover:block hover:block">
              <div className="bg-white shadow-lg rounded-md min-w-[200px] z-10 overflow-hidden">
                <Link to="/about/OurProfile" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Our Story</Link>
                <Link to="/about/Testimonials" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Testimonials</Link>
                {/* <Link to="/about/OurClients" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Our Clients</Link> */}
                <Link to="/about/PhotoGallery" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Photo gallery</Link>
                <Link to="/about/Certifications" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Certifications</Link>
              </div>
            </div>
          </li>
          
          {/* Services dropdown */}
          <li className="relative group">
             <span className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer py-4">
              Services <ChevronDown className="w-4 h-4" />
            </span>
            <div className="absolute left-0 top-[90%] pt-3 hidden group-hover:block hover:block">
              <div className="bg-white shadow-lg rounded-md min-w-[220px] z-10 overflow-hidden">
                <Link to="/services/annual-maintenance" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Annual Maintenance</Link>
                {/* <Link to="/services/installation" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Installation & Commissioning</Link> */}
                <Link to="/services/repair-overhaul" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Repair & Overhaul</Link>
                <Link to="/services/emergency-support" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">24/7 Emergency Support</Link>
                
              </div>
            </div>
          </li>
          
          {/* Products dropdown - updated to match the hierarchical structure in the image */}
          <li className="relative group">
            <Link to="/products" className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer py-4">
              Products 
            </Link>
            
          </li>
          
          {/* Our Clients  */}
          <li className="relative group">
            <Link to="/about/OurClients" className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer py-4">
              Our Clients 
            </Link>
           
          </li>
          
          {/* Installation and Contact links */}
          <li>
            <Link to="/installation" className="hover:text-primary transition-colors py-4">Installation</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-primary transition-colors py-4">Contact</Link>
          </li>
        </ul>
        
        {/* Profile link - keeping existing code */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#cta" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014410/Screenshot_2025-06-02_at_12.44.43_PM_lxdedo.png"
              alt="Kumar Power Profile Logo"
              className="h-12 w-auto"
            />
          </a>
        </div>
        
        {/* Mobile menu button - updated with toggle functionality */}
        <button 
          className="md:hidden p-2" 
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>
      
      {/* Mobile Menu - updated to show/hide based on state */}
      <div className={`md:hidden bg-white border-t shadow-lg ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-2">
          <Link to="/" className="block py-3 border-b" onClick={closeMobileMenu}>Home</Link>
          
          {/* About dropdown for mobile */}
          <div className="py-3 border-b">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                <Link to="/about/OurProfile" className="block py-2" onClick={closeMobileMenu}>Our Story</Link>
                <Link to="/about/Testimonials" className="block py-2" onClick={closeMobileMenu}>Testimonials</Link>
                {/* <Link to="/about/OurClients" className="block py-2" onClick={closeMobileMenu}>Our Clients</Link> */}
                <Link to="/about/PhotoGallery" className="block py-2" onClick={closeMobileMenu}>Photo gallery</Link>
                <Link to="/about/Certifications" className="block py-2" onClick={closeMobileMenu}>Certifications</Link>
              </div>
            </details>
          </div>
          
          {/* Services dropdown for mobile */}
          <div className="py-3 border-b">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                <Link to="/services/annual-maintenance" className="block py-2" onClick={closeMobileMenu}>Annual Maintenance</Link>
                {/* <Link to="/services/installation" className="block py-2" onClick={closeMobileMenu}>Installation & Commissioning</Link> */}
                <Link to="/services/repair-overhaul" className="block py-2" onClick={closeMobileMenu}>Repair & Overhaul</Link>
                <Link to="/services/emergency-support" className="block py-2" onClick={closeMobileMenu}>24/7 Emergency Support</Link>
                <Link to="/services/rental" className="block py-2" onClick={closeMobileMenu}>Generator Rental</Link>
              </div>
            </details>
          </div>
          
          {/* Updated Products dropdown for mobile */}
          <div className="py-3 border-b">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span>Products</span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none py-2">
                    <span>Kirloskar Generators</span>
                    <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="ml-4 space-y-2 mt-1">
                    <Link to="/products/kirloskar/gas-generators" className="block py-2" onClick={closeMobileMenu}>Kirloskar Gas Generators</Link>
                    <Link to="/products/kirloskar/portable-generators" className="block py-2" onClick={closeMobileMenu}>Kirloskar Portable Generators</Link>
                    <Link to="/products/kirloskar/diesel-generators" className="block py-2" onClick={closeMobileMenu}>Kirloskar Diesel Generators</Link>
                  </div>
                </details>
                <Link to="/products/electrical-panels" className="block py-2" onClick={closeMobileMenu}>Electrical Panels</Link>
                <Link to="/products/servo-stabilizers" className="block py-2" onClick={closeMobileMenu}>Servo Stabilizers</Link>
                <Link to="/products/inverters" className="block py-2" onClick={closeMobileMenu}>Inverters (UPS Systems)</Link>
                <Link to="/products/transformers" className="block py-2" onClick={closeMobileMenu}>Transformers</Link>
                <Link to="/products/vfds" className="block py-2" onClick={closeMobileMenu}>VFDs</Link>
              </div>
            </details>
          </div>
          
          {/* Our Clients link */}
          <div className="py-3 border-b">
            <Link to="/about/OurClients" className="block" onClick={closeMobileMenu}>Our Clients</Link>
          </div>

          {/* Installation link */}
          <Link to="/installation" className="block py-3 border-b" onClick={closeMobileMenu}>Installation</Link>
          
          {/* Contact link */}
          <Link to="/contact" className="block py-3 border-b" onClick={closeMobileMenu}>Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;