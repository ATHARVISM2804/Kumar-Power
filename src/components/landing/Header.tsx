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
          
          {/* Services dropdown - keeping existing code */}
          <li className="relative group">
            <a href="#services" className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer py-4">
              Services <ChevronDown className="w-4 h-4" />
            </a>
            <div className="absolute left-0 top-[90%] pt-3 hidden group-hover:block hover:block">
              <div className="bg-white shadow-lg rounded-md min-w-[240px] z-10 overflow-hidden">
                <Link to='/services/service-1' className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Service 1</Link>
                <Link to='/services/service-2' className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Service 2</Link>
                <Link to='/services/service-3' className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Service 3</Link>

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
          
          {/* Industries dropdown - keeping existing code */}
          <li className="relative group">
            <a href="#industries" className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer py-4">
              Industries <ChevronDown className="w-4 h-4" />
            </a>
            <div className="absolute left-0 top-[90%] pt-3 hidden group-hover:block hover:block">
              <div className="bg-white shadow-lg rounded-md min-w-[200px] z-10 overflow-hidden">
                <a href="#industry-1" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Industry 1</a>
                <a href="#industry-2" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Industry 2</a>
                <a href="#industry-3" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Industry 3</a>
              </div>
            </div>
          </li>
          
          {/* Projects and Contact links - updating Contact to use Router Link */}
          <li>
            <a href="#projects" className="hover:text-primary transition-colors py-4">Projects</a>
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
          {/* ...existing code for Services dropdown... */}
          
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
          
          {/* Industries dropdown */}
          <div className="py-3 border-b">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span>Industries</span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                <a href="#industry-1" className="block py-2">Industry 1</a>
                <a href="#industry-2" className="block py-2">Industry 2</a>
                <a href="#industry-3" className="block py-2">Industry 3</a>
              </div>
            </details>
          </div>

          {/* Projects link */}
          <a href="#projects" className="block py-3 border-b">Projects</a>
          
          {/* Contact link */}
          <Link to="/contact" className="block py-3 border-b">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;