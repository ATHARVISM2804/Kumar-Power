import diesel from "@/assets/Range1.png";
import gas from "@/assets/Range2.png";
import portable from "@/assets/Range3.png";
import portable1 from "@/assets/Range4.png";
import portable2 from "@/assets/Range5.png";
import portable3 from "@/assets/Range6.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

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
  // Define generator types for filtering
  const filterTypes = ["All", "Gas", "Portable", "Diesel", "CPCB4+"];
  const [activeFilter, setActiveFilter] = useState("All");

  // Define data with categories for filtering
  const generatorData = [
    {
      title: "Kirloskar 1010 – 1500 kVA",
      img: diesel,
      caption: "High-output diesel gensets engineered for mission-critical facilities.",
      categories: ["Diesel", "CPCB4+"],
    },
    {
      title: "Kirloskar Gas Genset",
      img: gas,
      caption: "Cleaner power with optimized fuel efficiency and reliability.",
      categories: ["Gas"],
    },
    {
      title: "Kirloskar 82.5–160 kVA",
      img: portable,
      caption: "Versatile DG sets for plants, campuses, and commercial towers.",
      categories: ["Portable", "Diesel"],
    },
    {
      title: "Kirloskar 2.8 – 5.5 kVA",
      img: portable1,
      caption: "Portable power for events, remote sites, and emergency backup.",
      categories: ["Portable"],
    },
    {
      title: "Kirloskar 200 kVA–250 kVA",
      img: portable2,
      caption: "Balanced performance for medium-scale industrial needs.",
      categories: ["Diesel", "CPCB4+"],
    },
    {
      title: "Kirloskar 320–1010 kVA",
      img: portable3,
      caption: "Scalable solutions with robust service network coverage.",
      categories: ["Diesel"],
    },
  ];

  // Filter generators based on the active filter
  const filteredGenerators =
    activeFilter === "All"
      ? generatorData
      : generatorData.filter((generator) => generator.categories.includes(activeFilter));

  return (
    <section id="range" className="py-16 bg-black text-primary-foreground">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Explore Our Generator Range</h2>
        <p className="text-muted-foreground mb-8">
          Kirloskar-certified systems tailored for industrial, commercial, and backup applications.
        </p>

        {/* Interactive filter buttons */}
        <div className="flex flex-wrap gap-x-6 gap-y-4 mb-10">
          {filterTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors ${
                activeFilter === type ? "bg-blue-600 text-white" : "hover:bg-gray-800"
              }`}
            >
              <span
                className={`inline-block h-3 w-3 rounded-full ${
                  activeFilter === type ? "bg-white" : "bg-white/70"
                }`}
              />
              <span className="text-base font-medium">{type} Generators</span>
            </button>
          ))}
        </div>

        {/* Filtered generator grid */}
        {filteredGenerators.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGenerators.map((generator, index) => (
              <Card
                key={index}
                title={generator.title}
                img={generator.img}
                caption={generator.caption}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-xl">No generators found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GeneratorRange;