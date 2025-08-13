import { Button } from "@/components/ui/button";
import { Phone, Download } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-16 bg-foreground">
      <div className="container mx-auto flex flex-col items-center text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Need Expert Assistance?</h2>
          <p className="text-white/70">Talk to an Expert or Request a Quote</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Button 
            size="lg" 
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold"
            asChild
          >
            <a href="#contact" className="flex items-center gap-2">
              <Phone className="size-4"/> Talk to an Expert
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10"
            asChild
          >
            <a href="#cta" className="flex items-center gap-2">
              <Download className="size-4"/> Request a Quote
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;