import { Menu, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-7xl px-6 mx-auto flex items-center justify-between h-16">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755013519/logo_vptmta.png"
            alt="Kumar Power Logo"
            className="h-12 w-auto"
          />
        </a>
        <ul className="hidden md:flex items-center gap-6 text-base font-medium">
          <li>
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
          </li>
          <li className="relative group">
            <a href="#about" className="hover:text-primary transition-colors flex items-center gap-1">
              About Us <ChevronDown className="w-4 h-4" />
            </a>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[180px] z-10">
              <a href="#about-company" className="block px-4 py-2 hover:bg-gray-100">Company</a>
              <a href="#about-team" className="block px-4 py-2 hover:bg-gray-100">Team</a>
              <a href="#about-history" className="block px-4 py-2 hover:bg-gray-100">History</a>
            </div>
          </li>
          <li className="relative group">
            <a href="#services" className="hover:text-primary transition-colors flex items-center gap-1">
              Services <ChevronDown className="w-4 h-4" />
            </a>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[180px] z-10">
              <a href="#service-1" className="block px-4 py-2 hover:bg-gray-100">Service 1</a>
              <a href="#service-2" className="block px-4 py-2 hover:bg-gray-100">Service 2</a>
              <a href="#service-3" className="block px-4 py-2 hover:bg-gray-100">Service 3</a>
            </div>
          </li>
          <li className="relative group">
            <a href="#products" className="hover:text-primary transition-colors flex items-center gap-1">
              Products <ChevronDown className="w-4 h-4" />
            </a>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[180px] z-10">
              <a href="#product-1" className="block px-4 py-2 hover:bg-gray-100">Product 1</a>
              <a href="#product-2" className="block px-4 py-2 hover:bg-gray-100">Product 2</a>
              <a href="#product-3" className="block px-4 py-2 hover:bg-gray-100">Product 3</a>
            </div>
          </li>
          <li className="relative group">
            <a href="#industries" className="hover:text-primary transition-colors flex items-center gap-1">
              Industries <ChevronDown className="w-4 h-4" />
            </a>
            <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md min-w-[180px] z-10">
              <a href="#industry-1" className="block px-4 py-2 hover:bg-gray-100">Industry 1</a>
              <a href="#industry-2" className="block px-4 py-2 hover:bg-gray-100">Industry 2</a>
              <a href="#industry-3" className="block px-4 py-2 hover:bg-gray-100">Industry 3</a>
            </div>
          </li>
          <li>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          </li>
          <li>
            <a href="#certifications" className="hover:text-primary transition-colors">Certifications</a>
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
    </header>
  );
};

export default Header;