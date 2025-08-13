import { ArrowRight } from "lucide-react";
import diesel from "@/assets/product-diesel-genset.jpg";
import gas from "@/assets/product-gas-genset.jpg";
import portable from "@/assets/product-portable-genset.jpg";
import ups from "@/assets/product-ups.jpg";
import { Button } from "@/components/ui/button";

const PSCard = ({ title, desc, specs, img }: { title: string; desc: string; specs: string[]; img: string }) => (
  <article className="bg-white rounded-lg overflow-hidden shadow-md">
    <img src={img} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{desc}</p>
      <div className="space-y-2 mb-6">
        {specs.map((spec) => (
          <div key={spec} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span className="text-sm">{spec}</span>
          </div>
        ))}
      </div>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
        Explore More <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  </article>
);

const FilterSection = ({ title, options }: { title: string; options: string[] }) => (
  <div className="mb-6">
    <h4 className="text-gray-900 font-medium mb-3">{title}</h4>
    <div className="space-y-2">
      {options.map((option) => (
        <label key={option} className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-gray-600 text-sm">{option}</span>
        </label>
      ))}
    </div>
  </div>
);

const PowerSolutions = () => {
  return (
    <section id="solutions" className="py-16">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        {/* Left: Content */}
        <div className="md:col-span-3">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold flex items-end gap-2">
              <span className="relative">
                Power
                <span className="absolute left-0 -bottom-1 w-full h-1 bg-blue-600 rounded" />
              </span>
              Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <PSCard
              title="Kirloskar CPCB4+ Diesel Genset"
              desc="Advanced diesel generators with CPCB4+ compliance, offering superior fuel efficiency and eco-friendly operations."
              specs={["2 kVA - 1000 kVA Range", "CPCB4+ Compliant", "3 Phase Output"]}
              img={diesel}
            />
            <PSCard
              title="Gas Generators"
              desc="Eco-friendly natural gas and LPG generators with lower emissions and operational costs for sustainable power generation."
              specs={["15 kVA - 500 kVA", "Low Emissions", "Quiet Operation"]}
              img={gas}
            />
            <PSCard
              title="Portable Generators"
              desc="Compact and mobile power solutions for construction sites, events, and emergency backup with easy transport features."
              specs={["2 kVA - 15 kVA", "Lightweight Design"]}
              img={portable}
            />
            <PSCard
              title="Uninterruptible Power Supply (UPS)"
              desc="Protection against power outages with instant backup power and surge protection for critical equipment and data centers."
              specs={["1 kVA - 500 kVA Range", "Online Double Conversion", "Battery Backup"]}
              img={ups}
            />
          </div>
        </div>
        {/* Right: Filter */}
        <div className="bg-white p-6 rounded-lg shadow-sm border h-fit">
          <h3 className="font-semibold text-lg mb-6">Filter Products</h3>
          
          <FilterSection
            title="Power Range"
            options={["0-50 kVA", "51-200 kVA", "201-500 kVA", "501+ kVA"]}
          />
          
          <FilterSection
            title="Application"
            options={["Industrial", "Commercial", "Residential", "Construction","Events"]}
          />
          
          <FilterSection
            title="Fuel Type"
            options={["Diesel", "Natural Gas", "Bi-Fuel", "LPG","Petrol"]}
          />
          <FilterSection
            title="Certification"
            options={["CPCB4+", "ISO 9001", "Bi-Fuel", "CE Certified","UL Listed"]}
          />

          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
            Apply Filters
          </Button>
        </div>
      </div>
      {/* Trusted By Section */}
      <div className="container mx-auto mt-20">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold">
            Trusted Across India's Largest Enterprises
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          <img
            src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755018139/Screenshot_2025-08-12_223045_zmtwsc.png"
            alt="Honeywell"
            className="h-12 w-auto"
          />
          <img
            src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755018138/Screenshot_2025-08-12_223107_gtytur.png"
            alt="Caritas"
            className="h-12 w-auto"
          />
          <img
            src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755018138/Screenshot_2025-08-12_223123_pqjvbo.png"
            alt="India"
            className="h-12 w-auto"
          />
          <img
            src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755018139/Screenshot_2025-08-12_223139_wq8vha.png"
            alt="Kashyapi"
            className="h-12 w-auto"
          />
          <img
            src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755018139/Screenshot_2025-08-12_223157_gp87k6.png"
            alt="Continental"
            className="h-12 w-auto"
          />
          <img
            src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755018139/Screenshot_2025-08-12_223157_gp87k6.png"
            alt="STS"
            className="h-12 w-auto"
          />
          <img
            src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755018139/Screenshot_2025-08-12_223157_gp87k6.png"
            alt="GMP"
            className="h-12 w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default PowerSolutions;