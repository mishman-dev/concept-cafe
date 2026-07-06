export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  fullDescription: string;
  client: string;
  location: string;
  completionDate: string;
  duration: string;
  area: string;
  teamSize: number;
  budget: string;
  stats: {
    icon: string;
    value: string;
    label: string;
  }[];
  gradient: string;
  images: {
    thumbnail: string;
    model3D: string;
    actual: string[];
    comparison: {
      before: string;
      after: string;
    }[];
  };
  features: string[];
  challenges: string[];
  solutions: string[];
  technologies: string[];
}

export const projects: Project[] = [
  {
    id: "premium-automobile-showroom",
    category: "Showroom Design & Build",
    title: "Premium Automobile Showroom",
    description: "Complete showroom design and construction for a luxury car dealership, featuring modern aesthetics and premium finishes.",
    fullDescription: "This premium automobile showroom represents the pinnacle of luxury retail design. Spanning 5,000 square feet, the space seamlessly blends contemporary architecture with sophisticated branding elements. The project included custom LED lighting systems, premium flooring, glass partitions, and state-of-the-art display fixtures that showcase vehicles in the most elegant manner.",
    client: "Luxury Motors Ltd",
    location: "Colombo, Sri Lanka",
    completionDate: "March 2024",
    duration: "45 Days",
    area: "5,000 Sq Ft",
    teamSize: 12,
    budget: "LKR 15,000,000",
    stats: [
      { icon: "Ruler", value: "5,000", label: "Sq Ft" },
      { icon: "Clock", value: "45", label: "Days" },
      { icon: "CheckCircle", value: "100%", label: "Quality" },
    ],
    gradient: "from-blue-600 to-cyan-600",
    images: {
      thumbnail: "",
      model3D: "",
      actual: ["", "", ""],
      comparison: [
        { before: "", after: "" },
        { before: "", after: "" },
      ],
    },
    features: [
      "Custom LED ambient lighting system",
      "Premium Italian marble flooring",
      "Frameless glass partitions",
      "Integrated digital signage",
      "Climate-controlled environment",
      "Luxury customer lounge area",
    ],
    challenges: [
      "Tight 45-day deadline for construction",
      "Working within an active business environment",
      "Integrating complex LED systems with existing infrastructure",
    ],
    solutions: [
      "24/7 construction schedule with multiple shifts",
      "Modular construction approach for minimal disruption",
      "Pre-fabrication of major components off-site",
    ],
    technologies: [
      "LED Lighting Systems",
      "Smart Climate Control",
      "Digital Signage Integration",
      "Premium Materials",
    ],
  },
  {
    id: "corporate-led-signage",
    category: "Light Boards & LED",
    title: "Corporate LED Signage",
    description: "Large-scale LED display boards and illuminated signage for corporate headquarters.",
    fullDescription: "A comprehensive LED signage solution for a major corporate headquarters, featuring a massive 50-foot wide display board with 24/7 operational capability. The project included custom-designed LED modules, weatherproofing, remote content management system, and energy-efficient lighting that reduces power consumption by 40% compared to traditional signage.",
    client: "Tech Corporation HQ",
    location: "Kandy, Sri Lanka",
    completionDate: "February 2024",
    duration: "30 Days",
    area: "50ft Width",
    teamSize: 8,
    budget: "LKR 8,500,000",
    stats: [
      { icon: "Clock", value: "24/7", label: "Operation" },
      { icon: "Ruler", value: "50ft", label: "Width" },
      { icon: "CheckCircle", value: "30", label: "Days" },
    ],
    gradient: "from-purple-600 to-pink-600",
    images: {
      thumbnail: "",
      model3D: "",
      actual: ["", ""],
      comparison: [
        { before: "", after: "" },
      ],
    },
    features: [
      "50-foot wide LED display",
      "Weatherproof construction",
      "Remote content management",
      "Energy-efficient LED modules",
      "High brightness for daylight visibility",
      "Automatic brightness adjustment",
    ],
    challenges: [
      "Installation at significant height",
      "Weatherproofing for monsoon seasons",
      "Ensuring 24/7 reliability",
    ],
    solutions: [
      "Custom mounting system with safety redundancies",
      "Military-grade weatherproofing seals",
      "Redundant power supply and backup systems",
    ],
    technologies: [
      "High-Resolution LED Panels",
      "Smart Content Management",
      "Weather Monitoring Systems",
      "Remote Diagnostics",
    ],
  },
  {
    id: "retail-brand-manufacturing",
    category: "CNC & Laser Cutting",
    title: "Retail Brand Manufacturing",
    description: "Precision-cut displays and fixtures for a major retail chain using advanced CNC and laser cutting.",
    fullDescription: "Large-scale manufacturing project delivering over 500 precision-cut display units and fixtures for a national retail chain. Each unit was manufactured to ±0.1mm precision using state-of-the-art CNC and laser cutting technology. The project required consistent quality across all units, custom branding elements, and rapid production within a 60-day timeline.",
    client: "National Retail Chain",
    location: "Multiple Locations",
    completionDate: "January 2024",
    duration: "60 Days",
    area: "Multiple Sites",
    teamSize: 15,
    budget: "LKR 12,000,000",
    stats: [
      { icon: "CheckCircle", value: "500+", label: "Units" },
      { icon: "Ruler", value: "±0.1mm", label: "Precision" },
      { icon: "Clock", value: "60", label: "Days" },
    ],
    gradient: "from-orange-600 to-red-600",
    images: {
      thumbnail: "",
      model3D: "",
      actual: ["", "", ""],
      comparison: [
        { before: "", after: "" },
        { before: "", after: "" },
      ],
    },
    features: [
      "500+ precision-manufactured units",
      "±0.1mm cutting accuracy",
      "Custom acrylic and metal components",
      "Modular assembly design",
      "Brand-specific customization",
      "Quality control for each unit",
    ],
    challenges: [
      "Maintaining consistency across 500+ units",
      "Meeting tight 60-day production deadline",
      "Coordinating installation at multiple sites",
    ],
    solutions: [
      "Automated CNC programming for consistency",
      "Parallel production lines",
      "Centralized quality control system",
    ],
    technologies: [
      "CNC Routing",
      "Laser Cutting",
      "CAD/CAM Software",
      "Automated Quality Control",
    ],
  },
  {
    id: "restaurant-interior-branding",
    category: "Branding & Printing",
    title: "Restaurant Interior Branding",
    description: "Complete interior branding solution including wall graphics, menu boards, and custom signage for a premium restaurant chain.",
    fullDescription: "Comprehensive branding project for a high-end restaurant featuring large-format wall graphics, illuminated menu boards, custom dimensional lettering, and environmental graphics. The project transformed the dining space into an immersive brand experience while maintaining the elegant atmosphere expected by premium diners.",
    client: "Premium Dining Group",
    location: "Galle Face, Colombo",
    completionDate: "April 2024",
    duration: "20 Days",
    area: "3,500 Sq Ft",
    teamSize: 6,
    budget: "LKR 4,500,000",
    stats: [
      { icon: "Ruler", value: "3,500", label: "Sq Ft" },
      { icon: "Clock", value: "20", label: "Days" },
      { icon: "CheckCircle", value: "100%", label: "Quality" },
    ],
    gradient: "from-green-600 to-emerald-600",
    images: {
      thumbnail: "",
      model3D: "",
      actual: ["", ""],
      comparison: [
        { before: "", after: "" },
      ],
    },
    features: [
      "Large-format wall murals",
      "Illuminated menu boards",
      "3D dimensional lettering",
      "Custom vinyl graphics",
      "Wayfinding signage",
      "Premium materials and finishes",
    ],
    challenges: [
      "Working during business hours",
      "Maintaining restaurant ambiance during installation",
      "Precise color matching to brand standards",
    ],
    solutions: [
      "Night-shift installation schedule",
      "Modular graphics for quick installation",
      "Professional color calibration process",
    ],
    technologies: [
      "Large Format Printing",
      "UV Printing",
      "Vinyl Application",
      "LED Backlighting",
    ],
  },
];
