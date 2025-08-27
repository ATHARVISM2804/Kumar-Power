import weather from "@/assets/blog3.png";
import sustainable from "@/assets/blog2.png";
import maintenance from "@/assets/blog1.png";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define blog data structure
interface BlogPost {
  id: number;
  title: string;
  img: string;
  summary: string;
  content: string;
}

// Blog data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Optimizing Generator Performance in Extreme Weather Conditions",
    img: weather,
    summary: "Learn how to maintain optimal generator efficiency during challenging weather scenarios with our expert",
    content: `<p>Extreme weather conditions can severely impact generator performance if proper precautions aren't taken. Whether facing scorching heat, freezing temperatures, or heavy rainfall, your power equipment requires specialized care.</p>
    
    <h3>Temperature Regulation</h3>
    <p>In hot weather, ensure proper ventilation around your generator to prevent overheating. Consider installing additional cooling systems for critical applications. During cold weather, use appropriate engine block heaters and winter-grade fuels to maintain reliable starts and operation.</p>
    
    <h3>Moisture Protection</h3>
    <p>Rain and humidity can damage electrical components. Always operate generators under protective covers designed to allow proper airflow while keeping moisture away from sensitive parts. Regular inspection of seals and gaskets is essential.</p>
    
    <h3>Preventive Maintenance Schedule</h3>
    <p>Increase maintenance frequency during extreme weather periods. Check fluid levels, batteries, and connections more often when operating in challenging conditions.</p>
    
    <p>By implementing these specialized procedures, you can ensure your power generation equipment remains reliable regardless of weather extremes.</p>`
  },
  {
    id: 2,
    title: "The Future of Sustainable Power Solutions for Industrial Applications",
    img: sustainable,
    summary: "Discover how renewable energy integration is transforming the landscape of industrial power backup systems.",
    content: `<p>The industrial power landscape is undergoing a significant transformation as sustainability becomes a core business priority. Modern solutions now combine traditional backup systems with renewable energy sources.</p>
    
    <h3>Hybrid Power Systems</h3>
    <p>The integration of solar arrays, wind turbines, and traditional generators creates robust hybrid systems that reduce emissions while maintaining reliability. These systems automatically select the most efficient power source based on conditions and demand.</p>
    
    <h3>Energy Storage Advancements</h3>
    <p>Battery technology improvements have dramatically increased storage capacity while reducing costs. This allows industries to store excess renewable energy and deploy it during peak demand or outages.</p>
    
    <h3>Smart Power Management</h3>
    <p>AI-driven control systems optimize power distribution, predicting usage patterns and seamlessly switching between multiple sources to maximize efficiency and minimize environmental impact.</p>
    
    <p>The future of industrial power lies in these integrated approaches that balance reliability, cost-effectiveness, and environmental responsibility.</p>`
  },
  {
    id: 3,
    title: "Preventive Maintenance: Extending Your Generator's Lifespan",
    img: maintenance,
    summary: "Regular maintenance schedules and best practices that can significantly increase the operational life of your equipment.",
    content: `<p>A comprehensive preventive maintenance program is the single most important factor in extending generator lifespan and ensuring reliability when you need it most.</p>
    
    <h3>Essential Maintenance Schedule</h3>
    <p>Implement weekly visual inspections, monthly load testing, quarterly fluid analysis, and annual comprehensive service. This tiered approach catches issues before they become failures.</p>
    
    <h3>Fluid Management</h3>
    <p>Regular oil changes using manufacturer-recommended lubricants prevent internal wear. Fuel quality management prevents injector problems and ensures reliable starts. Cooling system maintenance prevents the number one cause of generator failures.</p>
    
    <h3>Documentation and Monitoring</h3>
    <p>Keep detailed records of all maintenance activities and operational hours. Modern remote monitoring systems can alert you to potential issues before they cause downtime.</p>
    
    <p>With proper care, industrial generators can remain reliable for 20-30 years of service, providing exceptional return on investment.</p>`
  }
];

// Blog Modal Component
const BlogModal = ({ blog, isOpen, onClose }: { blog: BlogPost | null; isOpen: boolean; onClose: () => void }) => {
  if (!blog) return null;
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div 
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <motion.h2 
                className="text-xl font-bold"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {blog.title}
              </motion.h2>
              <motion.button 
                onClick={onClose} 
                className="p-1 rounded-full hover:bg-gray-100"
                whileHover={{ rotate: 90, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-6 w-6" />
              </motion.button>
            </div>
            
            <div className="p-6">
              <motion.img 
                src={blog.img} 
                alt={blog.title} 
                className="w-full h-64 object-cover rounded-lg mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              />
              <motion.div 
                dangerouslySetInnerHTML={{ __html: blog.content }} 
                className="prose max-w-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const BlogCard = ({ 
  blog, 
  onReadMore,
  index
}: { 
  blog: BlogPost; 
  onReadMore: (blog: BlogPost) => void;
  index: number;
}) => (
  <motion.article 
    className="rounded-xl bg-white overflow-hidden flex flex-col shadow-md"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
  >
    <motion.div className="overflow-hidden h-48">
      <motion.img 
        src={blog.img} 
        alt={blog.title} 
        className="h-48 w-full object-cover" 
        loading="lazy"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
    <div className="p-6 flex-1 flex flex-col">
      <motion.h3 
        className="font-semibold text-lg mb-2 text-gray-900 line-clamp-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 + index * 0.15 }}
      >
        {blog.title}
      </motion.h3>
      <motion.p 
        className="text-sm text-gray-600 mb-6 flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 + index * 0.15 }}
      >
        {blog.summary}
      </motion.p>
      <motion.button 
        onClick={() => onReadMore(blog)} 
        className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:underline mt-auto group"
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.95 }}
      >
        Read More 
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          whileHover={{ x: 3 }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 0.6
          }}
        >
          <ArrowRight className="h-4 w-4" />
        </motion.div>
      </motion.button>
    </div>
  </motion.article>
);

const BlogSection = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleReadMore = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedBlog(null), 300); // Delay clearing blog until animation finishes
  };
  
  return (
    <motion.section 
      id="blogs" 
      className="py-10 md:py-20 bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-0">
        <motion.h2 
          className="text-3xl md:text-5xl font-bold mb-2 md:mb-3 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Blogs
        </motion.h2>
        <motion.p 
          className="text-white/80 mb-8 md:mb-12 text-base md:text-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Explore expert articles, case studies, and latest trends in industrial power solutions.
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {blogPosts.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} onReadMore={handleReadMore} index={index} />
          ))}
        </motion.div>
      </div>
      
      {/* Blog modal */}
      <BlogModal blog={selectedBlog} isOpen={isModalOpen} onClose={closeModal} />
    </motion.section>
  );
};

export default BlogSection;