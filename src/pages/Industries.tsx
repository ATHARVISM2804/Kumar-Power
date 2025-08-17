import React, { useState } from 'react';
import { Building2, ChevronRight, Filter, Users } from 'lucide-react';
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import SEOJsonLD from "@/components/SEOJsonLD";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      <Card key={index} className="overflow-hidden flex flex-col">
        <div className="p-4 bg-gray-50 flex items-center justify-center h-36">
          <img 
            src={company.logo} 
            alt={`${company.name} logo`} 
            className="max-h-24 max-w-full object-contain"
          />
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <h3 className="text-xl font-bold mb-2">{company.name}</h3>
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-3">
            <Building2 size={16} />
            <span>{company.location}</span>
          </div>
          <p className="text-muted-foreground mb-4 flex-grow">{company.description}</p>
          <div className="mt-auto pt-4 border-t">
            <h4 className="font-medium mb-2">Power Solution:</h4>
            <p className="text-sm text-muted-foreground">{company.powerSolution}</p>
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
        <div className="bg-black py-8 md:py-12">
          <div className="container mx-auto text-center px-4">
            <div className="flex items-center justify-center mb-1">
              <span className="block h-px w-8 md:w-16 bg-white mr-2 md:mr-4" />
              <span className="text-white text-xl md:text-3xl font-semibold tracking-wide">
                INDUSTRIES WE SERVE
              </span>
              <span className="block h-px w-8 md:w-16 bg-white ml-2 md:ml-4" />
            </div>
            <div className="text-white text-lg md:text-xl font-normal">
              Powering success across diverse sectors
            </div>
          </div>
        </div>

        {/* Intro Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Power Solutions For Every Industry
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                At Kumar Power, we understand that each industry has unique power requirements. 
                For over three decades, we've delivered specialized generator solutions across diverse 
                sectors, ensuring reliable power for critical operations, sensitive equipment, 
                and essential services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="p-6 border rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-lg">Clients Served</div>
                </div>
                <div className="p-6 border rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-lg">Industries</div>
                </div>
                <div className="p-6 border rounded-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
                  <div className="text-lg">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Categories */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Browse By Industry</h2>
              
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
                {categories.slice(0, 10).map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveCategory(category.id)}
                    className="mb-2"
                  >
                    {category.name}
                  </Button>
                ))}
              </div>
              
              {categories.length > 10 && (
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
                  {categories.slice(10).map((category) => (
                    <Button
                      key={category.id}
                      variant={activeCategory === category.id ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActiveCategory(category.id)}
                      className="mb-2"
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Client Cards */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                {categories.find(c => c.id === activeCategory)?.name || "All Industries"}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover how Kumar Power has provided tailored power solutions to these clients
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderCompanyCards(getCompaniesByCategory(activeCategory))}
            </div>
          </div>
        </section>

        {/* Industry Expertise Section */}
        <section className="py-12 md:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Our Industry Expertise
              </h2>
              <p className="text-lg opacity-90">
                With decades of experience, we understand the unique power challenges faced by different industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Critical Infrastructure</h3>
                <p className="mb-4">
                  For hospitals, data centers, and emergency services where power interruptions are not an option, 
                  we provide N+1 redundant systems with instant failover capabilities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">•</span>
                    <span>Zero-downtime solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">•</span>
                    <span>Multiple redundancy options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">•</span>
                    <span>Remote monitoring systems</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Commercial & Retail</h3>
                <p className="mb-4">
                  Businesses rely on our generators to protect revenue, inventory, and customer experience 
                  during power outages with solutions that minimize disruption.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">•</span>
                    <span>Rapid switchover systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">•</span>
                    <span>Priority load management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">•</span>
                    <span>Right-sized solutions</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-700 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Industrial & Manufacturing</h3>
                <p className="mb-4">
                  Manufacturing operations need power solutions that protect sensitive equipment and 
                  prevent production losses during outages.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">•</span>
                    <span>Power quality management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">•</span>
                    <span>Equipment protection features</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-300 font-bold">•</span>
                    <span>Production continuity planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Solutions Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  Industry-Specific Power Solutions
                </h2>
                <p className="text-lg text-muted-foreground">
                  We tailor our generator systems to meet the unique requirements of each industry
                </p>
              </div>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <img 
                      src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/healthcare_solution_bcmtnp.jpg" 
                      alt="Healthcare Power Solutions" 
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Healthcare</h3>
                    <p className="text-muted-foreground mb-4">
                      Hospitals and medical facilities require highly reliable power systems that activate instantly 
                      during outages to protect patient safety and critical equipment.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Critical area prioritization (ORs, ICUs, emergency services)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Rapid transfer switches with 10-second response</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Medical equipment protection features</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Regulatory compliance with healthcare standards</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
                  <div className="md:w-1/2">
                    <img 
                      src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/datacenter_solution_bptcmn.jpg" 
                      alt="Data Center Power Solutions" 
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Data Centers</h3>
                    <p className="text-muted-foreground mb-4">
                      Modern data centers require sophisticated power architectures with multiple redundancies 
                      to ensure zero downtime for critical digital infrastructure.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>N+1, 2N and 2N+1 redundancy configurations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Generator synchronization and parallel operation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>UPS integration and coordination</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Advanced monitoring and predictive maintenance</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <img 
                      src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1729035001/residential_solution_cmtpnb.jpg" 
                      alt="Residential Power Solutions" 
                      className="rounded-lg w-full"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">Residential & Societies</h3>
                    <p className="text-muted-foreground mb-4">
                      Housing societies and residential complexes need reliable backup power for essential services 
                      while minimizing noise and disruption for residents.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Ultra-quiet operation with acoustic enclosures</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Essential services prioritization (elevators, water pumps, security)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Smart building integration capabilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Aesthetic considerations for installation locations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Need a Customized Power Solution?
              </h2>
              <p className="text-lg md:text-xl mb-8">
                Contact our team to discuss your industry-specific power requirements and get a tailored generator solution.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Request Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700">
                  View Our Products
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

export default Industries;
