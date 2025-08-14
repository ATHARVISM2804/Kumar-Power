import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// About Us pages

import Certifications from "./pages/about/Certifications";
import OurProfile from "./pages/about/OurProfile";
import PhotoGallery from "./pages/about/PhotoGallery";
import OurClients from "./pages/about/OurClients";
import Testimonials from "./pages/about/Testimonials";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* About Us Section Routes */}
          <Route path="/about/OurProfile" element={<OurProfile />} />
          <Route path="/about/Testimonials" element={<Testimonials />} />
          <Route path="/about/OurClients" element={<OurClients />} />
          <Route path="/about/PhotoGallery" element={<PhotoGallery />} />
          <Route path="/about/Certifications" element={<Certifications />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
