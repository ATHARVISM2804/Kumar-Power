import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, PhoneCall, Clock, Truck, Zap, AlertTriangle, Shield, ArrowRight, Headset, LifeBuoy, Siren } from 'lucide-react';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

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

  // Emergency response statistics
  const responseStats = [
    { value: "15", label: "Minutes", description: "Average initial phone response time" },
    { value: "<2", label: "Hours", description: "Average on-site arrival time" },
    { value: "98%", label: "Resolution", description: "First-visit resolution rate" },
    { value: "24/7", label: "Support", description: "Emergency hotline availability" }
  ];

  // Common emergency scenarios
  const emergencyScenarios = [
    {
      title: "Complete System Failure",
      description: "When your generator fails to start or shuts down unexpectedly, causing total power loss to your facility.",
      icon: <AlertTriangle className="h-8 w-8 text-blue-600 mb-3" />
    },
    {
      title: "Control System Issues",
      description: "Malfunctions in the control panel preventing proper operation or automatic transfer switch failures.",
      icon: <Zap className="h-8 w-8 text-blue-600 mb-3" />
    },
    {
      title: "Fuel System Problems",
      description: "Fuel leaks, contamination, or delivery system failures that prevent generator operation.",
      icon: <Truck className="h-8 w-8 text-blue-600 mb-3" />
    },
    {
      title: "Overheating & Cooling Failures",
      description: "Radiator issues, coolant leaks, or fan failures causing the generator to overheat and shut down.",
      icon: <Siren className="h-8 w-8 text-blue-600 mb-3" />
    },
    {
      title: "Electrical Faults",
      description: "Short circuits, alternator problems, or voltage regulation issues affecting power quality.",
      icon: <LifeBuoy className="h-8 w-8 text-blue-600 mb-3" />
    },
    {
      title: "Weather-Related Emergencies",
      description: "Generator issues during storms, floods, or extreme weather when grid power is also compromised.",
      icon: <Shield className="h-8 w-8 text-blue-600 mb-3" />
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
    },
    {
      question: "Are your technicians qualified to work on all generator brands?",
      answer: "Yes, our emergency response technicians are factory-trained and certified to work on all major generator brands including Cummins, Caterpillar, MTU, Kohler, Kirloskar, and many others. Our teams are regularly updated with the latest technical training to handle both legacy equipment and the newest generator models."
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
        <div className="bg-black py-12 md:py-16">
          <div className="container mx-auto text-center px-4">
            <Badge className="mb-4 bg-blue-600 text-white hover:bg-blue-700">Critical Response</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">24/7 Emergency Support</h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Rapid response solutions for power emergencies when every minute counts
            </p>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <a href="tel:+918888888888" className="flex items-center gap-2">
                <PhoneCall size={20} /> Emergency Hotline
              </a>
            </Button>
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block mb-4">
                  <div className="flex items-center">
                    <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                    <span className="text-blue-600 font-semibold tracking-wider">EMERGENCY RESPONSE</span>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Reliable Emergency Support When You Need It Most
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Power outages and equipment failures don't follow a schedule. That's why Kumar Power's 
                  emergency response team is available 24 hours a day, 7 days a week, 365 days a year to 
                  ensure your operations can continue without disruption.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Our rapid response teams are strategically positioned across India to provide fast, 
                  effective emergency service when your power systems fail, minimizing downtime 
                  and protecting your critical infrastructure and business continuity.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <a href="tel:+918888888888" className="flex items-center gap-2">
                      <PhoneCall size={20} /> Emergency Hotline
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link to="/contact">Request Priority Service</Link>
                  </Button>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1755014000/emergency_service_detailed_dh6fsg.jpg" 
                  alt="Emergency generator service technician" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Response Statistics */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                  <span className="text-blue-400 font-semibold tracking-wider">RAPID RESPONSE METRICS</span>
                  <span className="block h-1 w-10 bg-blue-600 ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Emergency Response Performance
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We understand that during power emergencies, every minute counts. Our service metrics demonstrate our commitment to rapid, effective response.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {responseStats.map((stat, index) => (
                <div key={index} className="text-center p-8 bg-gray-900 rounded-lg border border-gray-800 hover:border-blue-600 transition-all duration-300">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{stat.value}</div>
                  <div className="text-xl font-semibold mb-3 text-white">{stat.label}</div>
                  <p className="text-gray-300">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Service Benefits */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                  <span className="text-blue-600 font-semibold tracking-wider">THE KUMAR POWER DIFFERENCE</span>
                  <span className="block h-1 w-10 bg-blue-600 ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Emergency Service Advantage
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Why businesses across India trust Kumar Power for their critical emergency response needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceBenefits.map((benefit, index) => (
                <Card key={index} className="p-8 border-2 hover:border-blue-600 transition-all duration-300">
                  <div className="mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Response Process */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                  <span className="text-blue-400 font-semibold tracking-wider">OUR STRUCTURED APPROACH</span>
                  <span className="block h-1 w-10 bg-blue-600 ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Emergency Response Process
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                A systematic approach designed for swift resolution of power emergencies
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>
                
                {/* Timeline items */}
                <div className="space-y-16">
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">Emergency Call Received</h3>
                    <p className="text-gray-300 mb-4">
                      Your call is immediately answered by our trained emergency dispatchers who collect critical information about 
                      your situation and equipment.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Dedicated emergency hotline available 24/7/365</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Technically trained dispatchers prioritize response</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">Initial Remote Diagnostics</h3>
                    <p className="text-gray-300 mb-4">
                      Our technical specialists provide immediate phone guidance to help identify the issue and potentially 
                      resolve simple problems while the response team is dispatched.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Expert troubleshooting begins immediately</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Remote monitoring connection when available</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">Rapid Team Deployment</h3>
                    <p className="text-gray-300 mb-4">
                      The nearest service team is dispatched with a fully equipped mobile unit carrying common parts and 
                      specialized tools for your generator model.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">GPS-optimized routing for fastest arrival</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Real-time status updates on technician arrival</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">On-Site Diagnostics & Repair</h3>
                    <p className="text-gray-300 mb-4">
                      Our technicians quickly diagnose the issue on arrival and begin immediate repairs, keeping you informed 
                      throughout the process.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Advanced diagnostic equipment for rapid troubleshooting</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Most common repairs completed on first visit</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">Temporary Solutions Deployment</h3>
                    <p className="text-gray-300 mb-4">
                      If repairs require extended time, we arrange for temporary power solutions to keep your operations running 
                      while more comprehensive repairs are made.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Fleet of rental generators from 5kVA to 2000kVA</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Complete installation and connection services</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="relative pl-12 md:pl-20">
                    <div className="absolute left-0 md:left-4 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">6</div>
                    <h3 className="text-2xl font-bold mb-3 text-blue-400">Resolution & Follow-up</h3>
                    <p className="text-gray-300 mb-4">
                      Once repairs are complete, we verify system operation under load, provide detailed documentation of the issue and solution, 
                      and schedule any necessary follow-up service.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Comprehensive testing under load conditions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">Root cause analysis to prevent recurrence</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Emergency Scenarios */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                  <span className="text-blue-600 font-semibold tracking-wider">EMERGENCY EXPERTISE</span>
                  <span className="block h-1 w-10 bg-blue-600 ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Common Emergency Scenarios We Handle
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our emergency teams are equipped to handle a wide range of power system failures
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {emergencyScenarios.map((scenario, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-t-4 border-blue-600 text-center">
                  {scenario.icon}
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
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                  <span className="text-blue-400 font-semibold tracking-wider">PRIORITY COVERAGE</span>
                  <span className="block h-1 w-10 bg-blue-600 ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Priority Emergency Service Plans
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                For businesses where power is mission-critical, our priority service plans provide enhanced emergency coverage and guaranteed response times
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="overflow-hidden flex flex-col bg-gray-900 border-gray-800 text-white">
                <div className="p-6 bg-gray-800 border-b border-gray-700">
                  <h3 className="text-xl font-bold mb-2 text-white">Silver Priority</h3>
                  <div className="text-3xl font-bold text-white">₹30,000<span className="text-lg text-gray-400 font-normal">/year</span></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <ul className="mb-6 flex-grow">
                    <li className="flex items-center gap-3 mb-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span>4-hour response guarantee</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span>Priority dispatch status</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span>10% discount on emergency rates</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span>Quarterly system health checks</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-auto bg-blue-600 hover:bg-blue-700">
                    <Link to="/contact">Select Plan</Link>
                  </Button>
                </div>
              </Card>
              
              <Card className="overflow-hidden flex flex-col bg-gray-900 border-gray-800 text-white border-2 border-blue-600 relative">
                <div className="bg-blue-600 text-white text-center py-2">
                  <span className="font-medium">Most Popular</span>
                </div>
                <div className="p-6 bg-gray-800 border-b border-gray-700">
                  <h3 className="text-xl font-bold mb-2 text-white">Gold Priority</h3>
                  <div className="text-3xl font-bold text-white">₹50,000<span className="text-lg text-gray-400 font-normal">/year</span></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <ul className="mb-6 flex-grow">
                    <li className="flex items-center gap-3 mb-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span>2-hour response guarantee</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span>High priority dispatch status</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span>20% discount on emergency rates</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span>Bi-monthly system health checks</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span>4-hour temporary generator delivery</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-auto bg-blue-600 hover:bg-blue-700">
                    <Link to="/contact">Select Plan</Link>
                  </Button>
                </div>
              </Card>
              
              <Card className="overflow-hidden flex flex-col bg-gray-900 border-gray-800 text-white">
                <div className="p-6 bg-gray-800 border-b border-gray-700">
                  <h3 className="text-xl font-bold mb-2 text-white">Platinum Priority</h3>
                  <div className="text-3xl font-bold text-white">₹80,000<span className="text-lg text-gray-400 font-normal">/year</span></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <ul className="mb-6 flex-grow">
                    <li className="flex items-center gap-3 mb-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span>90-minute response guarantee</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span>Highest priority dispatch</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span>30% discount on emergency rates</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span>Monthly system health checks</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span>2-hour temporary generator delivery</span>
                    </li>
                    <li className="flex items-center gap-3 mb-3 text-gray-200">
                      <CheckCircle2 className="h-5 w-5 text-blue-400 flex-shrink-0" />
                      <span>Dedicated emergency contact</span>
                    </li>
                  </ul>
                  <Button asChild className="w-full mt-auto bg-blue-600 hover:bg-blue-700">
                    <Link to="/contact">Select Plan</Link>
                  </Button>
                </div>
              </Card>
            </div>
            <div className="text-center mt-8 text-gray-400">
              <p>* Response times vary by location. Priority plans available for multiple sites.</p>
              <p>* Customized emergency response plans available for enterprise clients.</p>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/contact">Inquire About Priority Plans</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <div className="flex items-center justify-center">
                  <span className="block h-1 w-10 bg-blue-600 mr-3"></span>
                  <span className="text-blue-600 font-semibold tracking-wider">FREQUENTLY ASKED QUESTIONS</span>
                  <span className="block h-1 w-10 bg-blue-600 ml-3"></span>
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Emergency Support FAQ
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
        <section className="py-16 md:py-24 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <Badge className="mb-6 bg-white text-blue-600">Save This Number</Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Emergency Power Support When You Need It Most
              </h2>
              <p className="text-xl md:text-2xl mb-10">
                Don't wait until disaster strikes. Save our emergency hotline number and consider a priority service plan for critical facilities.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6 h-auto">
                  <a href="tel:+918888888888" className="flex items-center gap-2">
                    <PhoneCall size={20} /> Emergency Hotline
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 text-lg px-8 py-6 h-auto">
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
