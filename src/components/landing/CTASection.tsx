import { Button } from "@/components/ui/button";
import { Phone, Download } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-16">
      <div className="container mx-auto rounded-xl border p-8 md:p-12 bg-gradient-to-br from-background to-muted/60">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Need Expert Assistance?</h2>
            <p className="text-muted-foreground">Have questions or need a custom power strategy? We're here to help.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button size="lg" asChild>
              <a href="#contact" className="flex items-center gap-2"><Phone className="size-4"/> Enquire Now</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#cta" className="flex items-center gap-2"><Download className="size-4"/> Download Our Company Profile</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;