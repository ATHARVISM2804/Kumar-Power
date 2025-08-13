import { CheckCircle2 } from "lucide-react";
import teamImg from "@/assets/gallery-networking.jpg";
import { Button } from "@/components/ui/button";

const About = () => {
  const features = [
    { label: "Kirloskar Certified" },
    { label: "24/7 Service Infrastructure" },
    { label: "500+ Enterprise Clients" },
    { label: "ISO 9001:2015 Accredited" },
  ];

  return (
    <>
      {/* Hero Section as per provided image */}
      <div className="bg-black py-8">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center mb-1">
            <span className="block h-px w-16 bg-white mr-4" />
            <span className="text-white text-2xl md:text-3xl font-semibold tracking-wide">
              ABOUT KUMAR POWER
            </span>
          </div>
          <div className="text-white text-lg md:text-xl font-normal">
            Powering Progress.
          </div>
        </div>
      </div>
      {/* End Hero Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Engineering India’s
              <br /> Energy Backbone.
            </h2>
            <p className="mb-6 text-base md:text-lg text-muted-foreground">
              For over 30+ years, Kumar Power has engineered uninterrupted power
              across India’s industries, infrastructure, and institutions. With
              Kirloskar certification and ISO 9001:2015 accreditation, we serve
              500+ enterprise clients with unmatched reliability and scale.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 mb-8">
              {features.map((f) => (
                <div key={f.label} className="flex items-center gap-4">
                  <span className="inline-flex items-center justify-center rounded-full bg-blue-100 h-9 w-9">
                    <CheckCircle2 className="text-blue-600 h-5 w-5" />
                  </span>
                  <span className="text-base">{f.label}</span>
                </div>
              ))}
            </div>
            <Button asChild size="lg" className="mt-2">
              <a href="#legacy">Explore Our Legacy</a>
            </Button>
          </div>
          {/* Right: Team Image */}
          <div className="flex justify-center">
            <img
              src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755020628/Screenshot_2025-08-12_231224_xauibh.png"
              alt="Kumar Power team"
              className="w-full max-w-2xl object-contain"
              loading="lazy"
              style={{ background: "transparent" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;