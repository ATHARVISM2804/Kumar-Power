import diesel from "@/assets/product-diesel-genset.jpg";
import gas from "@/assets/product-gas-genset.jpg";
import portable from "@/assets/product-portable-genset.jpg";
import ups from "@/assets/product-ups.jpg";
import { Button } from "@/components/ui/button";

const PSCard = ({ title, img, points }: { title: string; img: string; points: string[] }) => (
  <article className="rounded-lg border bg-card overflow-hidden flex flex-col">
    <img src={img} alt={title} className="h-40 w-full object-cover" loading="lazy" />
    <div className="p-4 flex-1 flex flex-col">
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="mb-4 text-sm text-muted-foreground list-disc pl-5 space-y-1">
        {points.map((p) => (<li key={p}>{p}</li>))}
      </ul>
      <div className="mt-auto">
        <Button size="sm">Enquire</Button>
      </div>
    </div>
  </article>
);

const PowerSolutions = () => {
  return (
    <section id="solutions" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Power Solutions</h2>
        <p className="text-muted-foreground mb-8">From diesel gensets to UPS, tailored to your site conditions and uptime goals.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <PSCard title="Diesel Generators" img={diesel} points={["10–1500 kVA range", "Low TCO", "AMC & spares"]} />
          <PSCard title="Gas Generators" img={gas} points={["Cleaner emissions", "High efficiency", "IoT monitoring"]} />
          <PSCard title="Portable Generators" img={portable} points={["Compact & mobile", "Event ready", "Quick start"]} />
          <PSCard title="UPS Systems" img={ups} points={["Zero transfer", "Scalable runtime", "Critical IT loads"]} />
        </div>
      </div>
    </section>
  );
};

export default PowerSolutions;