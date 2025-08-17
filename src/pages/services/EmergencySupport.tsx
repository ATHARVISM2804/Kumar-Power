import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, PhoneCall, Clock, Truck, Zap, AlertTriangle, Shield } from 'lucide-react';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const EmergencySupportService = () => {
  // Emergency service benefits
  const serviceBenefits = [
    {
      icon: <PhoneCall className="h-10 w-10 text-blue-600" />,
      title: "24/7/365 Response",
      description: "Our emergency hotline is always open, with skilled technicians ready to respond at any hour, any day of the year."
    },
    {
      icon: <Clock className="h-10 w-10 text-blue-600" />,
      title: "Rapid Deployment",
      description: "Our strategically positioned service teams can reach most locations within 1-3 hours, minimizing downtime."
    },
    {
      icon: <Truck className="h-10 w-10 text-blue-600" />,
      title: "Mobile Service Units",
      description: "Fully equipped service vehicles with common parts and specialized tools for on-site emergency repairs."
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-600" />,
      title: "Priority Parts Access",
      description: "Emergency customers receive priority access to our extensive parts inventory and emergency shipping options."
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-blue-600" />,
      title: "Temporary Power Solutions",
      description: "Immediate access to rental generators while your equipment is being repaired for uninterrupted operations."
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "Service Level Guarantees",
      description: "Clear response time commitments and service level agreements for critical infrastructure clients."
    }
  ];

  // Common emergency scenarios
  const emergencyScenarios = [
    {
      title: "Complete System Failure",
      description: "When your generator fails to start or shuts down unexpectedly, causing total power loss to your facility."
    },
    {
      title: "Control System Issues",
      description: "Malfunctions in the control panel preventing proper operation or automatic transfer switch failures."
    },
    {
      title: "Fuel System Problems",
      description: "Fuel leaks, contamination, or delivery system failures that prevent generator operation."
    },
    {
      title: "Overheating & Cooling Failures",
      description: "Radiator issues, coolant leaks, or fan failures causing the generator to overheat and shut down."
    },
    {
      title: "Electrical Faults",
      description: "Short circuits, alternator problems, or voltage regulation issues affecting power quality."
    },
    {
      title: "Weather-Related Emergencies",
      description: "Generator issues during storms, floods, or extreme weather when grid power is also compromised."
    }
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How quickly can you respond to an emergency?",
      answer: "Our standard emergency response time is 1-3 hours in urban areas and 2-4 hours in remote locations. For clients with priority service agreements, we guarantee even faster response times. Our nationwide network of service centers and mobile units enables us to quickly reach most locations across India."
    },
    {
      question: "What should I do while waiting for emergency service?",
      answer: "First, ensure safety by shutting down the generator if there's visible damage, smoke, or unusual odors. Secure the area to prevent access to potentially dangerous equipment. Our phone support can guide you through basic troubleshooting and safety measures until our technicians arrive. For critical facilities, activate your backup plans if available."
    },
    {
      question: "Can you provide temporary power during an emergency?",
      answer: "Yes, we maintain a fleet of rental generators ranging from 5kVA to 2000kVA that can be deployed rapidly during emergencies. Our team will assess your power requirements and deliver, install, and connect an appropriate temporary generator to keep your operations running while repairs are made to your primary system."
    },
    {
      question: "Do you carry parts for emergency repairs?",
      answer: "Our mobile service units are stocked with commonly needed parts and components for most generator brands and models. We also maintain extensive parts inventories at our service centers with overnight delivery options. For specialized components, we have expedited ordering arrangements with all major manufacturers."
    },
    {
      question: "How much does emergency service cost?",
      answer: "Emergency service rates depend on factors including time of day, distance, equipment type, and required repairs. We provide transparent pricing with clear callout fees and hourly rates. Clients with service contracts receive preferential emergency rates. We'll always provide a cost estimate before proceeding with major repairs."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEOJsonLD
        title="24/7 Emergency Generator Support | Kumar Power"
        description="Round-the-clock emergency response services for generator breakdowns and power failures. Rapid deployment, mobile service units, and temporary power solutions."
        url="https://kumarpower.com/services/emergency-support"
        imageUrl="https://kumarpower.com/images/emergency-service.jpg"
      />

      <main>
        {/* Hero Banner */}
        <div className="bg-black py-8 md:py-12">
          <div className="container mx-auto text-center px-4">
            <div className="flex items-center justify-center mb-1">
              <span className="block h-px w-8 md:w-16 bg-white mr-2 md:mr-4" />
              <span className="text-white text-xl md:text-3xl font-semibold tracking-wide">
                24/7 EMERGENCY SUPPORT
              </span>
              <span className="block h-px w-8 md:w-16 bg-white ml-2 md:ml-4" />
            </div>
            <div className="text-white text-lg md:text-xl font-normal">
              Always ready when power is critical.
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">
                  Reliable Emergency Support When You Need It Most
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Power outages and equipment failures don't follow a schedule. That's why Kumar Power's 
                  emergency response team is available 24 hours a day, 7 days a week, 365 days a year.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Our rapid response teams are strategically positioned across India to provide fast, 
                  effective emergency service when your power systems fail, minimizing downtime 
                  and protecting your operations.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                    <a href="tel:+918888888888" className="flex items-center gap-2">
                      <PhoneCall size={20} /> Emergency Hotline
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">Request Priority Service</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/emergency_service_detailed_dh6fsg.jpg" 
                  alt="Emergency generator service technician" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Service Benefits */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Our Emergency Service Advantage
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Why businesses across India trust Kumar Power for their critical emergency response needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceBenefits.map((benefit, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Response Process */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Our Emergency Response Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A systematic approach designed for swift resolution of power emergencies
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-red-600"></div>
                
                {/* Timeline items */}
                <div className="space-y-12">
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <h3 className="text-xl font-bold mb-2">Emergency Call Received</h3>
                    <p className="text-muted-foreground">
                      Your call is immediately answered by our trained emergency dispatchers who collect critical information about 
                      your situation and equipment.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <h3 className="text-xl font-bold mb-2">Initial Remote Diagnostics</h3>
                    <p className="text-muted-foreground">
                      Our technical specialists provide immediate phone guidance to help identify the issue and potentially 
                      resolve simple problems while the response team is dispatched.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <h3 className="text-xl font-bold mb-2">Rapid Team Deployment</h3>
                    <p className="text-muted-foreground">
                      The nearest service team is dispatched with a fully equipped mobile unit carrying common parts and 
                      specialized tools for your generator model.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <h3 className="text-xl font-bold mb-2">On-Site Diagnostics & Repair</h3>
                    <p className="text-muted-foreground">
                      Our technicians quickly diagnose the issue on arrival and begin immediate repairs, keeping you informed 
                      throughout the process.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                    <h3 className="text-xl font-bold mb-2">Temporary Solutions Deployment</h3>
                    <p className="text-muted-foreground">
                      If repairs require extended time, we arrange for temporary power solutions to keep your operations running 
                      while more comprehensive repairs are made.
                    </p>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">6</div>
                    <h3 className="text-xl font-bold mb-2">Resolution & Follow-up</h3>
                    <p className="text-muted-foreground">
                      Once repairs are complete, we verify system operation under load, provide detailed documentation of the issue and solution, 
                      and schedule any necessary follow-up service.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Emergency Scenarios */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Common Emergency Scenarios We Handle
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our emergency teams are equipped to handle a wide range of power system failures
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergencyScenarios.map((scenario, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-3">{scenario.title}</h3>
                  <p className="text-muted-foreground">
                    {scenario.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Priority Service Plans */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Priority Emergency Service Plans
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                For businesses where power is mission-critical, our priority service plans provide enhanced emergency coverage
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden flex flex-col">
                <div className="p-6 bg-blue-50 border-b">
                  <h3 className="text-xl font-bold mb-2">Silver Priority</h3>
                  <div className="text-3xl font-bold">₹30,000<span className="text-lg text-muted-foreground font-normal">/year</span></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <ul className="mb-6 flex-grow">
                    <li className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>4-hour response guarantee</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>Priority dispatch status</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>10% discount on emergency rates</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>Quarterly system health checks</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-auto">
                    <Link to="/contact">Select Plan</Link>
                  </Button>
                </div>
              </Card>
              
              <Card className="overflow-hidden flex flex-col border-2 border-blue-600 relative">
                <div className="bg-blue-600 text-white text-center py-2">
                  <span className="font-medium">Most Popular</span>
                </div>
                <div className="p-6 bg-blue-50 border-b">
                  <h3 className="text-xl font-bold mb-2">Gold Priority</h3>
                  <div className="text-3xl font-bold">₹50,000<span className="text-lg text-muted-foreground font-normal">/year</span></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <ul className="mb-6 flex-grow">
                    <li className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>2-hour response guarantee</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>High priority dispatch status</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>20% discount on emergency rates</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>Bi-monthly system health checks</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>4-hour temporary generator delivery</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-auto bg-blue-600 hover:bg-blue-700">
                    <Link to="/contact">Select Plan</Link>
                  </Button>
                </div>
              </Card>
              
              <Card className="overflow-hidden flex flex-col">
                <div className="p-6 bg-blue-50 border-b">
                  <h3 className="text-xl font-bold mb-2">Platinum Priority</h3>
                  <div className="text-3xl font-bold">₹80,000<span className="text-lg text-muted-foreground font-normal">/year</span></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <ul className="mb-6 flex-grow">
                    <li className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>90-minute response guarantee</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>Highest priority dispatch</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>30% discount on emergency rates</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>Monthly system health checks</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>2-hour temporary generator delivery</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                      <span>Dedicated emergency contact</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-auto">
                    <Link to="/contact">Select Plan</Link>
                  </Button>
                </div>
              </Card>
            </div>
            <div className="text-center mt-8 text-muted-foreground">
              <p>* Response times vary by location. Priority plans available for multiple sites.</p>
              <p>* Customized emergency response plans available for enterprise clients.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Common questions about our emergency support services
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
        <section className="py-12 md:py-20 bg-red-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Emergency Power Support When You Need It Most
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Don't wait until disaster strikes. Save our emergency hotline number and consider a priority service plan for critical facilities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  <a href="tel:+918888888888" className="flex items-center gap-2">
                    <PhoneCall size={20} /> Emergency Hotline
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-red-700">
                  <Link to="/contact">Inquire About Priority Plans</Link>
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

export default EmergencySupportService;
