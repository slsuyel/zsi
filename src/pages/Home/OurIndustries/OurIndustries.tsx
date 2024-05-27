import Slider from "react-slick";
import img1 from "../../../assets/slider-imgs/4.jpg";
import img2 from "../../../assets/slider-imgs/6.jpg";
import img3 from "../../../assets/slider-imgs/7.jpg";
import img4 from "../../../assets/slider-imgs/8.jpg";
import img5 from "../../../assets/slider-imgs/9.jpg";
import img6 from "../../../assets/slider-imgs/Untitled-1.png";
const data = [
  {
    title: "Software and Platform",
    decr: "Provide Software and Platform solutions, including online platforms, payment systems, and financial analytics",
    img: img1,
  },
  {
    title: "Telecom",
    decr: "Design communication software, network management tools, and solutions for telecom service providers.",
    img: img2,
  },
  {
    title: "Automotive",
    decr: "Create software for vehicle diagnostics, fleet management, and automotive manufacturing processes.",
    img: img3,
  },
  {
    title: "Cybersecurity",
    decr: "Our robust Cyber security services encompass a range of measures & architect to navigate the complexities of the digital world securely.",
    img: img4,
  },
  {
    title: "Finance and Banking",
    decr: "Provide fintech solutions, including online banking platforms, payment systems, and financial analytics.",
    img: img5,
  },
  {
    title: "Healthcare",
    decr: "Create medical software for electronic health records (EHR), telemedicine, and healthcare management system",
    img: img6,
  },
];

const OurIndustries = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
  };

  return (
    <div className="px-2 slick_container_main">
      <div className=" col-md-11 mx-auto ">
        <h1 className="fw-bold my-4">Our Industries</h1>
        <h6 className="fs-5">
          ZSI Engineers are creative problem-solvers who are driving the latest
          advancements in science and engineering that give our clients a
          competitive advantage and fuels growth by reinventing ideas into
          reality.
        </h6>
        <br />
      </div>

      <div style={{ width: "90%" }} className="mx-auto">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              data-aos="fade-up"
              key={d.title}
              className="img-card-slick position-relative mx-auto"
            >
              <div className="img-wrapper ">
                <img className="img-fluid " src={d.img} alt="" />
              </div>
              <div className="slick-content">
                <h2 className="fw-bold my-3" data-aos="zoom-out-up">
                  {d.title}
                </h2>
                <h6 className="fs-5 fw-semibold">{d.decr}</h6>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <br />
      <br />
      <br />
    </div>
  );
};

export default OurIndustries;
