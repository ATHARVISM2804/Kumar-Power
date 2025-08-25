import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// About Us pages
import Certifications from "./pages/about/Certifications";
import OurProfile from "./pages/about/OurProfile";
import PhotoGallery from "./pages/about/PhotoGallery";
import OurClients from "./pages/about/OurClients";
import Testimonials from "./pages/about/Testimonials";

// Main Products page
import Products from "./pages/Products";

// Product pages
import ElectricalPanels from "./pages/products/ElectricalPanels";
import ServoStabilizers from "./pages/products/ServoStabilizers";

import Transformers from "./pages/products/Transformers";


// Kirloskar Generator pages
import GasGenerators from "./pages/products/kirloskar/GasGenerators";
import PortableGenerators from "./pages/products/kirloskar/PortableGenerators";
import DieselGenerators from "./pages/products/kirloskar/DieselGenerators";

// Services pages

import AnnualMaintenance from "./pages/services/AnnualMaintenance";
import Installation from "./pages/services/Installation";
import RepairOverhaul from "./pages/services/RepairOverhaul";
import EmergencySupport from "./pages/services/EmergencySupport";
import Rental from "./pages/services/Rental";

// Our Clients page (formerly Industries)
import Industries from "./pages/ValueClient";

// Contact page
import Contact from "./pages/contact/Contact";

const queryClient = new QueryClient();

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          {/* About Us Section Routes */}
          <Route path="/about/OurProfile" element={<OurProfile />} />
          <Route path="/about/Testimonials" element={<Testimonials />} />
          <Route path="/about/OurClients" element={<OurClients />} />
          <Route path="/about/PhotoGallery" element={<PhotoGallery />} />
          <Route path="/about/Certifications" element={<Certifications />} />

          {/* Product Routes */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/electrical-panels" element={<ElectricalPanels />} />
          <Route path="/products/servo-stabilizers" element={<ServoStabilizers />} />
          
          <Route path="/products/transformers" element={<Transformers />} />
          

          {/* Kirloskar Generator Routes */}
          <Route path="/products/kirloskar/gas-generators" element={<GasGenerators />} />
          <Route path="/products/kirloskar/portable-generators" element={<PortableGenerators />} />
          <Route path="/products/kirloskar/diesel-generators" element={<DieselGenerators />} />
          
          {/* Services Routes */}
          
          <Route path="/services/annual-maintenance" element={<AnnualMaintenance />} />
          <Route path="/services/installation" element={<Installation />} />
          <Route path="/services/repair-overhaul" element={<RepairOverhaul />} />
          <Route path="/services/emergency-support" element={<EmergencySupport />} />
          <Route path="/services/rental" element={<Rental />} />
          
          {/* Installation Route */}
          <Route path="/installation" element={<Installation />} />
          
          {/* Our Clients Route */}
          <Route path="/our-clients" element={<Industries />} />
          
          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
