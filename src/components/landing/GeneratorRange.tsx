import diesel from "@/assets/Range1.png";
import gas from "@/assets/Range2.png";
import portable from "@/assets/Range3.png";
import portable1 from "@/assets/Range4.png";
import portable2 from "@/assets/Range5.png";
import portable3 from "@/assets/Range6.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import dG1 from "@/assets/Kumar Assets/7.5KVA DG.png";
import dG2 from "@/assets/Kumar Assets/320KVa.png";
import dG3 from "@/assets/Kumar Assets/25kwa dg.png";
import dG4 from "@/assets/Kumar Assets/62.5KVA DG.png";
import dG5 from "@/assets/Kumar Assets/new750.png";

// Modal for generator info
const GeneratorModal = ({
  open,
  onClose,
  generator,
}: {
  open: boolean;
  onClose: () => void;
  generator:
    | {
        title: string;
        img: string;
        caption: string;
        details: string[];
      }
    | null;
}) => {
  if (!open || !generator) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-lg"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -40, scale: 0.95 }}
          transition={{ type: "spring", damping: 22, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-bold">{generator.title}</h2>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="p-6">
            <img
              src={generator.img}
              alt={generator.title}
              className="w-full h-48 object-contain rounded mb-4 bg-gray-100"
            />
            <p className="text-base text-gray-800 mb-2">{generator.caption}</p>
            <div className="mt-4">
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
                {generator.details.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Animated Card component
const Card = ({
  title,
  img,
  caption,
  onExplore,
}: {
  title: string;
  img: string;
  caption: string;
  onExplore: () => void;
}) => (
  <motion.article
    className="overflow-hidden flex flex-col shadow bg-gray-900 rounded-lg border border-gray-800"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    whileHover={{
      scale: 1.03,
      boxShadow:
        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      borderColor: "#2D6FBA",
    }}
    whileTap={{ scale: 0.98 }}
  >
    <div className="w-full h-60 flex items-center justify-center overflow-hidden bg-white">
      <motion.img
        src={img}
        alt={title}
        className="object-contain w-full h-60"
        loading="lazy"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.12, rotate: 0.5 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      />
    </div>
    <motion.div
      className="p-4 flex-1 flex flex-col"
      initial={{
        background:
          "linear-gradient(180deg, rgba(17, 24, 39, 0) 0%, rgba(17, 24, 39, 1) 100%)",
      }}
      whileHover={{
        background:
          "linear-gradient(180deg, rgba(45, 111, 186, 0) 0%, rgba(45, 111, 186, 0.2) 100%)",
      }}
    >
      <motion.h3
        className="font-semibold mb-1 text-lg"
        whileHover={{ color: "#2D6FBA" }}
      >
        {title}
      </motion.h3>
      <p className="text-sm text-muted-foreground mb-4 flex-1">{caption}</p>
      <div className="flex items-center gap-2">
        <motion.div
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Button
            size="sm"
            className="overflow-hidden group relative bg-[#2D6FBA] hover:bg-[#22548e]"
            variant="default"
            onClick={onExplore}
          >
            <motion.span initial={{ opacity: 1 }} whileHover={{ opacity: 0.9 }}>
              Explore more
            </motion.span>
            <motion.div
              className="ml-1 inline-flex"
              initial={{ x: 0 }}
              whileHover={{ x: 3 }}
              transition={{
                duration: 0.2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 0.2,
              }}
            >
              <ArrowRight className="h-4 w-4 group-hover:text-white" />
            </motion.div>
            <motion.span
              className="absolute bottom-0 left-0 h-0.5 bg-white"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  </motion.article>
);

const GeneratorRange = () => {
  // Define generator types for filtering
  const filterTypes = [
    "All",
    "CPCB4+ Diesel Generators",
    "Gas Generators",
    "Portable Generators",
    "Optiprime",
  ];
  const [activeFilter, setActiveFilter] = useState("All");

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalGenerator, setModalGenerator] = useState<{
    title: string;
    img: string;
    caption: string;
    details: string[];
  } | null>(null);

  // Define data with categories for filtering
  const generatorData = [
    {
      title: "Kirloskar Optiprime Generator",
      img: diesel,
      caption:
        "High-output Kirloskar Optiprime engineered for mission-critical facilities.",
      categories: ["Optiprime"],
      details: [
        "Designed for high-load and mission-critical operations.",
        "Ensures stable and efficient performance under continuous use.",
        "Silent operation with advanced fuel efficiency.",
        "Trusted choice for IT parks, hospitals, and data centers.",
      ],
    },
    {
      title: "Kirloskar Gas Generator (15 – 250 kVA)",
      img: gas,
      caption:
        "Clean, efficient power for commercial and industrial applications.",
      categories: ["Gas Generators"],
      details: [
        "Eco-friendly with low emissions.",
        "Cost-effective for long-duration use.",
        "Ideal for industries, hotels, and campuses.",
        "Wide service support across India.",
      ],
    },
    {
      title: "Kirloskar CPCB4+ Diesel Generator (7.5 – 20 kVA)",
      img: dG1,
      caption: "Portable power for events, remote sites, and emergency backup.",
      categories: ["CPCB4+ Diesel Generators"],
      details: [
        "Compact and easy to transport.",
        "Reliable for small businesses and households.",
        "Low fuel consumption with CPCB4+ compliance.",
        "Perfect for emergency and small-scale power needs.",
      ],
    },
    {
      title: "Kirloskar CPCB4+ Diesel Generator (25 – 58.5 kVA)",
      img: dG3,
      caption: "Balanced performance for medium-scale industrial needs.",
      categories: ["CPCB4+ Diesel Generators"],
      details: [
        "Suitable for small to medium industries.",
        "Optimized for continuous performance.",
        "Durable engine with low maintenance.",
        "Silent operation for commercial use.",
      ],
    },
    {
      title: "Kirloskar CPCB4+ Diesel Generator (82.5 – 160 kVA)",
      img: dG2,
      caption: "Scalable solutions with robust service network coverage.",
      categories: ["CPCB4+ Diesel Generators"],
      details: [
        "Medium to large-scale industrial use.",
        "Efficient fuel management system.",
        "Wide power range with reliable output.",
        "Strong service and support network.",
      ],
    },
    {
      title: "Kirloskar CPCB4+ Diesel Generator (200 – 250 kVA)",
      img: portable,
      caption: "Versatile DG sets for plants, campuses, and commercial towers.",
      categories: ["CPCB4+ Diesel Generators"],
      details: [
        "Ideal for campuses and mid-size factories.",
        "Fuel-efficient with low emissions.",
        "Noise-free and durable design.",
        "Supports long working hours without breakdown.",
      ],
    },
    {
      title: "Kirloskar CPCB4+ Diesel Generator (320 – 750 kVA)",
      img: dG2,
      caption: "Durable, high-efficiency backup for industries and campuses.",
      categories: ["CPCB4+ Diesel Generators"],
      details: [
        "Large-scale power solution for industries.",
        "Designed for heavy-duty continuous operation.",
        "Complies with CPCB4+ emission norms.",
        "Available with AMF panels and canopy options.",
      ],
    },
    {
      title: "Kirloskar CPCB4+ Diesel Generator (750 – 1500 kVA)",
      img: dG5,
      caption: "Low-emission, reliable diesel generator for versatile use.",
      categories: ["CPCB4+ Diesel Generators"],
      details: [
        "Massive power backup for large plants and campuses.",
        "Long operational life with robust design.",
        "Fuel-efficient with reduced emissions.",
        "Comes with soundproof and weatherproof enclosures.",
      ],
    },
    {
      title: "Kirloskar Portable Generator (2.1 – 5 kVA)",
      img: portable1,
      caption:
        "Compact portable power for small-scale events, sites, and emergency use.",
      categories: ["Portable Generators"],
      details: [
        "Lightweight and easy to carry.",
        "Best for home and small event use.",
        "Quick start with silent operation.",
        "Affordable backup solution for households.",
      ],
    },
  ];

  // Filter generators based on the active filter
  const filteredGenerators =
    activeFilter === "All"
      ? generatorData
      : generatorData.filter((generator) =>
          generator.categories.includes(activeFilter)
        );

  // Handler for Explore More button
  const handleExplore = (generator: {
    title: string;
    img: string;
    caption: string;
    details: string[];
  }) => {
    setModalGenerator(generator);
    setModalOpen(true);
  };

  return (
    <motion.section
      id="range"
      className="py-16 bg-black text-primary-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-5xl font-extralight tracking-tighter mb-2">
            Explore Our Generator Range
            <motion.div
              className="h-1 w-24"
              style={{ background: "#2D6FBA" }}
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </h2>
          <p className="text-white mt-6 mb-8">
            Kirloskar-certified systems tailored for industrial, commercial, and
            backup applications.
          </p>
        </motion.div>

        {/* Interactive filter buttons */}
        <motion.div
          className="flex flex-wrap gap-x-6 gap-y-4 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filterTypes.map((type, index) => (
            <motion.button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors ${
                activeFilter === type
                  ? "bg-[#2D6FBA] text-white"
                  : "hover:bg-gray-800"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{
                scale: 1.08,
                boxShadow:
                  "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className={`inline-block h-3 w-3 rounded-full ${
                  activeFilter === type ? "bg-white" : "bg-white/70"
                }`}
                animate={{
                  scale: activeFilter === type ? [1, 1.2, 1] : 1,
                }}
                whileHover={{
                  backgroundColor:
                    activeFilter === type
                      ? "#fff"
                      : "rgba(255, 255, 255, 0.9)",
                  scale: 1.2,
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-base font-medium">{type}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Filtered generator grid */}
        {filteredGenerators.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
            transition={{
              layout: { duration: 0.6, type: "spring", bounce: 0.25 },
            }}
          >
            <AnimatePresence mode="wait">
              {filteredGenerators.map((generator, index) => (
                <motion.div
                  key={generator.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  layout
                >
                  <Card
                    title={generator.title}
                    img={generator.img}
                    caption={generator.caption}
                    onExplore={() => handleExplore(generator)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl">No generators found in this category.</p>
          </motion.div>
        )}
      </div>
      {/* Modal for generator info */}
      <GeneratorModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        generator={modalGenerator}
      />
    </motion.section>
  );
};

export default GeneratorRange;
