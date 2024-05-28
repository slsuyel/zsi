/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import "./About.css";

interface TimelineItem {
  date: string;
  description: string;
  accentColor: string;
}

const timelineData: TimelineItem[] = [
  {
    date: "Worldwide Innovation Network",
    description:
      "As a beacon of global ingenuity, ZSI.ai crafts exceptional software solutions, fostering business innovation and transcending geographical boundaries.",
    accentColor: "#41516C",
  },
  {
    date: "Cutting-Edge Technological Expertise",
    description:
      "At the forefront of AI and technological evolution, ZSI.ai empowers businesses with advanced strategies and state-of-the-art digital solutions, steering them toward future success.",
    accentColor: "#FBCA3E",
  },
  {
    date: "Dedicated to Your Achievement",
    description:
      "ZSI.ai is passionately committed to your success, offering tailored, strategic solutions and prioritizing your goals, all beginning with a commitment-free opportunity to experience their excellence.",
    accentColor: "#E24A68",
  },
  {
    date: "Innovative Solutions for Tomorrow's",
    description:
      "Anticipating and addressing future challenges, ZSI.ai develops innovative solutions that propel businesses ahead of the curve, ensuring sustained growth and success.",
    accentColor: "#8EB9C7",
  },
  {
    date: "Empowering Through Data Analytics",
    description:
      "Leveraging the power of data, ZSI.ai provides businesses with actionable insights through advanced analytics, empowering them to make informed decisions and drive performance.",
    accentColor: "#9B59B6",
  },
  {
    date: "Customer-Centric Approach to Excellence",
    description:
      "With a focus on customer satisfaction, ZSI.ai delivers excellence through personalized solutions, ensuring that each client's unique needs are met with precision and care.",
    accentColor: "#D35400",
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="timeline mx-auto">
      <ul className="mx-auto">
        {timelineData.map((item, index) => (
          <li key={index} style={{ "--accent-color": item.accentColor } as any}>
            <div className="date">{item.date}</div>
            <div className="descr">{item.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
