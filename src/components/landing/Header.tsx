import { Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  // Add state for tracking expanded product categories
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

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
          
          {/* About Us dropdown - keeping existing code */}
          <li className="relative group">
            <Link to="/about/About" className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer py-4">
              About Us <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="absolute left-0 top-[90%] pt-3 hidden group-hover:block hover:block">
              <div className="bg-white shadow-lg rounded-md min-w-[200px] z-10 overflow-hidden">
                <Link to="/about/OurProfile" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Our Profile</Link>
                <Link to="/about/Testimonials" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Testimonials</Link>
                <Link to="/about/OurClients" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Our Clients</Link>
                <Link to="/about/PhotoGallery" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Photo gallery</Link>
                <Link to="/about/Certifications" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Certifications</Link>
              </div>
            </div>
          </li>
          
          {/* Services dropdown */}
          <li className="relative group">
            <Link to="/services" className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer py-4">
              Services <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="absolute left-0 top-[90%] pt-3 hidden group-hover:block hover:block">
              <div className="bg-white shadow-lg rounded-md min-w-[220px] z-10 overflow-hidden">
                <Link to="/services/annual-maintenance" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Annual Maintenance</Link>
                <Link to="/services/installation" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Installation & Commissioning</Link>
                <Link to="/services/repair-overhaul" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Repair & Overhaul</Link>
                <Link to="/services/emergency-support" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">24/7 Emergency Support</Link>
                <Link to="/services/rental" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Generator Rental</Link>
              </div>
            </div>
          </li>
          
          {/* Products dropdown - updated to match the hierarchical structure in the image */}
          <li className="relative group">
            <Link to="/products" className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer py-4">
              Products <ChevronDown className="w-4 h-4" />
            </Link>
            <div className="absolute left-0 top-[90%] pt-3 hidden group-hover:block hover:block">
              <div className="bg-white shadow-lg rounded-md min-w-[240px] z-10 overflow-hidden">
                {/* Kirloskar Generators with sub-menu */}
                <div 
                  className="relative"
                  onMouseEnter={() => setExpandedCategory('kirloskar')}
                  onMouseLeave={() => setExpandedCategory(null)}
                >
                  <a className="flex justify-between items-center px-4 py-3 hover:bg-gray-100 cursor-pointer">
                    Kirloskar Generators
                    <ChevronDown className="w-4 h-4" />
                  </a>
                  {expandedCategory === 'kirloskar' && (
                    <div className="pl-4 bg-white">
                      <Link to="/products/kirloskar/gas-generators" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Kirloskar Gas Generators</Link>
                      <Link to="/products/kirloskar/portable-generators" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Kirloskar Portable Generators</Link>
                      <Link to="/products/kirloskar/diesel-generators" className="block px-4 py-2 hover:bg-gray-100 cursor-pointer">Kirloskar Diesel Generators</Link>
                    </div>
                  )}
                </div>
                <Link to="/products/electrical-panels" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Electrical Panels</Link>
                <Link to="/products/servo-stabilizers" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Servo Stabilizers</Link>
                <Link to="/products/inverters" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Inverters (UPS Systems)</Link>
                <Link to="/products/transformers" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Transformers</Link>
                <Link to="/products/vfds" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">VFDs</Link>
              </div>
            </div>
          </li>
          
          {/* Industries  */}
          <li className="relative group">
            <Link to="/industries" className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer py-4">
              Industries 
            </Link>
           
          </li>
          
          {/* Projects and Contact links */}
          <li>
            <Link to="/projects" className="hover:text-primary transition-colors py-4">Projects</Link>
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
        
        {/* Mobile menu button - keeping existing code */}
        <button className="md:hidden p-2" aria-label="Open Menu">
          <Menu />
        </button>
      </nav>
      
      {/* Mobile Menu - update the products section here as well */}
      <div className="hidden md:hidden bg-white border-t shadow-lg">
        <div className="px-4 py-2">
          <Link to="/" className="block py-3 border-b">Home</Link>
          {/* ...existing code for About dropdown... */}
          
          {/* Services dropdown for mobile */}
          <div className="py-3 border-b">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                <Link to="/services/annual-maintenance" className="block py-2">Annual Maintenance</Link>
                <Link to="/services/installation" className="block py-2">Installation & Commissioning</Link>
                <Link to="/services/repair-overhaul" className="block py-2">Repair & Overhaul</Link>
                <Link to="/services/emergency-support" className="block py-2">24/7 Emergency Support</Link>
                <Link to="/services/rental" className="block py-2">Generator Rental</Link>
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
                    <Link to="/products/kirloskar/gas-generators" className="block py-2">Kirloskar Gas Generators</Link>
                    <Link to="/products/kirloskar/portable-generators" className="block py-2">Kirloskar Portable Generators</Link>
                    <Link to="/products/kirloskar/diesel-generators" className="block py-2">Kirloskar Diesel Generators</Link>
                  </div>
                </details>
                <Link to="/products/electrical-panels" className="block py-2">Electrical Panels</Link>
                <Link to="/products/servo-stabilizers" className="block py-2">Servo Stabilizers</Link>
                <Link to="/products/inverters" className="block py-2">Inverters (UPS Systems)</Link>
                <Link to="/products/transformers" className="block py-2">Transformers</Link>
                <Link to="/products/vfds" className="block py-2">VFDs</Link>
              </div>
            </details>
          </div>
          
          {/* Industries link */}
          <div className="py-3 border-b">
            <Link to="/industries" className="block">Industries</Link>
          </div>

          {/* Projects link */}
          <Link to="/projects" className="block py-3 border-b">Projects</Link>
          
          {/* Contact link */}
          <Link to="/contact" className="block py-3 border-b">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;