import { useEffect, useState } from "react";
import brn from "../../assets/gifs/service-page-banner-zsi.gif";

const ServicePageBanner = () => {
  const words = [
    "innovative",
    "intelligent",
    "efficient",
    "connected",
    "scalable",
    "secure",
    "integrated",
    "responsive",
    "advanced",
    "sustainable",
  ];

  const services = [
    "Software Development",
    "Web App Development",
    "Mobile App Development",
    "Staff Augmentation Services",
    "UI/UX Design",
    "Project Evaluation & Rescue",
    "Change Management",
    "Smart Teams Service",
    "Digital Transformation",
    "IT Consulting",
    "Cybersecurity Services",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex: number) =>
        prevIndex === words.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    typeWriter();
  }, [currentWordIndex]);

  const speed = 100;

  const typeWriter = () => {
    const span = document.getElementById("demo");
    if (span) {
      span.innerHTML = "";
      const word = words[currentWordIndex];
      let j = 0;
      const wordInterval = setInterval(() => {
        if (j < word.length) {
          span.innerHTML += word.charAt(j);
          j++;
        } else {
          clearInterval(wordInterval);
        }
      }, speed);
    }
  };

  return (
    <div data-aos="fade-up" data-aos-duration="2000">
      <h1
        style={{ color: "#8938E5" }}
        className="fs-4 fw-bolder py-3 text-center"
      >
        WHAT WE DO
      </h1>

      <div className="bg-black">
        <div className="row mx-auto col-md-11">
          <div className="col-md-6 my-auto ">
            <div className="text-white ">
              <h1 className="fs-2 fw-bold my-4">
                All IT Excellence in One Place
              </h1>

              <h5 className="fs-5 fw-bold mb-4">
                Discover how we shape technology to fit your vision:
              </h5>

              <h6 className="fs-4 ">
                Turning Vision into{" "}
                <span
                  id="demo"
                  className="animated-gradient change-word px-3 py-1 rounded-1 shadow-lg"
                >
                  {" "}
                </span>{" "}
                Reality.
              </h6>
            </div>
          </div>
          <div className="col-md-6 pe-0">
            <img draggable={false} className="img-fluid " src={brn} alt="" />
          </div>
        </div>

        <div className="py-4" style={{ background: "#1C1324" }}>
          <div
            className="d-flex flex-row flex-nowrap gap-3 overflow-auto col-md-11 mx-auto "
            data-aos="flip-down"
          >
            {services.map((s) => (
              <div className="fw-medium mb-2 px-2 text-nowrap text-white fs-5">
                {s}
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default ServicePageBanner;
