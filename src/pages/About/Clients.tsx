import { ClientData } from "@/types/types";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ClientsProps {
  data: ClientData[];
  activeSlide: number;
}

const Clients = (props: ClientsProps) => {
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);

  const next = () =>
    activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const getStyles = (index: number) => {
    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10,
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9,
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9,
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8,
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8,
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7,
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7,
      };
  };

  const nextSlideBgColor =
    activeSlide < props.data.length - 1
      ? props.data[activeSlide + 1].bgColor
      : "#ccc"; // Default color if there's no next slide
  const prevSlideBgColor =
    activeSlide > 0 ? props.data[activeSlide - 1].bgColor : "#ccc"; // Default color if there's no previous slide

  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-5 text-center">
          Achievements from our Valued Clients
        </h2>
      </div>
      <div className="slideC ">
        {props.data.map((item, i) => (
          <React.Fragment key={item.id}>
            <div
              className="slide"
              style={{
                background: item.bgColor,
                boxShadow: `0 5px 20px ${item.bgColor}3s0`,
                ...getStyles(i),
              }}
            >
              <SliderContent {...item} />
            </div>
            <div
              className="reflection"
              style={{
                background: `linear-gradient(to bottom, ${item.bgColor}40, transparent)`,
                ...getStyles(i),
              }}
            />
          </React.Fragment>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-5">
        <button
          onClick={prev}
          className="button-prevs"
          style={{ backgroundColor: prevSlideBgColor }}
        >
          <i className="fas fa-arrow-left"></i>
        </button>
        <button
          onClick={next}
          className="button-nexts"
          style={{ backgroundColor: nextSlideBgColor }}
        >
          <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
};

const SliderContent = (props: ClientData) => {
  return (
    <div className="sliderContent">
      <p>{props.desc}</p>
      <div className="align-items-center d-flex justify-content-between w-100">
        <div>
          <h4 className="mb-0">{props.title}</h4>
          <p className="mb-0">{props.position}</p>
        </div>
        <Link
          target="_blank"
          to={props.url}
          className="border-1 border-white px-2 shadow text-bg-light view_btn"
        >
          <i className="fa fa-eye" aria-hidden="true"></i> View
        </Link>
      </div>
    </div>
  );
};

export default Clients;
