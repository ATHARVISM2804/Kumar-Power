import diesel from "@/assets/Range1.png";
import gas from "@/assets/Range2.png";
import portable from "@/assets/Range3.png";
import portable1 from "@/assets/Range4.png";
import portable2 from "@/assets/Range5.png";
import portable3 from "@/assets/Range6.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Card = ({ title, img, caption }: { title: string; img: string; caption: string }) => (
  <article className="overflow-hidden flex flex-col shadow">
    <div className="w-full h-60 flex items-center justify-center overflow-hidden">
      <img
        src={img}
        alt={title}
        className="object-contain w-full h-60"
        style={{ background: "white" }}
        loading="lazy"
      />
    </div>
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 flex-1">{caption}</p>
      <div className="flex items-center gap-2">
        <Button size="sm">
          Explore more <ArrowRight className="ml-1 h-4 w-4" />
        </Button>
      </div>
    </div>
  </article>
);

const GeneratorRange = () => {
  return (
    <section id="range" className="py-16 bg-black text-primary-foreground">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Explore Our Generator Range</h2>
        <p className="text-muted-foreground mb-8">
          Kirloskar-certified systems tailored for industrial, commercial, and backup applications.
        </p>
        {/* Filter points as in image */}
        <div className="flex flex-wrap gap-x-16 gap-y-4 mb-10">
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-white" />
            <span className="text-base font-medium">Gas Generators</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-white" />
            <span className="text-base font-medium">Portable</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-white" />
            <span className="text-base font-medium">Diesel Generators</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full bg-white" />
            <span className="text-base font-medium">CPCB4+</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Kirloskar 1010 – 1500 kVA" img={diesel} caption="High-output diesel gensets engineered for mission-critical facilities." />
          <Card title="Kirloskar Gas Genset" img={gas} caption="Cleaner power with optimized fuel efficiency and reliability." />
          <Card title="Kirloskar 82.5–160 kVA" img={portable} caption="Versatile DG sets for plants, campuses, and commercial towers." />
          <Card title="Kirloskar 2.8 – 5.5 kVA" img={portable1} caption="Portable power for events, remote sites, and emergency backup." />
          <Card title="Kirloskar 200 kVA–250 kVA" img={portable2} caption="Balanced performance for medium-scale industrial needs." />
          <Card title="Kirloskar 320–1010 kVA" img={portable3} caption="Scalable solutions with robust service network coverage." />
        </div>
      </div>
    </section>
  );
};

export default GeneratorRange;