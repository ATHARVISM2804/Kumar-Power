import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Phone, Mail } from "lucide-react";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
     <Header />

      {/* Main Content */}
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Error */}
          <div className="mb-8">
            <h1 className="text-8xl sm:text-9xl font-bold text-black/10 leading-none">
              404
            </h1>
            <div className="relative -mt-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                Page Not Found
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                Oops! The page you're looking for doesn't exist. It might have
                been moved, deleted, or you entered the wrong URL.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="/"
              className="bg-black text-white rounded-lg px-8 py-3 font-semibold text-base hover:bg-gray-900 transition flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Home size={20} />
              Back to Home
            </a>
            <button
              onClick={() => window.history.back()}
              className="border border-black text-black rounded-lg px-8 py-3 font-semibold text-base hover:bg-black hover:text-white transition flex items-center gap-2 min-w-[200px] justify-center"
            >
              <ArrowLeft size={20} />
              Go Back
            </button>
          </div>

          {/* Quick Links */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
            <h3 className="text-xl font-bold text-black mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <a
                href="/about/OurProfile"
                className="text-gray-600 hover:text-black transition-colors"
              >
                About Us
              </a>
              <a
                href="/products"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Products
              </a>
              <a
                href="/installation"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Installation
              </a>
              <a
                href="/about/OurClients"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Our Clients
              </a>
              <a
                href="/about/Testimonials"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Testimonials
              </a>
              <a
                href="/contact"
                className="text-gray-600 hover:text-black transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-2">Need help? Contact us:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
              <a
                href="tel:+919778431767"
                className="text-black hover:text-blue-600 transition-colors font-medium"
              >
                📞 +91 97784 31767
              </a>
              <a
                href="mailto:kumargeneratorhouse@gmail.com"
                className="text-black hover:text-blue-600 transition-colors font-medium"
              >
                ✉️ kumargeneratorhouse@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <div className="bg-black text-white py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs text-white/60">
            © {new Date().getFullYear()} Kumar Power. All rights reserved.
          </p>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default NotFound;