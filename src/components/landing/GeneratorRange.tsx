import diesel from "@/assets/Range1.png";
import gas from "@/assets/Range2.png";
import portable from "@/assets/Range3.png";
import portable1 from "@/assets/Range4.png";
import portable2 from "@/assets/Range5.png";
import portable3 from "@/assets/Range6.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Animated Card component
const Card = ({ title, img, caption }: { title: string; img: string; caption: string }) => (
  <motion.article
    className="overflow-hidden flex flex-col shadow bg-gray-900 rounded-lg border border-gray-800"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.4 }}
    whileHover={{ 
      scale: 1.03, 
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      borderColor: "#3b82f6" 
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
          ease: "easeOut"
        }}
      />
    </div>
    <motion.div 
      className="p-4 flex-1 flex flex-col"
      initial={{ background: "linear-gradient(180deg, rgba(17, 24, 39, 0) 0%, rgba(17, 24, 39, 1) 100%)" }}
      whileHover={{ background: "linear-gradient(180deg, rgba(29, 78, 216, 0) 0%, rgba(29, 78, 216, 0.2) 100%)" }}
    >
      <motion.h3 
        className="font-semibold mb-1 text-lg"
        whileHover={{ color: "#60a5fa" }}
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
            className="overflow-hidden group relative" 
            variant="default"
          >
            <motion.span 
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0.9 }}
            >
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
                repeatDelay: 0.2
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
              className="h-1 w-24 bg-blue-600 mt-1"
              initial={{ width: 0 }}
              animate={{ width: "5rem" }}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </h2>
          <p className="text-white mt-6  mb-8">
            Kirloskar-certified systems tailored for industrial, commercial, and backup applications.
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
                activeFilter === type ? "bg-blue-600 text-white" : "hover:bg-gray-800"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" 
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
                  backgroundColor: activeFilter === type ? "#fff" : "rgba(255, 255, 255, 0.9)",
                  scale: 1.2
                }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-base font-medium">{type} Generators</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Filtered generator grid */}
        {filteredGenerators.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
            layout
            transition={{
              layout: { duration: 0.6, type: "spring", bounce: 0.25 }
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
    </motion.section>
  );
};

export default GeneratorRange;