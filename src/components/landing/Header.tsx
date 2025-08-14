import { Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
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
          <li className="relative group">
            <a href="#services" className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer py-4">
              Services <ChevronDown className="w-4 h-4" />
            </a>
            <div className="absolute left-0 top-[90%] pt-3 hidden group-hover:block hover:block">
              <div className="bg-white shadow-lg rounded-md min-w-[240px] z-10 overflow-hidden">
                <a href="#service-1" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Kirloskar Diesel Generators</a>
                <a href="#service-2" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Kirloskar Gas Generators</a>
                <a href="#service-3" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Kirloskar Portable Generators</a>
                <a href="#service-4" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Panels</a>
                <a href="#service-5" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Pumps</a>
                <a href="#service-6" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Servo Stabalizers</a>
                <a href="#service-7" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Transformers</a>
              </div>
            </div>
          </li>
          <li className="relative group">
            <a href="#products" className="hover:text-primary transition-colors flex items-center gap-1 cursor-pointer py-4">
              Products <ChevronDown className="w-4 h-4" />
            </a>
            <div className="absolute left-0 top-[90%] pt-3 hidden group-hover:block hover:block">
              <div className="bg-white shadow-lg rounded-md min-w-[200px] z-10 overflow-hidden">
                <a href="#product-1" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Product 1</a>
                <a href="#product-2" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Product 2</a>
                <a href="#product-3" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Product 3</a>
              </div>
            </div>
          </li>
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
          <li>
            <a href="#projects" className="hover:text-primary transition-colors py-4">Projects</a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-primary transition-colors py-4">Contact</a>
          </li>
        </ul>
        <div className="hidden md:flex items-center gap-3">
          <a href="#cta" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014410/Screenshot_2025-06-02_at_12.44.43_PM_lxdedo.png"
              alt="Kumar Power Profile Logo"
              className="h-12 w-auto"
            />
          </a>
        </div>
        <button className="md:hidden p-2" aria-label="Open Menu">
          <Menu />
        </button>
      </nav>
      
      {/* Mobile Menu (hidden by default) */}
      <div className="hidden md:hidden bg-white border-t shadow-lg">
        <div className="px-4 py-2">
          <Link to="/" className="block py-3 border-b">Home</Link>
          <div className="py-3 border-b">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                <Link to="/about/OurProfile" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Our Profile</Link>
                <Link to="/about/Testimonials" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Testimonials</Link>
                <Link to="/about/OurClients" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Our Clients</Link>
                <Link to="/about/PhotoGallery" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Photo gallery</Link>
                <Link to="/about/Certifications" className="block px-4 py-3 hover:bg-gray-100 cursor-pointer">Certifications</Link>
              </div>
            </details>
          </div>
          <div className="py-3 border-b">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <span>Services</span>
                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="mt-2 ml-4 space-y-2">
                <a href="#service-1" className="block py-2">Kirloskar Diesel Generators</a>
                <a href="#service-2" className="block py-2">Kirloskar Gas Generators</a>
                <a href="#service-3" className="block py-2">Kirloskar Portable Generators</a>
                <a href="#service-4" className="block py-2">Panels</a>
                <a href="#service-5" className="block py-2">Pumps</a>
                <a href="#service-6" className="block py-2">Servo Stabalizers</a>
                <a href="#service-7" className="block py-2">Transformers</a>
              </div>
            </details>
          </div>
          {/* Additional mobile menu items */}
          <a href="#projects" className="block py-3 border-b">Projects</a>
          <a href="#certifications" className="block py-3 border-b">Certifications</a>
        </div>
      </div>
    </header>
  );
};

export default Header;