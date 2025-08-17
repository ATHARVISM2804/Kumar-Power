import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, FileText, Shield, Wrench, Clock, Calendar, AlertCircle } from 'lucide-react';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const AnnualMaintenanceService = () => {
  // AMC plan features
  const amcPlans = [
    {
      title: "Basic AMC",
      price: "₹25,000",
      features: [
        "Quarterly preventive maintenance visits",
        "Basic parts replacement",
        "48-hour emergency response",
        "Remote diagnostics support",
        "Service reports"
      ],
      isPopular: false
    },
    {
      title: "Standard AMC",
      price: "₹40,000",
      features: [
        "Bi-monthly preventive maintenance visits",
        "Standard parts replacement",
        "24-hour emergency response",
        "Remote diagnostics support",
        "Detailed performance analysis",
        "Operator training"
      ],
      isPopular: true
    },
    {
      title: "Premium AMC",
      price: "₹60,000",
      features: [
        "Monthly preventive maintenance visits",
        "Comprehensive parts replacement",
        "12-hour emergency response",
        "Remote monitoring system",
        "Detailed performance analysis",
        "Operator training",
        "Annual system audit",
        "Temporary generator backup during extended repairs"
      ],
      isPopular: false
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What does the Annual Maintenance Contract cover?",
      answer: "Our AMC covers scheduled preventive maintenance visits, troubleshooting, repairs, part replacements as per the selected plan, technical support, and emergency response services. Each plan offers different levels of coverage, but all ensure your power systems operate efficiently with minimal downtime."
    },
    {
      question: "How often will maintenance be performed?",
      answer: "Maintenance frequency depends on your selected plan. Basic AMC includes quarterly visits, Standard AMC includes bi-monthly visits, and Premium AMC includes monthly visits. Additional visits can be arranged as needed for specific requirements."
    },
    {
      question: "Are parts included in the AMC?",
      answer: "Yes, replacement parts are included based on your selected plan. Basic AMC covers essential parts, Standard AMC includes most common replacement components, and Premium AMC offers comprehensive parts coverage. Consumables like oil and filters are included in all plans."
    },
    {
      question: "What is the emergency response time?",
      answer: "Emergency response times vary by plan: Basic AMC ensures 48-hour response, Standard AMC provides 24-hour response, and Premium AMC guarantees 12-hour response. For critical facilities, we can customize response times to meet your specific needs."
    },
    {
      question: "Can I customize my AMC plan?",
      answer: "Yes, we offer customized AMC plans tailored to your specific requirements. Our team will assess your power systems and develop a maintenance program that addresses your unique needs, equipment configuration, and operational demands."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEOJsonLD
        title="Annual Maintenance Contracts | Kumar Power"
        description="Comprehensive annual maintenance contracts for power generators and equipment. Keep your power systems running at peak efficiency with our expert maintenance services."
        url="https://kumarpower.com/services/annual-maintenance"
        imageUrl="https://kumarpower.com/images/maintenance-service.jpg"
      />

      <main>
        {/* Hero Banner */}
        <div className="bg-black py-8 md:py-12">
          <div className="container mx-auto text-center px-4">
            <div className="flex items-center justify-center mb-1">
              <span className="block h-px w-8 md:w-16 bg-white mr-2 md:mr-4" />
              <span className="text-white text-xl md:text-3xl font-semibold tracking-wide">
                ANNUAL MAINTENANCE CONTRACTS
              </span>
              <span className="block h-px w-8 md:w-16 bg-white ml-2 md:ml-4" />
            </div>
            <div className="text-white text-lg md:text-xl font-normal">
              Preventive care for uninterrupted power.
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  Keep Your Power Systems Running at Peak Efficiency
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Our Annual Maintenance Contracts (AMC) provide scheduled preventive maintenance, prompt repairs, and 
                  emergency support to ensure your power generation equipment operates reliably year-round.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  With Kumar Power's expert technicians and genuine Kirloskar parts, you can minimize downtime, 
                  extend equipment life, and optimize performance for maximum ROI.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Link to="/contact">Request AMC Quote</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/services">View All Services</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/maintenance_service_detailed_vfgm3h.jpg" 
                  alt="Technician performing maintenance" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Benefits of Our Annual Maintenance Contracts
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Proactive maintenance is the key to reliable power generation and equipment longevity
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="mb-4 text-blue-600">
                  <Shield className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Prevent Costly Breakdowns</h3>
                <p className="text-muted-foreground">
                  Regular maintenance identifies and resolves potential issues before they lead to major failures and expensive repairs.
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="mb-4 text-blue-600">
                  <Clock className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Minimize Downtime</h3>
                <p className="text-muted-foreground">
                  Scheduled maintenance during off-peak hours and priority emergency response ensure your operations continue without interruption.
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="mb-4 text-blue-600">
                  <Calendar className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Extend Equipment Life</h3>
                <p className="text-muted-foreground">
                  Proper maintenance significantly extends the operational lifespan of generators and power equipment, maximizing your investment.
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="mb-4 text-blue-600">
                  <AlertCircle className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Regulatory Compliance</h3>
                <p className="text-muted-foreground">
                  Our maintenance protocols ensure your equipment meets all environmental and safety regulations, avoiding potential penalties.
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="mb-4 text-blue-600">
                  <FileText className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Detailed Documentation</h3>
                <p className="text-muted-foreground">
                  Comprehensive service records and performance reports help with warranty claims, insurance requirements, and future planning.
                </p>
              </Card>
              
              <Card className="p-6">
                <div className="mb-4 text-blue-600">
                  <Wrench className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Technicians</h3>
                <p className="text-muted-foreground">
                  All maintenance is performed by Kirloskar-certified engineers with extensive experience across our full range of equipment.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* AMC Plans */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Choose the Right AMC Plan for Your Needs
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Flexible maintenance contracts designed to meet different operational requirements and budgets
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {amcPlans.map((plan, index) => (
                <Card key={index} className={`overflow-hidden flex flex-col ${plan.isPopular ? 'border-blue-600 border-2' : ''}`}>
                  {plan.isPopular && (
                    <div className="bg-blue-600 text-white text-center py-2">
                      <span className="font-medium">Most Popular</span>
                    </div>
                  )}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                    <div className="text-3xl font-bold mb-4">{plan.price}<span className="text-lg text-muted-foreground font-normal"> / year</span></div>
                    <ul className="mb-6 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 mb-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className={`w-full mt-auto ${plan.isPopular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}>
                      <Link to="/contact">Get Started</Link>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8 text-muted-foreground">
              <p>* All prices are starting prices. Final quote depends on equipment specifications and quantity.</p>
              <p>* Customized plans available for special requirements.</p>
            </div>
          </div>
        </section>

        {/* Maintenance Process */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Our Maintenance Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to ensure comprehensive care for your power equipment
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <h3 className="text-xl font-bold mb-2">Initial System Assessment</h3>
                    <p className="text-muted-foreground">
                      Complete evaluation of all power generation equipment to establish baseline conditions and identify any immediate concerns that need addressing.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <h3 className="text-xl font-bold mb-2">Scheduled Preventive Maintenance</h3>
                    <p className="text-muted-foreground">
                      Regular visits based on your AMC plan to perform comprehensive maintenance including fluid checks, filter replacements, battery testing, and system calibration.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <h3 className="text-xl font-bold mb-2">Performance Testing & Analysis</h3>
                    <p className="text-muted-foreground">
                      Load testing, efficiency measurements, and emissions monitoring to ensure optimal performance and regulatory compliance.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <h3 className="text-xl font-bold mb-2">Detailed Reporting</h3>
                    <p className="text-muted-foreground">
                      Comprehensive service reports documenting all maintenance performed, parts replaced, system performance metrics, and recommendations for future improvements.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                    <h3 className="text-xl font-bold mb-2">Continuous Support</h3>
                    <p className="text-muted-foreground">
                      Ongoing technical assistance, emergency response, and proactive notifications for scheduled maintenance to ensure your equipment operates reliably.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Common questions about our Annual Maintenance Contracts
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Ready to Secure Your Power Equipment's Performance?
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Contact our service team today to discuss the ideal Annual Maintenance Contract for your power systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/contact">Request AMC Quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700">
                  <Link to="/services">Explore Other Services</Link>
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

export default AnnualMaintenanceService;
