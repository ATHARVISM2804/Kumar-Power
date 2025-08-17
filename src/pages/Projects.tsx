import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, Building2, Calendar, ChevronRight, Filter, MapPin, Activity, Shield, Clock, CheckCircle2 } from 'lucide-react';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  // State for filtering projects
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [selectedYear, setSelectedYear] = useState<string>("all");

  // Project sectors for filtering
  const sectors = [
    { id: "all", name: "All Sectors" },
    { id: "healthcare", name: "Healthcare" },
    { id: "data-center", name: "Data Centers" },
    { id: "manufacturing", name: "Manufacturing" },
    { id: "commercial", name: "Commercial" },
    { id: "infrastructure", name: "Infrastructure" },
    { id: "residential", name: "Residential" }
  ];

  // Project years for filtering
  const years = [
    { id: "all", name: "All Years" },
    { id: "2025", name: "2025" },
    { id: "2024", name: "2024" },
    { id: "2023", name: "2023" },
    { id: "2022", name: "2022" },
    { id: "older", name: "2021 & Older" }
  ];

  // Featured projects
  const featuredProjects = [
    {
      id: "city-hospital",
      title: "City Multi-Specialty Hospital",
      location: "Mumbai, Maharashtra",
      year: "2025",
      sector: "healthcare",
      description: "Installation of dual redundant 750 kVA diesel generators with automatic transfer switches and remote monitoring system for a leading 300-bed hospital.",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/hospital_project_h8es3d.jpg",
      scope: [
        "Design and installation of emergency power system",
        "Fuel storage system with 72-hour capacity",
        "Noise reduction enclosures for urban environment",
        "Integration with hospital building management system",
        "Automatic load prioritization during outages"
      ]
    },
    {
      id: "tech-data-center",
      title: "TechEdge Data Center",
      location: "Bengaluru, Karnataka",
      year: "2024",
      sector: "data-center",
      description: "Complete power solution for a Tier III data center including 4x 1250 kVA generators in N+1 configuration with paralleling controls and UPS integration.",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/data_center_project_poqr7g.jpg",
      scope: [
        "Redundant generator system design and installation",
        "Generator synchronization and load sharing system",
        "Integration with UPS and cooling systems",
        "Comprehensive remote monitoring and diagnostics",
        "Regular load bank testing program"
      ]
    },
    {
      id: "industrial-manufacturing",
      title: "Precision Manufacturing Plant",
      location: "Pune, Maharashtra",
      year: "2024",
      sector: "manufacturing",
      description: "Power generation system for a new automotive parts manufacturing facility with sensitive equipment requiring clean power and minimal interruption.",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/manufacturing_project_sj5fi2.jpg",
      scope: [
        "2x 500 kVA prime power generators",
        "Power quality management system",
        "Voltage and frequency regulation equipment",
        "Harmonic filtration for sensitive machinery",
        "Energy management and monitoring system"
      ]
    }
  ];

  // All projects
  const allProjects = [
    ...featuredProjects,
    {
      id: "office-complex",
      title: "Horizon Office Complex",
      location: "Gurgaon, Haryana",
      year: "2023",
      sector: "commercial",
      description: "Backup power system for a 15-story premium office complex housing multiple international corporations with critical operations.",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/office_project_avbdfy.jpg",
      scope: [
        "3x 350 kVA standby generators",
        "Rooftop installation with vibration isolation",
        "Custom load distribution system by floor and tenant",
        "Integrated building automation system connectivity",
        "Scheduled testing and maintenance program"
      ]
    },
    {
      id: "highway-infrastructure",
      title: "National Highway Emergency System",
      location: "Delhi-Mumbai Expressway",
      year: "2023",
      sector: "infrastructure",
      description: "Series of emergency power generators for toll plazas, service areas, and emergency response centers along the expressway corridor.",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/highway_project_xpy2cn.jpg",
      scope: [
        "20+ distributed generator locations",
        "Weatherproof and vandal-resistant enclosures",
        "Remote monitoring and centralized control",
        "Solar hybrid systems for toll plazas",
        "Rapid deployment emergency units"
      ]
    },
    {
      id: "luxury-apartments",
      title: "Marina Bay Residences",
      location: "Mumbai, Maharashtra",
      year: "2022",
      sector: "residential",
      description: "Premium backup power solution for a luxury residential tower with 120 high-end apartments requiring seamless power transition.",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/residential_project_degfrw.jpg",
      scope: [
        "2x 250 kVA ultra-quiet generators",
        "Underground installation with sound attenuation",
        "Smart load management for common areas and residences",
        "Integration with home automation systems",
        "Premium service and maintenance package"
      ]
    },
    {
      id: "pharmaceutical-plant",
      title: "LifeSciences Pharmaceutical Factory",
      location: "Hyderabad, Telangana",
      year: "2022",
      sector: "manufacturing",
      description: "Critical power system for pharmaceutical manufacturing with FDA-compliant validation requirements and zero tolerance for interruptions.",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/pharma_project_xgblpy.jpg",
      scope: [
        "Multiple redundant generator systems",
        "Validated power quality for sensitive processes",
        "Clean room compatible installation",
        "Comprehensive documentation for regulatory compliance",
        "Continuous monitoring with alert systems"
      ]
    },
    {
      id: "regional-hospital",
      title: "Regional Medical Center",
      location: "Chennai, Tamil Nadu",
      year: "2021",
      sector: "healthcare",
      description: "Emergency and backup power system for a 500-bed regional hospital with critical care and surgical facilities requiring uninterrupted power.",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/regional_hospital_project_gapjso.jpg",
      scope: [
        "3x 600 kVA generators with redundancy",
        "10-second emergency power activation",
        "Prioritized distribution for critical care areas",
        "Integrated testing with medical equipment",
        "Annual disaster readiness drills"
      ]
    },
    {
      id: "green-data-center",
      title: "CloudNext Green Data Center",
      location: "Noida, Uttar Pradesh",
      year: "2021",
      sector: "data-center",
      description: "Innovative hybrid power solution for a green data center combining traditional generators with renewable energy sources and advanced energy storage.",
      image: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/green_data_center_project_xgktro.jpg",
      scope: [
        "Hybrid diesel-solar power generation",
        "Advanced battery storage integration",
        "Smart grid interaction capabilities",
        "Energy recycling from waste heat",
        "Carbon footprint reduction systems"
      ]
    }
  ];

  // Filter projects based on selected sector and year
  const filteredProjects = allProjects.filter(project => {
    const matchesSector = selectedSector === "all" || project.sector === selectedSector;
    const matchesYear = selectedYear === "all" || 
                        (selectedYear === "older" ? parseInt(project.year) <= 2021 : project.year === selectedYear);
    return matchesSector && matchesYear;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEOJsonLD
        title="Power Generator Projects | Kumar Power"
        description="Explore Kumar Power's portfolio of completed generator and power system projects across healthcare, data centers, commercial buildings, and more."
        url="https://kumarpower.com/projects"
        imageUrl="https://kumarpower.com/images/projects-hero.jpg"
      />

      <main>
        {/* Hero Banner */}
        <section className="bg-black py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/projects-hero_pattern_okvhg2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          <div className="container mx-auto text-center px-4 relative z-10">
            <div className="flex items-center justify-center mb-4">
              <span className="block h-px w-12 md:w-20 bg-white/70 mr-4" />
              <span className="text-white text-xl md:text-3xl font-semibold tracking-wider uppercase">
                PROJECT PORTFOLIO
              </span>
              <span className="block h-px w-12 md:w-20 bg-white/70 ml-4" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
              Powering India's Critical Infrastructure
            </h1>
            <div className="text-white/90 text-lg md:text-xl font-normal max-w-3xl mx-auto">
              Three decades of excellence in power generation solutions for the nation's most demanding environments
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-10 bg-blue-600"></div>
                <span className="text-blue-600 font-medium">OUR EXPERTISE</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">
                Trusted Power Solutions for Mission-Critical Applications
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-start">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Reliability Focused</h3>
                  <p className="text-gray-600">
                    Engineering excellence that ensures power when you need it most, with redundancy built into every solution.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Performance Driven</h3>
                  <p className="text-gray-600">
                    Systems designed to deliver optimal power quality, efficiency, and responsiveness for your specific requirements.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Long-term Vision</h3>
                  <p className="text-gray-600">
                    Solutions built to last with comprehensive service support and future expansion capabilities.
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 mb-8">
                For over three decades, Kumar Power has delivered uncompromising quality in power generation systems 
                across India's most demanding environments. Our portfolio showcases how we've helped businesses ensure 
                operational continuity, protect critical assets, and maintain energy security in the face of power uncertainties.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Link to="/contact">Discuss Your Project</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Showcase */}
        <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/blueprint_pattern_v2fsed.svg')",
            backgroundSize: "cover",
          }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="h-1 w-10 bg-blue-600"></div>
              <span className="text-blue-600 font-medium">FEATURED PROJECTS</span>
              <div className="h-1 w-10 bg-blue-600"></div>
            </div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Signature Power Solutions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Highlighting our most complex and impactful implementations across critical sectors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden flex flex-col border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <Badge className="absolute top-4 right-4 bg-blue-600 text-white hover:bg-blue-700">
                      Featured
                    </Badge>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
                      <Building2 size={16} />
                      <span className="font-semibold">{sectors.find(s => s.id === project.sector)?.name}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                    <div className="flex items-center gap-6 mb-4 text-gray-600 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 flex-grow">{project.description}</p>
                    <Button asChild variant="outline" className="mt-auto w-full group">
                      <a href={`#${project.id}`} className="flex items-center justify-center gap-2">
                        View Project Details 
                        <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="py-16 md:py-20 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/power_grid_pattern_hjtcvy.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="flex items-center gap-2 mb-4 justify-center">
                <div className="h-1 w-10 bg-blue-400"></div>
                <span className="text-blue-400 font-medium">OUR IMPACT</span>
                <div className="h-1 w-10 bg-blue-400"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Three Decades of Power Excellence
              </h2>
              <p className="text-lg opacity-90">
                Delivering reliable power solutions that keep India's critical infrastructure operational
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-4xl md:text-6xl font-bold mb-3 text-blue-400">500+</div>
                <div className="text-lg font-medium">Projects Completed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-4xl md:text-6xl font-bold mb-3 text-blue-400">28</div>
                <div className="text-lg font-medium">States Covered</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-4xl md:text-6xl font-bold mb-3 text-blue-400">1.5 GW</div>
                <div className="text-lg font-medium">Total Capacity Installed</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
                <div className="text-4xl md:text-6xl font-bold mb-3 text-blue-400">30+</div>
                <div className="text-lg font-medium">Years of Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* All Projects with Filters */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="h-1 w-10 bg-blue-600"></div>
              <span className="text-blue-600 font-medium">PROJECT PORTFOLIO</span>
              <div className="h-1 w-10 bg-blue-600"></div>
            </div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Complete Project Portfolio
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our comprehensive range of power solutions implemented across diverse sectors and environments
              </p>
            </div>
            
            {/* Filter Controls */}
            <div className="max-w-4xl mx-auto mb-12 p-8 rounded-xl bg-gray-50 border border-gray-100 shadow-sm">
              <div className="flex flex-col md:flex-row items-center gap-6 justify-between">
                <div className="flex items-center gap-3">
                  <Filter className="h-5 w-5 text-blue-600" />
                  <span className="font-medium text-gray-900">Filter Projects:</span>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <div className="relative">
                    <select 
                      value={selectedSector}
                      onChange={(e) => setSelectedSector(e.target.value)}
                      className="py-2 pl-4 pr-10 border border-gray-200 rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 appearance-none"
                    >
                      {sectors.map((sector) => (
                        <option key={sector.id} value={sector.id}>{sector.name}</option>
                      ))}
                    </select>
                    <ChevronRight className="absolute top-1/2 right-3 transform -translate-y-1/2 rotate-90 h-4 w-4 pointer-events-none text-gray-500" />
                  </div>
                  <div className="relative">
                    <select 
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="py-2 pl-4 pr-10 border border-gray-200 rounded-md bg-white shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-blue-600 appearance-none"
                    >
                      {years.map((year) => (
                        <option key={year.id} value={year.id}>{year.name}</option>
                      ))}
                    </select>
                    <ChevronRight className="absolute top-1/2 right-3 transform -translate-y-1/2 rotate-90 h-4 w-4 pointer-events-none text-gray-500" />
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-gray-500 mt-6">
                <div className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-blue-600" />
                  Showing {filteredProjects.length} of {allProjects.length} projects
                </div>
              </div>
            </div>
            
            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <Card key={project.id} id={project.id} className="overflow-hidden flex flex-col border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-md">
                    <div className="h-56 overflow-hidden relative group">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 p-4 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Badge className="bg-blue-600/90 hover:bg-blue-700 backdrop-blur-sm text-white">
                          {sectors.find(s => s.id === project.sector)?.name}
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{project.title}</h3>
                      <div className="flex items-center gap-4 mb-3 text-gray-500 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{project.year}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-5">{project.description}</p>
                      <div className="mt-auto pt-5 border-t border-gray-100">
                        <h4 className="font-medium mb-3 text-gray-900">Project Scope:</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {project.scope.slice(0, 3).map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-blue-600 font-bold mt-0.5">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                          {project.scope.length > 3 && (
                            <li className="text-blue-600 text-sm mt-1 font-medium">
                              + {project.scope.length - 3} more capabilities
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 text-center py-20 bg-gray-50 rounded-xl">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                    <Filter className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-xl text-gray-600 mb-4">No projects match your current filters.</p>
                  <Button 
                    onClick={() => {
                      setSelectedSector("all");
                      setSelectedYear("all");
                    }}
                    variant="outline" 
                    className="border-blue-600 text-blue-600 hover:bg-blue-50"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/tech_pattern_xz5gtu.svg')",
            backgroundSize: "cover",
          }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="h-1 w-10 bg-blue-600"></div>
              <span className="text-blue-600 font-medium">INDUSTRIES</span>
              <div className="h-1 w-10 bg-blue-600"></div>
            </div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Sectors We Power
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Specialized power solutions for industries where reliability is non-negotiable
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <Tabs defaultValue="healthcare" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-10 w-full bg-white border p-1 rounded-xl">
                  {sectors.filter(s => s.id !== "all").map(sector => (
                    <TabsTrigger key={sector.id} value={sector.id} className="data-[state=active]:bg-blue-600 data-[state=active]:text-white rounded-lg">
                      {sector.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                <TabsContent value="healthcare">
                  <Card className="p-8 border-0 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <img 
                          src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/healthcare_industry_mjeh2c.jpg" 
                          alt="Healthcare Facilities" 
                          className="rounded-lg w-full h-auto shadow-md"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex items-center gap-2 mb-3">
                          <Building2 className="h-5 w-5 text-blue-600" />
                          <h3 className="text-2xl font-bold text-gray-900">Healthcare Facilities</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                          Hospitals and healthcare facilities rely on Kumar Power for life-saving backup power systems 
                          that activate within seconds of a power interruption. Our solutions are designed with multiple 
                          redundancies, prioritized distribution for critical areas, and compliance with all healthcare 
                          regulatory requirements.
                        </p>
                        <div className="bg-blue-50 p-6 rounded-lg mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Considerations for Healthcare Power:</h4>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Sub-10 second power restoration for critical care areas</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Multiple redundancy layers for life-supporting systems</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Medical-grade power quality with minimal harmonics</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Regulatory compliance with healthcare standards</span>
                            </li>
                          </ul>
                        </div>
                        <Button asChild>
                          <Link to="/contact" className="flex items-center gap-2">
                            Discuss Healthcare Power Solutions
                            <ChevronRight size={16} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="data-center">
                  <Card className="p-8 border-0 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <img 
                          src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/datacenter_industry_fhtrvd.jpg" 
                          alt="Data Centers" 
                          className="rounded-lg w-full h-auto shadow-md"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex items-center gap-2 mb-3">
                          <Building2 className="h-5 w-5 text-blue-600" />
                          <h3 className="text-2xl font-bold text-gray-900">Data Centers</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                          Modern data centers require sophisticated power solutions with N+1 or 2N redundancy to ensure 
                          continuous operation. Kumar Power designs and implements comprehensive power generation systems 
                          that integrate with UPS and cooling infrastructure for Tier III and Tier IV data centers.
                        </p>
                        <div className="bg-blue-50 p-6 rounded-lg mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Considerations for Data Center Power:</h4>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Concurrently maintainable power architecture</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Advanced synchronization and load sharing</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Real-time monitoring with predictive analytics</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Energy efficiency optimizations and sustainable options</span>
                            </li>
                          </ul>
                        </div>
                        <Button asChild>
                          <Link to="/contact" className="flex items-center gap-2">
                            Discuss Data Center Power Solutions
                            <ChevronRight size={16} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="manufacturing">
                  <Card className="p-8 border-0 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <img 
                          src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/manufacturing_industry_jqfwcd.jpg" 
                          alt="Manufacturing" 
                          className="rounded-lg w-full h-auto shadow-md"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex items-center gap-2 mb-3">
                          <Building2 className="h-5 w-5 text-blue-600" />
                          <h3 className="text-2xl font-bold text-gray-900">Manufacturing</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                          Manufacturing facilities depend on reliable power to prevent production losses, equipment damage, 
                          and safety incidents. We provide custom power solutions for factories and plants that address specific 
                          requirements for clean power, load capacity, and minimal transition times.
                        </p>
                        <div className="bg-blue-50 p-6 rounded-lg mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Considerations for Manufacturing Power:</h4>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Process-specific power solutions for production continuity</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Power quality management for sensitive equipment</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Harmonic filtering and voltage stabilization</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Integration with factory automation systems</span>
                            </li>
                          </ul>
                        </div>
                        <Button asChild>
                          <Link to="/contact" className="flex items-center gap-2">
                            Discuss Manufacturing Power Solutions
                            <ChevronRight size={16} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="commercial">
                  <Card className="p-8 border-0 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <img 
                          src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/commercial_industry_qpydrg.jpg" 
                          alt="Commercial Buildings" 
                          className="rounded-lg w-full h-auto shadow-md"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex items-center gap-2 mb-3">
                          <Building2 className="h-5 w-5 text-blue-600" />
                          <h3 className="text-2xl font-bold text-gray-900">Commercial Buildings</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                          Office buildings, retail centers, and hotels require reliable backup power to maintain operations, 
                          safety systems, and tenant satisfaction during outages. Kumar Power delivers right-sized solutions 
                          that consider building aesthetics, noise concerns, and tenant requirements.
                        </p>
                        <div className="bg-blue-50 p-6 rounded-lg mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Considerations for Commercial Power:</h4>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Space-efficient installations with aesthetic integration</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Enhanced noise reduction for occupant comfort</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Selective load management for essential systems</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Building management system integration</span>
                            </li>
                          </ul>
                        </div>
                        <Button asChild>
                          <Link to="/contact" className="flex items-center gap-2">
                            Discuss Commercial Power Solutions
                            <ChevronRight size={16} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="infrastructure">
                  <Card className="p-8 border-0 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <img 
                          src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/infrastructure_industry_tplvbg.jpg" 
                          alt="Infrastructure" 
                          className="rounded-lg w-full h-auto shadow-md"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex items-center gap-2 mb-3">
                          <Building2 className="h-5 w-5 text-blue-600" />
                          <h3 className="text-2xl font-bold text-gray-900">Infrastructure</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                          Critical infrastructure such as airports, railways, toll plazas, and telecommunications requires 
                          specially designed power systems that can withstand harsh conditions and provide reliable operation 
                          in emergency situations.
                        </p>
                        <div className="bg-blue-50 p-6 rounded-lg mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Considerations for Infrastructure Power:</h4>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Ruggedized systems for extreme environmental conditions</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Distributed power solutions for linear infrastructure</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Remote monitoring with centralized control capabilities</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Hybrid power solutions for remote locations</span>
                            </li>
                          </ul>
                        </div>
                        <Button asChild>
                          <Link to="/contact" className="flex items-center gap-2">
                            Discuss Infrastructure Power Solutions
                            <ChevronRight size={16} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="residential">
                  <Card className="p-8 border-0 shadow-lg">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <img 
                          src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/residential_industry_kmonvg.jpg" 
                          alt="Residential" 
                          className="rounded-lg w-full h-auto shadow-md"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <div className="flex items-center gap-2 mb-3">
                          <Building2 className="h-5 w-5 text-blue-600" />
                          <h3 className="text-2xl font-bold text-gray-900">Residential</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                          Premium residential developments and luxury homes require seamless backup power solutions that 
                          operate quietly, efficiently, and with minimal maintenance. We provide elegant, low-profile 
                          generator systems that complement residential aesthetics.
                        </p>
                        <div className="bg-blue-50 p-6 rounded-lg mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Key Considerations for Residential Power:</h4>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Ultra-quiet operation with aesthetic enclosures</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Smart home integration and automation capabilities</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Selective load management for priority areas</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                              <span>Premium maintenance services with minimal disruption</span>
                            </li>
                          </ul>
                        </div>
                        <Button asChild>
                          <Link to="/contact" className="flex items-center gap-2">
                            Discuss Residential Power Solutions
                            <ChevronRight size={16} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/cta_pattern_bg_mzfthw.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-600/20 backdrop-blur-sm p-10 md:p-16 rounded-2xl border border-blue-500/20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Power Your Next Project?
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                    Our expert team is prepared to design and implement a tailored power solution 
                    that meets your specific requirements and ensures operational continuity.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full md:w-auto text-base">
                    <Link to="/contact">Request Project Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full md:w-auto text-base">
                    <Link to="/services">Explore Our Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
