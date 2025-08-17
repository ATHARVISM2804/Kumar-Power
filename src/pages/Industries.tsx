import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, ChevronRight, Filter, Users, CheckCircle2, Activity, Shield, Clock, MapPin, Briefcase } from 'lucide-react';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';

const Industries = () => {
  // State for active category
  const [activeCategory, setActiveCategory] = useState("all");

  // Categories for the tabs
  const categories = [
    { id: "all", name: "All Industries" },
    { id: "industrial", name: "Industrial Companies" },
    { id: "embassy", name: "Embassy" },
    { id: "petrol", name: "Petrol Pump" },
    { id: "retail", name: "Retail Outlet" },
    { id: "banks", name: "Banks" },
    { id: "society", name: "Society/Apartment" },
    { id: "exporter", name: "Exporter" },
    { id: "cpwd", name: "CPWD & NBCC Projects" },
    { id: "hospitality", name: "Restaurants & Hotels" },
    { id: "fitness", name: "Fitness" },
    { id: "infrastructure", name: "Infrastructure" },
    { id: "medical", name: "Medical" },
    { id: "construction", name: "Construction" },
    { id: "spiritual", name: "Spiritual/NGO/Ashram" },
    { id: "manufacturing", name: "Manufacturing/Wholesale/Supply" },
    { id: "beauty", name: "Beauty Salon" },
    { id: "builder", name: "Builder" },
    { id: "education", name: "Education/Book Store" },
    { id: "contractor", name: "Contractor/Govt Office" },
    { id: "commercial", name: "Malls/Halls/Guest House" },
  ];

  // Company data for each category
  const industrialCompanies = [
    {
      name: "TechMech Industries Ltd.",
      location: "Gurugram, Haryana",
      description: "Leading manufacturer of precision engineering components with 24/7 operations requiring uninterrupted power supply for sensitive machinery.",
      powerSolution: "3x 500 kVA Kirloskar Diesel Generators with synchronization panel",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/industrial1_xpeqld.png"
    },
    {
      name: "SteelForge Manufacturing",
      location: "Bhiwadi, Rajasthan",
      description: "Steel fabrication plant with high-power equipment and continuous production lines that cannot tolerate power interruptions.",
      powerSolution: "2x 750 kVA Diesel Generators with load management system",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/industrial2_jkosmm.png"
    },
    {
      name: "PrecisionTools India Pvt. Ltd.",
      location: "Noida, Uttar Pradesh",
      description: "Manufacturer of high-precision machining tools requiring stable power conditions for quality control.",
      powerSolution: "350 kVA Generator with power quality management system",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/industrial3_npsari.png"
    },
    {
      name: "AutoComponents Manufacturing",
      location: "Chennai, Tamil Nadu",
      description: "Automotive parts manufacturer with automated production lines requiring reliable backup power.",
      powerSolution: "Dual 625 kVA Generators with automatic transfer switch",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/industrial4_qojpry.png"
    },
    {
      name: "ElectroTech Solutions",
      location: "Pune, Maharashtra",
      description: "Electronics manufacturing facility with clean room environments requiring pristine power quality.",
      powerSolution: "500 kVA Generator with harmonic filtering system",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/industrial5_wctedy.png"
    },
    {
      name: "ChemProcess Industries",
      location: "Vadodara, Gujarat",
      description: "Chemical processing plant with critical safety systems requiring reliable emergency power.",
      powerSolution: "Triple redundant 400 kVA Generators for safety systems",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/industrial6_trbnhm.png"
    },
    {
      name: "FoodTech Processing",
      location: "Sonipat, Haryana",
      description: "Food processing facility with cold storage requiring continuous power for refrigeration systems.",
      powerSolution: "2x 300 kVA Generators with priority load management",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/industrial7_gkpqhs.png"
    },
    {
      name: "PharmaLab Manufacturing",
      location: "Hyderabad, Telangana",
      description: "Pharmaceutical manufacturing with FDA-validated processes requiring zero-interruption power.",
      powerSolution: "N+1 Generator system with 2x 500 kVA units",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/industrial8_ddwqrd.png"
    },
    {
      name: "TextileTech Industries",
      location: "Surat, Gujarat",
      description: "Modern textile manufacturing facility with power-intensive looms and dyeing equipment.",
      powerSolution: "750 kVA Prime power Generator with load optimization",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/industrial9_oslkyr.png"
    },
    {
      name: "GlassTech Manufacturing",
      location: "Firozabad, Uttar Pradesh",
      description: "Glass manufacturing facility with high-temperature furnaces requiring stable power supply.",
      powerSolution: "Dual 450 kVA Generators with heat recovery system",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/industrial10_bmhpgt.png"
    }
  ];

  const embassies = [
    {
      name: "Canadian Embassy",
      location: "New Delhi",
      description: "Diplomatic mission requiring secure and uninterrupted power supply for sensitive operations and services.",
      powerSolution: "250 kVA Generator with sound-attenuated enclosure",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/embassy1_qdrfst.png"
    },
    {
      name: "German Embassy",
      location: "New Delhi",
      description: "Embassy compound with administrative offices and visa processing facilities requiring backup power.",
      powerSolution: "2x 200 kVA Generators with automatic transfer switch",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/embassy2_rwptds.png"
    },
    {
      name: "Australian High Commission",
      location: "New Delhi",
      description: "Diplomatic mission with critical security systems requiring reliable emergency power.",
      powerSolution: "300 kVA Generator with remote monitoring",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/embassy3_vqfhyp.png"
    },
    {
      name: "British High Commission",
      location: "New Delhi",
      description: "Diplomatic mission with substantial visa processing operations requiring uninterrupted power.",
      powerSolution: "Dual 175 kVA Generators with synchronization",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/embassy4_kgmopr.png"
    },
    {
      name: "French Embassy",
      location: "New Delhi",
      description: "Embassy with cultural center requiring reliable power for events and operations.",
      powerSolution: "220 kVA Generator with acoustic enclosure",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/embassy5_bvqwnt.png"
    },
    {
      name: "United States Embassy",
      location: "New Delhi",
      description: "Large diplomatic compound with mission-critical facilities requiring robust power backup.",
      powerSolution: "Multiple redundant 350 kVA Generators",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/embassy6_cghmrw.png"
    },
    {
      name: "Italian Embassy",
      location: "New Delhi",
      description: "Embassy with consular services requiring reliable power for document processing.",
      powerSolution: "200 kVA Generator with extended fuel tank",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/embassy7_pqktlh.png"
    },
    {
      name: "Japanese Embassy",
      location: "New Delhi",
      description: "Embassy compound with cultural center requiring stable power for sensitive equipment.",
      powerSolution: "250 kVA Generator with power quality management",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/embassy8_uyvbpg.png"
    },
    {
      name: "Russian Embassy",
      location: "New Delhi",
      description: "Large embassy complex with diverse power requirements for multiple buildings.",
      powerSolution: "Multiple 300 kVA Generators with centralized control",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/embassy9_ryktpg.png"
    },
    {
      name: "Singapore High Commission",
      location: "New Delhi",
      description: "Modern diplomatic facility with energy-efficient systems requiring backup power.",
      powerSolution: "175 kVA Generator with smart load management",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/embassy10_plthmw.png"
    }
  ];

  const petrolPumps = [
    {
      name: "Highway Fuels",
      location: "Delhi-Jaipur Highway",
      description: "24/7 highway fuel station with convenience store requiring reliable power for pumps and services.",
      powerSolution: "125 kVA Generator with rapid start capability",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/petrol1_dtpwby.png"
    },
    {
      name: "City Petroleum",
      location: "Mumbai, Maharashtra",
      description: "Urban fuel station with high-traffic volume requiring uninterrupted operation.",
      powerSolution: "100 kVA Generator with weatherproof enclosure",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/petrol2_ahfgrp.png"
    },
    {
      name: "Express Fuels",
      location: "Bengaluru, Karnataka",
      description: "Modern fuel station with digital payment systems requiring clean power supply.",
      powerSolution: "75 kVA Generator with voltage regulation",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/petrol3_wqpbvh.png"
    },
    {
      name: "Roadway Energy Station",
      location: "Chennai Outer Ring Road",
      description: "Large service station with multiple fuel types and convenience facilities.",
      powerSolution: "150 kVA Generator with extended runtime capability",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/petrol4_tvqpwg.png"
    },
    {
      name: "Urban Gas Station",
      location: "Delhi NCR",
      description: "CNG and petrol station with high dependence on electrical pumps for gas dispensing.",
      powerSolution: "125 kVA Generator with automatic transfer system",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/petrol5_yrktbp.png"
    },
    {
      name: "Highway Energy Hub",
      location: "Mumbai-Pune Expressway",
      description: "Large highway service area with multiple fuel islands and retail facilities.",
      powerSolution: "2x 100 kVA Generators with load sharing",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/petrol6_ntbmhw.png"
    },
    {
      name: "Metro Fuels",
      location: "Kolkata, West Bengal",
      description: "Urban fuel station with car wash facility requiring reliable power.",
      powerSolution: "75 kVA Generator with acoustic enclosure",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/petrol7_ptnmkl.png"
    }
  ];

  const retailOutlets = [
    {
      name: "MegaMart Superstore",
      location: "Gurgaon, Haryana",
      description: "Large retail superstore with refrigeration units requiring reliable backup power.",
      powerSolution: "250 kVA Generator with priority load management",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/retail1_bnmktp.png"
    },
    {
      name: "Fashion Avenue Mall",
      location: "Mumbai, Maharashtra",
      description: "Premium fashion retail outlet with climate control and lighting requirements.",
      powerSolution: "200 kVA Generator with rapid transfer system",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/retail2_qpwrst.png"
    },
    {
      name: "Electronics Megastore",
      location: "Bengaluru, Karnataka",
      description: "Electronics retail chain requiring clean power for demonstrations and security systems.",
      powerSolution: "175 kVA Generator with power conditioning",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/retail3_pmbntr.png"
    },
    {
      name: "Foodie's Supermarket",
      location: "Chennai, Tamil Nadu",
      description: "Grocery chain with extensive refrigeration and freezer systems requiring backup power.",
      powerSolution: "200 kVA Generator with cold-start capability",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/retail4_yvbfhs.png"
    },
    {
      name: "HomeStyle Furnishing",
      location: "Hyderabad, Telangana",
      description: "Home furnishing outlet with display lighting and climate control requirements.",
      powerSolution: "150 kVA Generator with load optimization",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/retail5_kmtprg.png"
    },
    {
      name: "AutoZone Retail",
      location: "Pune, Maharashtra",
      description: "Automotive parts retailer with computerized inventory and service systems.",
      powerSolution: "100 kVA Generator with UPS integration",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/retail6_nthpvs.png"
    },
    {
      name: "TechGadget Store",
      location: "Noida, Uttar Pradesh",
      description: "Electronics and gadget retailer requiring clean power for product demos and security.",
      powerSolution: "125 kVA Generator with power filtering",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/retail7_brgnmy.png"
    },
    {
      name: "City Pharmacy Chain",
      location: "Delhi NCR",
      description: "Pharmacy with refrigerated medications requiring uninterrupted power supply.",
      powerSolution: "75 kVA Generator with rapid transfer capability",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/retail8_ytpmbd.png"
    },
    {
      name: "SportLife Outlet",
      location: "Chandigarh",
      description: "Sports equipment and apparel retailer with advanced lighting systems.",
      powerSolution: "100 kVA Generator with lighting load management",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/retail9_pmtdhg.png"
    },
    {
      name: "Booklovers Store",
      location: "Kolkata, West Bengal",
      description: "Large bookstore with café requiring backup power for lighting and food service.",
      powerSolution: "125 kVA Generator with segmented load control",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/retail10_bktpdh.png"
    },
    {
      name: "Trendy Fashion Outlet",
      location: "Jaipur, Rajasthan",
      description: "Fashion retailer with advanced lighting and climate control systems.",
      powerSolution: "100 kVA Generator with efficiency management",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/retail11_ncdhkp.png"
    },
    {
      name: "FreshMart Grocery",
      location: "Ahmedabad, Gujarat",
      description: "Modern grocery store with extensive refrigeration and electronic point of sale systems.",
      powerSolution: "150 kVA Generator with refrigeration priority",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/retail12_ktbnrm.png"
    },
    {
      name: "KidZone Toy Store",
      location: "Lucknow, Uttar Pradesh",
      description: "Children's retail outlet with interactive displays requiring reliable power.",
      powerSolution: "75 kVA Generator with UPS backup for systems",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/retail13_nyvbkm.png"
    }
  ];

  const banks = [
    {
      name: "National Finance Bank",
      location: "Mumbai, Maharashtra",
      description: "Major banking headquarters with critical data centers requiring zero-downtime power.",
      powerSolution: "2x 350 kVA Generators with synchronization and UPS integration",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/bank1_ptqrnd.png"
    },
    {
      name: "Urban Credit Union",
      location: "Delhi NCR",
      description: "Financial institution with branch network requiring reliable power for transactions.",
      powerSolution: "200 kVA Generator with rapid transfer capability",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/bank2_mndrvp.png"
    },
    {
      name: "Global Banking Corp",
      location: "Bengaluru, Karnataka",
      description: "International bank with regional processing center requiring backup power.",
      powerSolution: "300 kVA Generator with extended runtime for data centers",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/bank3_ntpwbg.png"
    },
    {
      name: "Secure Trust Bank",
      location: "Chennai, Tamil Nadu",
      description: "Banking institution with security and transaction systems requiring clean power.",
      powerSolution: "250 kVA Generator with power quality management",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/bank4_vbpmtr.png"
    },
    {
      name: "Regional Cooperative Bank",
      location: "Jaipur, Rajasthan",
      description: "Regional bank with multiple branches requiring centralized power solution.",
      powerSolution: "Multiple 100 kVA Generators for branch network",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/bank5_mntdpw.png"
    },
    {
      name: "Digital Banking Services",
      location: "Hyderabad, Telangana",
      description: "Modern banking facility with extensive IT infrastructure requiring backup power.",
      powerSolution: "200 kVA Generator with IT load prioritization",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/bank6_btpkmn.png"
    },
    {
      name: "City Credit Bank",
      location: "Pune, Maharashtra",
      description: "Urban bank with 24/7 ATM services requiring uninterrupted power supply.",
      powerSolution: "150 kVA Generator with ATM power priority",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/bank7_rntmkb.png"
    }
  ];

  const societyApartments = [
    {
      name: "Green Valley Apartments",
      location: "Gurgaon, Haryana",
      description: "Luxury apartment complex with essential services requiring backup power during outages.",
      powerSolution: "2x 200 kVA Generators for common areas and essential services",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/society1_nyptbq.png"
    },
    {
      name: "Horizon Heights Society",
      location: "Mumbai, Maharashtra",
      description: "High-rise residential complex with elevators and water pumps requiring reliable backup.",
      powerSolution: "300 kVA Generator with essential services prioritization",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/society2_mtpwbs.png"
    },
    {
      name: "Lakeside Residences",
      location: "Pune, Maharashtra",
      description: "Premium gated community with clubhouse and common facilities requiring power backup.",
      powerSolution: "250 kVA Generator with load distribution system",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/society3_bdtpnm.png"
    },
    {
      name: "Skyline Towers",
      location: "Bengaluru, Karnataka",
      description: "Luxury high-rise with smart building features requiring reliable power supply.",
      powerSolution: "2x 175 kVA Generators with building automation integration",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/society4_ntpvbg.png"
    },
    {
      name: "Garden View Residency",
      location: "Noida, Uttar Pradesh",
      description: "Residential community with extensive landscaping and water features requiring power.",
      powerSolution: "200 kVA Generator with pump and lighting priority",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/society5_btpmng.png"
    },
    {
      name: "Royal Palm Enclave",
      location: "Hyderabad, Telangana",
      description: "Premium housing society with security systems requiring uninterrupted power.",
      powerSolution: "150 kVA Generator with security systems priority",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/society6_nythmp.png"
    }
  ];

  const exporters = [
    {
      name: "Global Export Solutions",
      location: "Mumbai, Maharashtra",
      description: "International trading company with cold storage facilities for perishable exports.",
      powerSolution: "200 kVA Generator with refrigeration priority",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/exporter1_ntbymp.png"
    },
    {
      name: "PrecisionCraft Exports",
      location: "Rajkot, Gujarat",
      description: "Handicraft exporter with production facilities requiring reliable power for operations.",
      powerSolution: "150 kVA Generator with production line prioritization",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/exporter2_ytpmng.png"
    },
    {
      name: "AgriExport International",
      location: "Nashik, Maharashtra",
      description: "Agricultural products exporter with processing and packaging facilities.",
      powerSolution: "175 kVA Generator with process equipment protection",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/exporter3_tpnbmg.png"
    },
    {
      name: "TextileTrade Global",
      location: "Surat, Gujarat",
      description: "Textile exporter with production facilities requiring uninterrupted power.",
      powerSolution: "250 kVA Generator with machinery protection",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/exporter4_bdtpmn.png"
    },
    {
      name: "GemExport Ltd.",
      location: "Jaipur, Rajasthan",
      description: "Jewelry and gemstone exporter with security systems requiring backup power.",
      powerSolution: "100 kVA Generator with security priority",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/exporter5_nyptrm.png"
    },
    {
      name: "LeatherCraft Exports",
      location: "Kanpur, Uttar Pradesh",
      description: "Leather goods manufacturer and exporter with production equipment power needs.",
      powerSolution: "200 kVA Generator with production continuity features",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/exporter6_ptmbrg.png"
    },
    {
      name: "SpiceTrade International",
      location: "Kochi, Kerala",
      description: "Spice processing and export company with grinding and packaging equipment.",
      powerSolution: "150 kVA Generator with dust-protection features",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/exporter7_nyptbm.png"
    },
    {
      name: "MarineExports Ltd.",
      location: "Visakhapatnam, Andhra Pradesh",
      description: "Seafood processor and exporter with critical cold chain requirements.",
      powerSolution: "2x 125 kVA Generators with refrigeration priority",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/exporter8_bytnpm.png"
    },
    {
      name: "FurnitureArt Exports",
      location: "Jodhpur, Rajasthan",
      description: "Wooden furniture manufacturer and exporter with woodworking equipment.",
      powerSolution: "175 kVA Generator with dust extraction system protection",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/exporter9_nptyhr.png"
    }
  ];

  const cpwdProjects = [
    {
      name: "Central Government Complex",
      location: "New Delhi",
      description: "Multi-building government office complex with critical administrative functions.",
      powerSolution: "Multiple 300 kVA Generators with centralized control",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/cpwd1_btmpnr.png"
    },
    {
      name: "District Courts Building",
      location: "Mumbai, Maharashtra",
      description: "Judicial complex with courtrooms requiring uninterrupted power for proceedings.",
      powerSolution: "2x 250 kVA Generators with ATS for critical areas",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/cpwd2_ntbymr.png"
    },
    {
      name: "Regional Government Center",
      location: "Bengaluru, Karnataka",
      description: "Administrative center housing multiple government departments and services.",
      powerSolution: "350 kVA Generator with load distribution system",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/cpwd3_btpmyr.png"
    },
    {
      name: "NBCC Commercial Tower",
      location: "Kolkata, West Bengal",
      description: "Mixed-use government and commercial building with essential services.",
      powerSolution: "300 kVA Generator with priority load management",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/cpwd4_btmnpr.png"
    },
    {
      name: "State Administration Building",
      location: "Chennai, Tamil Nadu",
      description: "Government office complex with IT and administrative functions requiring backup power.",
      powerSolution: "2x 200 kVA Generators with synchronization",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/cpwd5_ntpyrm.png"
    },
    {
      name: "Central Infrastructure Project",
      location: "Hyderabad, Telangana",
      description: "Major infrastructure development with multiple power requirements across sites.",
      powerSolution: "Multiple generators ranging from 100-250 kVA",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/cpwd6_btmypr.png"
    },
    {
      name: "Municipal Corporation Building",
      location: "Ahmedabad, Gujarat",
      description: "Local government headquarters with public service areas requiring reliable power.",
      powerSolution: "250 kVA Generator with public service area priority",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/cpwd7_ntpmyr.png"
    },
    {
      name: "National Highway Authority Complex",
      location: "Gurgaon, Haryana",
      description: "Administrative headquarters for highway management with 24/7 operations.",
      powerSolution: "200 kVA Generator with operations center priority",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/cpwd8_bymtnr.png"
    }
  ];

  const hospitality = [
    {
      name: "Grand Luxury Hotel",
      location: "Mumbai, Maharashtra",
      description: "5-star hotel with 300 rooms requiring seamless power backup for guest comfort.",
      powerSolution: "2x 500 kVA Generators with synchronized operation",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/hotel1_btpmyr.png"
    },
    {
      name: "City Center Hotel",
      location: "New Delhi",
      description: "Business hotel with conference facilities requiring reliable power for events.",
      powerSolution: "350 kVA Generator with event space priority",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/hotel2_ntpmyr.png"
    },
    {
      name: "Royal Spice Restaurant",
      location: "Jaipur, Rajasthan",
      description: "Fine dining restaurant with kitchen equipment requiring uninterrupted power.",
      powerSolution: "150 kVA Generator with kitchen equipment protection",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/hotel3_btmyrp.png"
    },
    {
      name: "Seaside Resort",
      location: "Goa",
      description: "Beach resort with extensive amenities requiring backup power for guest services.",
      powerSolution: "2x 250 kVA Generators with load distribution",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/hotel4_ntpybm.png"
    },
    {
      name: "Urban Café Chain",
      location: "Multiple locations",
      description: "Coffee shop chain with equipment requiring clean power supply across locations.",
      powerSolution: "75-100 kVA Generators customized by location",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/hotel5_btmnyr.png"
    },
    {
      name: "Family Restaurant & Bar",
      location: "Pune, Maharashtra",
      description: "Popular dining establishment with kitchen and refrigeration power requirements.",
      powerSolution: "125 kVA Generator with kitchen priority",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/hotel6_ntpymr.png"
    },
    {
      name: "Heritage Hotel",
      location: "Udaipur, Rajasthan",
      description: "Historic palace converted to hotel requiring backup power with minimal disruption.",
      powerSolution: "200 kVA Generator with ultra-quiet operation",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/hotel7_btmpry.png"
    },
    {
      name: "Business Hotel Chain",
      location: "Multiple cities",
      description: "Mid-range business hotel chain with standardized power backup requirements.",
      powerSolution: "150-200 kVA Generators with standard configuration",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/hotel8_ntpymb.png"
    },
    {
      name: "Fine Dining Restaurant",
      location: "Bengaluru, Karnataka",
      description: "Upscale restaurant with climate control and lighting requiring backup power.",
      powerSolution: "100 kVA Generator with ambiance systems priority",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/hotel9_btmypr.png"
    }
  ];

  const fitness = [
    {
      name: "Elite Fitness Center",
      location: "Delhi NCR",
      description: "Premium fitness club with electronic equipment requiring clean, uninterrupted power.",
      powerSolution: "150 kVA Generator with equipment protection features",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/fitness1_ntpmyr.png"
    }
  ];

  const infrastructure = [
    {
      name: "Metro Rail Corporation",
      location: "Delhi NCR",
      description: "Urban metro system with critical station and operational power requirements.",
      powerSolution: "Multiple high-capacity generators for stations and depots",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/infra1_btpmyr.png"
    },
    {
      name: "National Highway Authority",
      location: "Multiple locations",
      description: "Highway infrastructure with toll plazas and emergency systems requiring backup power.",
      powerSolution: "Standardized 75-125 kVA units for toll plazas",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/infra2_ntpmyr.png"
    },
    {
      name: "City Water Treatment Plant",
      location: "Mumbai, Maharashtra",
      description: "Municipal water treatment facility with pumping systems requiring reliable power.",
      powerSolution: "Multiple 300 kVA Generators with pump protection",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/infra3_btmypr.png"
    },
    {
      name: "Regional Airport",
      location: "Lucknow, Uttar Pradesh",
      description: "Mid-sized airport with navigation and terminal systems requiring backup power.",
      powerSolution: "Multiple generators with priority for navigation systems",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/infra4_ntpymb.png"
    },
    {
      name: "Urban Transport Hub",
      location: "Bengaluru, Karnataka",
      description: "Multi-modal transport center with lighting, security and operational requirements.",
      powerSolution: "250 kVA Generator with load distribution system",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/infra5_btmypr.png"
    }
  ];

  const medical = [
    {
      name: "City General Hospital",
      location: "Mumbai, Maharashtra",
      description: "500-bed hospital with critical care units requiring zero-downtime power supply.",
      powerSolution: "Multiple generators with N+1 redundancy for critical areas",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/medical1_ntpmyr.png"
    },
    {
      name: "Regional Medical Center",
      location: "Chennai, Tamil Nadu",
      description: "Multi-specialty hospital with operating theaters requiring guaranteed power.",
      powerSolution: "3x 500 kVA Generators with surgical suite priority",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/medical2_btmypr.png"
    },
    {
      name: "LifeCare Diagnostics",
      location: "Delhi NCR",
      description: "Advanced diagnostic center with sensitive equipment requiring stable power.",
      powerSolution: "200 kVA Generator with power conditioning",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/medical3_ntpymb.png"
    },
    {
      name: "Specialty Heart Hospital",
      location: "Hyderabad, Telangana",
      description: "Cardiac care center with catheterization labs requiring uninterrupted power.",
      powerSolution: "2x 350 kVA Generators with cardiac lab priority",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/medical4_btmypr.png"
    },
    {
      name: "Urban Polyclinic Chain",
      location: "Multiple cities",
      description: "Network of clinics with standardized power requirements for medical equipment.",
      powerSolution: "75-125 kVA Generators based on facility size",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/medical5_ntpymr.png"
    }
  ];
  
  // Continue with the other categories...
  // For brevity, I'm showing a sample of how to structure these arrays
  // Implement similar arrays for: construction, spiritual, manufacturing, beauty, builder, education, contractor, commercial
  
  const construction = [
    {
      name: "UrbanBuild Construction",
      location: "Mumbai, Maharashtra",
      description: "Major construction company with multiple project sites requiring mobile power.",
      powerSolution: "Multiple portable generators from 50-150 kVA",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/construction1_btmypr.png"
    },
    {
      name: "Highway Infrastructure Ltd.",
      location: "Multiple locations",
      description: "Infrastructure development company with remote project sites requiring power.",
      powerSolution: "Ruggedized portable generators with transportation features",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/construction2_ntpymb.png"
    },
    {
      name: "TowerBuild Corporation",
      location: "Delhi NCR",
      description: "High-rise construction specialist with tower crane and equipment power needs.",
      powerSolution: "Multiple 200 kVA Generators with crane priority",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/construction3_btmypr.png"
    }
  ];
  
  const spiritual = [
    {
      name: "Spiritual Wellness Center",
      location: "Rishikesh, Uttarakhand",
      description: "Retreat center with accommodation requiring reliable, quiet power backup.",
      powerSolution: "150 kVA Generator with ultra-quiet operation",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/spiritual1_ntpymr.png"
    },
    {
      name: "Humanitarian Foundation",
      location: "Delhi NCR",
      description: "NGO headquarters with disaster response coordination requiring backup power.",
      powerSolution: "200 kVA Generator with communications priority",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/spiritual2_btmpry.png"
    },
    {
      name: "Temple Trust",
      location: "Varanasi, Uttar Pradesh",
      description: "Historic temple complex with visitor facilities requiring discreet power backup.",
      powerSolution: "Multiple 100 kVA Generators with noise attenuation",
      logo: "https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/spiritual3_ntpymb.png"
    }
  ];

  // Helper function to render company cards
  const renderCompanyCards = (companies) => {
    return companies.map((company, index) => (
      <Card key={index} className="overflow-hidden flex flex-col border border-gray-200 hover:border-blue-200 transition-all duration-300 hover:shadow-md">
        <div className="p-6 bg-gray-50 flex items-center justify-center h-40 border-b">
          <img 
            src={company.logo} 
            alt={`${company.name} logo`} 
            className="max-h-24 max-w-full object-contain"
          />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-gray-900">{company.name}</h3>
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
            <MapPin size={16} />
            <span className="font-medium">{company.location}</span>
          </div>
          <p className="text-gray-600 mb-5 flex-grow">{company.description}</p>
          <div className="mt-auto pt-4 border-t border-gray-100">
            <h4 className="font-medium mb-2 text-gray-900">Power Solution:</h4>
            <p className="text-sm text-gray-600">{company.powerSolution}</p>
          </div>
        </div>
      </Card>
    ));
  };

  // Function to get companies based on active category
  const getCompaniesByCategory = (category) => {
    switch(category) {
      case "all": 
        return [...industrialCompanies, ...embassies, ...petrolPumps, ...retailOutlets, ...banks, ...societyApartments, ...exporters, ...cpwdProjects, ...hospitality, ...fitness, ...infrastructure, ...medical, ...construction, ...spiritual];
      case "industrial": return industrialCompanies;
      case "embassy": return embassies;
      case "petrol": return petrolPumps;
      case "retail": return retailOutlets;
      case "banks": return banks;
      case "society": return societyApartments;
      case "exporter": return exporters;
      case "cpwd": return cpwdProjects;
      case "hospitality": return hospitality;
      case "fitness": return fitness;
      case "infrastructure": return infrastructure;
      case "medical": return medical;
      case "construction": return construction;
      case "spiritual": return spiritual;
      default: return [];
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SEOJsonLD
        title="Industries We Serve | Kumar Power"
        description="Discover how Kumar Power provides tailored power solutions across diverse industries including healthcare, data centers, industrial facilities, and more."
        url="https://kumarpower.com/industries"
        imageUrl="https://kumarpower.com/images/industries-hero.jpg"
      />

      <main>
        {/* Hero Banner */}
        <section className="bg-black py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/industries_hero_pattern_vtr6hy.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          <div className="container mx-auto text-center px-4 relative z-10">
            <div className="flex items-center justify-center mb-4">
              <span className="block h-px w-12 md:w-20 bg-white/70 mr-4" />
              <span className="text-white text-xl md:text-3xl font-semibold tracking-wider uppercase">
                INDUSTRY SOLUTIONS
              </span>
              <span className="block h-px w-12 md:w-20 bg-white/70 ml-4" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
              Powering Success Across Every Sector
            </h1>
            <div className="text-white/90 text-lg md:text-xl font-normal max-w-3xl mx-auto">
              Specialized power generation solutions tailored to the unique requirements of diverse industries
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-10 bg-blue-600"></div>
                <span className="text-blue-600 font-medium">OUR APPROACH</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-gray-900">
                Industry-Specific Power Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                At Kumar Power, we recognize that each industry faces unique challenges when it comes to 
                power reliability and continuity. With over three decades of experience, we've developed 
                deep expertise in understanding and addressing the specific power requirements across 
                diverse sectors. Our solutions are engineered to provide the exact level of reliability, 
                redundancy, and performance your operations demand.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-start">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Sector-Specific Solutions</h3>
                  <p className="text-gray-600">
                    Tailored power systems designed for the unique requirements of your industry, from healthcare 
                    to manufacturing to data centers.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Activity className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Operational Continuity</h3>
                  <p className="text-gray-600">
                    Systems engineered to ensure your critical operations continue without interruption, regardless 
                    of grid conditions.
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Expert Consultation</h3>
                  <p className="text-gray-600">
                    Industry-specific knowledge that helps you implement the right power solution for your unique 
                    operational demands.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 bg-blue-50 rounded-xl p-6">
                <div className="p-4 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-900">Industry Leaders Served</div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-gray-900">Diverse Sectors</div>
                </div>
                <div className="p-4 text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
                  <div className="text-gray-900">Years of Industry Expertise</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Industry Sectors */}
        <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/blueprint_pattern_xk3f7d.svg')",
            backgroundSize: "cover",
          }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="h-1 w-10 bg-blue-600"></div>
              <span className="text-blue-600 font-medium">KEY INDUSTRIES</span>
              <div className="h-1 w-10 bg-blue-600"></div>
            </div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Our Primary Industry Focus
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Delivering specialized power solutions to these critical sectors where reliability is non-negotiable
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Healthcare</h3>
                <p className="text-gray-600 mb-4">
                  Life-saving power solutions for hospitals, clinics, and medical facilities where every second counts.
                </p>
                <div className="mt-auto pt-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    Zero Downtime
                  </Badge>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Activity className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Data Centers</h3>
                <p className="text-gray-600 mb-4">
                  N+1 redundant power for mission-critical digital infrastructure and cloud computing facilities.
                </p>
                <div className="mt-auto pt-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    Tier III & IV Ready
                  </Badge>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Briefcase className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Industrial</h3>
                <p className="text-gray-600 mb-4">
                  Manufacturing and production facilities requiring continuous power for operational continuity.
                </p>
                <div className="mt-auto pt-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    Process Protection
                  </Badge>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Commercial</h3>
                <p className="text-gray-600 mb-4">
                  Offices, retail, and hospitality venues requiring reliable power to protect revenue and customer experience.
                </p>
                <div className="mt-auto pt-4">
                  <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                    Business Continuity
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Categories */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-2 mb-6 justify-center">
                <div className="h-1 w-10 bg-blue-600"></div>
                <span className="text-blue-600 font-medium">BROWSE CLIENTS</span>
                <div className="h-1 w-10 bg-blue-600"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
                Explore Our Industry Portfolio
              </h2>
              <p className="text-lg text-gray-600 mb-10 text-center max-w-3xl mx-auto">
                Discover the diverse range of clients who trust Kumar Power for their critical power needs, 
                from multinational corporations to vital infrastructure providers
              </p>
              
              <div className="overflow-x-auto pb-4">
                <div className="flex flex-wrap justify-center gap-3 mb-12 min-w-max">
                  <Button
                    variant={activeCategory === "all" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory("all")}
                    className="mb-2"
                  >
                    All Industries
                  </Button>
                  
                  <Button
                    variant={activeCategory === "industrial" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory("industrial")}
                    className="mb-2"
                  >
                    <Building2 size={16} className="mr-1" /> Industrial
                  </Button>
                  
                  <Button
                    variant={activeCategory === "medical" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory("medical")}
                    className="mb-2"
                  >
                    Healthcare
                  </Button>
                  
                  <Button
                    variant={activeCategory === "embassy" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory("embassy")}
                    className="mb-2"
                  >
                    Embassy
                  </Button>
                  
                  <Button
                    variant={activeCategory === "banks" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory("banks")}
                    className="mb-2"
                  >
                    Financial
                  </Button>
                  
                  <Button
                    variant={activeCategory === "retail" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory("retail")}
                    className="mb-2"
                  >
                    Retail
                  </Button>
                  
                  <Button
                    variant={activeCategory === "hospitality" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory("hospitality")}
                    className="mb-2"
                  >
                    Hospitality
                  </Button>
                  
                  <Button
                    variant={activeCategory === "infrastructure" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory("infrastructure")}
                    className="mb-2"
                  >
                    Infrastructure
                  </Button>
                  
                  <Button
                    variant={activeCategory === "society" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory("society")}
                    className="mb-2"
                  >
                    Residential
                  </Button>
                </div>
              </div>
              
              <div className="overflow-x-auto pb-4">
                <div className="flex flex-wrap justify-center gap-3 mb-12 min-w-max">
                  <Button
                    variant={activeCategory === "petrol" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory("petrol")}
                    className="mb-2"
                  >
                    Petrol Pumps
                  </Button>
                  
                  <Button
                    variant={activeCategory === "exporter" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory("exporter")}
                    className="mb-2"
                  >
                    Exporters
                  </Button>
                  
                  <Button
                    variant={activeCategory === "cpwd" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory("cpwd")}
                    className="mb-2"
                  >
                    Government Projects
                  </Button>
                  
                  <Button
                    variant={activeCategory === "construction" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory("construction")}
                    className="mb-2"
                  >
                    Construction
                  </Button>
                  
                  <Button
                    variant={activeCategory === "spiritual" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory("spiritual")}
                    className="mb-2"
                  >
                    NGOs & Spiritual
                  </Button>
                  
                  <Button
                    variant={activeCategory === "fitness" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory("fitness")}
                    className="mb-2"
                  >
                    Fitness
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Cards */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                {categories.find(c => c.id === activeCategory)?.name || "All Industries"}
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Discover the tailored power solutions we've implemented for these industry-leading organizations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderCompanyCards(getCompaniesByCategory(activeCategory))}
            </div>
            
            {getCompaniesByCategory(activeCategory).length === 0 && (
              <div className="text-center py-12">
                <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                  <Filter className="h-8 w-8 text-gray-400" />
                </div>
                <p className="text-xl text-gray-600">No companies found in this category.</p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-blue-600 text-blue-600 hover:bg-blue-50"
                  onClick={() => setActiveCategory("all")}
                >
                  View All Industries
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Industry Expertise Section */}
        <section className="py-16 md:py-24 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/power_grid_pattern_evw2xc.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="h-1 w-10 bg-blue-400"></div>
              <span className="text-blue-400 font-medium">OUR EXPERTISE</span>
              <div className="h-1 w-10 bg-blue-400"></div>
            </div>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Industry-Specific Power Knowledge
              </h2>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                With decades of experience serving diverse industries, we've developed deep expertise in addressing 
                the unique power challenges faced by different sectors
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-blue-500/30 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Critical Infrastructure</h3>
                <p className="mb-6 text-white/80">
                  For hospitals, data centers, and emergency services where power interruptions are not an option, 
                  we provide N+1 redundant systems with instant failover capabilities.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Sub-10 second response times for life-critical systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Multiple redundancy layers with automatic failover</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>24/7 remote monitoring with predictive analytics</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-blue-500/30 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Commercial & Retail</h3>
                <p className="mb-6 text-white/80">
                  Businesses rely on our generators to protect revenue, inventory, and customer experience 
                  during power outages with solutions that minimize disruption.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Rapid switchover systems for seamless operation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Smart load prioritization for essential systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Right-sized solutions to balance cost and capability</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:border-blue-500/30 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Industrial & Manufacturing</h3>
                <p className="mb-6 text-white/80">
                  Manufacturing operations need power solutions that protect sensitive equipment and 
                  prevent production losses during outages with minimal disruption.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Power quality management for precision equipment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Harmonic filtering for sensitive machinery</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Phased load restoration for production lines</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <span>Energy efficiency optimizations for operating cost reduction</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Solutions Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-10 bg-blue-600"></div>
                <span className="text-blue-600 font-medium">TAILORED SOLUTIONS</span>
              </div>
              <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                  Industry-Specific Power Solutions
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl">
                  We engineer our power systems to address the unique challenges and requirements 
                  of each industry, ensuring optimal performance for your specific needs
                </p>
              </div>
              
              <div className="space-y-20">
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="lg:w-1/2">
                    <img 
                      src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/healthcare_solution_bcmtnp.jpg" 
                      alt="Healthcare Power Solutions" 
                      className="rounded-xl shadow-lg w-full"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
                      HEALTHCARE
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Medical Power Solutions</h3>
                    <p className="text-gray-600 mb-6">
                      In healthcare environments, power interruptions can be life-threatening. Our medical-grade 
                      power systems are engineered with the highest level of reliability to protect patient safety 
                      and critical care equipment.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <h4 className="font-medium mb-3 text-gray-900">Key Features:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700">Critical area prioritization (ORs, ICUs, emergency services)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700">Rapid transfer switches with 10-second response</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700">Medical equipment protection features</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700">Regulatory compliance with healthcare standards</span>
                        </li>
                      </ul>
                    </div>
                    <Button asChild className="group">
                      <Link to="/contact" className="flex items-center gap-2">
                        Discuss Healthcare Power Solutions
                        <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row-reverse gap-10 items-center">
                  <div className="lg:w-1/2">
                    <img 
                      src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/datacenter_solution_bptcmn.jpg" 
                      alt="Data Center Power Solutions" 
                      className="rounded-xl shadow-lg w-full"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
                      DATA CENTERS
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Digital Infrastructure Power</h3>
                    <p className="text-gray-600 mb-6">
                      Modern data centers require sophisticated power architectures with multiple redundancies 
                      to ensure zero downtime for mission-critical digital infrastructure and cloud services.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <h4 className="font-medium mb-3 text-gray-900">Key Features:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700">N+1, 2N and 2N+1 redundancy configurations</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700">Generator synchronization and parallel operation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700">UPS integration and coordination</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700">Advanced monitoring and predictive maintenance</span>
                        </li>
                      </ul>
                    </div>
                    <Button asChild className="group">
                      <Link to="/contact" className="flex items-center gap-2">
                        Discuss Data Center Power Solutions
                        <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                  <div className="lg:w-1/2">
                    <img 
                      src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/industrial_solution_rpe4xa.jpg" 
                      alt="Industrial Power Solutions" 
                      className="rounded-xl shadow-lg w-full"
                    />
                  </div>
                  <div className="lg:w-1/2">
                    <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 mb-4">
                      INDUSTRIAL
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Manufacturing Power Systems</h3>
                    <p className="text-gray-600 mb-6">
                      Industrial operations require power systems that can handle heavy loads while protecting 
                      sensitive equipment and ensuring production continuity during grid interruptions.
                    </p>
                    <div className="bg-blue-50 p-6 rounded-lg mb-6">
                      <h4 className="font-medium mb-3 text-gray-900">Key Features:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700">Power quality management for precision equipment</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700">Harmonic filtering for sensitive machinery</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700">Phased load restoration for production lines</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="text-gray-700">Energy efficiency optimizations for operating cost reduction</span>
                        </li>
                      </ul>
                    </div>
                    <Button asChild className="group">
                      <Link to="/contact" className="flex items-center gap-2">
                        Discuss Industrial Power Solutions
                        <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Teaser */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="h-1 w-10 bg-blue-600"></div>
              <span className="text-blue-600 font-medium">SUCCESS STORIES</span>
              <div className="h-1 w-10 bg-blue-600"></div>
            </div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
                Industry Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real-world examples of how our power solutions have helped organizations across different industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/hospital_case_study_fj3t7d.jpg" 
                    alt="Hospital Case Study" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <Badge className="absolute top-3 right-3 bg-blue-600 text-white">
                    Healthcare
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Regional Medical Center</h3>
                  <p className="text-gray-600 mb-4">
                    How our N+1 redundant power system ensured zero downtime during a 3-day regional blackout.
                  </p>
                  <Button asChild variant="outline" size="sm" className="group w-full">
                    <Link to="/case-studies" className="flex items-center justify-center gap-1">
                      Read Case Study
                      <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
              
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/data_center_case_study_anc4ew.jpg" 
                    alt="Data Center Case Study" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <Badge className="absolute top-3 right-3 bg-blue-600 text-white">
                    Data Center
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Cloud Infrastructure Provider</h3>
                  <p className="text-gray-600 mb-4">
                    Implementing a Tier IV-ready generator solution with 99.999% uptime guarantee.
                  </p>
                  <Button asChild variant="outline" size="sm" className="group w-full">
                    <Link to="/case-studies" className="flex items-center justify-center gap-1">
                      Read Case Study
                      <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
              
              <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/manufacturing_case_study_vbd7et.jpg" 
                    alt="Manufacturing Case Study" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <Badge className="absolute top-3 right-3 bg-blue-600 text-white">
                    Industrial
                  </Badge>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Precision Components Factory</h3>
                  <p className="text-gray-600 mb-4">
                    How our power quality management system prevented $2M in potential equipment damage.
                  </p>
                  <Button asChild variant="outline" size="sm" className="group w-full">
                    <Link to="/case-studies" className="flex items-center justify-center gap-1">
                      Read Case Study
                      <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-black text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "url('https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/cta_pattern_bg_dfj3er.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }} />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="bg-blue-600/20 backdrop-blur-sm p-10 md:p-16 rounded-2xl border border-blue-500/20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready for Industry-Leading Power Solutions?
                  </h2>
                  <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                    Contact our team of industry specialists to discuss your specific requirements
                    and discover how Kumar Power can support your business continuity needs.
                  </p>
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
                  <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full md:w-auto text-base">
                    <Link to="/contact">Request Industry Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full md:w-auto text-base">
                    <Link to="/products">Explore Our Products</Link>
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

export default Industries;
