import React from "react";
import { Card } from "antd";

const cardData = [
  {
    title: "Global Network",
    text: "Providing advanced development solutions globally. Our expert services to businesses worldwide, ensuring solutions for needs.",
    icon: "fa fa-globe",
  },
  {
    title: "On-Time Results",
    text: "We avoid unnecessary delays and obstacles by maintaining a proper workflow and ensuring that it is strictly followed.",
    icon: "fa fa-clock",
  },
  {
    title: "Expert Team",
    text: "Our team of expert developers is tech-savvy and knows how to apply the latest technology to solve a particular business challenge.",
    icon: "fa fa-users",
  },
  {
    title: "Transparent Process",
    text: "Our mobile app development process is open, where the information related to your project is completely shared with you.",
    icon: "fa fa-eye",
  },
  {
    title: "End-to-End Services",
    text: "To ensure quality output, we deliver services that include development, testing, and maintenance after deployment.",
    icon: "fa fa-tasks",
  },
  {
    title: "24x7 Support",
    text: "Staying in line with our quality services, we ensure that all your problems are resolved and provide 24x7 customer service.",
    icon: "fa fa-headphones",
  },
];

const ServiceCard = () => {
  return (
    <div className="bg-dark px-2 py-4">
      <div className="row mx-auto my-5 cpl-md-11">
        {cardData.map((data, index) => (
          <div className="col-md-4" key={index}>
            <Card
              hoverable
              className="m-2 text-white"
              style={{ background: "#2A2035BA" }}
            >
              <div className="card-body text-center px-2">
                <i className={data.icon + " fa-3x mb-3"}></i>
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.text}</p>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
