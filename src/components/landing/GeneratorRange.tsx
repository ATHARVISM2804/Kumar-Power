import diesel from "@/assets/product-diesel-genset.jpg";
import gas from "@/assets/product-gas-genset.jpg";
import portable from "@/assets/product-portable-genset.jpg";
import { Button } from "@/components/ui/button";

const Card = ({ title, img, caption }: { title: string; img: string; caption: string }) => (
  <article className="rounded-lg border bg-card overflow-hidden flex flex-col">
    <img src={img} alt={title} className="h-40 w-full object-cover" loading="lazy" />
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 flex-1">{caption}</p>
      <div className="flex items-center gap-2">
        <Button size="sm">Enquire</Button>
        <Button variant="outline" size="sm">Brochure</Button>
      </div>
    </div>
  </article>
);

const GeneratorRange = () => {
  return (
    <section id="range" className="py-16 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Explore Our Generator Range</h2>
        <p className="text-muted-foreground mb-8">Kirloskar-certified systems tailored for industrial, commercial, and backup applications.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Kirloskar 1010 – 1500 kVA" img={diesel} caption="High-output diesel gensets engineered for mission-critical facilities." />
          <Card title="Kirloskar Gas Genset" img={gas} caption="Cleaner power with optimized fuel efficiency and reliability." />
          <Card title="Kirloskar 82.5–160 kVA" img={diesel} caption="Versatile DG sets for plants, campuses, and commercial towers." />
          <Card title="Kirloskar 2.8 – 5.5 kVA" img={portable} caption="Portable power for events, remote sites, and emergency backup." />
          <Card title="Kirloskar 200 kVA–250 kVA" img={diesel} caption="Balanced performance for medium-scale industrial needs." />
          <Card title="Kirloskar 320–1010 kVA" img={diesel} caption="Scalable solutions with robust service network coverage." />
        </div>
      </div>
    </section>
  );
};

export default GeneratorRange;