import ServiceCard from "./ServiceCard";
import ServicePageBanner from "./ServicePageBanner";

import software from "../../assets/videos/software-development-1.mp4";
import it from "../../assets/videos/iT-Consulting.mp4";
import mobile from "../../assets/videos/mobile-App-Development.mp4";
import change from "../../assets/videos/change-Management.mp4";
import project from "../../assets/videos/project-Evaluation-Rescue.mp4";
import smart from "../../assets/videos/smart-Teams-Service.mp4";
import staff from "../../assets/videos/staff-Augmentation-Services.mp4";
import ui from "../../assets/videos/uIUX-Design.mp4";
import web from "../../assets/videos/web-App-Development.mp4";
import cyber from "../../assets/videos/cybersecurity-Services.mp4";
import digital from "../../assets/videos/digital-Transformation.mp4";

const Services = () => {
  const data = [
    {
      title: "Software Development",
      description:
        "Create Cutting-edge Applications Tailored to Your Business Needs. Build robust, scalable, and innovative software solutions that drive growth and efficiency in your digital.",
      exploreText: "EXPLORE SOFTWARE SERVICES ➤",
      services: [
        "CUSTOM SOFTWARE CREATION",
        "ENTERPRISE APPLICATIONS",
        "MOBILE & WEB APP DEVELOPMENT",
        "CLOUD COMPUTING SOLUTIONS",
        "SOFTWARE PRODUCT INNOVATION",
        "LEGACY SYSTEM MODERNIZATION",
        "DATABASE MANAGEMENT",
        "CYBERSECURITY IMPLEMENTATION",
      ],
      video: software,
    },
    {
      title: "Web App Development",
      description:
        "Elevate Your Digital Strategy with Tailored Web Applications. Craft unique online experiences with bespoke web applications designed for optimal performance and scalability.",
      exploreText: "DISCOVER WEB APP SOLUTIONS ➤",
      services: [
        "CUSTOM WEB APPS",
        "FULL-STACK DEVELOPMENT",
        "UI/UX DESIGN",
        "PROGRESSIVE WEB APPS",
        "API INTEGRATION",
        "E-COMMERCE SOLUTIONS",
        "RESPONSIVE DESIGN",
        "ONGOING MAINTENANCE & SUPPORT",
      ],
      video: web,
    },
    {
      title: "Mobile App Development",
      description:
        "Unleash Mobile Potential with Custom App Solutions. Create compelling mobile experiences with custom apps built for iOS and Android platforms, enhancing engagement and accessibility.",
      exploreText: "EXPLORE MOBILE APP SERVICES ➤",
      services: [
        "IOS APP DEVELOPMENT",
        "ANDROID APP DEVELOPMENT",
        "CROSS-PLATFORM APPS",
        "MOBILE UI/UX DESIGN",
        "MOBILE STRATEGY",
        "APP STORE OPTIMIZATION",
        "ENTERPRISE MOBILITY",
        "SUPPORT & MAINTENANCE",
      ],
      video: mobile,
    },
    {
      title: "Staff Augmentation Services",
      description:
        "Expand Your Team’s Capabilities with Specialized Talent. Enhance your project’s success with our skilled professionals who integrate seamlessly into your existing team dynamics.",
      exploreText: "EXPLORE AUGMENTATION OPTIONS ➤",
      services: [
        "TECHNICAL EXPERTISE ON-DEMAND",
        "FLEXIBLE STAFFING SOLUTIONS",
        "DEDICATED DEVELOPERS",
        "IT PROJECT MANAGEMENT",
        "QUALITY ASSURANCE SPECIALISTS",
        "UX/UI DESIGNERS",
        "SYSTEMS ARCHITECTS",
        "SUPPORT & MAINTENANCE ENGINEERS",
      ],
      video: staff,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing Intuitive and Engaging User Experiences. Elevate your product with user-centered design that combines aesthetics, usability, and functionality for unparalleled user engagement.",
      exploreText: "DISCOVER DESIGN EXCELLENCE ➤",
      services: [
        "USER EXPERIENCE STRATEGY",
        "INTERACTIVE UI DESIGN",
        "USER RESEARCH & TESTING",
        "PROTOTYPING & WIREFRAMING",
        "VISUAL DESIGN BRANDING",
        "ACCESSIBILITY COMPLIANCE",
        "RESPONSIVE WEB DESIGN",
        "DESIGN SYSTEMS & GUIDELINES",
      ],
      video: ui,
    },
    {
      title: "Project Evaluation",
      description:
        "Revitalize Your Project with Expert Analysis and Intervention. Turnaround troubled projects with our comprehensive evaluation and rescue services, ensuring a path to successful completion.",
      exploreText: "DISCOVER RESCUE STRATEGIES ➤",
      services: [
        "CRITICAL PROJECT ASSESSMENT",
        "RISK MANAGEMENT",
        "PROJECT RECOVERY PLANNING",
        "AGILE TRANSFORMATION",
        "TECHNICAL DEBT AUDIT",
        "CODE QUALITY REVIEW",
        "PERFORMANCE OPTIMIZATION",
        "CONTINUITY PLANNING",
      ],
      video: project,
    },
    {
      title: "Change Management",
      description:
        "Navigate Organizational Transformation with Confidence. Implement effective change strategies to ensure smooth transitions and alignment with your evolving business goals.",
      exploreText: "UNVEIL CHANGE STRATEGIES ➤",
      services: [
        "ORGANIZATIONAL READINESS ASSESSMENT",
        "STAKEHOLDER ENGAGEMENT",
        "CHANGE IMPACT ANALYSIS",
        "COMMUNICATION PLANNING",
        "LEADERSHIP COACHING",
        "TRAINING & DEVELOPMENT",
        "CULTURE ENHANCEMENT",
        "SUSTAINABILITY MEASURES",
      ],
      video: change,
    },
    {
      title: "Smart Teams Service",
      description:
        "Accelerate Innovation with Collaborative Expert Teams. Empower your projects with our cross-functional teams that bring smart solutions and agile methodologies to the forefront of technology.",
      exploreText: "ENGAGE WITH SMART TEAMS ➤",
      services: [
        "DYNAMIC TEAM ASSEMBLY",
        "AGILE & DEVOPS INTEGRATION",
        "CROSS-DISCIPLINARY EXPERTISE",
        "SCALABLE TEAM STRUCTURES",
        "INNOVATION WORKSHOPS",
        "PRODUCT DEVELOPMENT SPRINTS",
        "STRATEGIC TECHNOLOGY ROADMAPPING",
        "PERFORMANCE ANALYTICS & INSIGHTS",
      ],
      video: smart,
    },
    {
      title: "Digital Transformation",
      description:
        "Reimagine Your Business for the Digital Age. Harness the power of digital innovation to revolutionize your business processes, customer experiences, and competitive edge.",
      exploreText: "EMBRACE DIGITAL NOW ➤",
      services: [
        "DIGITAL STRATEGY & CONSULTING",
        "BUSINESS PROCESS AUTOMATION",
        "DATA ANALYTICS & INSIGHTS",
        "CUSTOMER EXPERIENCE REDESIGN",
        "TECHNOLOGY INFRASTRUCTURE UPGRADE",
        "CLOUD MIGRATION SERVICES",
        "ENTERPRISE MOBILITY",
        "CYBERSECURITY ENHANCEMENTS",
      ],
      video: digital,
    },
    {
      title: "IT Consulting",
      description:
        "Strategic Insights to Drive Technological Innovation. Leverage our expertise to align your IT strategy with business objectives, optimizing performance and fostering technological advancement.",
      exploreText: "DISCOVER IT INSIGHTS ➤",
      services: [
        "TECHNOLOGY ROADMAPPING",
        "IT PERFORMANCE OPTIMIZATION",
        "SYSTEM ARCHITECTURE DESIGN",
        "CYBERSECURITY STRATEGIES",
        "CLOUD COMPUTING CONSULTATION",
        "DATA MANAGEMENT & ANALYTICS",
        "NETWORK INFRASTRUCTURE PLANNING",
        "COMPLIANCE & RISK MANAGEMENT",
      ],
      video: it,
    },
    {
      title: "Cybersecurity Services",
      description:
        "Protect Your Applications and Network. Fortify your digital assets against emerging threats with our comprehensive cybersecurity services, ensuring the integrity and confidentiality of your critical information.",
      exploreText: "SECURE YOUR ASSETS ➤",
      services: [
        "APPLICATION SECURITY",
        "NETWORK DEFENSE",
        "THREAT INTELLIGENCE",
        "INCIDENT RESPONSE",
        "RISK ASSESSMENT & MANAGEMENT",
        "COMPLIANCE & GOVERNANCE",
        "SECURITY AWARENESS TRAINING",
        "DATA PROTECTION & PRIVACY",
      ],
      video: cyber,
    },
  ];

  return (
    <div>
      <ServicePageBanner />
      <ServiceCard data={data} />
    </div>
  );
};

export default Services;
