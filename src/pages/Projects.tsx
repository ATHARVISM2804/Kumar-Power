import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building, Building2, Calendar, ChevronRight, Filter, MapPin } from 'lucide-react';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
        <div className="bg-black py-8 md:py-12">
          <div className="container mx-auto text-center px-4">
            <div className="flex items-center justify-center mb-1">
              <span className="block h-px w-8 md:w-16 bg-white mr-2 md:mr-4" />
              <span className="text-white text-xl md:text-3xl font-semibold tracking-wide">
                OUR PROJECTS
              </span>
              <span className="block h-px w-8 md:w-16 bg-white ml-2 md:ml-4" />
            </div>
            <div className="text-white text-lg md:text-xl font-normal">
              Power solutions delivered across India.
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Our Project Portfolio
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                For over three decades, Kumar Power has delivered reliable power solutions for critical 
                facilities and demanding applications across India. Explore our featured projects and 
                discover how we've helped businesses ensure uninterrupted operations and energy security.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects Showcase */}
        <section className="py-12 md:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Featured Projects
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Highlighting some of our most significant recent installations and power solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden flex flex-col">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                      <Building2 size={16} />
                      <span className="font-medium">{sectors.find(s => s.id === project.sector)?.name}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <div className="flex items-center gap-4 mb-3 text-muted-foreground text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                    <Button asChild variant="outline" className="mt-auto">
                      <a href={`#${project.id}`} className="flex items-center justify-center gap-2">
                        View Details <ChevronRight size={16} />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects with Filters */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Complete Project Portfolio
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Browse our full range of completed projects across various sectors and timeframes
              </p>
            </div>
            
            {/* Filter Controls */}
            <div className="mb-10">
              <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-muted-foreground" />
                  <span className="font-medium">Filter by:</span>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  <div>
                    <select 
                      value={selectedSector}
                      onChange={(e) => setSelectedSector(e.target.value)}
                      className="py-2 px-4 border rounded-md bg-background"
                    >
                      {sectors.map((sector) => (
                        <option key={sector.id} value={sector.id}>{sector.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <select 
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="py-2 px-4 border rounded-md bg-background"
                    >
                      {years.map((year) => (
                        <option key={year.id} value={year.id}>{year.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-muted-foreground">
                Showing {filteredProjects.length} of {allProjects.length} projects
              </div>
            </div>
            
            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <Card key={project.id} id={project.id} className="overflow-hidden flex flex-col">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                        <Building2 size={16} />
                        <span className="font-medium">{sectors.find(s => s.id === project.sector)?.name}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <div className="flex items-center gap-4 mb-3 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{project.year}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="mt-4 pt-4 border-t">
                        <h4 className="font-medium mb-2">Project Scope:</h4>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {project.scope.slice(0, 3).map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <span className="text-blue-600 font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                          {project.scope.length > 3 && (
                            <li className="text-blue-600 text-sm mt-1">+ {project.scope.length - 3} more items</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-xl text-muted-foreground">No projects match your current filters.</p>
                  <Button 
                    onClick={() => {
                      setSelectedSector("all");
                      setSelectedYear("all");
                    }}
                    variant="outline" 
                    className="mt-4"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="py-12 md:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Our Project Experience
              </h2>
              <p className="text-lg opacity-90">
                Three decades of providing reliable power solutions across India
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <div className="text-lg">Projects Completed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">28</div>
                <div className="text-lg">States Covered</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">1.5 GW</div>
                <div className="text-lg">Total Capacity Installed</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold mb-2">30+</div>
                <div className="text-lg">Years of Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our power solutions are trusted across these critical sectors
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="healthcare">
                <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
                  <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
                  <TabsTrigger value="data">Data Centers</TabsTrigger>
                  <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
                  <TabsTrigger value="commercial">Commercial</TabsTrigger>
                  <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
                  <TabsTrigger value="residential">Residential</TabsTrigger>
                </TabsList>
                
                <TabsContent value="healthcare">
                  <Card className="p-6">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <img 
                          src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/healthcare_industry_mjeh2c.jpg" 
                          alt="Healthcare Facilities" 
                          className="rounded-lg w-full h-auto"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold mb-3">Healthcare Facilities</h3>
                        <p className="text-muted-foreground mb-4">
                          Hospitals and healthcare facilities rely on Kumar Power for life-saving backup power systems 
                          that activate within seconds of a power interruption. Our solutions are designed with multiple 
                          redundancies, prioritized distribution for critical areas, and compliance with all healthcare 
                          regulatory requirements.
                        </p>
                        <h4 className="font-medium mb-2">Our expertise includes:</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Emergency power systems for operating theaters and ICUs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Multi-tier redundant systems for zero-downtime requirements</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Integration with medical equipment and hospital management systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Advanced noise reduction for patient comfort</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="data">
                  <Card className="p-6">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <img 
                          src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/datacenter_industry_fhtrvd.jpg" 
                          alt="Data Centers" 
                          className="rounded-lg w-full h-auto"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold mb-3">Data Centers</h3>
                        <p className="text-muted-foreground mb-4">
                          Modern data centers require sophisticated power solutions with N+1 or 2N redundancy to ensure 
                          continuous operation. Kumar Power designs and implements comprehensive power generation systems 
                          that integrate with UPS and cooling infrastructure for Tier III and Tier IV data centers.
                        </p>
                        <h4 className="font-medium mb-2">Our expertise includes:</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Parallel generator systems with sophisticated load sharing</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Fully redundant power distribution architecture</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Advanced monitoring and predictive maintenance systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Green data center solutions with hybrid power options</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="manufacturing">
                  <Card className="p-6">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <img 
                          src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/manufacturing_industry_jqfwcd.jpg" 
                          alt="Manufacturing" 
                          className="rounded-lg w-full h-auto"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
                        <p className="text-muted-foreground mb-4">
                          Manufacturing facilities depend on reliable power to prevent production losses, equipment damage, 
                          and safety incidents. We provide custom power solutions for factories and plants that address specific 
                          requirements for clean power, load capacity, and minimal transition times.
                        </p>
                        <h4 className="font-medium mb-2">Our expertise includes:</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Power quality management for sensitive equipment</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Process-specific power solutions for production continuity</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Harmonic filtering and voltage regulation systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Integration with factory automation systems</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="commercial">
                  <Card className="p-6">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <img 
                          src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/commercial_industry_qpydrg.jpg" 
                          alt="Commercial Buildings" 
                          className="rounded-lg w-full h-auto"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold mb-3">Commercial Buildings</h3>
                        <p className="text-muted-foreground mb-4">
                          Office buildings, retail centers, and hotels require reliable backup power to maintain operations, 
                          safety systems, and tenant satisfaction during outages. Kumar Power delivers right-sized solutions 
                          that consider building aesthetics, noise concerns, and tenant requirements.
                        </p>
                        <h4 className="font-medium mb-2">Our expertise includes:</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Space-efficient installations for urban buildings</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Enhanced noise reduction for tenant comfort</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Selective load management for essential systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Building management system integration</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="infrastructure">
                  <Card className="p-6">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <img 
                          src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/infrastructure_industry_tplvbg.jpg" 
                          alt="Infrastructure" 
                          className="rounded-lg w-full h-auto"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold mb-3">Infrastructure</h3>
                        <p className="text-muted-foreground mb-4">
                          Critical infrastructure such as airports, railways, toll plazas, and telecommunications requires 
                          specially designed power systems that can withstand harsh conditions and provide reliable operation 
                          in emergency situations.
                        </p>
                        <h4 className="font-medium mb-2">Our expertise includes:</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Ruggedized systems for outdoor and harsh environments</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Distributed power solutions for linear infrastructure</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Remote monitoring and control systems</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Hybrid power solutions for remote locations</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
                
                <TabsContent value="residential">
                  <Card className="p-6">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-1/3">
                        <img 
                          src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755015000/residential_industry_kmonvg.jpg" 
                          alt="Residential" 
                          className="rounded-lg w-full h-auto"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-bold mb-3">Residential</h3>
                        <p className="text-muted-foreground mb-4">
                          Premium residential developments and luxury homes require seamless backup power solutions that 
                          operate quietly, efficiently, and with minimal maintenance. We provide elegant, low-profile 
                          generator systems that complement residential aesthetics.
                        </p>
                        <h4 className="font-medium mb-2">Our expertise includes:</h4>
                        <ul className="space-y-1 text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Ultra-quiet residential generators with aesthetic enclosures</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Smart home integration and automation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Common area and individual unit power management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-blue-600 font-bold">•</span>
                            <span>Concierge maintenance services for residential communities</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Ready to Discuss Your Power Project?
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Our experienced team can help design and implement the perfect power solution for your specific requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/contact">Request Project Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  <Link to="/services">Explore Our Services</Link>
                </Button>
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
